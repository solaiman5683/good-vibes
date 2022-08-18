import React from 'react';

const BookForm = () => {
	return (
		<>
			<div className='my-3'>
				<label htmlFor='name' className='text-xl'>
					Your Name*
					<input
						name='name'
						id='name'
						type='text'
						className='w-full p-3 border border-orange-300 opacity-75 dark:bg-black mt-3 focus:outline-none focus:border-orange-400'
					/>
				</label>
			</div>
			<div className='my-3'>
				<label htmlFor='number' className='text-xl'>
					Contact Number*
					<input
						name='number'
						id='number'
						type='text'
						className='w-full p-3 border border-orange-300 opacity-75 dark:bg-black mt-3 focus:outline-none focus:border-orange-400'
					/>
				</label>
			</div>
			<div className='my-3'>
				<label htmlFor='name' className='text-xl'>
					Table for*
					<select
						name='name'
						id='name'
						type='text'
						className='w-full p-3 border border-orange-300 opacity-75 dark:bg-black mt-3 focus:outline-none focus:border-orange-400'>
						<option hidden>Select Option</option>
						<option value='1'>1 Person</option>
						<option value='2'>2 Person</option>
						<option value='3'>3 Person</option>
						<option value='4'>4 Person</option>
						<option value='5'>5 Person</option>
						<option value='6'>6 Person</option>
					</select>
				</label>
			</div>
			<div className='my-3 flex gap-4'>
				<label htmlFor='date' className='text-xl w-1/2'>
					Date*
					<input
						name='date'
						id='date'
						type='date'
						className='w-full p-3 border border-orange-300 opacity-75 dark:bg-black mt-3 focus:outline-none focus:border-orange-400'
					/>
				</label>
				<label htmlFor='time' className='text-xl w-1/2'>
					Date*
					<input
						name='time'
						id='time'
						type='time'
						className='w-full p-3 border border-orange-300 opacity-75 dark:bg-black mt-3 focus:outline-none focus:border-orange-400'
					/>
				</label>
			</div>
			<div className='text-center mt-6'>
				<button className='px-12 p-3 bg-orange-500 rounded-lg text-white uppercase'>
					Book a table
				</button>
			</div>
		</>
	);
};

export default BookForm;
