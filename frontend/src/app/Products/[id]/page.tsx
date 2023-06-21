'use client'

import { useCallback, useEffect, useState } from 'react'
import { GalleryItems, ProductGallery } from '@/components/Gallery/ProductGallery'
import { fetchShoeByID } from '@/services/shoes'
import { ImageType, Shoe } from '@/store/ShoeSlice'

export default function Page({ params: { id } }: { params: { id: number } }) {
  const [shoe, setShoe] = useState<Shoe>()
  const [galleryImages, setGalleryImages] = useState<GalleryItems[]>([])

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

  useEffect(() => {
    fetchShoe()
  }, []);

  return (
    <main>
      <ProductGallery images={galleryImages} />
    </main>
  )
}
