import React from 'react'
import Image from 'next/image'
import { GalleryItems } from '@/@types/GalleryItems'

type ProductGalleryProps = {
  images: GalleryItems[]
}

export const ProductGallery = ({ images } : ProductGalleryProps) => {
  return (
    <div className='grid grid-cols-2 gap-4'>
      {images.map((image) => (
        <Image key={image.thumbnail} src={image.original} alt="" width={429} height={510} className='' />
      ))}
    </div>
  )
}