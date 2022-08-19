import Image from 'next/image';
import React from 'react';

const ReviewItem = () => {
	return (
		<div className='border border-orange-300 p-6 relative'>
			<div className='pt-6'>
				<div className='flex gap-4'>
					<div className='rounded-full'>
						<Image
							src='/images/avatar.png'
							alt='Avatar'
							width={50}
							height={50}
						/>
					</div>
					<div>
						<h3 className='text-2xl'>John Doe</h3>
						<p className='text-sm text-orange-400'>@johndoe23</p>
					</div>
				</div>

				<p className='font-dancing text-xl py-2'>
					“Amet adipiscing vel nunc blandit. Nisi, tortor, vel, mauris dictum
					sit donec feugiat ac. Tellus mattis dui consequat, vulputate lectus
					purus sapien, viverra. Elit neque pellentesque ac augue egestas.
					Pellentesque cras fringilla enim.....”
				</p>
			</div>

			<div className='absolute bg-white dark:bg-black p-3 rounded-full -top-10'>
				<Image
					src='/images/quote-fill.svg'
					alt='Avatar'
					width={40}
					height={40}
				/>
			</div>
		</div>
	);
};

export default ReviewItem;
