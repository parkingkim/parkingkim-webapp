import { ThemeProvider } from 'styled-components';
import theme from './theme.ts';
import Home from '@pages/home/index.tsx';
import './App.css';
import BottomTabBar from '@components/BottomTabBar.tsx';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Home />
      <BottomTabBar />
    </ThemeProvider>
  );
}

export default App;
