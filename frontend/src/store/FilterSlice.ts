import { CategoryType } from '@/@types/CategoryType'
import { ColorType } from '@/@types/ColorType'
import { GenderType } from '@/@types/GenderType'
import { SelectedFilter } from '@/@types/SelectedFilter'
import { SizeType } from '@/@types/SizeType'
import { StateCreator } from 'zustand'




export interface FilterSlice {
  selectedFilters: SelectedFilter[]
  sizeSelected: SizeType | null
  colorSelected: ColorType | null
  categorySelected: CategoryType | null
  genderSelected: GenderType | null
  priceSelected: number
  totalShoes: number
  currentPage: number
  pageCount: number
  setSizeSelected: (size: SizeType | null) => void
  setColorSelected: (color: ColorType | null) => void
  setCategorySelected: (category: CategoryType | null) => void
  setGenderSelected: (gender: GenderType | null) => void
  setPriceSelected: (price: number) => void
  addFilter: (filter: SelectedFilter) => void
  removeFilter: (filter: SelectedFilter) => void
  resetFilter: () => void
  setTotalShoes: (total: number) => void
  setCurrentPage: (page: number, action: 'increase' | 'decrease' | 'set') => void
  setPageCount: (pageLength: number) => void
}


export const createFilterSlice: StateCreator<FilterSlice> = (set, get) => ({
  selectedFilters: [],
  sizeSelected: null,
  colorSelected: null,
  categorySelected: null,
  genderSelected: null,
  totalShoes: 0,
  priceSelected: 0,
  currentPage: 1,
  pageCount: 1,

  setSizeSelected:(size: SizeType | null) => {
    let sizeSelected = get().sizeSelected
    sizeSelected = size
    set({ sizeSelected })
  },

  setColorSelected:(color: ColorType | null) => {
    let colorSelected = get().colorSelected
    colorSelected = color
    set({ colorSelected })
  },

  setCategorySelected: (category: CategoryType | null) => {
    let categorySelected = get().categorySelected
    categorySelected = category
    set({ categorySelected })
  },

  setGenderSelected: (gender: GenderType | null) => {
    let genderSelected = get().genderSelected
    genderSelected = gender
    set({ genderSelected })
  },

  setPriceSelected: (price: number) => {
    let priceSelected = get().priceSelected
    priceSelected = price
    set({ priceSelected })
  },

  addFilter: (filter: SelectedFilter) => {
    const selectedFilters = get().selectedFilters
    const filterExists = selectedFilters.some(
      selectedFilter =>
        selectedFilter.name === filter.name &&
        selectedFilter.category === filter.category
    )
    if(!filterExists) {
      const updatedFilters = [...selectedFilters, filter]
      set({ selectedFilters: updatedFilters })
    }
  },

  removeFilter: (filter: SelectedFilter) => {
    const selectedFilters = get().selectedFilters
    const updatedFilters = selectedFilters.filter(
      selectedFilter =>
        selectedFilter.name !== filter.name ||
        selectedFilter.category !== filter.category
    )
    set({ selectedFilters: updatedFilters })
  },

  resetFilter: () => {
    set({ selectedFilters: [] })
  },

  setTotalShoes: (total: number) => {
    let totalShoes =  get().totalShoes
    totalShoes = total
    set({ totalShoes })
  },

  setCurrentPage: (page: number, action: 'increase' | 'decrease' | 'set') => {
    let currentPage = get().currentPage
    const pageCount = get().pageCount
    if(action === 'increase' && currentPage < pageCount) {
      currentPage += page
    }
    if(action === 'decrease' && currentPage <= pageCount && currentPage > 1) {
      currentPage -= page
    }
    if(action === 'set') {
      currentPage = page
    }
    set({ currentPage })
  },

  setPageCount: (pageLength: number) => {
    let pageCount = get().pageCount
    pageCount = pageLength
    set({ pageCount })
  }

})