// @ts-check
import browserslist from "browserslist";
import { browserslistToTargets } from "lightningcss";
import { defineConfig, fontProviders } from "astro/config";
import markdoc from "@astrojs/markdoc";

// https://astro.build/config
export default defineConfig({
  publicDir: "static",
  site: "https://ocardinaux.com",

  experimental: {
    fonts: [
      {
        provider: fontProviders.local(),
        name: "Venus Acier",
        cssVariable: "--venus-acier",
        options: {
          variants: [
            {
              weight: "400",
              style: "normal",
              src: [
                "./src/assets/webfonts/Venus-Acier.woff2",
                "./src/assets/webfonts/Venus-Acier.woff",
                "./src/assets/webfonts/Venus-Acier.ttf",
              ],
            },
          ],
        },
      },
      {
        provider: fontProviders.local(),
        name: "Venus Carrare",
        cssVariable: "--venus-carrare",
        options: {
          variants: [
            {
              weight: "400",
              style: "normal",
              src: [
                "./src/assets/webfonts/Venus-Carrare.woff2",
                "./src/assets/webfonts/Venus-Carrare.woff",
                "./src/assets/webfonts/Venus-Carrare.ttf",
              ],
            },
          ],
        },
      },
      {
        provider: fontProviders.local(),
        name: "Venus Cormier",
        cssVariable: "--venus-cormier",
        options: {
          variants: [
            {
              weight: "400",
              style: "normal",
              src: [
                "./src/assets/webfonts/Venus-Cormier.woff2",
                "./src/assets/webfonts/Venus-Cormier.woff",
                "./src/assets/webfonts/Venus-Cormier.ttf",
              ],
            },
          ],
        },
      },
      {
        provider: fontProviders.local(),
        name: "Venus Martre",
        cssVariable: "--venus-martre",
        options: {
          variants: [
            {
              weight: "400",
              style: "normal",
              src: [
                "./src/assets/webfonts/Venus-Martre.woff2",
                "./src/assets/webfonts/Venus-Martre.woff",
                "./src/assets/webfonts/Venus-Martre.ttf",
              ],
            },
          ],
        },
      },
      {
        provider: fontProviders.local(),
        name: "Venus Plomb",
        cssVariable: "--venus-plomb",
        options: {
          variants: [
            {
              weight: "400",
              style: "normal",
              src: [
                "./src/assets/webfonts/Venus-Plomb.woff2",
                "./src/assets/webfonts/Venus-Plomb.woff",
                "./src/assets/webfonts/Venus-Plomb.ttf",
              ],
            },
          ],
        },
      },
    ],
    // svg: true,
  },

  vite: {
    css: {
      transformer: "lightningcss",
      lightningcss: {
        targets: browserslistToTargets(browserslist("defaults")),
        cssModules: true,
      },
    },
  },

  integrations: [markdoc()],
});
