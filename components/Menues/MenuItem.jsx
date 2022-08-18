import React from 'react';

const MenuItem = ({ title, price }) => {
	return (
		<div className='mb-8'>
			<div className='flex w-full items-center gap-3 md:gap-8 '>
				<h4 className='sm:min-w-max text-lg md:text-2xl'>{title}</h4>
				<div className='w-full bg-orange-300 h-1 opacity-50 rounded-xl' />
				<h4 className='text-orange-500 dark:text-orange-300 font-dancing text-2xl'>${price}</h4>
			</div>
			<p className='text-sm text-gray-700 dark:text-gray-400'>
				Chicken marinated in home-made spice powder and green paste & Grilled to
				perfection.
			</p>
		</div>
	);
};

export default MenuItem;
