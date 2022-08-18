import Image from 'next/image';
import React from 'react';
import LoadMoreBtn from './LoadMoreBtn';
import MenuItem from './MenuItem';

const Starters = () => {
	return (
		<div className='bg-[url("/images/starters-bg.png")] dark:bg-[url("/images/starters-bg-dark.png")] bg-no-repeat bg-cover bg-center py-12'>
			<div className='flex items-center flex-col flex-wrap xl:flex-row xl:flex-nowrap gap-6'>
				<Image
					src='/images/starters.png'
					alt='Starters'
					width={675}
					height={1023}
				/>
				<div className='xl:ml-32 mr-8 w-full xl:w-4/6 px-8'>
					<h2 className='font-bold text-2xl lg:text-4xl uppercase'>
						<span className='font-dancing text-orange-300'>1. </span>
						Starters
					</h2>
					<div className='lg:-ml-8'>
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

export default Starters;
