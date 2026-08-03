import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  integrations: [tailwind({ applyBaseStyles: false })],
  site: 'https://jaev1996.github.io/boda-mjyja',
  base: '/boda-mjyja',
  build: {
    assets: 'assets',
  },
});
