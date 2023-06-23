'use client'

import { useCallback, useEffect, useState } from 'react'
import { GalleryItems, ProductGalleryCarrousel } from '@/components/Gallery/ProductGalleryCarrousel'
import { fetchShoeByID } from '@/services/shoes'
import { ColorType, ImageType, Shoe, SizeType } from '@/store/ShoeSlice'
import { Open_Sans, Rubik } from 'next/font/google'
import ColorSelection from '@/components/ColorSelection/ColorSelection'
import { SizeSelection } from '@/components/SizeSelection/SizeSelection'
import { SecondaryButton } from '@/components/Buttons/Secondary'
import { MdOutlineFavoriteBorder } from 'react-icons/md'
import { ProductGallery } from '@/components/Gallery/ProductGallery'
import { GridCarousel } from '@/components/GridCarousel/GridCarousel'
import { Product } from '@/store/CartSlice'
import { useAppStore } from '@/store/store'



const rubik = Rubik({ subsets: ['latin'] })
const openSans = Open_Sans({ subsets: ['latin'] })


export default function Page({ params: { id } }: { params: { id: number } }) {
 
  const { addToCart, cart } = useAppStore()

  const [shoe, setShoe] = useState<Shoe>()
  const [galleryImages, setGalleryImages] = useState<GalleryItems[]>([])
  const [selectedColor, setSelectedColor] = useState<ColorType | null>(null);
  const [sizeSelection, setSizeSelection] = useState<SizeType | null>(null)


  const handleColor = (color: ColorType) => {
    setSelectedColor(color)
  }

  const handleSize = (size: SizeType) => {
    setSizeSelection(size)
  }


  const createGalleryItem = useCallback(
    (image: ImageType) => {
      const url = `${process.env.NEXT_PUBLIC_API_URL}${image.attributes.url}`;
      return {
        original: url,
        thumbnail: url,
      };
    },
    []
  );

  const fetchShoe = useCallback(async () => {
    const res = await fetchShoeByID(id)
    setShoe(res)

    res?.attributes.gallery.data.forEach((image: ImageType) => {
      const newItem = createGalleryItem(image);
      const itemExists = galleryImages.some(
        (item) => item.original === newItem.original && item.thumbnail === newItem.thumbnail
      );

      if (!itemExists) {
        setGalleryImages((prev) => [...prev, newItem]);
      }
    });
  }, [id, createGalleryItem, galleryImages]);

  const handleAddToCart = () => {
    const colorError = !selectedColor ? 'select a color' : '';
    const sizeError = !sizeSelection ? 'select a size' : '';

    if (colorError || sizeError) {
      alert(colorError || sizeError);
      return;
    }

    if(shoe){
      const product: Product = {
        id: shoe.id,
        attributes: {
          name: shoe.attributes.name,
          price: shoe.attributes.price,
          description: shoe.attributes.description,
          tag: shoe.attributes.tag,
          category: shoe.attributes.category,
          sku: shoe.attributes.sku,
          image: shoe.attributes.image.data.attributes.url,
          color: selectedColor!,
          size:  sizeSelection!,
        }
      }
      addToCart(product)
    }
    
    console.log('cart', cart)
  }

  useEffect(() => {
    fetchShoe()
  }, []);

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
            <SecondaryButton text={<MdOutlineFavoriteBorder />} className='px-4' />
          </div>
          <div className='my-6'>
            <p className='font-semibold mb-2'>ABOUT THE PRODUCT</p>
            <div className={`${openSans.className}`}>
              <p>{shoe?.attributes.category}</p>
              <p className='mt-3'>{shoe?.attributes.description}</p>
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