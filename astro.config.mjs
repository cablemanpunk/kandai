import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://cablemanpunk.github.io/kandai/',
  output: 'static',
  integrations: [
    tailwind()
  ],
  build: {
    format: 'directory'
  }
});
