import { getParkingDetail } from '@apis/get';
import { useSuspenseQuery } from '@tanstack/react-query';

const useGetParkingDetail = (parkingLotId: number) => {
  return useSuspenseQuery({
    queryKey: ['parkingLotDetail'],
    queryFn: () => getParkingDetail(parkingLotId),
    select: (data) => data.data,
  });
};

export default useGetParkingDetail;
