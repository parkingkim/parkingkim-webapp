import { ParkingRes } from 'src/types';
import { api } from './axios';

export const getParkings = async (lng: string, lat: string, radius = 1000): Promise<ParkingRes> =>
  await api.get(`/parkings?longitude=${lng}&latitude=${lat}&radius=${radius}`, {
    headers: {
      Authorization: `Bearer asdlkjfalsd123123`,
    },
  });

export const getSearchCondition = async () => await api.get('/search-condition');
