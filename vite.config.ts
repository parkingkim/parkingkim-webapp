import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      { find: '@pages', replacement: '/src/pages' },
      { find: '@components', replacement: '/src/components' },
      { find: '@assets', replacement: '/src/assets' },
      { find: '@hooks', replacement: '/src/hooks' },
      { find: '@utils', replacement: '/src/utils' },
    ],
  },
  build: {
    rollupOptions: {
      external: ['./sb-preview/runtime.js'],
    },
  },
  assetsInclude: ['/sb-preview/runtime.js'],
});
