import Image from 'next/image';
import React from 'react';
import Slider from 'react-slick';

const HomeSlider = () => {
	const settings = {
		className: 'center',
		centerMode: true,
		infinite: true,
		arrow: false,
		dots: true,
		centerPadding: '50px',
		slidesToShow: 3,
		speed: 500,
	};
	return (
		<>
			<div className='container dark:bg-black bg-white h-full rounded-2xl shadow-xl p-6 '>
				<div className='text-5xl text-center p-4'>
					<span className='font-dancing text-orange-300 text-5xl -ml-16 opacity-90'>
						Enjoy our Meals
					</span>
					<br />
					<span className='-mt-5 ml-16 block uppercase'>Our menu</span>
					<div className='-mt-6 block'>
						<Image src='/images/line.svg' alt='Menu' width={377} height={5} />
					</div>
				</div>
			</div>

			<Slider {...settings} className='py-4'>
				<div className='p-4'>
					<Image
						src='/images/slider-img1.png'
						alt='Menu'
						width={868}
						height={546}
					/>
				</div>
				<div className='p-4'>
					<Image
						src='/images/slider-img1.png'
						alt='Menu'
						width={868}
						height={546}
					/>
				</div>
				<div className='p-4'>
					<Image
						src='/images/slider-img1.png'
						alt='Menu'
						width={868}
						height={546}
					/>
				</div>
				<div className='p-4'>
					<Image
						src='/images/slider-img1.png'
						alt='Menu'
						width={868}
						height={546}
					/>
				</div>
			</Slider>
		</>
	);
};

export default HomeSlider;
