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
    navigator.geolocation.getCurrentPosition((position) => {
      setLocation({
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      });
    });
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
      {location && (
        <UserLocationButton onClick={makeUserMaker}>
          <SearchIcon />
        </UserLocationButton>
      )}
    </>
  );
};

const UserLocationButton = styled.button`
  width: 42px;
  height: 42px;

  position: absolute;
  top: 20px;
  left: 20px;
  cursor: pointer;
`;

export default Map;
