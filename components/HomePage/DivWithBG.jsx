import React from 'react';

const DivWithBG = ({ bg, opacity, p, children }) => {
	return (
		<div
			className={`bg-[url("/images/${bg}")] bg-no-repeat bg-cover bg-center`}>
			<div
				className={` bg-opacity-${opacity} dark:bg-opacity-${opacity} p-${p}`}>
				{children}
			</div>
		</div>
	);
};

export default DivWithBG;
