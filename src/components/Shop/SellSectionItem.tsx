type Props = { item }

const SellSectionItem = ({ item }: Props) => {
	return (
		<div
			key={item.id}
			className='pb-[70px]  cursor-pointer border-[#46A358] hover:border-t-[2px]'
		>
			<img
				className='bg-[#FBFBFB] px-[15px] py-[30px]'
				src={item.image}
				alt=''
			/>
			<div className='light-font text-[17px] pt-[9px]'>{item.name}</div>
			<p className='text-[#46A358] font-[600] text-[19px]'>${item.price}.00</p>
		</div>
	)
}

export default SellSectionItem
