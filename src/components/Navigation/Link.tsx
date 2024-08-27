import AnchorLink from 'react-anchor-link-smooth-scroll'
import { SelectedPage } from '@/shared/types'

type LinkProps = {
	page: string
	selectedPage: SelectedPage
	setSelectedPage: (value: SelectedPage) => void
}

const Link = ({ page, selectedPage, setSelectedPage }: LinkProps) => {
	const lowerCasePage = page.toLowerCase().replace(/ /g, '') as SelectedPage;

	

	return (
		<AnchorLink
			className={`${
				selectedPage === lowerCasePage ? 'underline underline-offset-[33px]' : ''
			} hover:underline hover:underline-offset-[33px] decoration-[#46A358] decoration-[3px]`}
			href={`#${lowerCasePage}`}
			onClick={() => setSelectedPage(lowerCasePage)}
		>
			{page}
		</AnchorLink>
	)
}

export default Link
