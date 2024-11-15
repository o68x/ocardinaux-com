/** @type {import('@markdoc/markdoc').Config} */

import { component, defineMarkdocConfig, nodes } from "@astrojs/markdoc/config";

export default defineMarkdocConfig({
  nodes: {
    document: {
      ...nodes.document, // Apply defaults for other options
      render: null, // default 'article'
    },
    link: {
      attributes: nodes.link.attributes,
      render: component("./src/components/ExternalLink.astro"),
    },
  },
  tags: {
    tldr: {
      attributes: {},
      render: component("./src/components/SectionTldr.astro"),
    },
    div: {
      attributes: {},
      render: "div",
    },
    span: {
      attributes: {},
      render: "span",
    },
  },
});
