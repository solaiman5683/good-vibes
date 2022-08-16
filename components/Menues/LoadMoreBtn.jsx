import React from 'react';

const LoadMoreBtn = () => {
	return (
		<button className='flex items-center gap-4 uppercase border border-orange-400 text-orange-500 dark:text-white px-6 py-3 rounded'>
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
	);
};

export default LoadMoreBtn;
