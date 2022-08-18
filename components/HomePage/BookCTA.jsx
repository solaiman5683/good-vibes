import React from 'react';

const BookCTA = () => {
	return (
		<div className='flex gap-6'>
			<button className='px-8 p-3 border dark:border-white border-gray-600 text-gray-800 dark:text-white rounded-lg'>
				SEND MAIL
			</button>
			<button className='px-8 p-3 bg-orange-500 rounded-lg text-white'>
				CALL NOW
			</button>
		</div>
	);
};

export default BookCTA;
