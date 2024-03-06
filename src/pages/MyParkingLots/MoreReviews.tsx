import FavParkingLots from './components/FavParkingLots';
import { mockParkingLots } from '.';

const MoreReviews = () => {
  return <FavParkingLots parkingLots={mockParkingLots} />;
};

export default MoreReviews;
