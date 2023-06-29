export const fetchCategories = async() => {
  const url = `${process.env.NEXT_PUBLIC_API_URL}/api/categories`
  try {
    const res = await fetch(url)
    const { data: resJson } = await res.json()
    return resJson
  } catch (error) {
    console.error(error);
  }
}