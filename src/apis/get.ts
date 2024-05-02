import { ParkingLotDetailRes, ParkingRes } from 'src/types';
import { api } from './axios';

// 주차장 조회
export const getParkings = async (lng: string, lat: string, radius = 1000): Promise<ParkingRes> =>
  await api.get(`/parkings?longitude=${lng}&latitude=${lat}&radius=${radius}`, {
    headers: {
      Authorization: `Bearer asdlkjfalsd123123`,
    },
  });

// 주차장 상세 조회
export const getParkingDetail = async (parkingId: number): Promise<ParkingLotDetailRes> =>
  await api.get(`/parkings/${parkingId}`);

export const getSearchCondition = async () => await api.get('/search-condition');
