import { SelectedCategories } from '@/shared/types'
import CategoriesItem from './CategoriesItem'
import Title from './Title'

type ShopProps = {
	selectedCategories: SelectedCategories
	setSelectedCategories: (value: SelectedCategories) => void
}

const Shop = ({ selectedCategories, setSelectedCategories }: ShopProps) => {
	return (
		<section
			id='shop'
			className='bg-[#FBFBFB] max-w-[370px] mt-[30px] px-[14px] py-[14px]'
		>
			{/* sidebar */}
			<aside>
				<Title title='Categories' />

				<div className='flex flex-col justify-between '>
					<CategoriesItem
						selectedCategories={selectedCategories}
						setSelectedCategories={setSelectedCategories}
						categories='House Plants'
						count={33}
					/>
					<CategoriesItem
						selectedCategories={selectedCategories}
						setSelectedCategories={setSelectedCategories}
						categories='Potter Plants'
						count={12}
					/>
					<CategoriesItem
						selectedCategories={selectedCategories}
						setSelectedCategories={setSelectedCategories}
						categories='Seeds'
						count={65}
					/>
					<CategoriesItem
						selectedCategories={selectedCategories}
						setSelectedCategories={setSelectedCategories}
						categories='SmallPlants'
						count={39}
					/>
					<CategoriesItem
						selectedCategories={selectedCategories}
						setSelectedCategories={setSelectedCategories}
						categories='BigPlants'
						count={23}
					/>

					<CategoriesItem
						selectedCategories={selectedCategories}
						setSelectedCategories={setSelectedCategories}
						categories='Succelents'
						count={17}
					/>
					<CategoriesItem
						selectedCategories={selectedCategories}
						setSelectedCategories={setSelectedCategories}
						categories='Trerrariums'
						count={19}
					/>
					<CategoriesItem
						selectedCategories={selectedCategories}
						setSelectedCategories={setSelectedCategories}
						categories='Gardening'
						count={13}
					/>
					<CategoriesItem
						selectedCategories={selectedCategories}
						setSelectedCategories={setSelectedCategories}
						categories='Accessories'
						count={18}
					/>
				</div>
			</aside>

			{/* shop section */}
			<div></div>
		</section>
	)
}

export default Shop
