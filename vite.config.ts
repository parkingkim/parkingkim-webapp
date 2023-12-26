import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      { find: '@components', replacement: '/src/components' },
      { find: '@', replacement: '/src' },
    ],
  },
  build: {
    rollupOptions: {
      external: ['./sb-preview/runtime.js'],
    },
  },
  assetsInclude: ['/sb-preview/runtime.js'],
});
