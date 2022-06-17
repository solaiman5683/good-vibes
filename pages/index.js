import MobileNavigation from '../components/Navigation/MobileNavigation';
import Navigation from '../components/Navigation/Navigation';
import SwitchThemeButton from '../components/SwitchThemeButton/SwitchThemeButton';

export default function Home() {
	return (
		<div>
			<div className='hidden lg:block'>
				<Navigation />
			</div>
			<div className='block lg:hidden'>
				<MobileNavigation />
			</div>
		</div>
	);
}
