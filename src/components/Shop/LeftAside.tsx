import { SelectedCategories, Sizes } from '@/shared/types'
import PriceRange from './PriceRange'
import Shop from './Shop'
import SizeFilter from './SizeFilter'
import SuperSale from './SuperSale'


type LeftAsideProps = {
	selectedCategories: SelectedCategories
	setSelectedCategories: (value: SelectedCategories) => void


	selectedSize: Sizes
	setSelectedSize: (value: Sizes) => void
	
	values: number[]
	setValues: (value: number[]) => void

	priceClickFilter: () => void
}

 
function LeftAside({selectedCategories, setSelectedCategories, selectedSize , setSelectedSize, values, setValues, priceClickFilter}: LeftAsideProps) {
	
	return (
		<aside>
			<Shop selectedCategories={selectedCategories} setSelectedCategories={setSelectedCategories}/>
			<PriceRange values={values} setValues={setValues} priceClickFilter={priceClickFilter}/>
			<SizeFilter setSelectedSize={setSelectedSize} selectedSize={selectedSize}/>
			<SuperSale />
		</aside>
	)
}

export default LeftAside
