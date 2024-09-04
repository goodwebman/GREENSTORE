import { Sizes } from '@/shared/types'
import SizeItem from './SizeItem'
import Title from './Title'
import { useState } from 'react'


function SizeFilter({selectedSize, setSelectedSize}) {

	
	return (
		<section
			id='shop'
			className='bg-[#FBFBFB] max-w-[370px] px-[14px] py-[14px] pt-[36px]'
		>
			{/* sidebar */}
			<aside>
				<Title title='Size' />

				<div className='px-[15px] pt-[20px]'>
					<SizeItem
						size='Small'
						count={119}
						selectedSize={selectedSize}
						setSelectedSize={setSelectedSize}
					/>
					<SizeItem
						size='Medium'
						count={86}
						selectedSize={selectedSize}
						setSelectedSize={setSelectedSize}
					/>
					<SizeItem
					size='Large'
					count={78}
						selectedSize={selectedSize}
						setSelectedSize={setSelectedSize}
					/>
				</div>
			</aside>
		</section>
	)
}

export default SizeFilter
