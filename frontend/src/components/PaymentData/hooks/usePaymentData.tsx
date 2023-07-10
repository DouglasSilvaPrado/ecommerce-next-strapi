import { Items, Payment } from '@/@types/Payment'
import { generateCheckoutLink } from '@/services/paymentService'
import { useAppStore } from '@/store/store'
import { useEffect, useState } from 'react'

export const usePaymentData = () => {
  const { cart, shippingValue } = useAppStore()
  const [linkPayment, setLinkPayment] = useState('')


  const formatProductForPaidMarket = () => {
    const items = cart.map(( item ) => {
      return  {
        title: item.attributes.name,
        unit_price: item.attributes.price,
        quantity: item.attributes.quantity!,
        picture_url: `${process.env.NEXT_PUBLIC_API_URL}${item.attributes.image}`
      }
    })
    return items
  }

  const generatePaidMarketLink = async () => {
    const items: Items[] = formatProductForPaidMarket()
    const shipping = shippingValue

    const paymentData: Payment = {
      items,
      shipments: {
        cost: shipping
      }
    }
    const data = await generateCheckoutLink(paymentData)
    setLinkPayment(data.init_point)
  }

  useEffect(() => {
    generatePaidMarketLink()
  }, [cart, shippingValue])
  return { linkPayment }
}
