import { useTheme } from 'next-themes';
import Image from 'next/image';
import ActiveLink from '../ActiveLink/ActiveLink';
import SwitchThemeButton from '../SwitchThemeButton/SwitchThemeButton';

const Navigation = () => {
	const { systemTheme, theme, setTheme } = useTheme();
	const currentTheme = theme === 'system' ? systemTheme : theme;

	return (
		<div className='bg-white dark:bg-black shadow'>
			<div className='container'>
				<div className='flex justify-between items-center'>
					<Image
						src={
							currentTheme === 'dark'
								? '/images/logo-dark.svg'
								: '/images/logo.svg'
						}
						alt='logo'
						width={134}
						height={89}
					/>
					<div className='mx-auto'>
						<ul className='flex justify-center gap-4'>
							<li>
								<ActiveLink
									href='/'
									activeClassName='border-b border-orange-500 text-orange-500 dark:text-orange-400 font-semibold'>
									<a className='text-gray-600 dark:hover:text-orange-400 hover:text-orange-400 dark:text-gray-400 p-2'>Home</a>
								</ActiveLink>
							</li>
							<li>
								<ActiveLink
									href='/about'
									activeClassName='border-b border-orange-500 text-orange-500 dark:text-orange-400 font-semibold'>
									<a className='text-gray-600 dark:hover:text-orange-400 hover:text-orange-400 dark:text-gray-400 p-2'>About</a>
								</ActiveLink>
							</li>
							<li>
								<ActiveLink
									href='/menu'
									activeClassName='border-b border-orange-500 text-orange-500 dark:text-orange-400 font-semibold'>
									<a className='text-gray-600 dark:hover:text-orange-400 hover:text-orange-400 dark:text-gray-400 p-2'>Menu</a>
								</ActiveLink>
							</li>
							<li>
								<ActiveLink
									href='/booking'
									activeClassName='border-b border-orange-500 text-orange-500 dark:text-orange-400 font-semibold'>
									<a className='text-gray-600 dark:hover:text-orange-400 hover:text-orange-400 dark:text-gray-400 p-2'>
										Booking
									</a>
								</ActiveLink>
							</li>
							<li>
								<ActiveLink
									href='/reviews'
									activeClassName='border-b border-orange-500 text-orange-500 dark:text-orange-400 font-semibold'>
									<a className='text-gray-600 dark:hover:text-orange-400 hover:text-orange-400 dark:text-gray-400 p-2'>
										Reviews
									</a>
								</ActiveLink>
							</li>
							<li>
								<ActiveLink
									href='/blogs'
									activeClassName='border-b border-orange-500 text-orange-500 dark:text-orange-400 font-semibold'>
									<a className='text-gray-600 dark:hover:text-orange-400 hover:text-orange-400 dark:text-gray-400 p-2'>Blogs</a>
								</ActiveLink>
							</li>
						</ul>
					</div>
                    <div className='flex items-center gap-6'>
                        <button className='bg-orange-500 px-6 py-3 rounded text-white'>
                            Book a table
                        </button>
						<SwitchThemeButton />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Navigation;
