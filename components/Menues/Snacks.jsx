import Image from 'next/image';
import React from 'react';
import LoadMoreBtn from './LoadMoreBtn';
import MenuItem from './MenuItem';

const Snacks = () => {
	return (
		<div className='bg-[url("/images/snacks-bg.png")] dark:bg-[url("/images/snacks-bg-dark.png")] bg-no-repeat bg-cover bg-center py-12'>
			<div className='flex items-end'>
				<Image
					src='/images/snacks.png'
					alt='Starters'
					width={675}
					height={1023}
				/>
				<div className='ml-32 mr-8 w-4/6'>
					<h2 className='font-bold text-4xl uppercase'>
						<span className='font-dancing text-orange-300'>3. </span>
						SNACKS / FAST FOOD
					</h2>
					<div className='-ml-8'>
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
			</div>
		</div>
	);
};

export default Snacks;
