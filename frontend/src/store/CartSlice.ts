import { StateCreator } from 'zustand';
import { Shoe } from './ShoeSlice';


export interface CartSlice {
  cart: Shoe[]
  addToCart: (shoe: Shoe) => void
  removeToCart: (shoeId: number) => void
  updateCart:(shoeId: number, action: 'increase' | 'decrease') => void
}


export const createCartSlice:StateCreator<CartSlice> = (set, get) => ({
  cart: [],
  addToCart:(shoe) => {
    const cart = get().cart
    const findShoe = cart.find((item) => item.id === shoe.id)

    if(findShoe){
      findShoe.attributes.quantity! += 1
    } else {
      cart.push({ ...shoe, attributes:{...shoe.attributes, quantity: 1}});
    }
    set({ cart })
  },

  removeToCart:(shoeId) => {
    set({ cart: get().cart.filter((item) => item.id !== shoeId) })
  },

  updateCart: (shoeId , action) => {
    const cart = get().cart
    const findShoe = cart.find((item) => item.id === shoeId)
    if(findShoe){
      if(action === 'decrease'){
        findShoe.attributes.quantity = findShoe.attributes.quantity! > 1
          ? findShoe.attributes.quantity! - 1
          : findShoe.attributes.quantity!
      }else {
        findShoe.attributes.quantity! += 1
      }

    }
    set ({cart})
  }
})