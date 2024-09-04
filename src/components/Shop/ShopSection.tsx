import { data } from '@/Data/PlantsData'
import { SelectedCategories, Sizes, TopFilter } from '@/shared/types'
import { useState } from 'react'
import CurrentPages from './CurrentPages'
import LeftAside from './LeftAside'
import TopbarFilter from './TopbarFilter'

const ShopSection = () => {
	const [selectedCategories, setSelectedCategories] =
		useState<SelectedCategories>(SelectedCategories.HousePlants)
	const [selectedSize, setSelectedSize] = useState<Sizes>(Sizes.default)
	const [selectedTopBar, setSelectedTopBar] = useState<TopFilter>(
		TopFilter.AllPlants
	)
	const [values, setValues] = useState<number[]>([39, 320])

	const [filterPrice, setFilterPrice] = useState([])

	const priceClickFilter = () => {
		setFilterPrice(values)
	}

	return (
		<section className='grid grid-cols-[2fr_7fr] gap-[50px]'>
			{/* filter sidebar */}
			<LeftAside
				selectedCategories={selectedCategories}
				setSelectedCategories={setSelectedCategories}
				selectedSize={selectedSize}
				setSelectedSize={setSelectedSize}
				values={values}
				setValues={setValues}
				priceClickFilter={priceClickFilter}
			/>

			<div className=''>
				{/* topbar */}
				<TopbarFilter
					selectedTopBar={selectedTopBar}
					setSelectedTopBar={setSelectedTopBar}
				/>

				{/* sell section */}

				<CurrentPages
					selectedCategories={selectedCategories}
					selectedSize={selectedSize}
					selectedTopBar={selectedTopBar}
					data={data}
					filterPrice={filterPrice}
					products={data}
				/>
			</div>
		</section>
	)
}

export default ShopSection
