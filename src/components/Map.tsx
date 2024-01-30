import { SearchIcon } from '@assets/index';
import useGeoLocation from '@hooks/useGeoLocation';
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
    const success = (position: GeolocationPosition) => {
      setLocation({
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      });
    };

    const error = (err: GeolocationPositionError) => {
      console.warn(`ERROR(${err.code}): ${err.message}`);
      setLocation({
        lat: 37.566481622437934,
        lng: 126.98502302169841,
      });
    };

    navigator.geolocation.getCurrentPosition(success, error);
  }, []);

  useEffect(() => {
    if (location && mapInstance.current === null && ref.current) {
      mapInstance.current = new Tmapv3.Map(ref.current, {
        center: new Tmapv3.LatLng(location.lat, location.lng),
        width: '100%',
        height: '600px',
        zoom: 15,
        scaleBar: true,
      });
      makeUserMaker();
    }
  }, [location]);

  return (
    <>
      <div ref={ref} />
      <UserLocationButton onClick={makeUserMaker}>
        <SearchIcon />
      </UserLocationButton>
    </>
  );
};

const UserLocationButton = styled.button`
  position: absolute;
  top: 20px;
  left: 20px;
  width: 42px;
  height: 42px;
  cursor: pointer;
`;

export default Map;
