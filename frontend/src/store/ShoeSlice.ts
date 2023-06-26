import { Shoe } from '@/@types/Shoe';
import { StateCreator } from 'zustand';

export interface ShoeSlice {
  shoes: Shoe[]
  fetchShoes: () => void
}


export const createShoeSlice:StateCreator<ShoeSlice> = (set) => ({
  shoes: [],
  fetchShoes: async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/shoes?populate=*`)
    const {data: resJson} = await res.json()
    set({shoes: resJson})
  }
})