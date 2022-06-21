import React from 'react';

const About = () => {
	return (
		<div className='bg-[url("/images/about-bg.png")] bg-center bg-cover h-[400px] p-4'>
			<div className='container dark:bg-black bg-white h-full rounded-2xl shadow-xl p-6'>
				<h2 className='text-3xl text-center p-4'>
					<span className='font-dancing'>Our Story</span>
				</h2>
			</div>
		</div>
	);
};

export default About;
