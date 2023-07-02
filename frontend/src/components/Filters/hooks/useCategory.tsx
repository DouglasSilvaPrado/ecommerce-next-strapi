import { CategoryType } from '@/@types/CategoryType';
import { fetchCategories } from '@/services/categoriesService';
import { useAppStore } from '@/store/store';
import { useEffect, useState } from 'react';

export const useCategory = () => {

  const {setCategorySelected, removeFilter, categorySelected} = useAppStore()
  const [categories, setCategories] = useState<CategoryType[]>([])

  const handleCategories = async() => {
    const categoriesData = await fetchCategories()
    setCategories(categoriesData)
 }

  const handleCategorySelected = (category: CategoryType) => {
    if(category.attributes.category === categorySelected?.attributes.category) {
      setCategorySelected(null)
      removeFilter({
        category: 'categories',
        subCategory: 'category',
        name: categorySelected.attributes.category,
      });
      return
    }
    setCategorySelected(category)
  }

  useEffect(() => {
    handleCategories()
  }, [])

  return { categories, categorySelected, handleCategorySelected }
}
