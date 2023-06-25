import { ColorType } from './ColorType'
import { SizeType } from './SizeType'

export type Product = {
  id: number,
  attributes: {
    name: string,
    price: number,
    description: string,
    quantity?: number,
    tag: string,
    category: string,
    sku: string,
    image: string,
    color: ColorType
    size: SizeType
  }
}