import Image from 'next/image'
import React from 'react'
import { BadgeCard } from '../Badge/BadgeCard'
import { SecondaryButton } from '../Buttons/Secondary'
import Link from 'next/link'
import { Shoe } from '@/@types/Shoe'

interface ProductCardProps {
  shoe: Shoe
}

export const ProductCard = ({ shoe }: ProductCardProps) => {
  return (
    <div className='mx-1'>
      <div className='bg-faWhite rounded-2xl p-2 h-[180px]'>
        <div className='relative h-full'>
          <Image 
            className="object-cover" 
            src={`${shoe.attributes.image}`}
            alt={shoe.attributes.name}
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