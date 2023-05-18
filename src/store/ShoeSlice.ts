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
    gender: string,
    size: number,
    badge: string,
    type: string,
    colors: Object,
    quantity?: number,
    image: {
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
    const res = await fetch('http://localhost:1337/api/shoes?populate=image')
    const resJson = await res.json()
    set({shoes: resJson.data})
  }
})