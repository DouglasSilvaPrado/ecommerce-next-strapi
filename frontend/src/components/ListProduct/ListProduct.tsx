'use client'

import React, { useEffect, useRef, useState } from 'react'
import { ProductCard } from '../Card/Product'
import { Shoe } from '@/@types/Shoe'
import { fetchShoesByFilter } from '@/services/shoes'
import { useAppStore } from '@/store/store'

export const ListProduct = () => {
  const { selectedFilters, setTotalShoes, priceSelected } = useAppStore()
  const [shoes, setShoes] = useState<Shoe[]>([])
  const timeToCallSomething = useRef<NodeJS.Timeout | undefined>(undefined);
  const [firstRender, setFirstRender] = useState(true);
 

  const getShoes = async() => {
    const data = await fetchShoesByFilter(selectedFilters, priceSelected)
    setShoes(data.data)
    setTotalShoes(data.meta.pagination.total)
  }

  useEffect(() => {
    getShoes()
  },[selectedFilters])

  useEffect(() => {
    if(firstRender) {
      setFirstRender(false)
      return
    }
    if(timeToCallSomething.current) {
      clearInterval(timeToCallSomething.current)
    }

    timeToCallSomething.current = setTimeout(getShoes, 1000)

    return () => clearInterval(timeToCallSomething.current)
  },[priceSelected])


  
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
