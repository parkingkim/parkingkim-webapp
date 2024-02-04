import { ThemeProvider } from 'styled-components';
import theme from './theme.ts';
import Home from '@pages/Home';
import './App.css';
import BottomTabBar from '@components/BottomTabBar.tsx';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Search from '@pages/Search/index.tsx';
import MobileView from '@components/MobileView.tsx';
import Menu from '@pages/Menu/index.tsx';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <MobileView>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/search" element={<Search />} />
            <Route path="/menu" element={<Menu />} />
          </Routes>
        </BrowserRouter>
        <BottomTabBar />
      </MobileView>
    </ThemeProvider>
  );
}

export default App;
