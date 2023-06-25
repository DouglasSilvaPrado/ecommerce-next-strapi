import { ColorType } from '@/@types/ColorType'
import { GalleryItems } from '@/@types/GalleryItems'
import { ImageType } from '@/@types/ImageType'
import { Product } from '@/@types/Product'
import { Shoe } from '@/@types/Shoe'
import { SizeType } from '@/@types/SizeType'
import { fetchShoeByID } from '@/services/shoes'
import { useAppStore } from '@/store/store'
import  { useCallback, useEffect, useState } from 'react'

export const useProduct = ( id: number ) => {
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
  }

  useEffect(() => {
    fetchShoe()
  }, []);

  return  { galleryImages, shoe, selectedColor, sizeSelection, handleColor, handleSize, handleAddToCart}
}