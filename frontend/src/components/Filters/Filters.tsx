'use client'

import { SizeType } from '@/@types/SizeType'
import { fetchSizes } from '@/services/sizeService'
import React, { useEffect, useState } from 'react'
import { IoMdClose } from 'react-icons/io'
import { IoFilterSharp } from 'react-icons/io5'
import { Rubik } from 'next/font/google'
import { useAppStore } from '@/store/store'


const rubik = Rubik({ subsets: ['latin'] })


export const Filters = ( ) => {

  const { addFilter } = useAppStore()
  const [showFilter, setShowFilter] = useState(false)
  const [sizes, setSizes] = useState<SizeType[]>([])
  const [sizeSelected, setSizeSelected] = useState<SizeType | null>(null)

  const handleShowFilters = () => {
    setShowFilter(!showFilter)
  }
  
  const handleSizes = async() => {
    const sizeData = await fetchSizes()
    setSizes(sizeData)
  }

  const handleFilters = () => {
    if(sizeSelected) {
      addFilter({ category: 'size', name: sizeSelected?.attributes.size.toString()})
    }
    // handleShowFilters()
  }

  useEffect(() => {
    handleSizes()
  }, [])

  return (
    <>
      <button className='flex justify-between items-center w-full px-4 py-2 bg-faWhite rounded-lg'>
        <span className='font-semibold text-sm'>Filters</span>
        <IoFilterSharp onClick={handleShowFilters} />
      </button>

      <div className={`${rubik.className} fixed left-0 top-0 z-50 w-screen h-screen bg-gray ${showFilter ? '' : 'hidden'}`}>
        <button className='flex justify-between items-center w-full px-4 py-2 bg-faWhite'>
          <span className='font-semibold text-xl'>Filters</span>
          <IoMdClose onClick={handleShowFilters}/>
        </button>

        {/* sizes */}
        <div className='m-4'>
          <h3 className='font-semibold mb-3'>SIZE</h3>
          <div className='flex flex-wrap'>
            {sizes?.map((size) => (
              <div 
                key={size.id} 
                className={`w-12 h-12 rounded-lg ${sizeSelected?.id == size.id ? 'bg-darkGray text-white' : 'bg-white'} mr-2 my-2 cursor-pointer flex justify-center items-center`}
                onClick={() => setSizeSelected(size)} 
              >
                <p className='font-medium text-sm'>{size.attributes.size}</p>
              </div>
            ))}
          </div>
        </div>

        {/* buttons */}
        <div className='m-4 flex justify-between'>
          <button 
            className='py-4 bg-darkGray w-1/2 rounded-lg mr-4 text-white text-xs'
            onClick={handleFilters}
          >
            Apply
          </button>
          <button className='py-4 bg-transparent w-1/2 rounded-lg border border-darkGray text-xs'>Reset</button>
        </div>

      </div>
    </>
  )
}
