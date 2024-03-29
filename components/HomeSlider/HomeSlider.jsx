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
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
					centerPadding: '0px',
				},
			},
		],
	};
	return (
		<>
			<div className='container dark:bg-black bg-white h-full rounded-2xl p-8'>
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

			<div className='pb-20'>
				<Slider {...settings}>
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
			</div>
		</>
	);
};

export default HomeSlider;
