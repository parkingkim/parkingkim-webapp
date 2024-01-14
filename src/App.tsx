import { ThemeProvider } from 'styled-components';
import './App.css';
import Button from '@components/Button';
import theme from './theme.ts';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Button />
    </ThemeProvider>
  );
}

export default App;
