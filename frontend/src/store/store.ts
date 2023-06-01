import { create } from 'zustand'
import { CartSlice, createCartSlice } from './CartSlice'

import { ShoeSlice, createShoeSlice } from './ShoeSlice'

type StoreState = ShoeSlice & CartSlice

export const useAppStore = create<StoreState>()((...a) => ({
  ...createShoeSlice(...a),
  ...createCartSlice(...a)
}))
