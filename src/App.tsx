import Header from '@/components/Header/Header'
import Navigation from '@/components/Navigation/Navigation'
import '@/fonts/CeraPro-Black.ttf'
import PriceRange from './components/Shop/PriceRange'

import SizeFilter from './components/Shop/SizeFilter'
import SuperSale from './components/Shop/SuperSale'
import TopbarFilter from './components/Shop/TopbarFilter'

import LeftAside from './components/Shop/LeftAside'
import SellSection from './components/Shop/SellSection'
import Shop from './components/Shop/Shop'
import ShopSection from './components/Shop/ShopSection'

function App() {
	return (
		<div className='w-[90%] m-auto'>
			<Navigation />
			<Header />
			{/* shop */}
			<ShopSection >
				
			</ShopSection>
		</div>
	)
}

export default App
