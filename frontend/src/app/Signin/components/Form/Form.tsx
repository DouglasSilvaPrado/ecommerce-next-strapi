"use client"

import React, { useState } from 'react'
import { AiOutlineArrowRight } from 'react-icons/ai'
import { signIn } from 'next-auth/react'
import { Inter, Rubik } from 'next/font/google'
import { toast } from 'react-toastify'
import { useRouter } from 'next/navigation'
import { usePrivateRouter } from '@/hooks/usePrivateRouter'


const inter = Inter({ subsets: ['latin'] })
const rubik = Rubik({ subsets: ['latin'] })


export const Form = () => {

  usePrivateRouter()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const { push } = useRouter()


  const handleLogin = async (event: any) => {
    event.preventDefault()
    const data = await signIn('credentials', { identifier: email, password, redirect: false })
    if (data?.error) {
      toast.error('invalid credentials')
      return
    }
    toast.success('Successfully logged in!')
    push('/')
  }

  return (
    <form className={`${inter.className}`} onSubmit={handleLogin}>
      <input
        className='rounded-lg border border-darkGray text-grayInput w-full px-4 py-3 my-3'
        type='email'
        name="email"
        placeholder='Email'
        onChange={(e) => { setEmail(e.target.value) }}
      />
      <input
        className='rounded-lg border border-darkGray text-grayInput w-full px-4 py-3 my-3'
        type='password'
        name="password"
        placeholder='Password'
        onChange={(e) => { setPassword(e.target.value) }}
      />
      <div className='flex my-3'>
        <input
          className='mr-2 w-6 h-6 accent-darkGray'
          type='checkbox'
        />
        <span className='font-semibold text-sm'>Keep me logged in - applies to all log in options below. More info</span>
      </div>
      <button className={`flex items-center justify-between bg-darkGray rounded-lg text-faWhite font-medium p-4 w-full ${rubik.className}`}>
        EMAIL LOGIN
        <AiOutlineArrowRight />
      </button>
    </form>
  )
}
