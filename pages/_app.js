import '../styles/globals.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { ThemeProvider } from 'next-themes';

function MyApp({ Component, pageProps }) {
	return (
		<ThemeProvider enableSystem={true} attribute='class'>
			<Component {...pageProps} />
		</ThemeProvider>
	);
}

export default MyApp;
