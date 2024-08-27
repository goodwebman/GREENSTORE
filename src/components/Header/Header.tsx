import { Carousel } from 'flowbite-react'
import CarouselSlide from './CarouselSlide'
import { theme } from './themes'

function Header() {
	return (
		<div id='home'>
			<Carousel theme={theme} slide={false} className=''>
				<CarouselSlide />
				<CarouselSlide />
				<CarouselSlide />
			</Carousel>
		</div>
	)
}

export default Header
