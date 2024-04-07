import useMapStore from '@store/mapStore';
import { useState } from 'react';
import useUserMarkerStore from '@store/userMarkerStore';
import { SearchResult } from 'src/types';

const useDrawLine = (result: SearchResult) => {
  const { Tmapv3 } = window;
  const { mapInstance } = useMapStore();
  const [description, setDescription] = useState<string[]>([]);
  const [totalTime, setTotalTime] = useState(0);
  const [totalDistance, setTotalDistance] = useState(0);
  const { userLocation } = useUserMarkerStore();

  const navigateRoute = async () => {
    const startX = userLocation!.lng.toString();
    const startY = userLocation!.lat.toString();

    const noorLng = Number(result.noorLon);
    const noorLat = Number(result.noorLat);

    const pointCng = new Tmapv3.Point(noorLng, noorLat);
    const projectionCng = new Tmapv3.Projection.convertEPSG3857ToWGS84GEO(pointCng);

    const endX = projectionCng._lng;
    const endY = projectionCng._lat;

    const headers = { appKey: 'K7SVqM25ES7kK3FaC0crJ2Uu6XNAoAy54xiQr9I6' };
    const searchParams = {
      version: '1',
      startX,
      startY,
      endX,
      endY,
      trafficInfo: 'Y',
    };

    const queryParams = new URLSearchParams(searchParams).toString();

    try {
      const res = await fetch(`https://apis.openapi.sk.com/tmap/routes?${queryParams}`, {
        headers,
      });

      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }

      const data = await res.json();

      const positionBounds = new Tmapv3.LatLngBounds();

      for (let i = 0; i < data.features.length; i++) {
        const geometry = data.features[i].geometry;
        if (i == 0) {
          setTotalDistance(data.features[0].properties.totalDistance);
          setTotalTime(Math.round(data.features[0].properties.totalTime / 60));
        }

        if (geometry.type == 'LineString') {
          const sectionInfos = [];
          const trafficArr = geometry.traffic || [];

          for (const j in geometry.coordinates) {
            const latlng = new Tmapv3.LatLng(
              geometry.coordinates[j][1],
              geometry.coordinates[j][0],
            );

            positionBounds.extend(latlng);
            sectionInfos.push(latlng);
          }

          drawLine(sectionInfos, trafficArr);
        } else if (geometry.type == 'Point') {
          setDescription((prev) => [...prev, data.features[i].properties.description]);
        }
      }

      mapInstance?.fitBounds(positionBounds);
    } catch (error) {
      console.error('Error fetching data: ', error);
    }
  };

  const drawLine = (arrPoint: any, traffic: any) => {
    let polyLine;
    let lineColor = '';
    const lineArr = [];

    if (traffic != '0') {
      if (traffic.length == 0) {
        lineColor = '#06050D';

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
            strokeColor: '#06050D',
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
              lineColor = '#06050D';
            } else if (tInfo[x].trafficIndex == 1) {
              lineColor = '#61AB25';
            } else if (tInfo[x].trafficIndex == 2) {
              lineColor = '#FFFF00';
            } else if (tInfo[x].trafficIndex == 3) {
              lineColor = '#E87506';
            } else if (tInfo[x].trafficIndex == 4) {
              lineColor = '#D61125';
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
              lineColor = '#06050D';
            } else if (tInfo[x].trafficIndex == 1) {
              lineColor = '#61AB25';
            } else if (tInfo[x].trafficIndex == 2) {
              lineColor = '#FFFF00';
            } else if (tInfo[x].trafficIndex == 3) {
              lineColor = '#E87506';
            } else if (tInfo[x].trafficIndex == 4) {
              lineColor = '#D61125';
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

  return { navigateRoute, description, totalTime, totalDistance };
};

export default useDrawLine;
