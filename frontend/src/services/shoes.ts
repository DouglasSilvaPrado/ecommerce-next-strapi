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
    console.log("🚀 ~ file: shoes.ts:19 ~ getShoes ~ resJson:", resJson)
    return resJson
  } catch (error) {
    console.error(error)
  }
  
}

export const fetchShoesByFilter = async(selectedFilters: SelectedFilter[]) => {
  const queryParams = selectedFilters.map((filter) => 
    `filters[${filter.category}][${filter.subCategory}][$in]=${filter.name}`)
    .join('&')
  const url = `${process.env.NEXT_PUBLIC_API_URL}/api/shoes?populate=*&${queryParams}`
  try {
    const data = await getShoes(url)
    return data
  } catch (error) {
    console.error(error)
  }
}