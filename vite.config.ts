import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { fileURLToPath } from 'node:url';
import svgLoader from 'vite-svg-loader';

export default defineConfig({
  plugins: [
    vue(),
    svgLoader({
      svgoConfig: {
        plugins: [
          'preset-default',
          {
            name: 'prefixIds',
          },
        ],
      },
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src/', import.meta.url)),
      '@features': fileURLToPath(new URL('./src/components/features/', import.meta.url)),
      '@uikit': fileURLToPath(new URL('./src/components/uikit/', import.meta.url)),
      '@icons': fileURLToPath(new URL('./src/assets/icons/', import.meta.url)),
      '@models': fileURLToPath(new URL('./src/models/', import.meta.url)),
    },
  },
  build: {
    target: 'esnext',
  },
});
