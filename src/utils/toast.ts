import Toastify from 'toastify-js';
import 'toastify-js/src/toastify.css';

export const showToast = ({
	status = 'success',
	title,
	description,
	options,
}: {
	status: 'success' | 'error';
	title: string;
	description: string;
	options?: Parameters<typeof Toastify>;
}) => {
	const toastOptions = {
		className: 'info',
		duration: 4000,
		stopOnFocus: true,
		style: {
			background: 'var(--color-bg-alt)',
			color: 'var(--color-primary)',
			fontFamily: 'var(--font-title)',
			borderRadius: '8px',
			padding: '16px 24px',
			textAlign: 'left',
			maxWidth: 'clamp(100px, calc(100% - 32px), 460px)',
			boxShadow: 'none',
			border: '1px solid var(--color-border)',
			display: 'flex',
			alignItems: 'center',
			gap: '16px',
		},
		...options,
	};

	const node = document.createElement('div');
	node.innerHTML = `
    <div class="flex gap-4">
      ${
				status === 'success'
					? `<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M13.3333 22.6667L6.66667 16L8.54667 14.1067L13.3333 18.8933L23.4533 8.77333L25.3333 10.6667M25.3333 4H6.66667C5.18667 4 4 5.18667 4 6.66667V25.3333C4 26.0406 4.28095 26.7189 4.78105 27.219C5.28115 27.719 5.95942 28 6.66667 28H25.3333C26.0406 28 26.7189 27.719 27.219 27.219C27.719 26.7189 28 26.0406 28 25.3333V6.66667C28 5.95942 27.719 5.28115 27.219 4.78105C26.7189 4.28095 26.0406 4 25.3333 4Z" fill="currentColor"/>
      </svg>`
					: `<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M6.66667 4H25.3333C26.0406 4 26.7189 4.28095 27.219 4.78105C27.719 5.28115 28 5.95942 28 6.66667V25.3333C28 26.0406 27.719 26.7189 27.219 27.219C26.7189 27.719 26.0406 28 25.3333 28H6.66667C5.95942 28 5.28115 27.719 4.78105 27.219C4.28095 26.7189 4 26.0406 4 25.3333V6.66667C4 5.95942 4.28095 5.28115 4.78105 4.78105C5.28115 4.28095 5.95942 4 6.66667 4ZM17.3333 17.3333V9.33333H14.6667V17.3333H17.3333ZM17.3333 22.6667V20H14.6667V22.6667H17.3333Z" fill="currentColor"/>
      </svg>`
			}
      <div>
        <div class="font-sans uppercase">${title}</div>
        <div class="font-serif text-[14px] leading-[17px]">${description}</div>
      </div>
    </div>
  `;

	Toastify({
		...toastOptions,
		node: node,
	}).showToast();
};
