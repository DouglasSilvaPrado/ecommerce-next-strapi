import { ColorType } from '@/@types/ColorType'
import { GalleryItems } from '@/@types/GalleryItems'
import { ImageType } from '@/@types/ImageType'
import { Product } from '@/@types/Product'
import { Shoe } from '@/@types/Shoe'
import { SizeType } from '@/@types/SizeType'
import { fetchShoeByID } from '@/services/shoes'
import { useAppStore } from '@/store/store'
import  { useCallback, useEffect, useState } from 'react'
import { toast } from 'react-toastify'

export const useProduct = ( id: number ) => {
  const { addToCart, addToFavorites, favorites } = useAppStore()

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

  const isProductValid = () => {
    const colorError = !selectedColor ? 'select a color' : '';
    const sizeError = !sizeSelection ? 'select a size' : '';

    if (colorError || sizeError) {
      toast.info(colorError || sizeError);
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
          categories: shoe.attributes.categories,
          sku: shoe.attributes.sku,
          image: shoe.attributes.image.data.attributes.url,
          color: selectedColor!,
          size:  sizeSelection!,
        }
      }
      return product
    }
}

  const handleAddToCart = () => {
    const product = isProductValid()
    if(product) {
      addToCart(product)
      toast.success(`${product.attributes.name} adicionado ao carrinho`);
    }
  }

  const handleAddToFavorite = () => {
    const product = isProductValid()
    if(product) {
      addToFavorites(product)
    }
  }

  const isFavorite = (shoe: Shoe | undefined) => {
    if (shoe) {
      return favorites.some((favorite) => favorite.id === shoe.id);
    }
  };
  

  useEffect(() => {
    fetchShoe()
  }, []);

  return  { galleryImages, shoe, selectedColor, sizeSelection, handleColor, handleSize, handleAddToCart, handleAddToFavorite, isFavorite}
}
