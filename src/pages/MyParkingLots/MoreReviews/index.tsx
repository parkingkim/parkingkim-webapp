import FavParkingLotsList from '../components/FavParkingLotsList';
import { mockParkingLots } from '..';

const MoreReviews = () => {
  return <FavParkingLotsList parkingLots={mockParkingLots} />;
};

export default MoreReviews;
