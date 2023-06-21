export const fetchShoeByID = async (id: number) => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/shoes/${id}?populate=*`)
    const {data: resJson} = await res.json()
    return resJson
  } catch (error) {
    console.error(error)
  }
  
}