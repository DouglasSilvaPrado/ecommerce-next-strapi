import { StateCreator } from 'zustand';

export type ImageType = {
    id: number,
    attributes: {
      name: string,
      url: string
    }
}

export interface Shoe {
  id: number,
  attributes: {
    name: string,
    price: number,
    description: string,
    quantity?: number,
    tag: string,
    category: string,
    sku: string,
    image:{
      data: ImageType
    },
    gallery: {
      data: ImageType[]
    }
  }
}

export interface ShoeSlice {
  shoes: Shoe[]
  fetchShoes: () => void
}


export const createShoeSlice:StateCreator<ShoeSlice> = (set) => ({
  shoes: [],
  fetchShoes: async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/shoes?populate=*`)
    const {data: resJson} = await res.json()
    console.log("🚀 ~ file: ShoeSlice.ts:42 ~ fetchShoes: ~ resJson:", resJson)
    set({shoes: resJson})
  }
})