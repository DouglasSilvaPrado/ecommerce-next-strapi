import { FormCheckoutProps } from '@/@types/FormCheckoutProps'
import { schemaCheckout } from '@/schema/schemaCheckout'
import { useAppStore } from '@/store/store'
import { maskPhoneNumber } from '@/utils/maskPhoneNumber'
import { maskZipCode } from '@/utils/maskZipCode'
import { zodResolver } from '@hookform/resolvers/zod'
import { useEffect } from 'react'
import { useForm } from 'react-hook-form'

export const useFormCheckout = () => {
  const { setShippingValue } = useAppStore()

  const {
    register,
    handleSubmit,
    trigger,
    watch,
    setValue,
    formState: { errors },
  } = useForm<FormCheckoutProps>({
    criteriaMode: 'all',
    mode: 'all',
    resolver: zodResolver(schemaCheckout),
    defaultValues: {
      contact: {
        email: '',
      },
      shippingAddress: {
        firstName: '',
        lastName: '',
        zipCode: '',
        phoneNumber: ''
      }
    }
  })

  const phoneNumber = watch('shippingAddress.phoneNumber')
  const zipCode = watch('shippingAddress.zipCode')

  const handleFormSubmit = async (data: FormCheckoutProps) => {
    console.log(data)
  }

  useEffect(() => {
    if(phoneNumber.length < 11) return
    setValue('shippingAddress.phoneNumber', maskPhoneNumber(phoneNumber))
    trigger('shippingAddress.phoneNumber')
  }, [phoneNumber])

  useEffect(() => {
    if(zipCode.length < 8) return
    setValue('shippingAddress.zipCode', maskZipCode(zipCode))
    trigger('shippingAddress.zipCode')
  }, [zipCode])

  return { handleSubmit, handleFormSubmit, setShippingValue, register, errors }
}