import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), svgr()],
  resolve: {
    alias: [
      { find: '@pages', replacement: '/src/pages' },
      { find: '@components', replacement: '/src/components' },
      { find: '@assets', replacement: '/src/assets' },
      { find: '@hooks', replacement: '/src/hooks' },
      { find: '@utils', replacement: '/src/utils' },
      { find: '@constants', replacement: '/src/constants' },
      { find: '@style', replacement: '/src/style' },
      { find: '@store', replacement: '/src/store' },
      { find: '@apis', replacement: '/src/apis' },
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
