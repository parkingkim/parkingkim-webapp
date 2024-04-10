import { ThemeProvider } from 'styled-components';
import theme from './theme.ts';
import './index.css';
import { RouterProvider } from 'react-router-dom';
import router from './router.tsx';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <RouterProvider router={router} />
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
