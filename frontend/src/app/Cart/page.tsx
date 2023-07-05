'use client'
import { Rubik } from 'next/font/google'
import { CartCard } from '@/components/CartCard/CartCard';
import { useAppStore } from '@/store/store';
import { GridCarousel } from '@/components/GridCarousel/GridCarousel';
import { Summary } from '@/components/Summary';
import React, { useEffect } from 'react';
import { ProductCard } from '@/components/Card/Product';

const rubik = Rubik({ subsets: ['latin'] })


export default function Page() {
  const { cart, fetchShoes, shoes  } = useAppStore()

  useEffect(() => {
    fetchShoes()
  },[])

  return (
    <div>

      <div className='mb-6'>
        <h2 className='font-semibold text-2xl mb-2'>Saving to celebrate </h2>
        <p className='font-semibold text-xs'>Enjoy up to 60% off thousands of styles during the End of Year sale - while suppiles last. No code needed.</p>
      </div>

      <div className='sm:flex'>

        {/* cart */}
        <div className='sm:mr-4 sm:w-7/12'>
          {cart.length > 0 ? 
            <div>
              <div className='bg-faWhite rounded-2xl p-4'>
                  <div className='mb-2'>
                    <h2 className={`${rubik.className} mb-2 font-semibold text-xl`}>Your bag</h2>
                    <p className='text-sm'>Items in your bag not reserved- check out now to make them yours.</p>
                  </div>
                  {cart.map((item) => (
                    <CartCard  key={item.id} product={item}/>
                  ))}
                </div>
            </div>
            :
            <div className='bg-faWhite rounded-2xl p-4'>
              <p className='font-bold text-xl'>Your shopping cart is empty</p>
            </div>
          }
        
        </div>

        {/* summary */}
        <div className='my-6 sm:my-0 sm:w-5/12'>
          <Summary.Root>
            <Summary.Title title='Order Summary' />
            <Summary.Content />
            <Summary.Action />
          </Summary.Root>
        </div>

      </div>

      <div className='my-6'>
        <div>
          <div className='flex justify-between items-center my-6'>
            <h3 className='font-semibold text-xl my-2'>You may also like</h3>
          </div>
          <div>
            <GridCarousel >
              {shoes.map((shoe) => (
                <React.Fragment key={shoe.id}>
                  <ProductCard shoe={shoe} key={shoe.id} />
                </React.Fragment>
              ))}
            </GridCarousel>
          </div>
        </div>
      </div>

    </div>
  )
}