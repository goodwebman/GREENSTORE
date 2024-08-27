import Header from '@/components/Header/Header'
import Navigation from '@/components/Navigation/Navigation'
import '@/fonts/CeraPro-Black.ttf'
import { SelectedCategories, SelectedPage, Sizes } from '@/shared/types'
import { useState } from 'react'
import PriceRange from './components/Shop/PriceRange'
import Shop from './components/Shop/Shop'
import SizeFilter from './components/Shop/SizeFilter'

function App() {
	const [selectedPage, setSelectedPage] = useState<SelectedPage>(
		SelectedPage.Home
	)

	const [selectedCategories, setSelectedCategories] =
		useState<SelectedCategories>(SelectedCategories.HousePlants)

	const [selectedSize, setSelectedSize] = useState<Sizes>()

	return (
		<div className='w-[90%] m-auto'>
			<Navigation
				selectedPage={selectedPage}
				setSelectedPage={setSelectedPage}
			/>
			<Header />
			<Shop
				selectedCategories={selectedCategories}
				setSelectedCategories={setSelectedCategories}
			/>
			<PriceRange />
			<SizeFilter />
		</div>
	)
}

export default App
