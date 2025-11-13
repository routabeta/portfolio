import { defineConfig } from 'astro/config';

export default defineConfig({
  integrations: [],
  content: {
    collections: {
      blog: './src/content/projects',
    },
  },

});
