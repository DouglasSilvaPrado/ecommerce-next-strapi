import { ColorType } from '@/@types/ColorType'
import { fetchColors } from '@/services/colorService'
import { useAppStore } from '@/store/store'
import { useEffect, useState } from 'react'

export const useColor = () => {

  const { colorSelected, setColorSelected, removeFilter } = useAppStore()

  const [colors, setColors] = useState<ColorType[]>([])


  const handleColor =  async() => {
    const colorData = await fetchColors()
    setColors(colorData)
  }

  const handleColorSelected = (color: ColorType) => {
    if(color.attributes.name === colorSelected?.attributes.name){
      setColorSelected(null)
      removeFilter({
        category: 'colors',
        subCategory: 'name',
        name: colorSelected.attributes.name,
      });
      return
    }
    setColorSelected(color)
  }

  useEffect(() => {
    handleColor()
  }, [])

  return { colors, colorSelected, handleColorSelected }
}
