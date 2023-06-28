import { StateCreator } from 'zustand'


type SelectedFilter = {
  name: string
  category: string
  subCategory: string
}

export interface FilterSlice {
  selectedFilters: SelectedFilter[]
  addFilter: (filter: SelectedFilter) => void
  removeFilter: (filter: SelectedFilter) => void
  resetFilter: () => void
}


export const createFilterSlice: StateCreator<FilterSlice> = (set, get) => ({
  selectedFilters: [],

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