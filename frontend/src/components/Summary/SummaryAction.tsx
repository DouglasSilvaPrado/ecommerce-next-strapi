import Link from 'next/link'
import React from 'react'
import { SecondaryButton } from '../Buttons/Secondary'

export const SummaryAction = () => {
  return (
    <Link href="/Checkout">
      <SecondaryButton text="CHECKOUT" className='py-4 w-full mt-4'/>
    </Link>
    )
}
