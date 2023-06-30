import { useCategory } from '../../hooks/useCategory'
import { Open_Sans } from 'next/font/google'


const open_sans = Open_Sans({ subsets: ['latin'] })

export const CategoryFilter = () => {

  const { categories, categorySelected, handleCategorySelected } = useCategory()

  return (
    <div className='m-4'>
    <h3 className='font-semibold mb-3'>CATEGORY</h3>
        {categories.map((category) => (
          <div className={`flex items-center font-semibold ${open_sans.className}`} key={category.id}>
            <input 
              type='checkbox'
              value={category.attributes.category}
              defaultChecked={category.attributes.category === categorySelected?.attributes.category}
              className='w-5 h-5 accent-darkGray'
              onClick={() => handleCategorySelected(category)}
            /> 
            <span className='ml-4'>{category.attributes.category} </span>
          </div>
        ))}
  </div>
  )
}
