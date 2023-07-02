'use client'

import { useAppStore } from '@/store/store'
import { ChangeEvent, useState } from 'react'

export const PriceFilter = () => {
  const { priceSelected, setPriceSelected} = useAppStore()
  const [rangePrice, setRangePrice] = useState(priceSelected)

  const handlePriceRange = (event: ChangeEvent<HTMLInputElement>) => {
    const newPrice = +event.target.value
    setRangePrice(newPrice)
    setPriceSelected(newPrice)
  }
  
  return (
    <div className='m-4'>
      <h3 className='font-semibold mb-3 sm:text-sm md:text-base'>PRICE</h3>
      <div className='flex items-center'>
        <input 
          type="range" 
          min={0} 
          max={1000} 
          value={rangePrice} 
          onChange={handlePriceRange}
          className='mr-2'
        />
        <span>{priceSelected}</span> 
      </div>
      
    </div>
  )
}
