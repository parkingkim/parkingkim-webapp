import { INIT_LAT, INIT_LNG } from '@constants/index';
import useGeoLocation from '@hooks/useGeoLocation';
import useMapStore from '@store/mapStore';
import { useEffect, useRef, useState } from 'react';
import { GeoLocation } from 'src/types/map';
import styled from 'styled-components';

const Map = () => {
  const { Tmapv3 } = window;
  const ref = useRef<HTMLDivElement>(null);
  const mapInstance = useRef(null);
  const { setMapInstance } = useMapStore((state) => state);
  const [location, setLocation] = useState<GeoLocation | null>(null);

  const { makeUserMaker } = useGeoLocation();
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
        lat: INIT_LAT,
        lng: INIT_LNG,
      });
    };

    navigator.geolocation.getCurrentPosition(success, error);
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
      setMapInstance(mapInstance.current!);
      makeUserMaker();
    }
  }, [location]);

  return (
    <MapContainer>
      <div ref={ref} />
    </MapContainer>
  );
};

const MapContainer = styled.div`
  width: 100%;
  height: calc(100vh - 245px);

  position: relative;
`;

export default Map;
