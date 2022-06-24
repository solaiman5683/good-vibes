import React from 'react';
import Image from 'next/image';

const About = () => {
	return (
		<div className='bg-[url("/images/about-bg.png")] bg-center bg-cover p-4'>
			<div className='container dark:bg-black bg-white h-full rounded-2xl shadow-xl p-6 '>
				<h2 className='text-5xl text-center p-4'>
					<span className='font-dancing text-orange-300 text-5xl -ml-16 opacity-90'>
						Our Story
					</span>
					<br />
					<span className='-mt-5 ml-16 block'>ABOUT US</span>
				</h2>
				<div className='grid grid-cols-1 lg:grid-cols-2 p-6'>
					<div className='relative mb-16'>
						<Image
							src='/images/about-img1.png'
							alt='About'
							width={699}
							height={495}
						/>
						<div className='md:absolute left-100 -right-10 -bottom-16'>
							<Image
								src='/images/about-img2.png'
								alt='About'
								width={378}
								height={283}
							/>
						</div>
					</div>
					<div className='text-center md:text-right '>
						<h3 className='font-dancing text-4xl'>
							Pellentesque cras fringilla enim, vel, feugiat .ipsum quis
							Faucibus suspendisse ut in
						</h3>
						<p className='my-6 text-gray-400 md:w-5/6 ml-auto'>
							Elit neque pellentesque a lorem gravida. Scelerisque risus
							pulvinar facilisi pellentesque. In quam etiam amet molestie
							pretium. Dolor, pellentesque nunc ac augue egestas. Pellentesque
							cras fringilla enim, vel, feugiat ipsum quis mauris. Faucibus
							suspendisse ut in facilisis. Adipiscing ante luctus amet nunc
							lorem eget. Eu sit pellentesque sed scelerisque diam, Adipiscing
							ante luctus amet nunc lorem eget. Eu sit pellentesque sed
							scelerisque diam, elementum. Egestas tempus aliquam aliquam mollis
							mi. Rhoncus feugiat non aliquam a lectus sagittis. Nulla erat
							eleifend cursus lacus. Sit nibh mi et, vitae viverra. In lacinia
							est urna amet ornare ullamcorper ac varius. Tristique eu lacinia
							adipiscing lectus tempor a et. Risus sit risus sapien.
						</p>
						<div className='flex justify-end items-center gap-4'>
							<p>+ 75 254 26640</p>
							<p>+ 12 546 878 987</p>
							<Image
								src='/images/phone.svg'
								alt='About'
								width={18}
								height={18}
							/>
						</div>
						<div className='flex justify-end items-center gap-4 my-4'>
							<p>
								<i>
									123 Main Street, New York, <br /> NY 10030
								</i>
							</p>
							<Image
								src='/images/location.svg'
								alt='About'
								width={18}
								height={18}
							/>
						</div>
						<button className='font-bold uppercase px-10 rounded py-3 border border-orange-400'>
							<Image
								src='/images/arrow.svg'
								alt='About'
								width={30}
								height={10}
							/>{' '}
							Learn More
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default About;
