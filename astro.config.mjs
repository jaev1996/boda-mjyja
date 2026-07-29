import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  integrations: [tailwind()],
  site: 'https://jaev.github.io/boda-mjyja',
  build: {
    assets: 'assets',
  },
});
