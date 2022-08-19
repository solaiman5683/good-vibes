import React from 'react';

const BlogItem = () => {
	return (
		<div className='bg-[url("/images/blog1.png")] bg-no-repeat bg-cover bg-center shadow-xl rounded-xl overflow-hidden'>
			<div className="bg-gradient-to-b from-[rgba(255,255,255,0.15)] dark:from-[rgba(0,0,0,0.3)] dark:to-gray-900 to-white">
				<div className='h-[427px] p-8 flex items-end'>
					<div>
						<h3 className='text-lg text-orange-500'>Breakfast</h3>
						<h2 className='text-2xl font-dancing font-bold tracking-wider my-3'>
							Mattis dui consequat, vulputate lectus purus sapien.
						</h2>
						<button className='uppercase flex items-center gap-2'>
							read more{' '}
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
				</div>
			</div>
		</div>
	);
};

export default BlogItem;
