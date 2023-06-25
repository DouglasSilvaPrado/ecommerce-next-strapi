import { Product } from '@/@types/Product';
import { StateCreator } from 'zustand';

export interface CartSlice {
  cart: Product[]
  addToCart: (product: Product) => void
  removeToCart: (productId: number) => void
  updateCart:(productId: number, action: 'increase' | 'decrease') => void
}


export const createCartSlice:StateCreator<CartSlice> = (set, get) => ({
  cart: [],
  addToCart:(product) => {
    const cart = get().cart
    const findProduct = cart.find((item) => 
      item.id === product.id &&
      item.attributes.color === product.attributes.color &&
      item.attributes.size === product.attributes.size
    )
    console.log("sho")

    if(findProduct){
      findProduct.attributes.quantity! += 1
    } else {
      cart.push({ ...product, attributes:{...product.attributes, quantity: 1}});
    }
    set({ cart })
  },

  removeToCart:(productId) => {
    set({ cart: get().cart.filter((item) => item.id !== productId) })
  },

  updateCart: (productId , action) => {
    const cart = get().cart
    const findProduct = cart.find((item) => item.id === productId)
    if(findProduct){
      if(action === 'decrease'){
        findProduct.attributes.quantity = findProduct.attributes.quantity! > 1
          ? findProduct.attributes.quantity! - 1
          : findProduct.attributes.quantity!
      }else {
        findProduct.attributes.quantity! += 1
      }

    }
    set ({cart})
  }
})