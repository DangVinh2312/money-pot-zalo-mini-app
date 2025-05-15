import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import zaloMiniApp from 'zmp-vite-plugin';

// https://vitejs.dev/config/
export default () => {
  return defineConfig({
    root: './src',
    base: '',
    plugins: [zaloMiniApp(), react()],
    build: {
      assetsInlineLimit: 0,
    },
    resolve: {
      alias: {
        '@': '/src',
        '@tabler/icons-react': '@tabler/icons-react/dist/esm/icons/index.mjs',
      },
    },
  });
};
