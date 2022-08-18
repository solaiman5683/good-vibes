import Image from 'next/image';
import React from 'react';
import BookCount from './BookCount';

const BookTable = () => {
	return (
		<div className='py-8'>
			<div className='container dark:bg-black bg-white h-full rounded-2xl p-8'>
				<div className='text-5xl text-center p-4'>
					<span className='font-dancing text-orange-300 text-5xl -ml-16 opacity-90'>
						Enjoy your time
					</span>
					<br />
					<span className='-mt-5 ml-16 block uppercase'>Book a table</span>
					<div className='-mt-6 block'>
						<Image src='/images/line.svg' alt='Menu' width={377} height={5} />
					</div>
				</div>
			</div>
			<div className='bg-[url("/images/book-table.png")] bg-no-repeat bg-cover bg-center'>
				<div className='bg-white dark:bg-black bg-opacity-75 dark:bg-opacity-75 p-16'>
					<div className='flex flex-col items-center justify-center gap-8'>
						<Image
							src='/images/quote.svg'
							alt='Book a table'
							width={62}
							height={45}
						/>
						<p className='font-dancing text-3xl w-2/4 text-center'>
							“Amet adipiscing vel nunc blandit. Nisi, tortor, vel, mauris
							dictum sit donec feugiat ac. Tellus mattis dui consequat,
							vulputate lectus purus sapien, viverra. Elit neque pellentesque a
							lorem gravida. Scelerisque risus pulvinar facilisi pellentesque.”
						</p>
						<div className='mt-12 text-center'>
							<h3 className='text-2xl'>Co-Founder of GOOD FOOD</h3>
							<p
								className='font-rock text-xl text-orange-400 mt-2'
								style={{ transform: 'rotate(-4deg)' }}>
								Jenth H. Terne
							</p>
							<Image
								src='/images/scratch.svg'
								alt='Menu'
								width={200}
								height={20}
							/>
						</div>
					</div>
				</div>
			</div>
			<div className='container grid grid-cols-5'>
				<BookCount text='Daily Clients' number={150} />
				<BookCount text='Memorable Events' number={200} />
				<BookCount text='Professional Chefs' number={15} />
				<BookCount text='Dishes on Menu' number={50} />
				<BookCount text='Bookings a Day' number={110} />
			</div>
		</div>
	);
};

export default BookTable;
