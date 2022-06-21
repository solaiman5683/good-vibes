import Image from 'next/image';
import { useTheme } from 'next-themes';
import React from 'react';

const Hero = () => {
	const { systemTheme, theme } = useTheme();
	const currentTheme = theme === 'system' ? systemTheme : theme;
	const [mounted, setMounted] = React.useState(false);
	React.useEffect(() => {
		setMounted(true);
	}, []);

	if (!mounted) return null;
	return (
		<div className='dark:bg-[url("/images/hero-bg-dark.png")] bg-[url("/images/hero-bg.png")]  bg-right bg-cover bg-no-repeat h-[870px]'>
			<div className='container h-full flex items-center relative'>
				<div className='w-full '>
					<p className='text-6xl font-thin'>GOOD FOOD & </p>
					<h2 className='text-7xl mt-4 mb-6'>GREAT VIBES.</h2>
					<p className='max-w-[626px] text-gray-500 dark:text-gray-400'>
						Amet adipiscing vel nunc blandit. Nisi, tortor, vel, mauris dictum
						sit donec feugiat ac. Tellus mattis dui consequat, vulputate lectus
						purus sapien, viverra. Elit neque pellentesque a lorem gravida.
						Scelerisque risus pulvinar facilisi pellentesque. In quam etiam amet
						molestie pretium. Dolor, pellentesque nunc ac augue egestas.
						Pellentesque cras fringilla enim
					</p>
					<div className='flex my-6 gap-6'>
						<button className='uppercase bg-orange-500 text-white px-6 py-3 rounded'>
							Discover More
						</button>
						<button className='uppercase border border-2 border-orange-500 text-orange-400 hover:bg-orange-500 hover:text-white px-6 py-3 rounded'>
							Call now
						</button>
					</div>
					<div
						className={`flex flex-col justify-center items-end gap-6 absolute ${
							currentTheme === 'dark' ? 'bottom-32 right-8' : 'top-4 right-8'
						}`}>
						<a href='#'>
							<Image
								src={
									currentTheme === 'dark'
										? '/images/instagram-dark.png'
										: '/images/instagram.png'
								}
								alt='Instagram'
								width={28}
								height={28}
							/>
						</a>
						<a href='#'>
							<Image
								src={
									currentTheme === 'dark'
										? '/images/twitter-dark.png'
										: '/images/twitter.png'
								}
								alt='Instagram'
								width={28}
								height={28}
							/>
						</a>
						<a href='#'>
							<Image
								src={
									currentTheme === 'dark'
										? '/images/facebook-dark.png'
										: '/images/facebook.png'
								}
								alt='Instagram'
								width={28}
								height={28}
							/>
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Hero;
