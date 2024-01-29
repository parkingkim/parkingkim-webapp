import { ThemeProvider } from 'styled-components';
import theme from './theme.ts';
import Home from '@pages/Home/index.tsx';
import './App.css';
import BottomTabBar from '@components/BottomTabBar.tsx';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Search from '@pages/Search/index.tsx';
import MobileView from '@components/MobileView.tsx';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <MobileView>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/search" element={<Search />} />
          </Routes>
        </BrowserRouter>
        <BottomTabBar />
      </MobileView>
    </ThemeProvider>
  );
}

export default App;
