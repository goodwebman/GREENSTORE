import { Sizes } from '@/shared/types'
import React from 'react'

type SizeProps = {
  size: string,
  count: number

  selectedSize: Sizes
	setSelectedSize: (value: Sizes) => void
}

const SizeItem = ({size, count, selectedSize, setSelectedSize}: SizeProps) => {
  const lowerCaseSize = size.toLowerCase().replace(/ /g, '') as Sizes;
  return (
    <button className={`${selectedSize === lowerCaseSize ? 'text-[#46A358]' : ''} flex items-center justify-between w-full pb-[20px]`} onClick={() => setSelectedSize(lowerCaseSize)}>
        <div>{size}</div>
        <div>({count})</div>
    </button>
  )
}

export default SizeItem