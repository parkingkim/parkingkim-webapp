import { ThemeProvider } from 'styled-components';
import theme from './theme.ts';
import './App.css';
import './reset.css';
import BottomTabBar from '@components/BottomTabBar.tsx';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Search from '@pages/Search/index.tsx';
import MobileView from '@components/MobileView.tsx';
import Home from '@pages/Home/index.tsx';
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
