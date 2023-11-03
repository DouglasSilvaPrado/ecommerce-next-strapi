'use client'

import React, { useState } from 'react'
import { Inter, Rubik } from 'next/font/google'
import { AiOutlineArrowRight } from 'react-icons/ai'
import { useRouter } from 'next/navigation'
import { toast } from 'react-toastify'


const inter = Inter({ subsets: ['latin'] })
const rubik = Rubik({ subsets: ['latin'] })


export const FormResetPassword = () => {

  const [email, setEmail] = useState('')
  const { push } = useRouter()

  const resetPassword = async () => {
    try {
      const response = await fetch('http://localhost:1337/api/auth/forgot-password', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email.trim()
        }),
      });

      if (!response.ok) {
        toast.error('Network response was not ok');
        throw new Error('Network response was not ok');
      }

      toast.success('Your user received an email');

      push("/EmailConfirmationRedirect")

    } catch (error) {
      console.log('An error occurred:', error);
    }
  }

  const handleSubmit = (event: any) => {
    event.preventDefault()
    resetPassword()
  }

  return (
    <form className={`${inter.className}`} onSubmit={handleSubmit}>
      <input
        className='rounded-lg border border-darkGray text-grayInput w-full px-4 py-3 my-3'
        type='email'
        name="email"
        placeholder='Email'
        onChange={(e) => { setEmail(e.target.value) }}
      />

      <button className={`flex items-center justify-between bg-darkGray rounded-lg text-faWhite font-medium p-4 w-full ${rubik.className}`}>
        Recover Password
        <AiOutlineArrowRight />
      </button>
    </form>
  )
}
