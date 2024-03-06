import { Outlet, createBrowserRouter } from 'react-router-dom';
import BottomTabBar from '@components/BottomTabBar';
import MobileView from '@components/MobileView';
import Home from '@pages/Home';
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

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      { path: '/login', element: <Login /> },
      { path: '/onboarding', element: <OnBoarding /> },
    ],
  },
  {
    path: '/',
    element: <BottomTabBarRoot />,
    children: [
      { path: '/', element: <Home />, index: true },
      { path: '/search', element: <Search /> },
      { path: '/parking-detail', element: <ParkingLotDetail /> },
      { path: '/menu', element: <Menu /> },
      { path: '/profile', element: <Profile /> },
      { path: '/coupons', element: <Coupons /> },
      { path: '/notifications', element: <Notifications /> },
      { path: '/change-password', element: <ChangePassword /> },
      { path: '/frequent-destinations', element: <FrequentDestinations /> },
    ],
  },
]);

export default router;
