import Image from 'next/image'
import React from 'react'

export const Banner = () => {
  return (
    <div className='relative'>
      <Image 
        src='/banner.png' 
        alt='banner' 
        width={1320} 
        height={395} 
        className='min-h-[9.375rem] w-full object-cover rounded-2xl'
      />
      <div className='text-gray absolute bottom-6 left-6'>
        <h4 className='text-xs md:text-base lg:text-2xl'>Limited time only</h4>
        <h2 className='text-xl font-semibold text-white md:text-3xl lg:text-7xl'>Get 30% off</h2>
        <p className='text-[0.625rem] w-1/2 md:text-sm lg:text-xl'>
          Sneakers made with your comfort in mind so you can put all of your focus into your next session.
        </p>
      </div>
    </div>
  )
}
