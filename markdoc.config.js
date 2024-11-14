import { component, defineMarkdocConfig, nodes } from "@astrojs/markdoc/config";

export default defineMarkdocConfig({
  nodes: {
    link: {
			attributes: nodes.link.attributes,
			render: component("./src/components/ExternalLink.astro"),
		},
  },
  tags: {
    tldr: {
      attributes: {
        title: { type: String, render: "title" }
      },
      render: component("./src/components/Tldr.astro")
    }
  }
});
