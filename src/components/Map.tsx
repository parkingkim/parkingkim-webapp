import { SearchIcon } from '@assets/index';
import useGeoLocation from '@hooks/useGeolocation';
import { useEffect, useRef, useState } from 'react';
import { GeoLocation } from 'src/types/map';
import styled from 'styled-components';

const Map = () => {
  const { Tmapv3 } = window;
  const ref = useRef<HTMLDivElement>(null);
  const mapInstance = useRef(null);
  const [location, setLocation] = useState<GeoLocation | null>(null);

  const { makeUserMaker } = useGeoLocation(mapInstance);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      setLocation({
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      });
    });
  }, []);

  useEffect(() => {
    if (mapInstance.current === null && ref.current) {
      mapInstance.current = new Tmapv3.Map(ref.current, {
        center: new Tmapv3.LatLng(37.5652045, 126.98702028),
        width: '100%',
        height: '100%',
        zoom: 15,
        scaleBar: true,
      });
      makeUserMaker();
    }
  }, [location]);

  return (
    <MapContainer>
      <div ref={ref} />
      <UserLocationButton onClick={makeUserMaker}>
        <SearchIcon />
      </UserLocationButton>
    </MapContainer>
  );
};

const MapContainer = styled.div`
  width: 100%;
  height: calc(100vh - 255px);
  position: relative;

  @media screen and (max-width: 768px) {
    height: 47%;
  }
`;

const UserLocationButton = styled.button`
  width: 42px;
  height: 42px;

  position: absolute;
  bottom: 55%;
  right: 20px;
  cursor: pointer;
`;

export default Map;
