interface Window {
	isDarkMode: () => boolean;
	initTheme: () => void;
	onContactSubmit: (token: string) => void;
	hcaptcha: { execute: () => void };
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	dataLayer: { push: (args: any) => void };
}
