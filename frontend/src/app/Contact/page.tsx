import { CheckoutDetails } from '@/components/CheckoutDetails/CheckoutDetails'
import { FormCheckout } from '@/components/FormCheckout/FormCheckout'

export default function Page() {
  return (
    <div className='flex flex-col md:flex-row gap-4'>

    <div className='order-last md:order-first md:w-6/12'>
        <FormCheckout />
      </div>
     
     <div className='order-first md:order-last md:w-6/12'>
        <CheckoutDetails />
      </div>
    </div>
  )
}