// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://www.dekmar.no',
  integrations: [sitemap()],
  build: {
    format: 'directory',
  },
});
