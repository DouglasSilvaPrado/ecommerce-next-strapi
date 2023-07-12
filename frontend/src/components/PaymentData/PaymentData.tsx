'use client'

import { Rubik } from 'next/font/google'
import { PrimaryButton } from '../Buttons/Primary'
import { usePaymentData } from './hooks/usePaymentData'
const rubik = Rubik({ subsets: ['latin'] })


export const PaymentData = () => {

  const { linkPayment } = usePaymentData()

  return (
    <div className='bg-faWhite rounded-2xl p-4 mb-6 sm:mt-6'>
      <h2 className={`${rubik.className} mb-2 font-semibold text-xl`}>Payment Data</h2>
      <p className='font-semibold text-sm my-2'>
        Payment Options: We accept Visa, Mastercard, Bank Transfer and many other payment methods.
      </p>
      <a href={linkPayment}>
       <PrimaryButton text='Pay now!' className='py-3 w-full text-bold text-base'/>
      </a>
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
