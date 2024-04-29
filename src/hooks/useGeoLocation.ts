import useAddressStore from '@store/addressStore';
import useMapStore from '@store/mapStore';
import useMarkerStore from '@store/userMarkerStore';
import parseAddress from '@utils/parseAddress';
import { useState, useEffect } from 'react';
import { GeoLocation } from 'src/types/map';

const useGeoLocation = () => {
  const { Tmapv3 } = window;
  const { mapInstance } = useMapStore((state) => state);
  const [location, setLocation] = useState<GeoLocation | null>(null);
  const { userMarker, setUserMarker, setUserLocation } = useMarkerStore();

  const { setAddress } = useAddressStore((state) => state);

  const reverseGeo = async () => {
    const headers = { appKey: 'K7SVqM25ES7kK3FaC0crJ2Uu6XNAoAy54xiQr9I6' };
    const searchParams = {
      version: '1',
      format: 'json',
      callback: 'result',
      coordType: 'WGS84GEO',
      addressType: 'A10',
      lon: location!.lng.toString(),
      lat: location!.lat.toString(),
    };

    const queryParams = new URLSearchParams(searchParams).toString();

    try {
      const res = await fetch(
        `https://apis.openapi.sk.com/tmap/geo/reversegeocoding?${queryParams}`,
        {
          headers,
        },
      );

      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }

      const data = await res.json();
      setAddress(parseAddress(data));
    } catch (error) {
      console.error('Error fetching data: ', error);
    }
  };

  useEffect(() => {
    if (!mapInstance) return;

    if (location) {
      const userCoords = new Tmapv3.LatLng(location.lat, location.lng);

      mapInstance.setCenter(userCoords);
      mapInstance.setZoom(15);

      if (userMarker) {
        setUserMarker(null);
        userMarker.setMap(null);
      }

      setUserMarker(
        new Tmapv3.Marker({
          position: userCoords,
          icon: 'src/assets/user-location.svg',
          iconSize: new Tmapv3.Size(42, 42),
          map: mapInstance,
        }),
      );
      reverseGeo();
    }
  }, [location, mapInstance, Tmapv3]);

  const makeUserMaker = () => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setLocation({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        });
        setUserLocation({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        });
      },
      (error) => {
        alert(error.message);
      },
    );
  };

  return { makeUserMaker, location };
};

export default useGeoLocation;
