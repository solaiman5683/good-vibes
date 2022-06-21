import React from 'react';
// import { useTheme } from 'next-themes';
import { SunIcon, MoonIcon } from '@heroicons/react/solid';

const SwitchThemeButton = () => {
	// const { systemTheme, theme, setTheme } = useTheme();
	// const currentTheme = theme === 'system' ? systemTheme : theme;
	let currentTheme = 'dark';
	const [mounted, setMounted] = React.useState(false);
	React.useEffect(() => {
		setMounted(true);
	}, []);

	if (!mounted) return null;

	if (currentTheme === 'dark') {
		return (
			<SunIcon
				className='h-8 w-8'
				role='button'
				onClick={() => currentTheme = 'light'}
			/>
		);
	} else {
		return (
			<MoonIcon
				className='h-8 w-8'
				role='button'
				onClick={() => currentTheme = 'dark'}
			/>
		);
	}
};

export default SwitchThemeButton;
