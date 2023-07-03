import { Product } from '@/@types/Product';
import { Shoe } from '@/@types/Shoe';
import { StateCreator } from 'zustand';

export interface CartSlice {
  cart: Product[],
  favorites: Product[],
  addToCart: (product: Product) => void
  addToFavorites: (product: Product) => void
  removeToCart: (productId: number) => void
  updateCart:(productId: number, action: 'increase' | 'decrease') => void
}


export const createCartSlice:StateCreator<CartSlice> = (set, get) => ({
  cart: [],
  favorites: [],
  addToCart:(product) => {
    const cart = get().cart
    const findProduct = cart.find((item) => 
      item.id === product.id &&
      item.attributes.color === product.attributes.color &&
      item.attributes.size === product.attributes.size
    )

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
  }
  
})