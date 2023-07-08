import React from 'react'
import { Rubik } from 'next/font/google'
import { PrimaryButton } from '../Buttons/Primary'
import Link from 'next/link'
const rubik = Rubik({ subsets: ['latin'] })


export const PaymentData = () => {
  return (
    <div className='bg-faWhite rounded-2xl p-4 my-6'>
      <h2 className={`${rubik.className} mb-2 font-semibold text-xl`}>Payment Data</h2>
      <p className='font-semibold text-sm my-2'>
        Payment Options: We accept Visa, Mastercard, Bank Transfer and many other payment methods.
      </p>
      <Link href={'/#'}>
       <PrimaryButton text='Pay now!' className='py-3 w-full text-bold text-base'/>
      </Link>
      <p className='font-semibold text-sm my-2'>
        You will be redirected to 
        <span className='font-bold mx-1'>
          Mercado Pago 
        </span>
        to make the payment.
      </p>
    </div>
  )
}
