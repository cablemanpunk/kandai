import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import node from '@astrojs/node';
// import studioCMS from 'studiocms';

export default defineConfig({
  site: 'https://kandai-systems.vercel.app/',
  output: 'server',
  adapter: node({ mode: "standalone" }),
  integrations: [
    tailwind(),
    // studioCMS()
  ],
  build: {
    format: 'directory'
  }
});
