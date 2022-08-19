import '../styles/globals.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { ThemeProvider } from 'next-themes';
import Navigation from '../components/Navigation/Navigation';
import MobileNavigation from '../components/Navigation/MobileNavigation';
import Head from 'next/head';
import Footer from '../components/Footer/Footer';

function MyApp({ Component, pageProps }) {
	return (
		<ThemeProvider enableSystem={true} attribute='class'>
			<Head>
				<title>Home | Good Vibes</title>
			</Head>
			<div className='hidden lg:block'>
				<Navigation />
			</div>
			<div className='block lg:hidden'>
				<MobileNavigation />
			</div>
			<Component {...pageProps} />
			<Footer />
		</ThemeProvider>
	);
}

export default MyApp;
