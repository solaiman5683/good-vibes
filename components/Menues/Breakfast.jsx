import Image from 'next/image';
import React from 'react';
import LoadMoreBtn from './LoadMoreBtn';
import MenuItem from './MenuItem';

const Breakfast = () => {
	return (
		<div className='bg-[url("/images/breakfast-bg.png")] dark:bg-[url("/images/breakfast-bg-dark.png")] bg-no-repeat bg-cover bg-center py-12'>
			<div className='flex items-end'>
				<div className='mr-28 ml-12 w-4/6'>
					<h2 className='font-bold text-4xl uppercase'>
						<span className='font-dancing text-orange-300'>2. </span>
						Breakfast
					</h2>
					<div className='-ml-6'>
						<Image
							src='/images/double-line.svg'
							alt='Double Line'
							width={344}
							height={10}
						/>
					</div>

					<div className='p-6'>
						<MenuItem
							title='Grilled Chicken Escalope with Fresh Salsa'
							price={10}
						/>
						<MenuItem title='Tandoori Lamb Chops' price={31} />
						<MenuItem title='Malabar Fish Biryani' price={24} />
						<MenuItem title='Mutton White Korma' price={16} />
						<MenuItem title='Keema Samosa with Yoghurt Dip' price={20} />
						<MenuItem title='Curried Parmesan Fish Fingers' price={28} />
						<MenuItem title='Chicken Spicy Cubes ' price={35} />

						<div className='mt-12'>
							<LoadMoreBtn />
						</div>
					</div>
				</div>

				<Image
					src='/images/breakfast.png'
					alt='Starters'
					width={675}
					height={1023}
				/>
			</div>
		</div>
	);
};

export default Breakfast;
