import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://vasiliza2.github.io',
  base: '/final_portfolio',
  integrations: [tailwind({
    applyBaseStyles: false, 
  })],
});
