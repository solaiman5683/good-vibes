import Image from 'next/image';
import React from 'react';
import BookCount from './BookCount';
import BookCTA from './BookCTA';
import BookForm from './BookForm';
import DivWithBG from './DivWithBG';

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
			<div className='bg-[url("/images/book-table.png")] dark:bg-[url("/images/book-table-dark.png")] bg-no-repeat bg-cover bg-center p-20'>
				<div className='flex flex-col items-center justify-center gap-8'>
					<Image
						src='/images/quote.svg'
						alt='Book a table'
						width={62}
						height={45}
					/>
					<p className='font-dancing text-3xl lg:w-2/4 text-center'>
						“Amet adipiscing vel nunc blandit. Nisi, tortor, vel, mauris dictum
						sit donec feugiat ac. Tellus mattis dui consequat, vulputate lectus
						purus sapien, viverra. Elit neque pellentesque a lorem gravida.
						Scelerisque risus pulvinar facilisi pellentesque.”
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
			<div className='container grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-5'>
				<BookCount text='Daily Clients' number={150} />
				<BookCount text='Memorable Events' number={200} />
				<BookCount text='Professional Chefs' number={15} />
				<BookCount text='Dishes on Menu' number={50} />
				<BookCount text='Bookings a Day' number={110} />
			</div>
			<div className='bg-[url("/images/book-table-form.png")] dark:bg-[url("/images/book-table-form-dark.png")] bg-no-repeat bg-cover bg-center lg:p-20'>
				<div className='container flex flex-col lg:flex-row items-center justify-center gap-8'>
					<div className='w-full lg:w-1/2 flex flex-col justify-center items-center gap-12 '>
						<Image
							src='/images/logo.svg'
							alt='Book a table'
							width={372}
							height={278}
						/>
						<BookCTA />
					</div>
					<div className='w-full lg:w-1/2'>
						<BookForm />
					</div>
				</div>
			</div>

			<div className='grid grid-cols-3 font-dancing'>
				<div className='bg-[url("/images/romantic-dinner.png")] dark:bg-[url("/images/romantic-dinner-dark.png")] bg-no-repeat bg-cover bg-center flex justify-center items-center flex-col p-12'>
					<div className='text-center'>
						<h3 className='text-4xl mb-8'>Have a Romantic Dinner?</h3>
						<button className='border border-orange-400 px-8 py-3 text-xl rounded font-sans uppercase'>Book a Table</button>
					</div>
				</div>
				<div className='bg-[url("/images/wedding-dinner.png")] dark:bg-[url("/images/wedding-dinner-dark.png")] bg-no-repeat bg-cover bg-center flex justify-center items-center flex-col p-12'>
					<div className='text-center'>
						<h3 className='text-4xl mb-8'>Book a Wedding Reception?</h3>
						<button className='bg-orange-500 px-8 py-3 text-xl font-sans rounded uppercase'>Book a Table</button>
					</div>
				</div>
				<div className='bg-[url("/images/official-dinner.png")] dark:bg-[url("/images/official-dinner-dark.png")] bg-no-repeat bg-cover bg-center flex justify-center items-center flex-col p-12'>
					<div className='text-center'>
						<h3 className='text-4xl mb-8'>Need Place for Official Function?</h3>
						<button className='border border-orange-400 px-8 py-3 text-xl rounded font-sans uppercase'>Book a Table</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default BookTable;
