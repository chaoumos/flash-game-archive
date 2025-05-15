// astro.config.mjs
import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: 'https://flash-game-archive.example.com',
  integrations: [tailwind()],
  output: 'static',
});