// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
const base = process.env.ASTRO_BASE ?? '/urbanahighlandshoa';

export default defineConfig({
  site: 'https://aosama.github.io',
  base,
  trailingSlash: 'always',
  vite: {
    plugins: [tailwindcss()]
  }
});