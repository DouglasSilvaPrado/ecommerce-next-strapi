import { create } from 'zustand'
import { CartSlice, createCartSlice } from './CartSlice'

import { ShoeSlice, createShoeSlice } from './ShoeSlice'
import { FilterSlice, createFilterSlice } from './FilterSlice'

type StoreState = ShoeSlice & CartSlice & FilterSlice

export const useAppStore = create<StoreState>()((...a) => ({
  ...createShoeSlice(...a),
  ...createCartSlice(...a),
  ...createFilterSlice(...a)
}))
