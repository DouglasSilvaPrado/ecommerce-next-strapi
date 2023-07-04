import { CategoryType } from './CategoryType'
import { ColorType } from './ColorType'
import { SizeType } from './SizeType'

export type Product = {
  id: string,
  attributes: {
    name: string,
    price: number,
    description: string,
    quantity?: number,
    tag: string,
    categories: {
      data: CategoryType[]
    }
    sku: string,
    image: string,
    color: ColorType
    size: SizeType
  }
}