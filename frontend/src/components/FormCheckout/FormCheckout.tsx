'use client'

import  { Rubik } from 'next/font/google'
import { Input } from '../Input'
import { FiArrowRight } from "react-icons/fi";
import { useFormCheckout } from '@/hooks/useFormCheckout';


const rubik = Rubik({subsets: ['latin']})

export const FormCheckout = () => {

  const { handleSubmit, handleFormSubmit, handleShippingValue, register, errors } = useFormCheckout()

  return (
    <form onSubmit={handleSubmit(handleFormSubmit)}>

      {/* Contact */}
      <div className='my-5'>
        <div className='my-5'>
          <h3 className={`${rubik.className} font-semibold text-2xl mb-2`}>Contact Details</h3>
          <p className='font-semibold text-sm'>We will use these details to keep you inform about your delivery.</p>
        </div>
        <Input.Root>
          <Input.Content name='email' type='email' placeholder='Email*' register={register('contact.email')} />
          <Input.Error error={errors.contact?.email?.message}/>
        </Input.Root>
      </div>

      {/* Shipping */}
      <div>
        <h3 className={`${rubik.className} font-semibold text-xl mb-2`}>Shipping Address</h3>

        <Input.Root>
          <Input.Content name='firstName' type='text' placeholder='First Name*' register={register('shippingAddress.firstName')}/>
          <Input.Error error={errors.shippingAddress?.firstName?.message}/>
        </Input.Root>

        <Input.Root>
          <Input.Content name='lastName' type='text' placeholder='Last Name*' register={register('shippingAddress.lastName')}/>
          <Input.Error error={errors.shippingAddress?.lastName?.message}/>
        </Input.Root>

        <Input.Root>
          <Input.Content name='zipCode' type='text' placeholder='ZipCode*' register={register('shippingAddress.zipCode')}/>
          <Input.Helper helper='Enter your zip code with numbers only'/>
          <Input.Error error={errors.shippingAddress?.zipCode?.message}/>
        </Input.Root>

        <Input.Root>
          <Input.Content name='phoneNumber' type='text' placeholder='Phone Number*' register={register('shippingAddress.phoneNumber')}/>
          <Input.Helper helper='helper : (99) 99999-9999'/>
          <Input.Error error={errors.shippingAddress?.phoneNumber?.message}/>
        </Input.Root>

      </div>

      {/* Shipping select*/}
      <div className='my-5 text-darkGray'>
        <h3 className={`${rubik.className} font-semibold text-xl my-5`}>Shipping Address</h3>
        
        <div className='my-4'>
          <div className='bg-faWhite rounded-xl p-4 cursor-pointer' onClick={() => handleShippingValue(6)}>
            <div className='flex justify-between items-center mb-2'>
              <h4 className={`${rubik.className} text-xl font-semibold`}>Standard Delivery</h4>
              <p className={`${rubik.className} font-semibold text-blue`}>$6.00</p>
            </div>
              <p className='text-xs font-semibold text-opacity-80 w-9/12'>Enter your address to see when you’ll get your order</p>
          </div>
        </div>

        <div>
          <div className='border border-darkGray rounded-xl p-4 cursor-pointer' onClick={() => handleShippingValue(0)}>
            <div className='flex justify-between items-center mb-2'>
              <h4 className={`${rubik.className} text-xl font-semibold`}>Collect in store</h4>
              <p className={`${rubik.className} font-semibold`}>Free</p>
            </div>
              <p className='text-xs font-semibold w-9/12'>Pay now, collect in store</p>
          </div>
        </div>

      </div>

      <button 
          className='p-4 rounded-lg text-sm w-full bg-darkGray text-white flex justify-between items-center' 
          type='submit'
        >
          REVIEW AND PAY
          <FiArrowRight className='w-4 h-4' />
      </button>

    </form>
  )
}
