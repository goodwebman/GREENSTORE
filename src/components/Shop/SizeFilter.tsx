import { Sizes } from '@/shared/types'
import SizeItem from './SizeItem'
import Title from './Title'

type SizeProps = {
	selectedSize: Sizes
	setSelectedSize: (value: Sizes) => void

	size: string
	count: number
}


function SizeFilter({selectedSize, setSelectedSize, size, count} : SizeProps) {
	return (
		<section
			id='shop'
			className='bg-[#FBFBFB] max-w-[370px] px-[14px] py-[14px]'
		>
			{/* sidebar */}
			<aside>
				<Title title='Size' />

				<div className='px-[15px] pt-[20px]'>
					<SizeItem size={'Medium'} count={count} selectedSize={selectedSize} setSelectedSize={setSelectedSize}/>
					<SizeItem size={'Medium'} count={count} selectedSize={selectedSize} setSelectedSize={setSelectedSize}/>
					<SizeItem size={'Medium'} count={count} selectedSize={selectedSize} setSelectedSize={setSelectedSize}/>
				</div>
			</aside>
		</section>
	)
}

export default SizeFilter
