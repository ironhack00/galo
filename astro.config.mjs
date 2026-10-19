import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Sitio 100% estático. `astro build` genera /dist listo para subir
// a Netlify, Vercel, GitHub Pages o cualquier hosting estático.
export default defineConfig({
  site: 'https://galomarketing.com.ar',
  build: { format: 'directory' },
  compressHTML: true,
  integrations: [sitemap({ filter: (page) => !page.includes('/404') })],
});
