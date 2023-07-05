import { Product } from '@/@types/Product';
import { StateCreator } from 'zustand';

export interface CartSlice {
  cart: Product[],
  favorites: Product[],
  totalItems: number,
  totalPrice: number,
  shippingValue: number,
  addToCart: (product: Product) => void
  addToFavorites: (product: Product) => void
  removeToCart: (product: Product) => void
  updateCart:(product: Product, action: 'increase' | 'decrease') => void
  setShippingValue: (value: number) => void
}


export const createCartSlice:StateCreator<CartSlice> = (set, get) => ({
  cart: [],
  favorites: [],
  totalItems: 0,
  totalPrice: 0,
  shippingValue: 0,

  addToCart:(product) => {
    const cart = get().cart
    let totalItems = get().totalItems
    let totalPrice = get().totalPrice

    const findProduct = cart.find((item) => 
      item.id === product.id &&
      item.attributes.color === product.attributes.color &&
      item.attributes.size === product.attributes.size
    )

    if(findProduct){
      findProduct.attributes.quantity! += 1
      totalItems += 1
      totalPrice += findProduct.attributes.price
    } else {
      cart.push({ ...product, attributes:{...product.attributes, quantity: 1}});
      totalItems += 1
      totalPrice += product.attributes.price
    }
    set({ cart, totalItems, totalPrice})
  },

  removeToCart:(product: Product) => {
    const cart = get().cart
    let totalItems = get().totalItems
    let totalPrice = get().totalPrice

    const findProduct = cart.find((item) => 
      item.id === product.id &&
      item.attributes.color === product.attributes.color &&
      item.attributes.size === product.attributes.size
    )

    totalItems -= findProduct!.attributes.quantity!
    totalPrice -= (findProduct!.attributes.quantity! * findProduct!.attributes.price)
    set({ cart: cart.filter((item) => item !== findProduct), totalItems, totalPrice})
  },

  updateCart: (product: Product , action) => {
    const cart = get().cart
    let totalItems = get().totalItems
    let totalPrice = get().totalPrice

    const findProduct = cart.find((item) => 
      item.id === product.id &&
      item.attributes.color === product.attributes.color &&
      item.attributes.size === product.attributes.size
    )
    
    
    if(findProduct){
      if(action === 'decrease'){
        if(findProduct.attributes.quantity! > 1) {
          findProduct.attributes.quantity = findProduct.attributes.quantity! - 1
          totalItems -= 1
          totalPrice -= findProduct.attributes.price
        }
      }else {
        findProduct.attributes.quantity! += 1
        totalItems += 1
        totalPrice += findProduct.attributes.price
      }

    }
    set ({cart, totalItems, totalPrice})
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
  
  setShippingValue: (value: number) =>  {
    let shippingValue = get().shippingValue
    shippingValue = value
    set({ shippingValue })
  }
})