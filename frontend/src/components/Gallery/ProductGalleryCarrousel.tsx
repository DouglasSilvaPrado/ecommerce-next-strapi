import React from 'react'
import ImageGallery from 'react-image-gallery';


export type GalleryItems = {
  original: string
  thumbnail: string
}

type ProductGalleryCarrouselProps = {
  images: GalleryItems[]
}

export const ProductGalleryCarrousel = ({ images } : ProductGalleryCarrouselProps) => {
  return (
    <ImageGallery 
      items={images}
      showFullscreenButton={false}
      showPlayButton={false}
      showNav={false}
      autoPlay={true}
    />
  )
}
