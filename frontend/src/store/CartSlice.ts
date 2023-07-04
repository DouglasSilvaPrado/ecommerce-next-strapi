import { Product } from '@/@types/Product';
import { StateCreator } from 'zustand';

export interface CartSlice {
  cart: Product[],
  favorites: Product[],
  totalItems: number,
  addToCart: (product: Product) => void
  addToFavorites: (product: Product) => void
  removeToCart: (productId: string) => void
  updateCart:(productId: string, action: 'increase' | 'decrease') => void
}


export const createCartSlice:StateCreator<CartSlice> = (set, get) => ({
  cart: [],
  favorites: [],
  totalItems: 0,

  addToCart:(product) => {
    const cart = get().cart
    let totalItems = get().totalItems

    const findProduct = cart.find((item) => item.id === product.id)

    if(findProduct){
      findProduct.attributes.quantity! += 1
      totalItems +=1
    } else {
      cart.push({ ...product, attributes:{...product.attributes, quantity: 1}});
      totalItems +=1
    }
    set({ cart, totalItems})
  },

  removeToCart:(productId) => {
    const cart = get().cart
    let totalItems = get().totalItems
    const findProduct = cart.find((item) => item.id === productId)
    totalItems -= findProduct?.attributes.quantity!
    set({ cart: cart.filter((item) => item.id !== productId), totalItems})
  },

  updateCart: (productId , action) => {
    const cart = get().cart
    let totalItems = get().totalItems
    const findProduct = cart.find((item) => item.id === productId)
    if(findProduct){
      if(action === 'decrease'){
        if(findProduct.attributes.quantity! > 1)
          findProduct.attributes.quantity = findProduct.attributes.quantity! - 1
          totalItems -= 1
      }else {
        findProduct.attributes.quantity! += 1
        totalItems += 1
      }

    }
    set ({cart, totalItems})
  },

  addToFavorites: (product: Product) => {
    const favorites = get().favorites;
    const findProductIndex = favorites.findIndex((favorite) => favorite.id === product.id);
  
    if (findProductIndex !== -1) {
      favorites.splice(findProductIndex, 1);
    } else {
      favorites.push({ ...product });
    }
  
    set({ favorites });
  },
  
})