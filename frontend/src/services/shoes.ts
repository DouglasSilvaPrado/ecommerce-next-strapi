import { SelectedFilter } from '@/@types/SelectedFilter'


export const fetchShoeByID = async (id: number) => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/shoes/${id}?populate=*`)
    const {data: resJson} = await res.json()
    return resJson
  } catch (error) {
    console.error(error)
  }
  
}

export const getShoes = async (url: string) => {
  try {
    const res = await fetch(url)
    const resJson = await res.json()
    return resJson
  } catch (error) {
    console.error(error)
  }
  
}

export const fetchShoesByFilter = async(selectedFilters: SelectedFilter[], price: number = 0, page: number = 1) => {
  const queryParams = selectedFilters.map((filter) => 
    `filters[${filter.category}][${filter.subCategory}][$in]=${filter.name}`)
    .join('&')
  const url = `
    ${process.env.NEXT_PUBLIC_API_URL}/api/shoes?populate=*&${queryParams}&filters[price][$gte]=${price}&pagination[page]=${page}&pagination[pageSize]=9`
  try {
    const data = await getShoes(url)
    return data
  } catch (error) {
    console.error(error)
  }
}