import React from 'react';
import Image from 'next/image';
// import { useTheme } from 'next-themes';
import ActiveLink from '../ActiveLink/ActiveLink';
import SwitchThemeButton from '../SwitchThemeButton/SwitchThemeButton';
import Link from 'next/link';

const MobileNavigation = () => {
	// const { systemTheme, theme, setTheme } = useTheme();
	// const currentTheme = theme === 'system' ? systemTheme : theme;
	const currentTheme = 'dark';	
	const [mounted, setMounted] = React.useState(false);
	React.useEffect(() => {
		setMounted(true);
	}, []);

	if (!mounted) return null;
	return (
		<>
			<div className='flex justify-between items-center shadow px-4'>
				<Image
					src={
						currentTheme === 'dark'
							? '/images/hamburger-dark.svg'
							: '/images/hamburger.svg'
					}
					alt='logo'
					width={31}
					height={36}
				/>

				<Link href='/'>
					<a>
						<Image
							src={
								currentTheme === 'dark'
									? '/images/logo-dark.svg'
									: '/images/logo.svg'
							}
							alt='logo'
							width={99.27}
							height={100}
						/>
					</a>
				</Link>

				<SwitchThemeButton />
			</div>
			<button className='bg-orange-500 ml-auto mr-4 block mt-2 px-6 py-2 rounded text-white'>
				Book a table
			</button>
		</>
	);
};

export default MobileNavigation;
