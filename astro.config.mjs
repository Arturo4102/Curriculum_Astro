// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: "https://localhost:5000",
  output: "static",
  vite:{
    plugins:[tailwind()]
  },
  integrations: [react(), mdx(), sitemap()]
});