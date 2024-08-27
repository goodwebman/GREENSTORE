import { SelectedPage } from '@/shared/types'
import { useState } from 'react'
import Link from './Link'

type NavigationProps = {
	selectedPage: SelectedPage
	setSelectedPage: (value: SelectedPage) => void
}

const Navigation = ({ selectedPage, setSelectedPage }: NavigationProps) => {
	const [searchStatus, setSearchStatus] = useState<boolean>(false)
	return (
		<div>
			{/* desktop nav */}
			<nav className='flex items-center justify-between mt-[25px] text-[#3D3D3D] max-[900px]:hidden'>
				{/* Logo */}
				<a href='/'>
					<img src='src/assets/nav/logo.svg' alt='' />
				</a>

				{/* search */}
				{searchStatus ? (
					<div className='bg-[#F8F8F8] py-[7px] px-[15px] rounded-[10px] flex items-center w-full '>
						<button>
							<img src='/src/assets/nav/mobile-search.svg' alt='' />
						</button>
						<input
							className='bg-transparent p-2 w-full focus:outline-none placeholder-[#A55A5] text-gray-600'
							type='text'
							placeholder='Find your plants'
						/>
					</div>
				) : (
					''
				)}
				{/* Navigation */}
				<ul className={`flex gap-[50px] ${searchStatus ? 'hidden' : ''}`}>
					<Link
						page='Home'
						selectedPage={selectedPage}
						setSelectedPage={setSelectedPage}
					/>
					<Link
						page='Shop'
						selectedPage={selectedPage}
						setSelectedPage={setSelectedPage}
					/>
					<Link
						page='Plant Care'
						selectedPage={selectedPage}
						setSelectedPage={setSelectedPage}
					/>
					<Link
						page='Blogs'
						selectedPage={selectedPage}
						setSelectedPage={setSelectedPage}
					/>
				</ul>
				{/* Buttons */}
				<div className='flex items-center gap-[30px] max-[940px]:gap-[20px]'>
					<button>
						<img
							onClick={() => setSearchStatus(true)}
							src='src/assets/nav/search.svg'
							alt=''
							className={`${searchStatus ? 'hidden' : 'block'}`}
							
						/>

						<svg
							xmlns='http://www.w3.org/2000/svg'
							fill='none'
							viewBox='0 0 24 24'
							strokeWidth={1.5}
							stroke='currentColor'
							onClick={() => setSearchStatus(false)}
							className={`${searchStatus ? 'block' : 'hidden'} size-7`}
						>
							<path
								strokeLinecap='round'
								strokeLinejoin='round'
								d='M6 18 18 6M6 6l12 12'
							/>
						</svg>
					</button>
					<button>
						<img src='src/assets/nav/busket.svg' alt='' />
					</button>
					<button className='flex bg-[#46A358] items-center text-white py-[7px] px-[17px] rounded-[6px] gap-[4px]'>
						<img src='src/assets/nav/logout.svg' alt='' />
						<p>Login</p>
					</button>
				</div>
			</nav>

			{/* mobile nav */}
			<nav className='flex items-center  mt-[25px] min-[900px]:hidden gap-[8px] pb-[17px]'>
				<div className='bg-[#F8F8F8] py-[7px] px-[15px] rounded-[10px] flex items-center w-full'>
					<button>
						<img src='/src/assets/nav/mobile-search.svg' alt='' />
					</button>
					<input
						className='bg-transparent p-2 w-full focus:outline-none placeholder-[#A55A5] text-gray-600'
						type='text'
						placeholder='Find your plants'
					/>
				</div>

				<button className='bg-gradient-to-r from-[#46A358]/45 to-[#46A358] px-[15px] py-[15px] rounded-[15px] hover:translate-y-[2px] shadow-md'>
					<img src='/src/assets/nav/mobile-burger.png' alt='' />
				</button>
			</nav>

			<hr className='h-[.4px] my-[23px] bg-[#46A358]/50 border-0 max-[900px]:hidden '></hr>
		</div>
	)
}

export default Navigation
