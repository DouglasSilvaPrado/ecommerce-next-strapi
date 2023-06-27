export const fetchSizes = async () => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/sizes/`)
    const {data: resJson} = await res.json()
    return resJson
  } catch (error) {
    console.error(error)
  }
}