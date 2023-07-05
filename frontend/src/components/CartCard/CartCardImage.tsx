import Image from 'next/image'
import React from 'react'

type CartCardImageProps = {
  image: string
}

export const CartCardImage = ({image}: CartCardImageProps) => {
  return (
    <div className='w-6/12 lg:w-3/12'>
      <Image 
        className='rounded-3xl' 
        src={`${process.env.NEXT_PUBLIC_API_URL}${image}`} 
        alt="" 
        width={1000} 
        height={1000} 
      />
    </div>
  )
}
