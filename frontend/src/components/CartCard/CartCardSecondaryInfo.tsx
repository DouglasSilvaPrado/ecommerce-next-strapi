import React, { ReactNode } from 'react'

type CartCardSecondaryInfoProps = {
  children: ReactNode
}
export const CartCardSecondaryInfo = ({ children }: CartCardSecondaryInfoProps) => {
  return (
    <div className='flex justify-between mb-2 lg:text-base'>
      { children }
    </div>
  )
}
