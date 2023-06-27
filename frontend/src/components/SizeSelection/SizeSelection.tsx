import { SizeType } from '@/@types/SizeType';
import React from 'react'

interface SizeSelectionProps {
  sizeSelection: SizeType | null
  handleSize: (size: SizeType) => void
  sizes?: SizeType[];
}


export const SizeSelection: React.FC<SizeSelectionProps> = ( { sizes, sizeSelection, handleSize }) => {

  return (
    <>
      {sizes?.map((size) => (
        <div 
          key={size.id} 
          className={`w-12 h-12 rounded-lg ${sizeSelection?.id == size.id ? 'bg-darkGray text-white' : 'bg-white'} mr-2 my-2 cursor-pointer flex justify-center items-center`}
          onClick={() => handleSize(size)}
        >
          <p className='font-medium text-sm'>{size.attributes.size}</p>
        </div>
      ))}
    </>
  )
}
