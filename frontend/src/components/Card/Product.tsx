import Image from 'next/image'
import React from 'react'
import { BadgeCard } from '../Badge/BadgeCard'
import { SecondaryButton } from '../Buttons/Secondary'
import { Shoe } from '@/store/ShoeSlice'

interface ProductCardProps {
  shoe: Shoe
}

export const ProductCard = ({ shoe }: ProductCardProps) => {
  return (
    <div className='w-[171px]'>
      <div className='bg-faWhite rounded-2xl p-2 h-[180px]'>
        <div className='relative'>
          <Image className="object-cover" src={shoe.attributes.image.data[0].attributes.url} alt={shoe.attributes.name} width={155} height={164} />
          <BadgeCard text={shoe.attributes.badge} color="faWhite" bg="blue"/>
        </div>
      </div>
      <div className='mt-4'>
        <p className='font-semibold text-base'>{shoe.attributes.name}</p>
        <SecondaryButton text='VIEW PRODUCT' price={shoe.attributes.price} className='py-3 px-5 font-medium text-xs mt-2' />
      </div>
    </div>
  )
}