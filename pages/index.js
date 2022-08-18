import Head from 'next/head';
import About from '../components/About/About';
import BookTable from '../components/HomePage/BookTable';
import Hero from '../components/HomePage/Hero';
import HomeSlider from '../components/HomeSlider/HomeSlider';
import Breakfast from '../components/Menues/Breakfast';
import Drinks from '../components/Menues/Drinks';
import Snacks from '../components/Menues/Snacks';
import Starters from '../components/Menues/Starters';
import MobileNavigation from '../components/Navigation/MobileNavigation';
import Navigation from '../components/Navigation/Navigation';
import VideoSection from '../components/VideoSection/VideoSection';

export default function Home() {
	return (
		<>
			<Head>
				<title>Home | Good Vibes</title>
			</Head>
			<div className='hidden lg:block'>
				<Navigation />
			</div>
			<div className='block lg:hidden'>
				<MobileNavigation />
			</div>
			<Hero />
			<About />
			<VideoSection />
			<HomeSlider />
			<Starters />
			<Breakfast />
			<Snacks />
			<Drinks />
			<BookTable />
		</>
	);
}
