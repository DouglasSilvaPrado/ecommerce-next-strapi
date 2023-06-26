import { ColorType } from './ColorType'
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
    category: string,
    sku: string,
    image:{
      data: ImageType
    },
    gallery: {
      data: ImageType[]
    },
    colors: {
      data: ColorType[]
    },
    sizes: {
      data: SizeType[]
    }
  }
}