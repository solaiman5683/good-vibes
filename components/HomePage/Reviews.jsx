import Image from 'next/image';
import React from 'react';
import ReviewItem from './ReviewItem';

const Reviews = () => {
	return (
		<>
			<div className='bg-[url("/images/reviews.png")] dark:bg-[url("/images/reviews-dark.png")] bg-no-repeat bg-cover bg-center py-20 overflow-hidden'>
				<div className='container'>
					<div className='flex flex-col lg:flex-row gap-6 items-center'>
						<div className='w-full xl:w-2/12 text-center lg:text-right'>
							<h3 className='font-dancing text-3xl text-orange-400 '>
								What people says
							</h3>
							<h2 className='text-5xl mt-4 mb-12'>
								READ THE CUSTOMER REVIEWS ABOUT OUR SERVICES.
							</h2>
							<button className='flex w-full items-center justify-center gap-4 uppercase border border-orange-400 text-orange-500 dark:text-white px-6 py-3 rounded'>
								Load More{' '}
								<svg
									xmlns='http://www.w3.org/2000/svg'
									className='h-6 w-6 text-orange-300'
									fill='none'
									viewBox='0 0 24 24'
									stroke='currentColor'
									strokeWidth={2}>
									<path
										strokeLinecap='round'
										strokeLinejoin='round'
										d='M17 8l4 4m0 0l-4 4m4-4H3'
									/>
								</svg>
							</button>
						</div>
						<div className='hidden lg:block md:w-1/12'>
							<Image
								src='/images/s-line.svg'
								alt='Double Line'
								width={50}
								height={353}
							/>
						</div>
						<div className='w-full xl:w-9/12'>
							<div className='grid grid-cols-1 xl:grid-cols-3 gap-6'>
								<ReviewItem />
								<ReviewItem />
								<ReviewItem />
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className='container'>
				<div className='flex flex-col lg:flex-row gap-6 items-center py-6'>
					<div className='w-full xl:w-2/12 text-center lg:text-right'>
						<h3 className='font-dancing text-xl text-orange-400 '>
							Leave your Feedback
						</h3>
						<h2 className='text-2xl mt-4 mb-12'>WRITE A REVIEW HERE!</h2>
					</div>
					<div className='hidden lg:block md:w-1/12'>
						<Image
							src='/images/s-line.svg'
							alt='Double Line'
							width={50}
							height={200}
						/>
					</div>
					<div className='w-full xl:w-9/12'>
						<div className="flex gap-6">
							<input type="text" placeholder='Write your review...' className='border border-orange-500 h-[60px] w-full p-3' />
							<button className='bg-orange-500 h-[60px] w-32 p-3 text-white rounded'>SEND</button>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Reviews;
