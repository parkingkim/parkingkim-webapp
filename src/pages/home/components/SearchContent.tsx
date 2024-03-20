import { BackIcon, LocationIcon } from '@assets/index';
import SearchBar from '@components/SearchBar';
import SearchItem from '@components/SearchItem';
import SearchFilter from '@pages/Home/components/SearchFilter';
import useMapStore from '@store/mapStore';
import { ChangeEvent, useEffect, useState } from 'react';
import { SearchResult } from 'src/types';
import styled from 'styled-components';

interface SearchContentProps {
  reduceHeight: () => void;
}

const SearchContent = ({ reduceHeight }: SearchContentProps) => {
  const { Tmapv3 } = window;
  const [searchKeyword, setSearchKeyword] = useState('');
  const [searchResults, setSearchResults] = useState<SearchResult[]>([]);
  const { mapInstance } = useMapStore();
  const [markerArr, setMarkerArr] = useState<Marker[]>([]); // 마커 배열을 상태로 관리

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
          count: 5,
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

        const responseData = await response.json();
        const resultpoisData = responseData.searchPoiInfo.pois.poi;
        setSearchResults(resultpoisData);

        markerArr.forEach((marker) => marker.setMap(null));
        setMarkerArr([]);

        const latlngBounds = new Tmapv3.LatLngBounds();
        const newMarkers: Marker[] = [];
        for (const poi of resultpoisData) {
          const noorLng = Number(poi.noorLon);
          const noorLat = Number(poi.noorLat);
          const name = poi.name;

          const pointCng = new Tmapv3.Point(noorLng, noorLat);
          const projectionCng = new Tmapv3.Projection.convertEPSG3857ToWGS84GEO(pointCng);

          const lat = projectionCng._lat;
          const lng = projectionCng._lng;

          const markerPosition = new Tmapv3.LatLng(lat, lng);

          const marker = new Tmapv3.Marker({
            position: markerPosition,
            icon: 'src/assets/react.svg',
            iconSize: new Tmapv3.Size(24, 38),
            title: name,
            map: mapInstance,
          });

          newMarkers.push(marker);

          latlngBounds.extend(markerPosition);
        }

        setMarkerArr(newMarkers);
        mapInstance.setCenter(latlngBounds.getCenter());
        mapInstance.fitBounds(latlngBounds);
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

  return (
    <SearchContainer>
      <SearchBarWrapper>
        <BackIcon onClick={reduceHeight} role="button" />
        <SearchBar isFocused={true} onChangeSearchKeyword={handleSearchWord} />
        <SearchOptionWrapper>
          <SearchFilter />
          <Partition />
          <LocationIcon style={{ cursor: 'pointer' }} role="button" />
        </SearchOptionWrapper>
      </SearchBarWrapper>
      <ThickBar />
      <ResultContainer>
        {searchResults.map((result) => (
          <SearchItem
            name={result.name}
            address={result.newAddressList.newAddress[0].fullAddressRoad}
          />
        ))}
      </ResultContainer>
    </SearchContainer>
  );
};

const ResultContainer = styled.ul`
  overflow: scroll;
`;

const SearchContainer = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  padding: 20px 0;

  position: relative;
`;

const SearchBarWrapper = styled.div`
  display: flex;
  padding: 0 13px 14px;
  flex-direction: column;

  & > :first-child {
    cursor: pointer;
  }
`;

const ThickBar = styled.div`
  width: 100%;
  height: 7px;
  min-width: 100%;

  background: linear-gradient(to bottom, #dcdcdc 0%, #f6f6f6 30%);
`;

const SearchOptionWrapper = styled.div`
  display: flex;
  margin: 12px 10px 0 0;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  gap: 11px;
`;

const Partition = styled.div`
  width: 1px;
  height: 24px;

  background: rgb(0 0 0 / 21%);
`;

export default SearchContent;
