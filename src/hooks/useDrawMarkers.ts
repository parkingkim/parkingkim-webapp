import useMapStore from '@store/mapStore';
import { useEffect } from 'react';
import { ParkingLotDetail } from 'src/types';
import { GeoLocation } from 'src/types/map';

interface useDraMarkersProps {
  parkingLots: ParkingLotDetail[];
  location: GeoLocation;
}

const markerArr: Marker[] = [];

// 목적지도 바운드에 추가하기
const useDrawMarkers = ({ parkingLots, location }: useDraMarkersProps) => {
  const { Tmapv3 } = window;
  const { mapInstance } = useMapStore();

  useEffect(() => {
    if (!mapInstance) return;

    if (markerArr.length > 0) {
      for (const i in markerArr) {
        markerArr[i].setMap(null);
      }
    }

    // 목적지를 바운드에 추가
    const latlngBounds = new Tmapv3.LatLngBounds();
    latlngBounds.extend(new Tmapv3.LatLng(location.lat.toString(), location.lng.toString()));

    if (parkingLots.length === 0) {
      mapInstance.setCenter(latlngBounds.getCenter());
      mapInstance.fitBounds(latlngBounds);
      mapInstance.setZoom(15);
      return;
    }

    parkingLots.forEach((lot) => {
      // 바운드 추가 로직
      const markerPosition = new Tmapv3.LatLng(lot.latitude.toString(), lot.longitude.toString());

      latlngBounds.extend(markerPosition);

      const newMarker = new Tmapv3.Marker({
        position: new Tmapv3.LatLng(lot.latitude.toString(), lot.longitude.toString()),
        icon: 'src/assets/dest-three.svg',
        iconSize: new Tmapv3.Size(40, 40),
        title: lot.parkingName,
        map: mapInstance,
      });

      markerArr.push(newMarker);
    });

    mapInstance.setCenter(latlngBounds.getCenter());
    mapInstance.fitBounds(latlngBounds);
    mapInstance.setZoom(15);
  }, [parkingLots, location, mapInstance]);
};

export default useDrawMarkers;
