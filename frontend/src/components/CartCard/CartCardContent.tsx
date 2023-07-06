import React, { ReactNode } from 'react'

type CartCardContentProps = {
  children: ReactNode
  className?: string
}

export const CartCardContent = ({ children, className }: CartCardContentProps) => {
  return (
    <div className={`w-6/12 lg:w-9/12 ${className}`}>
      {children}
    </div>
  )
}
