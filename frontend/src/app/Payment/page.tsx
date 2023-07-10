import { CheckoutDetails } from '@/components/CheckoutDetails/CheckoutDetails'
import { PaymentData } from '@/components/PaymentData/PaymentData'
import React from 'react'


export default function Page() {
  return (
    <div className='flex flex-col sm:flex-row gap-4'>

      <div className='order-last sm:order-first sm:w-6/12'>
        <PaymentData />
      </div>
    
      <div className='order-first sm:order-last sm:w-6/12'>
        <CheckoutDetails />
      </div>

    </div>
  )
}
