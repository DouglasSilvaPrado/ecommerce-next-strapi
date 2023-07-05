'use client'

import React, { useMemo } from 'react'
import { Rubik } from 'next/font/google'
import { CategoryType } from '@/@types/CategoryType'
const rubik = Rubik({ subsets: ['latin'] })


type CartCardPrimaryInfoProps ={
  productName: string
  colorName: string
  quantity: number
  price: number
  categories: CategoryType[]
}

export const CartCardPrimaryInfo = ({ productName, colorName, quantity, price, categories }: CartCardPrimaryInfoProps) => {
  const totalProduct = useMemo(() => {
    return quantity! * price
  }, [quantity])

  return (
    <div className='mb-2'>
      <div className='lg:flex lg:justify-between lg:items-center'>
        <h4 className={`${rubik.className} font-semibold text-base lg:text-xl`}>{productName}</h4>
        <p className={`${rubik.className} text-blue text-base font-semibold text-xl hidden lg:block`}>
          ${totalProduct}
        </p>
      </div>
      <p className='font-semibold text-sm lg:text-base'>
        Category: {categories.map((category, index) => (
          <span key={category.id}>
            {category.attributes.category}
            {index !== categories.length - 1 && " / "}
          </span>
        ))}
      </p>
      <p className='font-semibold text-sm lg:text-base'>Color: {colorName} </p>
    </div>
  )
}
