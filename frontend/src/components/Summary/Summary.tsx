'use client'

import { Rubik } from 'next/font/google'
import { useAppStore } from '@/store/store'
import Link from 'next/link'
import { SecondaryButton } from '../Buttons/Secondary'

const rubik = Rubik({ subsets: ['latin'] })


export const Summary = () => {
  const { totalItems, totalPrice } = useAppStore()

  return (
    <div className='bg-faWhite rounded-2xl p-4'>
      <h2 className={`${rubik.className} mb-2 font-semibold text-xl`}>Order Summary</h2>
      <div>
        <div className='flex justify-between font-semibold my-4'>
          <p>{totalItems} ITEMS</p>
          <p>${totalPrice}</p>
        </div>
        <div className='flex justify-between font-semibold my-4'>
          <p>Delivery</p>
          <p>$6.99</p>
        </div>
        <div className='flex justify-between font-semibold my-4'>
          <p>Sales Tax</p>
          <p>-</p>
        </div>
        <div className={`${rubik.className} flex justify-between font-semibold text-xl my-4`}>
          <p>Total</p>
          <p>${totalPrice}</p>
        </div>
      </div>
      <Link href="/Checkout">
        <SecondaryButton text="CHECKOUT" className='py-4 w-full'/>
      </Link>
    </div>
  )
}
