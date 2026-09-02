// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
// NOTA: "site" es un dominio provisional — PENDIENTE registrar el dominio real (ver PENDIENTES.md).
export default defineConfig({
  site: 'https://www.yaocalli.mx',
  trailingSlash: 'always',
  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [sitemap()]
});