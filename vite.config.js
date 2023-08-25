// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/explorar': {
        target: 'https://www.entropia.work',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/explorar/, ''),
      },
      '/perfil': {
        target: 'https://www.entropia.work',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/perfil/, ''),
      },
      '/ubicaciones': {
        target: 'https://www.entropia.work',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/ubicaciones/, ''),
      },
      '/guardado': {
        target: 'https://www.entropia.work',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/guardado/, ''),
      },
      '/tienda': {
        target: 'https://www.entropia.work',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/tienda/, ''),
      },
      // Agrega más reescrituras para otras rutas si es necesario
    },
    // Otras opciones de configuración del servidor si es necesario
  },
});
