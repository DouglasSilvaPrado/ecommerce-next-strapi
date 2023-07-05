import React from 'react'

type CartCardQuantityProps = {
  quantity: number
}

export const CartCardQuantity = ({quantity}: CartCardQuantityProps) => {
  return (
    <p className='text-xs font-semibold mx-2'>Quantity {quantity}</p>
  )
}
