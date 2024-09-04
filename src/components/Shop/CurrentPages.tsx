import { data } from '@/Data/PlantsData'
import React, { useState } from 'react'

type Props = {}

const CurrentPages = (props: Props) => {
  const ITEMS_PER_PAGE = 9;

  const [currentPage, setCurrentPage] = useState(0);

  // Вычисляем количество страниц
  const totalPages = Math.ceil(data.length / ITEMS_PER_PAGE);

  // Функция для переключения страницы
  const handlePageChange = (page: number) => {
    if (page >= 0 && page < totalPages) {
      setCurrentPage(page);
    }
  };

  const startIndex = currentPage * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const currentProducts = data.slice(startIndex, endIndex);

  return (
    <div className='flex justify-end'>currentPages</div>
  )
}

export default CurrentPages