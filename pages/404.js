import Image from 'next/image';
import React from 'react';

const notFound = () => {
    return (
        <div className='p-16'>
            <div className="flex dark:hidden justify-center">
                <Image src="/images/404.svg" width={500} height={500} alt="404" />
            </div>
            <div className="hidden dark:flex justify-center">
                <Image src="/images/404-dark.svg" width={500} height={500} alt="404" />
            </div>
        </div>
    );
};

export default notFound;