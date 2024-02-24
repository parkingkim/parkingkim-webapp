import { ThemeProvider } from 'styled-components';
import theme from './theme.ts';
import './index.css';
import './reset.css';
import BottomTabBar from '@components/BottomTabBar.tsx';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Search from '@pages/Search/index.tsx';
import MobileView from '@components/MobileView.tsx';
import Home from '@pages/Home/index.tsx';
import Menu from '@pages/Menu/index.tsx';
import Profile from '@pages/Menu/Profile/index.tsx';
import Coupons from '@pages/Menu/Coupons/index.tsx';
import Notifications from '@pages/Menu/Notifications/index.tsx';
import ChangePassword from '@pages/Menu/Profile/ChangePassword/index.tsx';
import FrequentDestinations from '@pages/Menu/FrequentDestinations/index.tsx';
import OnBoarding from '@pages/OnBoarding/index.tsx';
import Login from '@pages/Login/index.tsx';
import ParkingLotDetail from '@pages/ParkingLotDetail/index.tsx';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <MobileView>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/search" element={<Search />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/coupons" element={<Coupons />} />
            <Route path="/notifications" element={<Notifications />} />
            <Route path="/change-password" element={<ChangePassword />} />
            <Route path="/frequent-destinations" element={<FrequentDestinations />} />
            <Route path="/onboarding" element={<OnBoarding />} />
            <Route path="/login" element={<Login />} />
            <Route path="/parking-detail" element={<ParkingLotDetail />} />
          </Routes>
        </BrowserRouter>
        <BottomTabBar />
      </MobileView>
    </ThemeProvider>
  );
}

export default App;
