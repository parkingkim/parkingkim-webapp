import { Outlet, createBrowserRouter } from 'react-router-dom';
import BottomTabBar from '@components/BottomTabBar';
import MobileView from '@components/MobileView';
import Login from '@pages/Login';
import Menu from '@pages/Menu';
import Coupons from '@pages/Menu/Coupons';
import FrequentDestinations from '@pages/Menu/FrequentDestinations';
import Notifications from '@pages/Menu/Notifications';
import Profile from '@pages/Menu/Profile';
import ChangePassword from '@pages/Menu/Profile/ChangePassword';
import OnBoarding from '@pages/OnBoarding';
import ParkingLotDetail from '@pages/ParkingLotDetail';
import Search from '@pages/Search';
import ParkingLotFilterCondition from '@pages/ParkingLotFilterCondition';
import MyParkingLots from '@pages/MyParkingLots';
import Home from '@pages/Home';
import MyReviews from '@pages/MyParkingLots/MyReviews';
import MoreReviews from '@pages/MyParkingLots/MoreReviews';
import Withdrawal from '@pages/Menu/Withdrawal';
import OnBoardingConfirm from '@pages/OnBoardingConfirm';
import OnboardingStart from '@pages/OnBoardingStart';

const Root = () => {
  return (
    <MobileView>
      <Outlet />
    </MobileView>
  );
};

const BottomTabBarRoot = () => {
  return (
    <MobileView>
      <Outlet />
      <BottomTabBar />
    </MobileView>
  );
};

//TODO: url 계층 구조 상의
const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      { path: '/login', element: <Login /> },
      { path: '/onboarding', element: <OnBoarding /> },
      { path: '/onboarding/start', element: <OnboardingStart /> },
      { path: '/onboarding/confirm', element: <OnBoardingConfirm /> },
      { path: '/menu', element: <Menu /> },
      { path: '/profile', element: <Profile /> },
      { path: '/coupons', element: <Coupons /> },
      { path: '/notifications', element: <Notifications /> },
      { path: '/change-password', element: <ChangePassword /> },
      { path: '/frequent-destinations', element: <FrequentDestinations /> },
      { path: '/parking-lot-filter-condition', element: <ParkingLotFilterCondition /> },
    ],
  },
  {
    path: '/',
    element: <BottomTabBarRoot />,
    children: [
      { path: '/', element: <Home />, index: true },
      { path: '/search', element: <Search /> },
      { path: '/parking-detail', element: <ParkingLotDetail /> },
      { path: '/my-parking-lots', element: <MyParkingLots /> },
      { path: '/my-reviews', element: <MyReviews /> },
      { path: '/more-reviews', element: <MoreReviews /> },
      { path: '/menu', element: <Menu /> },
      { path: '/coupons', element: <Coupons /> },
      { path: '/notifications', element: <Notifications /> },
      { path: '/change-password', element: <ChangePassword /> },
      { path: '/frequent-destinations', element: <FrequentDestinations /> },
      { path: '/withdrawal', element: <Withdrawal /> },
    ],
  },
]);

export default router;
