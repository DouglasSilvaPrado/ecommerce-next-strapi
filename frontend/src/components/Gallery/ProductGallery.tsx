import React from 'react'
import ImageGallery from 'react-image-gallery';


export type GalleryItems = {
  original: string
  thumbnail: string
}

type ProductGalleryProps = {
  images: GalleryItems[]
}

export const ProductGallery = ({ images } : ProductGalleryProps) => {
  return (
    <ImageGallery 
      items={images}
      showFullscreenButton={false}
    />
  )
}
