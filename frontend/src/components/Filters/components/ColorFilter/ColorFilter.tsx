import React from 'react'
import { useColor } from '../../hooks/useColor'

export const ColorFilter = () => {

  const { colors, colorSelected, handleColorSelected } = useColor()
  
  return (
    <div className='m-4'>
      <h3 className='font-semibold mb-3 sm:text-sm md:text-base'>COLOR</h3>
      <div className='flex flex-wrap'>
        {colors?.map((color) => (
            <div
            key={color.id}
            className={`w-12 h-12 sm:w-8 sm:h-8 md:w-10 md:h-10 rounded-lg mr-2 my-2 ${colorSelected === color ? 'border-2 border-black' : ''}`}
            style={{ backgroundColor: color.attributes.cor, cursor: 'pointer' }}
            onClick={() => handleColorSelected(color)}
          />
        ))}
      </div>
    </div>
  )
}
