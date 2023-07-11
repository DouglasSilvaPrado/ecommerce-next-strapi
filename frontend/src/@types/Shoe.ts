import { CategoryType } from './CategoryType'
import { ColorType } from './ColorType'
import { GenderType } from './GenderType'
import { ImageType } from './ImageType'
import { SizeType } from './SizeType'

export interface Shoe {
  id: number,
  attributes: {
    name: string,
    price: number,
    description: string,
    quantity?: number,
    tag: string,
    sku: string,
    categories: {
      data: CategoryType[]
    },
    image: string,
    gallery: {
      data: ImageType[]
    },
    colors: {
      data: ColorType[]
    },
    sizes: {
      data: SizeType[]
    },
    gender: {
      data: GenderType[]
    }
  }
}