import React from 'react'

type CartCardSizeInfoProps = {
  size: number
}

export const CartCardSizeInfo = ({size}:CartCardSizeInfoProps) => {
  return (
    <p className='font-semibold text-xs'>Size {size}</p>
  )
}
