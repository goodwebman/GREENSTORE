import { TopFilter } from '@/shared/types'

type TopbarItemProps = {
	selectedTopBar: TopFilter
	setSelectedTopBar: (value: TopFilter) => void
	topBarItem: string
}

const TopbarItem = ({
	topBarItem,
	selectedTopBar,
	setSelectedTopBar,

}: TopbarItemProps) => {
	const lowerCaseTopBar = topBarItem
		.toLowerCase()
		.replace(/ /g, '') as TopFilter

	return (
		<button
			onClick={() => setSelectedTopBar(lowerCaseTopBar)}
      
			className={`${
				selectedTopBar === lowerCaseTopBar ? 'text-[#46A358] underline ' : ''
			} text-[#3D3D3D] text-[18px] hover:underline underline-offset-[9px] decoration-[2px] `}
		>
			{topBarItem}
		</button>
	)
}

export default TopbarItem
