import React, { ReactNode } from 'react'

type CartCardRootProps = {
  children: ReactNode
}

export const CartCardRoot = ({ children }:CartCardRootProps) => {
  return (
    <div className='flex gap-4 m-4'>
      {children}
    </div>
  )
}
