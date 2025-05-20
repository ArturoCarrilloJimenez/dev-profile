import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';
import partytown from '@astrojs/partytown';
import netlify from '@astrojs/netlify';
import sitemap from '@astrojs/sitemap';
import { fileURLToPath } from 'node:url';
import path from 'node:path';
import fs from 'node:fs';

import mdx from '@astrojs/mdx';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const directoryPath = path.join(__dirname, 'src', 'content', 'blog');
const files = fs.readdirSync(directoryPath);
const siteUrl = 'https://www.michalskorus.pl';
const blogUrls = files
	.filter(file => file.includes('md'))
	.map(file => {
		const fileName = file.split('.')[0];
		return `${siteUrl}/blog/${fileName}`;
	});

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
		sitemap({
			customPages: [...blogUrls],
			serialize(item) {
				if (item.url === 'https://www.michalskorus.pl/') {
					item.changefreq = 'daily';
					item.lastmod = new Date();
					item.priority = 1;
					return item;
				}

				if (item.url === 'https://www.michalskorus.pl/blog/') {
					item.changefreq = 'daily';
					item.lastmod = new Date();
					item.priority = 0.8;
					item.url = 'https://www.michalskorus.pl/blog';
					return item;
				}

				if (item.url.includes('blog')) {
					item.changefreq = 'weekly';
					item.lastmod = new Date();
					item.priority = 0.6;
					return item;
				}

				item.changefreq = 'weekly';
				item.lastmod = item.lastmod || new Date();
				item.priority = 0.3;
				return item;
			},
		}),
	],
	markdown: {
		shikiConfig: {
			theme: 'min-dark',
		},
	},
	output: 'server',
	adapter: netlify(),
});
