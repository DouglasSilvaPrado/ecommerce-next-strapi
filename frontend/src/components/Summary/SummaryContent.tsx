'use client'

import { useAppStore } from '@/store/store'
import React from 'react'
import { Rubik } from 'next/font/google'

const rubik = Rubik({ subsets: ['latin'] })

export const SummaryContent = () => {
  const { totalItems, totalPrice, shippingValue } = useAppStore()
  return (
    <div>
    <div className='flex justify-between font-semibold my-4'>
      <p>{totalItems} ITEMS</p>
      <p>${totalPrice}</p>
    </div>
    <div className='flex justify-between font-semibold my-4'>
      <p>Delivery</p>
      <p>${shippingValue.toFixed(2)}</p>
    </div>
    <div className='flex justify-between font-semibold my-4'>
      <p>Sales Tax</p>
      <p>-</p>
    </div>
    <div className={`${rubik.className} flex justify-between font-semibold text-xl mt-4`}>
      <p>Total</p>
      <p>${totalPrice + shippingValue}</p>
    </div>
  </div>
  )
}
