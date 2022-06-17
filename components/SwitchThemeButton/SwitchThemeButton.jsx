import React from 'react';
import { useTheme } from 'next-themes';
import { SunIcon, MoonIcon } from '@heroicons/react/solid';

const SwitchThemeButton = () => {
	const { systemTheme, theme, setTheme } = useTheme();
	const currentTheme = theme === 'system' ? systemTheme : theme;
	const [mounted, setMounted] = React.useState(false);
	React.useEffect(() => {
		setMounted(true);
	}, []);

	if (!mounted) return null;

	if (currentTheme === 'dark') {
		return (
			<SunIcon
				className='h-5 w-5'
				role='button'
				onClick={() => setTheme('light')}
			/>
		);
	} else {
		return (
			<MoonIcon
				className='h-5 w-5'
				role='button'
				onClick={() => setTheme('dark')}
			/>
		);
	}
};

export default SwitchThemeButton;
