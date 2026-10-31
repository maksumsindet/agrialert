import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  site: 'https://maksumsindet.github.io',
  base: process.env.CI ? '/agrialert' : '/',
  integrations: [tailwind()],
  vite: {
    optimizeDeps: {
      exclude: ['onnxruntime-web']
    }
  }
});
