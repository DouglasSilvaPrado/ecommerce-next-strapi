import React from 'react'
import { useGender } from '../../hooks/useGender'
import { Open_Sans } from 'next/font/google'

const open_sans = Open_Sans({ subsets: ['latin'] })


export const GenderFilter = () => {
  
  const { genders, genderSelected, handleGenderSelected } = useGender()

  return (
    <div className='m-4'>
      <h3 className='font-semibold mb-3 sm:text-sm md:text-base'>GENDER</h3>
      {genders.map((gender) => (
        <div className={`flex items-center font-semibold ${open_sans.className}`} key={gender.id}>
          <input 
            type='checkbox'
            value={gender.attributes.gender}
            checked={gender.attributes.gender === genderSelected?.attributes.gender}
            className='w-5 h-5 sm:w-3 sm:h-3 md:w-5 md:h-5 accent-darkGray'
            onClick={() => handleGenderSelected(gender)}
          /> 
          <span className='ml-4 sm:text-xs md:text-base'>{gender.attributes.gender}</span>
        </div>
      ))}
    </div>
  )
}
