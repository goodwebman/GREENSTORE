import { SelectedCategories } from '@/shared/types'
import CategoriesItem from './CategoriesItem'
import Title from './Title'


const Shop = ({selectedCategories, setSelectedCategories}) => {
	return (
		<section
			id='shop'
			className='bg-[#FBFBFB] max-w-[370px] min-w-[285px] mt-[30px] px-[14px] py-[14px]'
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
						categories='Small Plants'
						count={39}
					/>
					<CategoriesItem
						selectedCategories={selectedCategories}
						setSelectedCategories={setSelectedCategories}
						categories='Big Plants'
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
		</section>
	)
}

export default Shop
