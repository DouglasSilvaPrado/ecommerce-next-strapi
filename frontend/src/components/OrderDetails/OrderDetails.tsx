'use client'

import React from 'react'
import { Rubik } from 'next/font/google'
import { useAppStore } from '@/store/store'
import { GridCarousel } from '../GridCarousel/GridCarousel'
import { CartCard } from '../CartCard'


const rubik = Rubik({ subsets: ['latin'] })

export const OrderDetails = () => {

  const { cart } = useAppStore()
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1023 },
      items: 2
    },
    tablet: {
      breakpoint: { max: 1023, min: 639 },
      items: 1
    },
    mobile: {
      breakpoint: { max: 639, min: 0 },
      items: 1
    }
  };

  return (
    <div className='bg-faWhite rounded-2xl p-4'>
      <h2 className={`${rubik.className} mb-2 font-semibold text-xl`}>Order Details</h2>
      {cart.length > 0 ? 
      <GridCarousel responsive={responsive} >
        {cart.map((product) => (
            <React.Fragment key={product.id}>
              <CartCard.Root>
                <CartCard.Image image={product.attributes.image}/>
                <CartCard.Content>
                  <CartCard.PrimaryInfo 
                    productName={product.attributes.name}
                    color={product.attributes.color}
                    quantity={product.attributes.quantity!}
                    price={product.attributes.price}
                    categories={product.attributes.categories.data}
                  />
                  <CartCard.SecondaryInfo>
                    <CartCard.SizeInfo size={product.attributes.size.attributes.size}/>
                    <CartCard.Quantity quantity={product.attributes.quantity!} />
                  </CartCard.SecondaryInfo>
                  <CartCard.Price price={product.attributes.price} quantity={product.attributes.quantity!}/>
                </CartCard.Content>
              </CartCard.Root>
            </React.Fragment>
          ))}
      </GridCarousel>
         : 
        <p className='font-bold text-xl'>Your shopping cart is empty</p>
      }
     
    </div>
  )
}
