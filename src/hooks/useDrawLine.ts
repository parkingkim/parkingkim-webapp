import useMapStore from '@store/mapStore';
import { useState } from 'react';
import useMarkerStore from '@store/userMarkerStore';
import { SearchResult } from 'src/types';
import { useNavigating } from '@context/NavigatingContext';
import axios from 'axios';

// 밖에 둬야 라인이 지워집니다...
let lineArr = [];

const useDrawLine = (result: SearchResult) => {
  const { Tmapv3 } = window;
  const { mapInstance } = useMapStore();
  const [description, setDescription] = useState<string[]>([]);
  const { userLocation } = useMarkerStore();
  const {
    setStartToParkingLotTime,
    setStartToParkingLotDistance,
    setParkingLotToDestinationTime,
    setParkingLotToDestinationDistance,
  } = useNavigating();

  const resetLine = () => {
    lineArr.forEach((line) => line.setMap(null));
    lineArr = [];
  };

  const navigateRoute = async (parkingLotLat: number, parkingLotLng: number) => {
    resetLine();

    const startX = userLocation!.lng.toString();
    const startY = userLocation!.lat.toString();

    // 주차장 위치

    const headers = { appKey: 'K7SVqM25ES7kK3FaC0crJ2Uu6XNAoAy54xiQr9I6' };
    const driveSearchParams = {
      version: '1',
      startX,
      startY,
      endX: parkingLotLng.toString(),
      endY: parkingLotLat.toString(),
      trafficInfo: 'Y',
    };

    const driveQueryParams = new URLSearchParams(driveSearchParams).toString();
    const positionBounds = new Tmapv3.LatLngBounds();

    try {
      const driveRes = await axios.post(
        `https://apis.openapi.sk.com/tmap/routes?${driveQueryParams}`,
        {},
        {
          headers,
        },
      );

      if (driveRes.status !== 200) {
        throw new Error(`HTTP error! status: ${driveRes.status}`);
      }

      const driveData = driveRes.data;
      setStartToParkingLotTime(driveData.features[0].properties.totalTime);
      setStartToParkingLotDistance(driveData.features[0].properties.totalDistance);
      processRoute(driveData, positionBounds);

      // 최종 목적지
      const noorLng = Number(result.noorLon);
      const noorLat = Number(result.noorLat);

      const pointCng = new Tmapv3.Point(noorLng, noorLat);
      const projectionCng = new Tmapv3.Projection.convertEPSG3857ToWGS84GEO(pointCng);

      const endX = projectionCng._lng;
      const endY = projectionCng._lat;

      const walkingSearchParams = {
        version: '1',
        format: 'json',
        callback: 'result',
        startX: parkingLotLng.toString(),
        startY: parkingLotLat.toString(),
        endX,
        endY,
        startName: '출발지',
        endName: result.name,
      };

      const walkingQueryParams = new URLSearchParams(walkingSearchParams).toString();

      const walkingRes = await axios.post(
        `https://apis.openapi.sk.com/tmap/routes/pedestrian?${walkingQueryParams}`,
        {},
        {
          headers,
        },
      );

      const walkingData = walkingRes.data;
      setParkingLotToDestinationTime(walkingData.features[0].properties.totalTime);
      setParkingLotToDestinationDistance(walkingData.features[0].properties.totalDistance);
      processRoute(walkingData, positionBounds);

      // 경로에 따른 바운드 설정

      mapInstance?.fitBounds(positionBounds);
    } catch (error) {
      console.error('Error fetching data: ', error);
    }
  };

  const processRoute = (route: any, positionBounds: any) => {
    for (let i = 0; i < route.features.length; i++) {
      const geometry = route.features[i].geometry;

      if (geometry.type == 'LineString') {
        const sectionInfos = [];
        const trafficArr = geometry.traffic || [];

        for (const j in geometry.coordinates) {
          const latlng = new Tmapv3.LatLng(geometry.coordinates[j][1], geometry.coordinates[j][0]);

          positionBounds.extend(latlng);
          sectionInfos.push(latlng);
        }

        drawLine(sectionInfos, trafficArr);
      } else if (geometry.type == 'Point') {
        setDescription((prev) => [...prev, route.features[i].properties.description]);
      }
    }
  };

  const getLineColor = (trafficIndex: number) => {
    const trafficColors = {
      0: '#0DC5FF',
      1: '#00EA5E',
      2: '#FF9E0C',
      3: '#FF40A8',
      4: '#7D2DFF',
    };
    return trafficColors[trafficIndex] || '#000000';
  };

  const createPolyline = (points: any, color: string) => {
    const polyLine = new Tmapv3.Polyline({
      path: points,
      strokeColor: color,
      strokeWeight: 6,
      map: mapInstance,
    });
    lineArr.push(polyLine);
  };

  const drawLine = (arrPoint: any, traffic: any) => {
    if (traffic != '0') {
      if (traffic.length == 0) {
        // 도보 경로 그리기
        createPolyline(arrPoint, '#000000');
      } else {
        if (traffic[0][0] != 0) {
          let trafficObject;
          const tInfo = [];

          for (let i = 0; i < traffic.length; i++) {
            trafficObject = {
              startIndex: traffic[i][0],
              endIndex: traffic[i][1],
              trafficIndex: traffic[i][2],
            };
            tInfo.push(trafficObject);
          }

          const noInformationPoint = [];

          for (let j = 0; j < tInfo[0].startIndex; j++) {
            noInformationPoint.push(arrPoint[j]);
          }

          createPolyline(noInformationPoint, '#0DC5FF');

          for (let x = 0; x < tInfo.length; x++) {
            const sectionPoint = [];

            for (let y = tInfo[x].startIndex; y <= tInfo[x].endIndex; y++) {
              sectionPoint.push(arrPoint[y]);
            }

            const lineColor = getLineColor(tInfo[x].trafficIndex);
            createPolyline(sectionPoint, lineColor);
          }
        } else {
          let trafficObject;
          const tInfo = [];

          for (let i = 0; i < traffic.length; i++) {
            trafficObject = {
              startIndex: traffic[i][0],
              endIndex: traffic[i][1],
              trafficIndex: traffic[i][2],
            };
            tInfo.push(trafficObject);
          }

          for (let x = 0; x < tInfo.length; x++) {
            const sectionPoint = [];

            for (let y = tInfo[x].startIndex; y <= tInfo[x].endIndex; y++) {
              sectionPoint.push(arrPoint[y]);
            }

            const lineColor = getLineColor(tInfo[x].trafficIndex);
            createPolyline(sectionPoint, lineColor);
          }
        }
      }
    }
  };

  return { navigateRoute, description };
};

export default useDrawLine;
