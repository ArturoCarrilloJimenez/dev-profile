import defaultTheme from 'tailwindcss/defaultTheme';

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode: ['selector', '[data-theme-dark]'],
	theme: {
		fontFamily: {
			serif: ['"Inter"', ...defaultTheme.fontFamily.serif],
			sans: ['"Konstant Grotesk"', ...defaultTheme.fontFamily.sans],
		},
		extend: {
			colors: {
				primary: 'var(--color-primary)',
				secondary: 'var(--color-bg)',
				'secondary-alt': 'var(--color-bg-alt)',
				border: 'var(--color-border)',
				placeholder: 'rgb(var(--color-primary) / 0.32)',
				shadow: 'var(--color-shadow)',
			},
			screens: {
				tall: { raw: '(min-height: 800px)' },
			},
		},
	},
	plugins: [],
};
