'use client'

import { Product } from '@/@types/Product'
import { useAppStore } from '@/store/store'
import React from 'react'
import { MdOutlineFavoriteBorder } from 'react-icons/md'
import { RiDeleteBin2Line } from 'react-icons/ri'

type CartCardActionsProps = {
  product: Product
}

export const CartCardActions = ({product}: CartCardActionsProps) => {
  const { addToFavorites, removeToCart } = useAppStore()
  return (
    <div className='flex'>
      <MdOutlineFavoriteBorder className='mr-6 w-6 h-6 hover:text-red-500 cursor-pointer' onClick={() => addToFavorites(product)} />
      <RiDeleteBin2Line className='mr-6 w-6 h-6 hover:text-red-500 cursor-pointer' onClick={() => removeToCart(product)} />
    </div>
  )
}
