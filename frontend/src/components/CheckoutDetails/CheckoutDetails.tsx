import React from 'react'
import { Summary } from '../Summary'
import { OrderDetails } from '../OrderDetails/OrderDetails'

export const CheckoutDetails = () => {
  return (
    <div>
      <div className='my-6'>
        <OrderDetails />  
      </div>
      <div className='my-6'>
          <Summary.Root>
            <Summary.Title title='Order Details' />
            <Summary.Content />
          </Summary.Root>
      </div>
    </div>
  )
}
