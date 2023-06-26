import { GalleryItems } from '@/@types/GalleryItems';
import React from 'react'
import ImageGallery from 'react-image-gallery';

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
