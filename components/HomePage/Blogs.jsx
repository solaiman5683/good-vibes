import React from 'react';
import LoadMoreBtn from '../Menues/LoadMoreBtn';
import BlogItem from './BlogItem';

const Blogs = () => {
	return (
		<>
			<div className='bg-[url("/images/blog.png")] dark:bg-[url("/images/blog-dark.png")] bg-no-repeat bg-cover bg-center pt-32 pb-10 overflow-hidden text-center'>
				<h2 className='text-5xl font-bold'>BLOG</h2>
				<h3 className='text-2xl mb-8 font-dancing text-orange-400'>
					Read our latest blogs
				</h3>
				<p className='tracking-wider'>RECIPES | REVIEWS | EXPERIENCE</p>
			</div>
			<div className='container p-8'>
				<div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 py-8'>
					{new Array(9).fill(0).map((_, index) => (
						<BlogItem key={index} />
					))}
				</div>
			</div>
			<div className='container flex justify-end'>
				<div className='pb-6'>
					<LoadMoreBtn />
				</div>
			</div>
		</>
	);
};

export default Blogs;
