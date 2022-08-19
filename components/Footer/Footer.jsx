import Image from 'next/image';
import React from 'react';

const Footer = () => {
	return (
		<>
			<div className='bg-rose-50 dark:bg-black pt-14 pb-8'>
				<div className='container'>
					<div className='flex flex-col md:flex-row justify-between'>
						<div className='min-w-max'>
							<h3 className='text-2xl text-orange-500 uppercase font-bold'>
								Contacts
							</h3>
							<div className='py-4 font-bold'>
								<div className='flex items-center gap-3 my-4'>
									<svg
										xmlns='http://www.w3.org/2000/svg'
										className='h-6 w-6 text-orange-500'
										fill='none'
										viewBox='0 0 24 24'
										stroke='currentColor'
										strokeWidth={2}>
										<path
											strokeLinecap='round'
											strokeLinejoin='round'
											d='M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z'
										/>
									</svg>
									<span>+ 75 254 26640</span>
									<span>+ 75 254 26640</span>
								</div>
								<div className='flex items-center gap-3 my-4'>
									<svg
										xmlns='http://www.w3.org/2000/svg'
										className='h-6 w-6 text-orange-500'
										fill='none'
										viewBox='0 0 24 24'
										stroke='currentColor'
										strokeWidth={2}>
										<path
											strokeLinecap='round'
											strokeLinejoin='round'
											d='M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z'
										/>
										<path
											strokeLinecap='round'
											strokeLinejoin='round'
											d='M15 11a3 3 0 11-6 0 3 3 0 016 0z'
										/>
									</svg>
									<span>
										123 Main Street, New York,
										<br /> NY 10030
									</span>
								</div>
								<div className='flex items-center gap-3 my-4'>
									<svg
										xmlns='http://www.w3.org/2000/svg'
										className='h-6 w-6 text-orange-500'
										fill='none'
										viewBox='0 0 24 24'
										stroke='currentColor'
										strokeWidth={2}>
										<path
											strokeLinecap='round'
											strokeLinejoin='round'
											d='M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'
										/>
									</svg>
									<span>goodfoodres@gmail.com</span>
								</div>
							</div>
						</div>

						<div className='text-center w-full'>
							<Image
								src='/images/logo.svg'
								alt='logo'
								width={150}
								height={110}
							/>
							<p className='w-2/4 mt-4 mx-auto text-gray-600 dark:text-gray-300 font-dancing text-xl'>
								We serve the best food in the city. We are providing various
								delicious food and beverage items since 1998. You and your
								family are most welcome to our restaurant.
							</p>

							<div className='flex justify-center mt-4 dark:hidden gap-4'>
								<a href='#'>
									<Image
										src='/images/facebook.svg'
										alt='food'
										width={40}
										height={40}
									/>
								</a>
								<a href='#'>
									<Image
										src='/images/instagram.svg'
										alt='food'
										width={40}
										height={40}
									/>
								</a>
								<a href='#'>
									<Image
										src='/images/twitter.svg'
										alt='food'
										width={40}
										height={40}
									/>
								</a>
								<a href='#'>
									<Image
										src='/images/youtube.svg'
										alt='food'
										width={40}
										height={40}
									/>
								</a>
								<a href='#'>
									<Image
										src='/images/linkedin.svg'
										alt='food'
										width={40}
										height={40}
									/>
								</a>
							</div>
							<div className='hidden justify-center mt-4  dark:flex gap-4'>
								<a href='#'>
									<Image
										src='/images/facebook-dark.svg'
										alt='food'
										width={40}
										height={40}
									/>
								</a>
								<a href='#'>
									<Image
										src='/images/instagram-dark.svg'
										alt='food'
										width={40}
										height={40}
									/>
								</a>
								<a href='#'>
									<Image
										src='/images/twitter-dark.svg'
										alt='food'
										width={40}
										height={40}
									/>
								</a>
								<a href='#'>
									<Image
										src='/images/youtube-dark.svg'
										alt='food'
										width={40}
										height={40}
									/>
								</a>
								<a href='#'>
									<Image
										src='/images/linkedin-dark.svg'
										alt='food'
										width={40}
										height={40}
									/>
								</a>
							</div>
						</div>

						<div className='min-w-max text-right'>
							<h3 className='text-2xl text-orange-500 uppercase font-bold'>
								OPENING HOURS
							</h3>
							<div className='py-4'>
								<p className='text-orange-400'>Mon - Fri</p>
								<h5 className='mb-6'>9.00 am - 10.00 pm</h5>
								<p className='text-orange-400'>Weekend</p>
								<h5 className='mb-6'>10.00 am - 12.00 am</h5>
								<p className='text-orange-400'>EVENT BOOKING </p>
								<h5 className='mb-6'>1.00 pm - 9.00 am</h5>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className='text-center text-orange-400 opacity-75 p-4 bg-rose-100 dark:bg-gray-900'>
				Copyright @ Fariha_Tasnim_Shifa 2022 - All Rights Reserved
			</div>
		</>
	);
};

export default Footer;
