import { data } from '@/Data/PlantsData'
import SellSectionItem from './SellSectionItem'





const SellSection = ({selectedCategories, selectedSize, selectedTopBar, data, filterPrice}) => {
	
	return (
		<section className='grid max-[1420px]:grid-cols-[220px_220px_220px]  max-[1750px]:grid-cols-3 grid-cols-4 gap-[5px_56px] max-[1240px]:grid-cols-[180px_180px_180px] pl-[3px] pt-[50px] max-[1100px]:grid-cols-[200px_200px] justify-center'>
			{data.map((item, index) => {
				if((item.category === selectedCategories )) {
					if(item.size === selectedSize || selectedSize === 'default') {
						if(item.date === selectedTopBar || selectedTopBar === 'allplants') {
							if((filterPrice[0] <= item.price && item.price <= filterPrice[1]) || filterPrice.length == 0) {
								return (
									<SellSectionItem item={item} key={index}/>
								)
							}
						}
					}
				}
			})}
		</section>
	)
}

export default SellSection
