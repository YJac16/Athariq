import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  },
  server: {
    port: 3000,
  },
  preview: {
    port: process.env.PORT || 3000,
    host: true,
    allowedHosts: [
      'athariq-production.up.railway.app',
      '.railway.app',
      '.up.railway.app',
    ],
  },
});

