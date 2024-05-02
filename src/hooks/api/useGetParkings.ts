import { getParkings } from '@apis/get';
import { useSuspenseQuery } from '@tanstack/react-query';

const useGetParkings = (lng: string, lat: string, radius = 1000) => {
  return useSuspenseQuery({
    queryKey: ['parkings'],
    queryFn: () => getParkings(lng, lat, radius),
    select: (data) => data.data.parkingLots,
  });
};

export default useGetParkings;
