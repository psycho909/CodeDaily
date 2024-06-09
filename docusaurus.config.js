// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from "prism-react-renderer";

/** @type {import('@docusaurus/types').Config} */
const config = {
	title: "CodeDaily",
	tagline: "Dinosaurs are cool",
	favicon: "img/favicon.ico",

	// Set the production url of your site here
	url: "https://codedaily123.netlify.app/",
	// Set the /<baseUrl>/ pathname under which your site is served
	// For GitHub pages deployment, it is often '/<projectName>/'
	baseUrl: "/",

	// GitHub pages deployment config.
	// If you aren't using GitHub pages, you don't need these.
	organizationName: "CHIN CHEN", // Usually your GitHub org/user name.
	projectName: "codedaily123", // Usually your repo name.

	onBrokenLinks: "throw",
	onBrokenMarkdownLinks: "warn",

	// Even if you don't use internationalization, you can use this field to set
	// useful metadata like html lang. For example, if your site is Chinese, you
	// may want to replace "en" with "zh-Hans".
	i18n: {
		defaultLocale: "zh-Hant",
		locales: ["zh-Hant"]
	},
	presets: [
		[
			"classic",
			/** @type {import('@docusaurus/preset-classic').Options} */
			({
				docs: {
					sidebarPath: "./sidebars.js"
					// Please change this to your repo.
					// Remove this to remove the "edit this page" links.
				},
				blog: {
					showReadingTime: true
					// Please change this to your repo.
					// Remove this to remove the "edit this page" links.
				},
				theme: {
					customCss: "./src/css/custom.css"
				}
			})
		]
	],

	themeConfig:
		/** @type {import('@docusaurus/preset-classic').ThemeConfig} */
		({
			// Replace with your project's social card
			image: "img/docusaurus-social-card.jpg",
			navbar: {
				title: "CodeDaily",
				logo: {
					src: "img/logo.svg"
				},
				items: [
					{
						type: "docSidebar",
						sidebarId: "tutorialSidebar",
						position: "left",
						label: "筆記"
					}
				]
			},
			algolia: {
				// The application ID provided by Algolia
				appId: "Q3ZBBWQL3Z",
				apiKey: "a1b39721bb186f3d512d85415ae0021e",
				indexName: "netlify_96390bb1-8a62-41e0-9f47-a59c73090db6_main_all", // Optional: see doc section below
				contextualSearch: true,

				// Optional: Specify domains where the navigation should occur through window.location instead on history.push. Useful when our Algolia config crawls multiple documentation sites and we want to navigate with window.location.href to them.
				externalUrlRegex: "external\\.com|domain\\.com",

				// Optional: Replace parts of the item URLs from Algolia. Useful when using the same search index for multiple deployments using a different baseUrl. You can use regexp or string in the `from` param. For example: localhost:3000 vs myCompany.com/docs
				replaceSearchResultPathname: {
					from: "/docs/", // or as RegExp: /\/docs\//
					to: "/"
				},

				// Optional: Algolia search parameters
				searchParameters: {},

				// Optional: path for search page that enabled by default (`false` to disable it)
				searchPagePath: "search",

				// Optional: whether the insights feature is enabled or not on Docsearch (`false` by default)
				insights: false
			},
			footer: {
				style: "dark",
				links: [
					{
						title: "Docs",
						items: [
							{
								label: "Tutorial",
								to: "/docs/intro"
							}
						]
					},
					{
						title: "Community",
						items: [
							{
								label: "Stack Overflow",
								href: "https://stackoverflow.com/questions/tagged/docusaurus"
							},
							{
								label: "Discord",
								href: "https://discordapp.com/invite/docusaurus"
							},
							{
								label: "Twitter",
								href: "https://twitter.com/docusaurus"
							}
						]
					},
					{
						title: "More",
						items: [
							{
								label: "Blog",
								to: "/blog"
							},
							{
								label: "GitHub",
								href: "https://github.com/facebook/docusaurus"
							}
						]
					}
				],
				copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`
			},
			prism: {
				theme: prismThemes.github,
				darkTheme: prismThemes.dracula
			}
		})
};

export default config;
