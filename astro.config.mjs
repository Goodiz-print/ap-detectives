// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://ap-detectives.com',
  trailingSlash: 'always',
  build: { format: 'directory' },

  vite: {
    plugins: [tailwindcss()],
  },

  integrations: [
    sitemap({
      filter: (page) => !/\/(merci|404)\/$/.test(page),
    }),
  ],
});
