import { INIT_LAT, INIT_LNG } from '@constants/index';
import useGeoLocation from '@hooks/useGeoLocation';
import useMapStore from '@store/mapStore';
import { useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { GeoLocation } from 'src/types/map';
import styled from 'styled-components';

const Map = () => {
  const location = useLocation();
  const { Tmapv3 } = window;
  const ref = useRef<HTMLDivElement>(null);
  const mapInstance = useRef(null);
  const { mapInstance: newMapInstance, setMapInstance } = useMapStore((state) => state);
  const [userLocation, setUserLocation] = useState<GeoLocation | null>(null);

  const { makeUserMaker } = useGeoLocation();
  useEffect(() => {
    const success = (position: GeolocationPosition) => {
      setUserLocation({
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      });
    };

    const error = (err: GeolocationPositionError) => {
      console.warn(`ERROR(${err.code}): ${err.message}`);
      setUserLocation({
        lat: INIT_LAT,
        lng: INIT_LNG,
      });
    };

    navigator.geolocation.getCurrentPosition(success, error);
  }, []);

  useEffect(() => {
    if (mapInstance.current === null && ref.current && userLocation) {
      mapInstance.current = new Tmapv3.Map(ref.current, {
        center: new Tmapv3.LatLng(userLocation.lat, userLocation.lng),
        width: '100%',
        height: '100%',
        zoom: 15,
        scaleBar: true,
      });
      setMapInstance(mapInstance.current!);
      makeUserMaker();
    } else if (newMapInstance && userLocation) {
      newMapInstance.setCenter(new Tmapv3.LatLng(userLocation.lat, userLocation.lng));
      newMapInstance.setZoom(15);
    }
  }, [userLocation, newMapInstance]);

  const isMapVisible = location.pathname === '/';

  return (
    <MapContainer isVisible={isMapVisible}>
      <div ref={ref} />
    </MapContainer>
  );
};

const MapContainer = styled.div<{ isVisible: boolean }>`
  width: 100%;
  height: ${({ isVisible }) => (isVisible ? 'calc(100vh - 245px)' : '0')};
  overflow: hidden;

  position: relative;
  z-index: 0;
`;

export default Map;
