import Image from 'next/image'
import React from 'react'

type CartCardImageProps = {
  image: string
  className?: string
}

export const CartCardImage = ({image, className}: CartCardImageProps) => {
  return (
    <div className={`w-6/12 lg:w-3/12 ${className}`}>
      <Image 
        className='rounded-3xl' 
        src={`${image}`} 
        alt="" 
        width={1000} 
        height={1000} 
      />
    </div>
  )
}
