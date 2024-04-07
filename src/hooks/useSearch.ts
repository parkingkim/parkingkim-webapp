import useMapStore from '@store/mapStore';
import { ChangeEvent, useEffect, useState } from 'react';
import { SearchResult } from 'src/types';

const useSearch = (showResult: () => void) => {
  const { Tmapv3 } = window;
  const [searchKeyword, setSearchKeyword] = useState('');
  const [searchResults, setSearchResults] = useState<SearchResult[]>([]);
  const { mapInstance } = useMapStore();
  const [markerArr, setMarkerArr] = useState<Marker[]>([]); // 마커 배열을 상태로 관리
  const [isResultVisible, setIsResultVisible] = useState(false);
  const [result, setResult] = useState<SearchResult | null>(null);

  const handleSearchWord = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchKeyword(e.target.value);
  };

  useEffect(() => {
    if (!mapInstance) return;

    const handleSearch = async () => {
      try {
        const headers = new Headers();
        headers.append('appKey', 'K7SVqM25ES7kK3FaC0crJ2Uu6XNAoAy54xiQr9I6');

        const url = new URL(
          'https://apis.openapi.sk.com/tmap/pois?version=1&format=json&callback=result',
        );
        const params = {
          searchKeyword: searchKeyword,
          resCoordType: 'EPSG3857',
          reqCoordType: 'WGS84GEO',
          count: 10,
        };
        (Object.keys(params) as Array<keyof typeof params>).forEach((key) =>
          url.searchParams.append(key, String(params[key])),
        );

        const response = await fetch(url, {
          method: 'GET',
          headers: headers,
        });

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        // 검색
        const responseData = await response.json();
        const resultpoisData = responseData.searchPoiInfo.pois.poi;
        setSearchResults(resultpoisData);
      } catch (error: unknown) {
        console.error('Failed to fetch data:', error);
      }
    };

    const debounceTimeout = setTimeout(() => {
      if (searchKeyword) {
        handleSearch();
      }
    }, 1000);

    return () => clearTimeout(debounceTimeout);
  }, [searchKeyword]);

  const drawMarker = (result: SearchResult) => {
    if (!mapInstance) return;

    // 마커 초기화
    markerArr.forEach((marker) => marker.setMap(null));
    setMarkerArr([]);

    const latlngBounds = new Tmapv3.LatLngBounds();
    const newMarkers: Marker[] = [];

    // 마커 그리기
    const noorLng = Number(result.noorLon);
    const noorLat = Number(result.noorLat);
    const name = result.name;

    const pointCng = new Tmapv3.Point(noorLng, noorLat);
    const projectionCng = new Tmapv3.Projection.convertEPSG3857ToWGS84GEO(pointCng);

    const lat = projectionCng._lat;
    const lng = projectionCng._lng;

    const markerPosition = new Tmapv3.LatLng(lat, lng);

    const marker = new Tmapv3.Marker({
      position: markerPosition,
      icon: 'src/assets/dest-two.svg',
      iconSize: new Tmapv3.Size(42, 42),
      title: name,
      map: mapInstance,
    });

    newMarkers.push(marker);

    latlngBounds.extend(markerPosition);

    setMarkerArr(newMarkers);
    mapInstance.setCenter(latlngBounds.getCenter());
    mapInstance.fitBounds(latlngBounds);
    mapInstance.setZoom(15);

    setResult(result);
    showResult();
    setIsResultVisible(true);
  };

  return {
    searchResults,
    isResultVisible,
    setIsResultVisible,
    result,
    drawMarker,
    handleSearchWord,
    searchKeyword,
  };
};

export default useSearch;