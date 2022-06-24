import { useTheme } from 'next-themes';
import Image from 'next/image';
import React from 'react';

const VideoSection = () => {
    const { systemTheme, theme } = useTheme();
	const currentTheme = theme === 'system' ? systemTheme : theme;
	const [mounted, setMounted] = React.useState(false);
	React.useEffect(() => {
		setMounted(true);
	}, []);

	if (!mounted) return null;
	return (
		<div className='container'>
            <div className='my-12 relative'>
                <Image className='rounded-xl' src={currentTheme === 'dark' ? '/images/video_thumb_dark.png' : '/images/video_thumb.png'} alt='Video Section' width={1512} height={582} />
                <div className="h-full w-full absolute top-0 flex flex-col gap-6 justify-center items-center ">
                <Image className='cursor-pointer' src={currentTheme === 'dark' ? '/images/play-dark.svg' : '/images/play.svg'} alt='Video Section' width={93} height={93} />
                    <h2 className='font-bold dark:text-white text-orange-600 text-xl uppercase'>Watch our latest Video</h2>
                </div>
            </div>
		</div>
	);
};

export default VideoSection;
