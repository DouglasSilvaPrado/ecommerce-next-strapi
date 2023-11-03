'use client'

import React, { useState } from 'react'
import { Inter, Rubik } from 'next/font/google'
import { AiOutlineArrowRight } from 'react-icons/ai'
import { toast } from 'react-toastify'


const inter = Inter({ subsets: ['latin'] })
const rubik = Rubik({ subsets: ['latin'] })


export const FormConfirmPassword = () => {

  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  async function resetPassword() {
    const url = 'http://localhost:1337/api/auth/reset-password';
    const data = {
      code: 'privateCode',
      password: password,
      passwordConfirmation: confirmPassword,
    };

    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    };

    try {
      const response = await fetch(url, requestOptions);
      if (!response.ok) {
        // A request was made, but the server responded with an error status.
        const errorData = await response.json();
        throw new Error(errorData); // You can customize the error handling as needed.
      }

      toast.success("Your user's password has been reset.");
    } catch (error) {
      toast.error('An error occurred:' + error);
    }
  }

  const handleSubmit = (event: any) => {
    event.preventDefault()
    resetPassword();
  }

  return (
    <form className={`${inter.className}`} onSubmit={handleSubmit}>
      <input
        className='rounded-lg border border-darkGray text-grayInput w-full px-4 py-3 my-3'
        type='password'
        name="password"
        placeholder='Password'
        onChange={(e) => { setPassword(e.target.value) }}
      />

      <input
        className='rounded-lg border border-darkGray text-grayInput w-full px-4 py-3 my-3'
        type='password'
        name="confirmPassword"
        placeholder='confirmPassword'
        onChange={(e) => { setConfirmPassword(e.target.value) }}
      />

      <button className={`flex items-center justify-between bg-darkGray rounded-lg text-faWhite font-medium p-4 w-full ${rubik.className}`}>
        Reset Password
        <AiOutlineArrowRight />
      </button>
    </form>
  )
}
