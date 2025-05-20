import { useState } from 'react';
import { cn } from 'src/utils';
import { useClickAway } from '@uidotdev/usehooks';
import DarkModeSwitch from 'src/components/DarkModeSwitch';

function Logo() {
	return (
		<svg height="100%" viewBox="0 0 49 24" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path
				d="M33.1349 0.226318L48.4905 15.5481V23.7735H41.3245V18.505L30.1716 7.37647H27.8548V23.7735H20.6889V0.226318H33.1349Z"
				fill="currentColor"
			/>
			<path
				d="M12.446 0.226318L27.8016 15.5481V23.7735H20.6356V18.505L9.48273 7.37647H7.16592V23.7735H0V0.226318H12.446Z"
				fill="currentColor"
			/>
		</svg>
	);
}

function IconBurger() {
	return (
		<svg width="100%" height="100%" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path d="M4 13H28M4 19H28" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
		</svg>
	);
}

function IconBack() {
	return (
		<svg width="100%" height="100%" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path
				d="M26.6666 13.3333V18.6666H14.6666L19.3333 23.3333L16.1066 26.5599L5.54663 15.9999L16.1066 5.43994L19.3333 8.66661L14.6666 13.3333H26.6666Z"
				fill="currentColor"
			/>
		</svg>
	);
}

function IconLinkedin() {
	return (
		<svg width="100%" height="100%" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path
				d="M25.3333 4C26.0406 4 26.7189 4.28095 27.219 4.78105C27.719 5.28115 28 5.95942 28 6.66667V25.3333C28 26.0406 27.719 26.7189 27.219 27.219C26.7189 27.719 26.0406 28 25.3333 28H6.66667C5.95942 28 5.28115 27.719 4.78105 27.219C4.28095 26.7189 4 26.0406 4 25.3333V6.66667C4 5.95942 4.28095 5.28115 4.78105 4.78105C5.28115 4.28095 5.95942 4 6.66667 4H25.3333ZM24.6667 24.6667V17.6C24.6667 16.4472 24.2087 15.3416 23.3936 14.5264C22.5784 13.7113 21.4728 13.2533 20.32 13.2533C19.1867 13.2533 17.8667 13.9467 17.2267 14.9867V13.5067H13.5067V24.6667H17.2267V18.0933C17.2267 17.0667 18.0533 16.2267 19.08 16.2267C19.5751 16.2267 20.0499 16.4233 20.3999 16.7734C20.75 17.1235 20.9467 17.5983 20.9467 18.0933V24.6667H24.6667ZM9.17333 11.4133C9.76742 11.4133 10.3372 11.1773 10.7573 10.7573C11.1773 10.3372 11.4133 9.76742 11.4133 9.17333C11.4133 7.93333 10.4133 6.92 9.17333 6.92C8.57571 6.92 8.00257 7.1574 7.57999 7.57999C7.1574 8.00257 6.92 8.57571 6.92 9.17333C6.92 10.4133 7.93333 11.4133 9.17333 11.4133ZM11.0267 24.6667V13.5067H7.33333V24.6667H11.0267Z"
				fill="currentColor"
			/>
		</svg>
	);
}
function IconGithub() {
	return (
		<svg width="100%" height="100%" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path
				d="M6.66667 4H25.3333C26.0406 4 26.7189 4.28095 27.219 4.78105C27.719 5.28115 28 5.95942 28 6.66667V25.3333C28 26.0406 27.719 26.7189 27.219 27.219C26.7189 27.719 26.0406 28 25.3333 28H19.4133C18.9867 27.9067 18.9733 27.0933 18.9733 26.8133L18.9867 23.52C18.9867 22.4 18.6 21.6667 18.1733 21.2933C20.8533 21 23.6533 20 23.6533 15.3733C23.6533 14.0667 23.1867 12.9867 22.4267 12.1467C22.5467 11.8533 22.96 10.6267 22.3067 8.97333C22.3067 8.97333 21.2933 8.66667 19 10.2133C18.04 9.94667 17.0267 9.81333 16 9.8C14.9867 9.81333 13.9467 9.94667 13 10.2133C10.7067 8.66667 9.69333 8.97333 9.69333 8.97333C9.04 10.6267 9.45333 11.8533 9.57333 12.1467C8.81333 12.9867 8.34667 14.0667 8.34667 15.3733C8.34667 20 11.1467 21 13.8133 21.3333C13.4667 21.6 13.16 22.1333 13.0533 22.9067C12.36 23.2133 10.6267 23.7467 9.56 21.9067C9.56 21.9067 8.92 20.76 7.72 20.6667C7.72 20.6667 6.54667 20.6667 7.64 21.4C7.64 21.4 8.42667 21.7733 8.97333 23.16C8.97333 23.16 9.66667 25.4933 13.0133 24.7733L13.0267 26.8133C13.0267 27.0933 13 27.9067 12.5733 28H6.66667C5.95942 28 5.28115 27.719 4.78105 27.219C4.28095 26.7189 4 26.0406 4 25.3333V6.66667C4 5.95942 4.28095 5.28115 4.78105 4.78105C5.28115 4.28095 5.95942 4 6.66667 4Z"
				fill="currentColor"
			/>
		</svg>
	);
}

export default function Header() {
	const [isMenuOpened, setIsMenuOpened] = useState(false);

	const ref = useClickAway<HTMLElement>(() => {
		closeMenu();
	});

	const closeMenu = () => {
		document.body.classList.remove('menu-opened');
		setIsMenuOpened(false);
	};
	const openMenu = () => {
		document.body.classList.add('menu-opened');
		setIsMenuOpened(true);
	};

	const onMenuClick = () => {
		closeMenu();
	};

	return (
		<header>
			<div className="">
				<div className="w-screen p-3 fixed top-0 left-0 lg:hidden z-20">
					<button className="w-8 h-8 bg-none border-none" onClick={openMenu}>
						<IconBurger />
					</button>
				</div>
				<aside
					ref={ref}
					className={cn(
						'flex flex-col place-content-center',
						'fixed w-1/2 h-[100dvh] px-3 bg-secondary border-r border-primary z-30 -translate-x-[101%] custom-transition',
						isMenuOpened && 'translate-x-0',
						'lg:px-0 lg:translate-x-0 lg:h-screen lg:w-[30%]',
					)}
				>
					<div className={cn('flex flex-col gap-12', 'lg:w-auto lg:max-w-[120px] lg:ml-auto lg:mr-8')}>
						<button
							className={cn('w-8 h-8 bg-none border-none absolute top-3 left-3', 'lg:hidden')}
							onClick={closeMenu}
						>
							<IconBack />
						</button>
						<nav>
							<ul className="flex flex-col gap-3">
								<li>
									<a
										href="/#home"
										onClick={onMenuClick}
										className="block w-fit uppercase font-sans text-base leading-[22px] bg-secondary-alt px-2 pt-3 pb-1.5 rounded custom-transition"
									>
										HOME
									</a>
								</li>
								<li>
									<a
										href="/#projects"
										onClick={onMenuClick}
										className="block w-fit uppercase font-sans text-base leading-[22px] bg-secondary-alt px-2 pt-3 pb-1.5 rounded custom-transition"
									>
										PORTFOLIO
									</a>
								</li>
								<li>
									<a
										href="/#about"
										onClick={onMenuClick}
										className="block w-fit uppercase font-sans text-base leading-[22px] bg-secondary-alt px-2 pt-3 pb-1.5 rounded custom-transition"
									>
										ABOUT
									</a>
								</li>
								<li>
									<a
										href="/#technologies"
										onClick={onMenuClick}
										className="block w-fit uppercase font-sans text-base leading-[22px] bg-secondary-alt px-2 pt-3 pb-1.5 rounded custom-transition"
									>
										SKILLS
									</a>
								</li>
							</ul>
						</nav>
						<ul className="flex flex-wrap gap-2">
							<li>
								<a
									href="https://www.linkedin.com/in/arturo-carrillo-jimenez/"
									target="_blank"
									rel="noopener"
									className="block w-8 h-8"
								>
									<IconLinkedin />
								</a>
							</li>
							<li>
								<a
									href="https://github.com/ArturoCarrilloJimenez"
									target="_blank"
									rel="noopener"
									className="block w-8 h-8"
								>
									<IconGithub />
								</a>
							</li>
						</ul>
						<div className="absolute left-3 bottom-3 lg:left-[unset] lg:bottom-8 lg:w-auto lg:max-w-[120px] lg:ml-auto">
							<DarkModeSwitch />
						</div>
					</div>
				</aside>
			</div>
		</header>
	);
}
