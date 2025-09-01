// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: "https://arturo4102.github.io",
  base: "/Curriculum_Astro/",
  output: "static",
  build: { inlineStylesheets: "always" },
  vite: { plugins: [tailwind()] },
  integrations: [react(), mdx(), sitemap()],
});