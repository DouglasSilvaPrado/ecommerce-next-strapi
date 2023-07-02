'use client'

import { useAppStore } from '@/store/store'
import React from 'react'

export const InfoProduct = () => {
  const { totalShoes } = useAppStore()
  return (
    <div className='my-6 sm:order-first sm:ml-3'>
      <h3 className='font-semibold text-xl'>Life Style Shoes</h3>
      <p className='font-semibold text-sm'>{totalShoes} items</p>
    </div>
  )
}
