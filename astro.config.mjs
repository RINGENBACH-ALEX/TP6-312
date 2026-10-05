// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import netlify from '@astrojs/netlify';

// https://astro.build/config
export default defineConfig({
  // Netlify sert les pages statiques via un dossier /chemin/index.html :
  // on force donc le / final partout (liens internes, redirections).
  trailingSlash: 'always',

  vite: {
    plugins: [tailwindcss()]
  },

  adapter: netlify()
});
