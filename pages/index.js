import SwitchThemeButton from '../components/SwitchThemeButton/SwitchThemeButton';

export default function Home() {
	return (
		<div>
			<SwitchThemeButton />
			<h2 className='text-4xl text-center p-4 font-bold text-gray-700 dark:text-gray-50'>
				Welcome to my new restaurant site with Tailwind CSS and Next.js 🎉
			</h2>
		</div>
	);
}
