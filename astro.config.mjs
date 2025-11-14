import { defineConfig } from 'astro/config';

export default defineConfig({
  integrations: [],
  content: {
    collections: {
      blog: './src/content/projects',
    },
  },
  vite: {
    build: {
      minify: true, // Enable minification (default)
      cssMinify: true, // Enable CSS minification (default)
    },
  },

});
