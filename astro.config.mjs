// @ts-check
import browserslist from "browserslist";
import { browserslistToTargets } from "lightningcss";
import { defineConfig } from "astro/config";
import markdoc from "@astrojs/markdoc";

// https://astro.build/config
export default defineConfig({
  publicDir: "static",
  site: "https://ocardinaux.com",

  experimental: {
    fonts: [
      {
        provider: "local",
        name: "Venus Acier",
        cssVariable: "--venus-acier",
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
      {
        provider: "local",
        name: "Venus Carrare",
        cssVariable: "--venus-carrare",
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
      {
        provider: "local",
        name: "Venus Cormier",
        cssVariable: "--venus-cormier",
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
      {
        provider: "local",
        name: "Venus Martre",
        cssVariable: "--venus-martre",
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
      {
        provider: "local",
        name: "Venus Plomb",
        cssVariable: "--venus-plomb",
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
