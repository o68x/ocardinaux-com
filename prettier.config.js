/** @type {import("prettier").Options} */
export default {
	printWidth: 100,
	useTabs: false,
  tabWidth: 2,
	trailingComma: "all",
	semi: true,
	plugins: ["prettier-plugin-astro"],
	astroAllowShorthand: false,
	proseWrap: "preserve",
	overrides: [
		{
			files: "*.astro",
			options: {
				parser: "astro",
			},
		},
	],
};
