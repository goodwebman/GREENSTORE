import { SelectedCategories } from '@/shared/types'


type CategoriesProps = {
	categories: string
	count: number

	selectedCategories: SelectedCategories
	setSelectedCategories: (value: SelectedCategories) => void
}

const CategoriesItem = ({
	categories,
	count,
	selectedCategories,
	setSelectedCategories,
}: CategoriesProps) => {
	const lowerCaseCategories = categories.toLowerCase().replace(' ', '') as SelectedCategories
	

	
	return (
		
		<button
			className={`${
				selectedCategories === lowerCaseCategories ? 'text-[#46A358]' : ''
			}  pb-[20px] px-[15px] flex justify-between`}
			onClick={() => setSelectedCategories(lowerCaseCategories)}
			
		>
			
			<div>{categories}</div>
			<div>({count})</div>

			
		</button>
		

		
	)
}

export default CategoriesItem
