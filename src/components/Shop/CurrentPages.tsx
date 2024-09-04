import { useState } from 'react'
import SellSection from './SellSection'

function CurrentPages({
	selectedCategories,
	selectedSize,
	selectedTopBar,
	data,
	filterPrice,
    products
}) {
	const ITEMS_PER_PAGE = 12
	const [currentPage, setCurrentPage] = useState(0)

	// Вычисляем количество страниц
	const totalPages = Math.ceil(data.length / ITEMS_PER_PAGE)

	// Функция для переключения страницы
	const handlePageChange = (page: number) => {
		if (page >= 0 && page < totalPages) {
			setCurrentPage(page)
		}
	}

	// Определяем начальный и конечный индекс товаров для текущей страницы
	const startIndex = currentPage * ITEMS_PER_PAGE
	const endIndex = startIndex + ITEMS_PER_PAGE
	const currentProducts = data.slice(startIndex, endIndex)
	return (
		<div>
			<SellSection
				selectedCategories={selectedCategories}
				selectedSize={selectedSize}
				selectedTopBar={selectedTopBar}
				data={currentProducts}
				filterPrice={filterPrice}
                
                
                
                
                
			/>

			<div className='pagination'>
				<button
					onClick={() => handlePageChange(currentPage - 1)}
					disabled={currentPage === 0}
				>
					Предыдущая
				</button>
				<span>
					Страница {currentPage + 1} из {totalPages}
				</span>
				<button
					onClick={() => handlePageChange(currentPage + 1)}
					disabled={currentPage === totalPages - 1}
				>
					Следующая
				</button>
			</div>
		</div>
	)
}

export default CurrentPages
