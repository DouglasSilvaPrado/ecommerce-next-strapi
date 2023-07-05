import React, { ReactNode } from 'react'

type CartCardContentProps = {
  children: ReactNode
}

export const CartCardContent = ({ children }: CartCardContentProps) => {
  return (
    <div className='w-6/12 lg:w-9/12'>
      {children}
    </div>
  )
}
