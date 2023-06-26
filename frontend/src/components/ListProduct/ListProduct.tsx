'use client'

import { useAppStore } from '@/store/store'
import React, { useEffect } from 'react'
import { ProductCard } from '../Card/Product'

export const ListProduct = () => {
  const { fetchShoes, shoes } = useAppStore()

  useEffect(() => {
    fetchShoes()
  },[])

  
  return (
    <div className='grid grid-cols-2 gap-x-3 gap-y-6 lg:grid-cols-3'>
      {shoes.map((shoe) => (
        <ProductCard shoe={shoe} />
      ))}
    </div>
  )
}
