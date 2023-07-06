import React, { useMemo } from 'react'
import { Rubik } from 'next/font/google'
const rubik = Rubik({ subsets: ['latin'] })

type CartCardPriceProps = {
  quantity: number,
  price: number
}
export const CartCardPrice = ({ price, quantity}: CartCardPriceProps) => {
  const totalProduct = useMemo(() => {
    return quantity * price
  }, [quantity])

  return (
    <p className={`${rubik.className} text-blue text-xl font-semibold mb-2 lg:hidden`}>
      ${totalProduct.toFixed(2)}
    </p>
  )
}
