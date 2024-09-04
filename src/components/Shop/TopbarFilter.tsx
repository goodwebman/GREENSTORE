import TopbarItem from './TopbarItem'

function TopbarFilter({ selectedTopBar, setSelectedTopBar }) {
	return (
		<section className='flex items-center gap-[37px] justify-between mt-[30px]'>
			<div className='flex gap-[37px] '>
				<TopbarItem
					topBarItem='All plants'
					setSelectedTopBar={setSelectedTopBar}
					selectedTopBar={selectedTopBar}
				/>
				<TopbarItem
					topBarItem='New Arrivals'
					setSelectedTopBar={setSelectedTopBar}
					selectedTopBar={selectedTopBar}
				/>
				<TopbarItem
					topBarItem='Sale'
					setSelectedTopBar={setSelectedTopBar}
					selectedTopBar={selectedTopBar}
				/>
			</div>
			<div className='text-[18px] light-font flex items-center gap-[5px] cursor-pointer'>
				Short by: Default sorting{' '}
				<svg
					xmlns='http://www.w3.org/2000/svg'
					fill='none'
					viewBox='0 0 24 24'
					strokeWidth={1.5}
					stroke='currentColor'
					className='size-6 pt-[3px]'
				>
					<path
						strokeLinecap='round'
						strokeLinejoin='round'
						d='m19.5 8.25-7.5 7.5-7.5-7.5'
					/>
				</svg>
			</div>
		</section>
	)
}

export default TopbarFilter
