import BottomTabBar from '@components/BottomTabBar';
import Map from '@components/Map';
import MobileView from '@components/MobileView';
import { Outlet } from 'react-router-dom';

const BottomTabBarRoot = () => {
  return (
    <MobileView>
      <Map />
      <Outlet />
      <BottomTabBar />
    </MobileView>
  );
};

export default BottomTabBarRoot;
