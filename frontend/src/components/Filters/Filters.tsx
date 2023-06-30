'use client'

import React, { useState } from 'react'
import { IoMdClose } from 'react-icons/io'
import { IoFilterSharp } from 'react-icons/io5'
import { Rubik } from 'next/font/google'
import { useAppStore } from '@/store/store'
import { SizeFilter } from './components/SizeFilter/SizeFilter'
import { ColorFilter } from './components/ColorFilter/ColorFilter'
import { CategoryFilter } from './components/CategoryFilter/CategoryFilter'
import { GenderFilter } from './components/GenderFilter/GenderFilter'

const rubik = Rubik({ subsets: ['latin'] })

export const Filters = ( ) => {
  
  const { 
    addFilter, resetFilter, 
    sizeSelected, setSizeSelected, 
    colorSelected, setColorSelected,
    categorySelected, setCategorySelected,
    genderSelected, setGenderSelected
  } = useAppStore()
  
  const [showFilter, setShowFilter] = useState(false)

  const handleShowFilters = () => {
    setShowFilter(!showFilter)
  }

  const applyFilters = () => {
    if (sizeSelected) {
      addFilter({
        category: 'sizes',
        subCategory: 'size',
        name: sizeSelected.attributes.size.toString(),
      });
    }
    if(colorSelected) {
      addFilter({
        category: 'colors',
        subCategory: 'name',
        name: colorSelected.attributes.name,
      });
    }
    if(categorySelected){
      addFilter({
        category: 'categories',
        subCategory: 'category',
        name: categorySelected.attributes.category,
      });
    }
    if(genderSelected){
      addFilter({
        category: 'genders',
        subCategory: 'gender',
        name: genderSelected.attributes.gender,
      });
    }
    handleShowFilters()
  }
  
  const resetFilters = () => {
    setSizeSelected(null)
    setColorSelected(null)
    setCategorySelected(null)
    setGenderSelected(null)
    resetFilter()
  }

  return (
    <>
      <button className='flex justify-between items-center w-full px-4 py-2 bg-faWhite rounded-lg'>
        <span className='font-semibold text-sm'>Filters</span>
        <IoFilterSharp onClick={handleShowFilters} />
      </button>

      <div className={`${rubik.className} fixed overflow-y-auto left-0 top-0 z-50 w-screen h-screen bg-gray ${showFilter ? '' : 'hidden'}`}>
        <button className='flex justify-between items-center w-full px-4 py-2 bg-faWhite'>
          <span className='font-semibold text-xl'>Filters</span>
          <IoMdClose onClick={handleShowFilters}/>
        </button>
        <SizeFilter />
        <ColorFilter />
        <CategoryFilter />
        <GenderFilter />
        <div className='m-4 flex justify-between'>
          <button 
            className='py-4 bg-darkGray w-1/2 rounded-lg mr-4 text-white text-xs'
            onClick={applyFilters}
          >
            Apply
          </button>
          <button 
            className='py-4 bg-transparent w-1/2 rounded-lg border border-darkGray text-xs' 
            onClick={() => resetFilters()}>
            Reset
          </button>
        </div>
      </div>
    </>
  )
}
