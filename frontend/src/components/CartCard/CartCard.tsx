import { Rubik } from 'next/font/google'
import Image from 'next/image'
import React, { useMemo } from 'react'
import { MdOutlineFavoriteBorder } from 'react-icons/md'
import { RiDeleteBin2Line } from 'react-icons/ri'
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'
import { Product } from '@/@types/Product'
import { useAppStore } from '@/store/store'


const rubik = Rubik({ subsets: ['latin'] })

interface CartCardProps {
  product: Product
}

export const CartCard = ( { product }: CartCardProps ) => {

  const { removeToCart, updateCart, addToFavorites } = useAppStore()

  const totalProduct = useMemo(() => {
    return product.attributes.quantity! * product.attributes.price
  }, [product.attributes.quantity])

  return (
      <div className='flex gap-4 my-4'>

        <div className='w-5/12'>
          <Image 
            className='rounded-3xl' 
            src={`${process.env.NEXT_PUBLIC_API_URL}${product.attributes.image}`} 
            alt="" 
            width={1000} 
            height={1000} 
          />
        </div>

        <div className='w-7/12'>

          <div className='mb-2'>
            <h4 className={`${rubik.className} font-semibold text-base`}>{product.attributes.name}</h4>
            <p className='font-semibold text-sm'>
              Category: {product?.attributes.categories.data.map((category, index) => (
                <span key={category.id}>
                  {category.attributes.category}
                  {index !== product.attributes.categories.data.length - 1 && " / "}
                </span>
              ))}
            </p>
            <p className='font-semibold text-sm'>Color: {product.attributes.color.attributes.name} </p>
          </div>

          <div className='flex justify-between mb-2'>
            <p className='font-semibold'>Size {product.attributes.size.attributes.size}</p>
            <div className='border px-2 rounded-lg flex items-center text-darkGray'>
              <button className=''>
                <AiOutlineMinus className='w-4 h-4' onClick={() => updateCart(product.id, 'decrease')}/>
              </button>
              <p className='text-sm mx-2'>{product.attributes.quantity}</p>
              <button className=''>
                <AiOutlinePlus className='w-4 h-4' onClick={() => updateCart(product.id, 'increase')}/>
              </button>
            </div>
          </div>
    
          <p className={`${rubik.className} text-blue text-xl font-semibold mb-2`}>
            ${totalProduct}
          </p>

          <div className='flex'>
            <MdOutlineFavoriteBorder className='mr-6 w-6 h-6 hover:text-red-500 cursor-pointer' onClick={() => addToFavorites(product)} />
            <RiDeleteBin2Line className='mr-6 w-6 h-6 hover:text-red-500 cursor-pointer' onClick={() => removeToCart(product.id)} />
          </div>

        </div>

      </div>
  )
}
