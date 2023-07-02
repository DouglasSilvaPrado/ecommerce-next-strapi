'use client'

import { Open_Sans, Rubik } from 'next/font/google'
import ColorSelection from '@/components/ColorSelection/ColorSelection'
import { SizeSelection } from '@/components/SizeSelection/SizeSelection'
import { SecondaryButton } from '@/components/Buttons/Secondary'
import { MdOutlineFavoriteBorder } from 'react-icons/md'
import { ProductGallery } from '@/components/Gallery/ProductGallery'
import { GridCarousel } from '@/components/GridCarousel/GridCarousel'
import { ProductGalleryCarrousel } from '@/components/Gallery/ProductGalleryCarrousel'
import { useProduct } from '@/hooks/useProduct'


const rubik = Rubik({ subsets: ['latin'] })
const openSans = Open_Sans({ subsets: ['latin'] })

export default function Page({ params: { id } }: { params: { id: number } }) {

  const { galleryImages, shoe, selectedColor, sizeSelection, handleColor, handleSize, handleAddToCart, handleAddToFavorite, isFavorite} = useProduct(id)

  return (
    <div className={`${rubik.className}`}>
      <div className='md:flex'>
        <div className='md:w-8/12 mr-4'>
          <div className='md:hidden'>
            <ProductGalleryCarrousel images={galleryImages} />
          </div>
          <div className='hidden md:block'>
            <ProductGallery images={galleryImages} />
          </div>
        </div>

        <div className='md:w-4/12'>
          <div className='my-6 md:mt-0'>
            <h3 className='font-semibold text-xl my-2'>{shoe?.attributes.name}</h3>
            <p className='font-semibold text-2xl text-blue'>${shoe?.attributes.price}</p>
          </div>
          <div className='my-6'>
            <p className='font-semibold'>Color</p>
            <div className='flex'>
              <ColorSelection colors={shoe?.attributes.colors.data} selectedColor={selectedColor} handleColor={handleColor}/>
            </div>
          </div>
          <div className="my-6">
            <p className='font-semibold'>Size</p>
            <div className='flex flex-wrap'>
              <SizeSelection sizes={shoe?.attributes.sizes.data} sizeSelection={sizeSelection} handleSize={handleSize}/>
            </div>
          </div>
          <div className='my-6 flex j'>
            <SecondaryButton text='ADD TO CART' className='py-4 mr-2 w-full' onClick={handleAddToCart}/>
            <SecondaryButton text={<MdOutlineFavoriteBorder />} className={`px-4 ${isFavorite(shoe) ? 'bg-yellow' : 'bg-darkGray'}`} onClick={handleAddToFavorite}/>
          </div>
          <div className='my-6'>
            <p className='font-semibold mb-2'>ABOUT THE PRODUCT</p>
            <div className={`${openSans.className}`}>
            {shoe?.attributes.categories.data.map((category, index) => (
              <span key={category.id}>
                {category.attributes.category}
                {index !== shoe.attributes.categories.data.length - 1 && " / "}
              </span>
            ))}
            </div>
          </div>
        </div>

      </div>

      <div className='my-6'>
        <div>
          <div className='flex justify-between items-center my-6'>
            <h3 className='font-semibold text-xl my-2'>You may also like</h3>
          </div>
          <div>
            <GridCarousel />
          </div>
        </div>
      </div>
    </div>
  )
}