'use client'

import React, { useEffect, useState } from 'react'
import { ProductCard } from '../Card/Product'
import { Shoe } from '@/@types/Shoe'
import { fetchShoesByFilter } from '@/services/shoes'
import { useAppStore } from '@/store/store'

export const ListProduct = () => {
  const [shoes, setShoes] = useState<Shoe[]>([])
  
  const { selectedFilters, setTotalShoes } = useAppStore()

const getShoes = async() => {
  const data = await fetchShoesByFilter(selectedFilters)
  setShoes(data.data)
  setTotalShoes(data.meta.pagination.total)
}

  useEffect(() => {
    getShoes()
  },[selectedFilters])

  
  return (
    <div className='grid grid-cols-2 gap-x-3 gap-y-6 lg:grid-cols-3'>
      {shoes.map((shoe) => (
        <React.Fragment key={shoe.id}>
          <ProductCard shoe={shoe} />
        </React.Fragment>
      ))}
    </div>
  )
}
