import useMapStore from '@store/mapStore';
import { useState } from 'react';
import useMarkerStore from '@store/userMarkerStore';
import { SearchResult } from 'src/types';
import { useNavigating } from '@context/NavigatingContext';

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
    for (let i = 0; i < lineArr.length; i++) {
      lineArr[i].setMap(null);
    }
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
      const driveRes = await fetch(`https://apis.openapi.sk.com/tmap/routes?${driveQueryParams}`, {
        headers,
        method: 'POST',
      });

      if (!driveRes.ok) {
        throw new Error(`HTTP error! status: ${driveRes.status}`);
      }

      const driveData = await driveRes.json().then((data) => {
        setStartToParkingLotTime(data.features[0].properties.totalTime);
        setStartToParkingLotDistance(data.features[0].properties.totalDistance);
        processRoute(data, positionBounds);
      });

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

      const walkingRes = await fetch(
        `https://apis.openapi.sk.com/tmap/routes/pedestrian?${walkingQueryParams}`,
        {
          headers,
          method: 'POST',
        },
      );

      const walkingData = await walkingRes.json().then((data) => {
        setParkingLotToDestinationTime(data.features[0].properties.totalTime);
        setParkingLotToDestinationDistance(data.features[0].properties.totalDistance);
        processRoute(data, positionBounds);
      });

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

  const drawLine = (arrPoint: any, traffic: any) => {
    let polyLine;
    let lineColor = '';

    if (traffic != '0') {
      if (traffic.length == 0) {
        lineColor = '#000000';

        polyLine = new Tmapv3.Polyline({
          path: arrPoint,
          strokeColor: lineColor,
          strokeWeight: 6,
          map: mapInstance,
        });
        lineArr.push(polyLine);
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

          polyLine = new Tmapv3.Polyline({
            path: noInformationPoint,
            strokeColor: '#0DC5FF',
            strokeWeight: 6,
            map: mapInstance,
          });
          lineArr.push(polyLine);

          for (let x = 0; x < tInfo.length; x++) {
            const sectionPoint = [];

            for (let y = tInfo[x].startIndex; y <= tInfo[x].endIndex; y++) {
              sectionPoint.push(arrPoint[y]);
            }

            if (tInfo[x].trafficIndex == 0) {
              lineColor = '#0DC5FF';
            } else if (tInfo[x].trafficIndex == 1) {
              lineColor = '#00EA5E';
            } else if (tInfo[x].trafficIndex == 2) {
              lineColor = '#FF9E0C';
            } else if (tInfo[x].trafficIndex == 3) {
              lineColor = '#FF40A8';
            } else if (tInfo[x].trafficIndex == 4) {
              lineColor = '#7D2DFF';
            }

            polyLine = new Tmapv3.Polyline({
              path: sectionPoint,
              strokeColor: lineColor,
              strokeWeight: 6,
              map: mapInstance,
            });
            lineArr.push(polyLine);
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

            if (tInfo[x].trafficIndex == 0) {
              lineColor = '#0DC5FF';
            } else if (tInfo[x].trafficIndex == 1) {
              lineColor = '#00EA5E';
            } else if (tInfo[x].trafficIndex == 2) {
              lineColor = '#FF9E0C';
            } else if (tInfo[x].trafficIndex == 3) {
              lineColor = '#FF40A8';
            } else if (tInfo[x].trafficIndex == 4) {
              lineColor = '#7D2DFF';
            }

            polyLine = new Tmapv3.Polyline({
              path: sectionPoint,
              strokeColor: lineColor,
              strokeWeight: 6,
              map: mapInstance,
            });
            lineArr.push(polyLine);
          }
        }
      }
    }
  };
  return { navigateRoute, description };
};

export default useDrawLine;
