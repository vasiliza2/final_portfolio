import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite'; // Используем плагин Vite

export default defineConfig({
  site: 'https://vasiliza2.github.io',
  base: '/final_portfolio',
  vite: {
    plugins: [tailwindcss()], // Добавляем плагин здесь
  },
});
