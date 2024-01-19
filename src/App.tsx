import { ThemeProvider } from 'styled-components';
import theme from './theme.ts';
import Home from '@pages/home/index.tsx';
import './App.css';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Home />
    </ThemeProvider>
  );
}

export default App;
