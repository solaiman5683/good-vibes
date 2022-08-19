import Head from 'next/head';
import Image from 'next/image';
import About from '../components/About/About';
import Blogs from '../components/HomePage/Blogs';
import BookTable from '../components/HomePage/BookTable';
import Hero from '../components/HomePage/Hero';
import Reviews from '../components/HomePage/Reviews';
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
			
			<Hero />
			<About />
			<VideoSection />
			<HomeSlider />
			<Starters />
			<Breakfast />
			<Snacks />
			<Drinks />
			<BookTable />
			<div className='flex justify-end py-3'>
				<Image src='/images/r-line.svg' width={900} height={10} alt='' />
			</div>
			<Reviews />
			<Blogs />
		</>
	);
}
