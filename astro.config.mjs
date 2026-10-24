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
  // Astro 7 endret standarden til 'jsx', som kan fjerne mellomrom mellom
  // inline-elementer. true beholder samme HTML som under Astro 5.
  compressHTML: true,
  // Vite 8 bygger som standard for nettlesere fra 2023 (Safari 16.4+), og da
  // skrives f.eks. media queries om til «width>=»-syntaks som eldre iPhoner
  // ignorerer. Samme mål som Vite 6 brukte under Astro 5, så portalen virker
  // på de samme telefonene som før.
  vite: {
    build: {
      target: ['edge88', 'firefox78', 'chrome87', 'safari14'],
      cssTarget: ['edge88', 'firefox78', 'chrome87', 'safari14'],
    },
  },
});
