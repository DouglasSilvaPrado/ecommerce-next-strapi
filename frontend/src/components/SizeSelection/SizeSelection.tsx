import { SizeType } from '@/store/ShoeSlice';
import React from 'react'
import { useState } from 'react';


interface SizeSelectionProps {
  sizes?: SizeType[];
}


export const SizeSelection: React.FC<SizeSelectionProps> = ( { sizes }) => {
  const [sizeSelection, setSizeSelection] = useState< SizeType | null>(null)

  const handleSizeClick = (size: SizeType) => {
    setSizeSelection(size)
  }

  return (
    <>
      {sizes?.map((size) => (
        <div 
          key={size.id} 
          className={`w-12 h-12 rounded-lg ${sizeSelection?.id == size.id ? 'bg-darkGray text-white' : 'bg-white'} mr-2 my-2 cursor-pointer flex justify-center items-center`}
          onClick={() => handleSizeClick(size)}
        >
          <p className='font-medium text-sm'>{size.attributes.size}</p>
        </div>
      ))}
    </>
  )
}
