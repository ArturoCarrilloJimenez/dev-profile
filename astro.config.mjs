import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';
import partytown from '@astrojs/partytown';
import netlify from '@astrojs/netlify';

import mdx from '@astrojs/mdx';

const siteUrl = 'https://www.arturocj.dev';

// https://astro.build/config
export default defineConfig({
	site: siteUrl,
	integrations: [
		tailwind({
			applyBaseStyles: false,
			nesting: true,
		}),
		react(),
		partytown({
			config: {
				forward: ['dataLayer.push'],
			},
		}),
		mdx(),
	],
	markdown: {
		shikiConfig: {
			theme: 'min-dark',
		},
	},
	output: 'server',
	adapter: netlify(),
});
