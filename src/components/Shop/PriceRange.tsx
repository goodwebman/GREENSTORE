import { useState } from 'react'
import ReactSlider from 'react-slider'
import styled from 'styled-components'
import Title from './Title'

const MIN = 39
const MAX = 1500

const StyledSlider = styled(ReactSlider)`
	width: 80%;
`

const StyledTrack = styled.div`
	top: 0;
	bottom: 0;
	background: ${props =>
		props.index === 2
			? 'rgba(70, 163, 88, 0.3)'
			: props.index === 1
			? '#46A358'
			: 'rgba(70, 163, 88, 0.3)'};
`
const Track = (props, state) => <StyledTrack {...props} index={state.index} />

function PriceRange() {
	const [values, setValues] = useState([MIN, 1230])

	return (
		<section
			id='shop'
			className='bg-[#FBFBFB] max-w-[370px] px-[14px] py-[14px]'
		>
			{/* sidebar */}
			<aside>
				<Title title='Price Range' />

				<div className=' px-[15px] pt-[20px]'>
					<StyledSlider
						className={`price_range `}
						min={MIN}
						max={MAX}
						value={values}
						onChange={setValues}
						rangeClassName='slider-range'
						trackClassName='slider-track'
						thumbClassName='slider-thumb'
						renderTrack={Track}
						pearling
					/>

					<div className='pt-[30px] text-[#3D3D3D] text-[18px]'>
						Price:{' '}
						<span className='text-[#46A358] text-[18px] pl-[2px]'>
							${values[0]} - ${values[1]}
						</span>{' '}
					</div>
					<button className='mt-[16px] text-[18px] px-[25px] py-[8px] bg-[#46A358] text-white rounded-[10px]'>
						Filter
					</button>
				</div>
			</aside>
		</section>
	)
}

export default PriceRange
