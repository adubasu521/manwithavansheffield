import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import react from '@astrojs/react';
import cloudflare from '@astrojs/cloudflare';

export default defineConfig({
  site: 'https://manwithavansheffield.co.uk',
  output: 'static',
  trailingSlash: 'always',
  adapter: cloudflare(),
  integrations: [sitemap(), react()],
  vite: {
    plugins: [tailwindcss()],
  },
});
