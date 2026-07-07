import { defineConfig } from 'astro/config';

// Sitio 100% estático. `astro build` genera /dist listo para subir
// a Netlify, Vercel, GitHub Pages o cualquier hosting estático.
export default defineConfig({
  site: 'https://galomarketing.com.ar',
  build: { format: 'directory' },
  compressHTML: true,
});
