import { ThemeProvider } from 'styled-components';
import theme from './theme.ts';
import './index.css';
import { RouterProvider } from 'react-router-dom';
import router from './router.tsx';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
