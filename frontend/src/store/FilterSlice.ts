import { CategoryType } from '@/@types/CategoryType'
import { ColorType } from '@/@types/ColorType'
import { GenderType } from '@/@types/GenderType'
import { SizeType } from '@/@types/SizeType'
import { StateCreator } from 'zustand'


type SelectedFilter = {
  name: string
  category: string
  subCategory: string
}

export interface FilterSlice {
  selectedFilters: SelectedFilter[]
  sizeSelected: SizeType | null
  colorSelected: ColorType | null
  categorySelected: CategoryType | null
  genderSelected: GenderType | null
  setSizeSelected: (size: SizeType | null) => void
  setColorSelected: (color: ColorType | null) => void
  setCategorySelected: (category: CategoryType | null) => void
  setGenderSelected: (gender: GenderType | null) => void
  addFilter: (filter: SelectedFilter) => void
  removeFilter: (filter: SelectedFilter) => void
  resetFilter: () => void
}


export const createFilterSlice: StateCreator<FilterSlice> = (set, get) => ({
  selectedFilters: [],
  sizeSelected: null,
  colorSelected: null,
  categorySelected: null,
  genderSelected: null,

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
  }
})