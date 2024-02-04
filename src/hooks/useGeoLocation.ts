import { useRef, useState, useEffect } from 'react';
import { GeoLocation } from 'src/types/map';

const useGeoLocation = (mapInstance: any) => {
  const { Tmapv3 } = window;
  const [location, setLocation] = useState<GeoLocation | null>(null);
  const tmapMarker = useRef<any>(null);

  useEffect(() => {
    if (location && mapInstance.current) {
      const userCoords = new Tmapv3.LatLng(location.lat, location.lng);

      mapInstance.current.setCenter(userCoords);
      mapInstance.current.setZoom(15);

      if (tmapMarker.current) {
        tmapMarker.current.setMap(null); // 기존 마커 제거
      }

      tmapMarker.current = new Tmapv3.Marker({
        position: userCoords,
        icon: 'src/assets/react.svg',
        map: mapInstance.current,
      });
    }
  }, [location, mapInstance, Tmapv3]);

  const makeUserMaker = () => {
    if (!mapInstance.current) return;

    navigator.geolocation.getCurrentPosition(
      (position) => {
        setLocation({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        });
      },
      (error) => {
        alert(error.message);
      },
    );
  };

  return { makeUserMaker };
};

export default useGeoLocation;
