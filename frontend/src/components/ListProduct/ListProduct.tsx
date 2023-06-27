'use client'

import React, { useEffect, useState } from 'react'
import { ProductCard } from '../Card/Product'
import { Shoe } from '@/@types/Shoe'
import { getShoes } from '@/services/shoes'
import { useAppStore } from '@/store/store'

export const ListProduct = () => {
  const [shoes, setShoes] = useState<Shoe[]>([])
  
  const { selectedFilters } = useAppStore()

 const fetchShoes = async() => {
  const queryParams = selectedFilters.map((filter) => 
    `filters[${filter.category}s][${filter.category}][$in]=${filter.name}`)
    .join('&')
  const url = `${process.env.NEXT_PUBLIC_API_URL}/api/shoes?populate=*&${queryParams}`
  try {
    const shoesData = await getShoes(url)
    setShoes(shoesData)
  } catch (error) {
    console.error(error)
  }
}


  useEffect(() => {
    fetchShoes()
  },[selectedFilters])

  
  return (
    <div className='grid grid-cols-2 gap-x-3 gap-y-6 lg:grid-cols-3'>
      {shoes.map((shoe) => (
        <ProductCard shoe={shoe} />
      ))}
    </div>
  )
}
