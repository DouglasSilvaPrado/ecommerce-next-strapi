'use client'

import { SizeType } from '@/@types/SizeType'
import { fetchSizes } from '@/services/sizeService'
import React, { useEffect, useState } from 'react'
import { IoMdClose } from 'react-icons/io'
import { IoFilterSharp } from 'react-icons/io5'
import { Open_Sans, Rubik } from 'next/font/google'
import { useAppStore } from '@/store/store'
import { ColorType } from '@/@types/ColorType'
import { fetchColors } from '@/services/colorService'
import { fetchCategories } from '@/services/categoriesService'
import { CategoryType } from '@/@types/CategoryType'


const rubik = Rubik({ subsets: ['latin'] })
const open_sans = Open_Sans({ subsets: ['latin'] })


export const Filters = ( ) => {

  const { addFilter, resetFilter, removeFilter } = useAppStore()
  const [showFilter, setShowFilter] = useState(false)
  const [sizes, setSizes] = useState<SizeType[]>([])
  const [colors, setColors] = useState<ColorType[]>([])
  const [categories, setCategories] = useState<CategoryType[]>([])
  const [sizeSelected, setSizeSelected] = useState<SizeType | null>(null)
  const [colorSelected, setColorSelected] = useState<ColorType | null>(null)
  const [categorySelected, setCategorySelected] = useState<CategoryType | null>(null)


  const handleShowFilters = () => {
    setShowFilter(!showFilter)
  }
  
  const handleSizes = async() => {
    const sizeData = await fetchSizes()
    setSizes(sizeData)
  }

  const handleSizeSelected = (size: SizeType) => {
    if(size.attributes.size === sizeSelected?.attributes.size){
      setSizeSelected(null)
      removeFilter({
        category: 'sizes',
        subCategory: 'size',
        name: sizeSelected.attributes.size.toString(),
      })
      return
    }
    setSizeSelected(size)
  }
  
  const handleColor =  async() => {
    const colorData = await fetchColors()
    setColors(colorData)
  }

  const handleColorSelected = (color: ColorType) => {
    if(color.attributes.name === colorSelected?.attributes.name){
      setColorSelected(null)
      removeFilter({
        category: 'colors',
        subCategory: 'name',
        name: colorSelected.attributes.name,
      });
      return
    }
    setColorSelected(color)
  }

  const handleCategories = async() => {
     const categoriesData = await fetchCategories()
     setCategories(categoriesData)
  }

  const handleCategorySelected = (category: CategoryType) => {
    if(category.attributes.category === categorySelected?.attributes.category) {
      setCategorySelected(null)
      removeFilter({
        category: 'categories',
        subCategory: 'category',
        name: categorySelected.attributes.category,
      });
      return
    }
    setCategorySelected(category)
  }

  const applyFilters = () => {
    if (sizeSelected) {
      addFilter({
        category: 'sizes',
        subCategory: 'size',
        name: sizeSelected.attributes.size.toString(),
      });
    }if(colorSelected) {
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
    handleShowFilters()
  }

  const resetFilters = () => {
    setSizeSelected(null)
    setColorSelected(null)
    setCategorySelected(null)
    resetFilter()
  }

  useEffect(() => {
    handleSizes()
    handleColor()
    handleCategories()
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
                className={`w-12 h-12 rounded-lg ${sizeSelected === size ? 'bg-darkGray text-white' : 'bg-white'} mr-2 my-2 cursor-pointer flex justify-center items-center`}
                onClick={() => handleSizeSelected(size)} 
              >
                <p className='font-medium text-sm'>{size.attributes.size}</p>
              </div>
            ))}
          </div>
        </div>

        {/* colors */}
        <div className='m-4'>
          <h3 className='font-semibold mb-3'>COLOR</h3>
          <div className='flex flex-wrap'>
            {colors?.map((color) => (
               <div
               key={color.id}
               className={`w-12 h-12 rounded-lg mr-2 my-2 ${colorSelected === color ? 'border-2 border-black' : ''}`}
               style={{ backgroundColor: color.attributes.cor, cursor: 'pointer' }}
               onClick={() => handleColorSelected(color)}
             />
            ))}
          </div>
        </div>

        {/* categories */}
        <div className='m-4'>
          <h3 className='font-semibold mb-3'>CATEGORY</h3>
              {categories.map((category) => (
                <div className={`flex items-center font-semibold ${open_sans.className}`}>
                  <input 
                    type='checkbox'
                    value={category.attributes.category}
                    className='w-5 h-5 accent-darkGray'
                    onClick={() => handleCategorySelected(category)}
                  /> 
                  <span className='ml-4'>{category.attributes.category} </span>
                </div>
              ))}
        </div>

        {/* buttons */}
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
