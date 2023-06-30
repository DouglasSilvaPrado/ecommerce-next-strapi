import { GenderType } from '@/@types/GenderType'
import { fetchGenders } from '@/services/genderService'
import { useAppStore } from '@/store/store'
import { useEffect, useState } from 'react'

export const useGender = () => {

  const { genderSelected, setGenderSelected, removeFilter} = useAppStore()
  const [genders, setGenders] = useState<GenderType[]>([])


  const handleGender =  async() => {
    const gendersData = await fetchGenders()
    setGenders(gendersData)
  }

  const handleGenderSelected = (gender: GenderType) => {
    if(gender.attributes.gender === genderSelected?.attributes.gender) {
      setGenderSelected(null)
      removeFilter({
        category: 'genders',
        subCategory: 'gender',
        name: genderSelected.attributes.gender,
      });
      return
    }
    setGenderSelected(gender)
  }

  useEffect(() => {
    handleGender()
  }, [])

  return { genders, genderSelected, handleGenderSelected }
}
