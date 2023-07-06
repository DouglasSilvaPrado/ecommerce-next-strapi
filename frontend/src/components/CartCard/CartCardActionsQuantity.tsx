import { Product } from '@/@types/Product'
import { useAppStore } from '@/store/store'
import React from 'react'
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'

type CartCardActionsQuantityProps ={
  product: Product
}

export const CartCardActionsQuantity = ({ product }: CartCardActionsQuantityProps) => {

  const { updateCart } = useAppStore()
  
  return (
    <div className='border px-2 rounded-lg flex items-center text-darkGray'>
      <button className=''>
        <AiOutlineMinus className='w-4 h-4 ' onClick={() => updateCart(product, 'decrease')}/>
      </button>
      <p className='text-sm mx-2'>{product.attributes.quantity}</p>
      <button className=''>
        <AiOutlinePlus className='w-4 h-4' onClick={() => updateCart(product, 'increase')}/>
      </button>
    </div>
  )
}
