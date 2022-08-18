import React from 'react';
import AnimatedNumber from 'animated-number-react';

const BookCount = ({ number, text }) => {
	const [count, setCount] = React.useState(0);
	React.useEffect(() => {
		setCount(number);
	}, [number]);
	return (
		<div className='p-6 text-center'>
			<h3 className='text-5xl'>
				<AnimatedNumber value={count} formatValue={n => n.toFixed(0)} />+
			</h3>
			<p className='text-orange-400 text-2xl font-dancing'>{text}</p>
		</div>
	);
};

export default BookCount;
