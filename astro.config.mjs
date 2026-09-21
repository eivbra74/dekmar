// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://www.dekmar.no',
  integrations: [
    sitemap({
      // KS-modulen er intern (noindex) – hold den ute av sitemap
      filter: (page) => !page.includes('/ks/'),
    }),
  ],
  build: {
    format: 'directory',
  },
});
