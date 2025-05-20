import { useState } from 'react';
import { cn } from 'src/utils';

function IconSun() {
	return (
		<svg width="100%" height="100%" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
			<g clipPath="url(#clip0_162_3051)">
				<path
					d="M2.36663 12.7267L3.30663 13.6667L4.50663 12.4734L3.55996 11.5267M7.99996 4.00008C5.79329 4.00008 3.99996 5.79342 3.99996 8.00008C3.99996 10.2067 5.79329 12.0001 7.99996 12.0001C10.2066 12.0001 12 10.2067 12 8.00008C12 5.78675 10.2066 4.00008 7.99996 4.00008ZM13.3333 8.66675H15.3333V7.33342H13.3333M11.4933 12.4734L12.6933 13.6667L13.6333 12.7267L12.44 11.5267M13.6333 3.33341L12.6933 2.40008L11.4933 3.59341L12.44 4.54008M8.66663 0.666748H7.33329V2.66675H8.66663M4.50663 3.59341L3.30663 2.40008L2.36663 3.33341L3.55996 4.54008L4.50663 3.59341ZM0.666626 8.66675H2.66663V7.33342H0.666626M8.66663 13.3334H7.33329V15.3334H8.66663"
					fill="currentColor"
				/>
			</g>
			<defs>
				<clipPath id="clip0_162_3051">
					<rect width="16" height="16" fill="currentColor" />
				</clipPath>
			</defs>
		</svg>
	);
}

function IconMoon() {
	return (
		<svg width="100%" height="100%" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path
				d="M1.33325 8.00008C1.33319 9.04685 1.57962 10.0789 2.05259 11.0128C2.52556 11.9466 3.21179 12.7559 4.0557 13.3752C4.89962 13.9945 5.87751 14.4064 6.9102 14.5775C7.94289 14.7486 9.00136 14.6741 9.99992 14.3601C8.64631 13.9347 7.46373 13.0885 6.62419 11.9447C5.78466 10.8008 5.33196 9.41896 5.33196 8.00008C5.33196 6.5812 5.78466 5.19933 6.62419 4.05548C7.46373 2.91163 8.64631 2.06547 9.99992 1.64008C9.00136 1.32605 7.94289 1.25157 6.9102 1.42267C5.87751 1.59378 4.89962 2.00565 4.0557 2.62496C3.21179 3.24426 2.52556 4.05359 2.05259 4.98741C1.57962 5.92123 1.33319 6.95331 1.33325 8.00008Z"
				fill="currentColor"
			/>
		</svg>
	);
}

export default function DarkModeSwitch(): JSX.Element {
	const [isDarkMode, setIsDarkMode] = useState(window.isDarkMode());

	const handleThemeChange = () => {
		if (isDarkMode) {
			localStorage?.setItem('theme', 'light');
			setIsDarkMode(false);
		} else {
			localStorage?.setItem('theme', 'dark');
			setIsDarkMode(true);
		}
		window.initTheme();
	};

	return (
		<button className={cn('flex items-center gap-[2px]')} onClick={handleThemeChange}>
			<div className="w-4 h-4">{isDarkMode ? <IconSun /> : <IconMoon />}</div>
			<span className="block uppercase font-sans pt-1 text-[12px] leading-[14px]">{isDarkMode ? 'Light' : 'Dark'}</span>
		</button>
	);
}
