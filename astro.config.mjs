// @ts-check
import browserslist from 'browserslist';
import { browserslistToTargets } from 'lightningcss';
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  publicDir: 'static',
  site: 'https://ocardinaux.com',
  vite: {
    css: {
      transformer: "lightningcss",
      lightningcss: {
        targets: browserslistToTargets(browserslist('defaults'))
      }
    }
  }
});
