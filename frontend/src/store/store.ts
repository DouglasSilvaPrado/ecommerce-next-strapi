import { create } from 'zustand'
import { CartSlice, createCartSlice } from './CartSlice'

import { ShoeSlice, createShoeSlice } from './ShoeSlice'
import { FilterSlice, createFilterSlice } from './FilterSlice'
import { ClientSlice, createClientSlice } from './ClientSlice'

type StoreState = ShoeSlice & CartSlice & FilterSlice & ClientSlice

export const useAppStore = create<StoreState>()((...a) => ({
  ...createShoeSlice(...a),
  ...createCartSlice(...a),
  ...createFilterSlice(...a),
  ...createClientSlice(...a)
}))
