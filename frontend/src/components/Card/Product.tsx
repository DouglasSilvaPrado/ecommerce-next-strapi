import Image from 'next/image'
import React from 'react'
import { BadgeCard } from '../Badge/BadgeCard'
import { SecondaryButton } from '../Buttons/Secondary'
import { Shoe } from '@/store/ShoeSlice'
import Link from 'next/link'

interface ProductCardProps {
  shoe: Shoe
}

export const ProductCard = ({ shoe }: ProductCardProps) => {
  return (
    <div>
      <div className='bg-faWhite rounded-2xl p-2 h-[180px]'>
        <div className='relative h-full'>
          <Image 
            className="object-cover" 
            src={`${process.env.NEXT_PUBLIC_API_URL}${shoe.attributes.image.data.attributes.url}`}
            alt={shoe.attributes.image.data.attributes.name}
            fill
          />
          <BadgeCard text={shoe.attributes.tag} color="faWhite" bg="blue"/>
        </div>
      </div>
      <div className='mt-4'>
        <p className='font-semibold text-base h-12'>{shoe.attributes.name}</p>
        <Link href={`Products/${shoe.id}`}>
          <SecondaryButton text='VIEW PRODUCT' price={shoe.attributes.price} className='py-3 px-5 font-medium text-xs mt-2 w-full' />
        </Link>
      </div>
    </div>
  )
}