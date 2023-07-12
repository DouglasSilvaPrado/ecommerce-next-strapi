'use client'

import { AiOutlineArrowRight } from 'react-icons/ai'
import { Inter, Rubik } from 'next/font/google'
import Link from 'next/link'
import { useSession, signIn } from 'next-auth/react'
import GoogleButton from 'react-google-button'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

const rubik = Rubik({ subsets: ['latin'] })
const inter = Inter({ subsets: ['latin'] })

export default function Signin() {
  const { push } = useRouter()
  const { status } = useSession()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  if (status === 'authenticated') {
    push('/')
  }

  const handleLogin = async (event: any) => {
    event.preventDefault()
    await signIn('credentials', { identifier: email, password, redirect: false })
  }


  return (
    <main>
      <div className='text-darkGray'>
        <h1 className={`${rubik.className} font-semibold text-2xl`}>Login</h1>
        <Link href='/Register' className='font-semibold underline cursor-pointer'>Forgot your password?</Link>
      </div>
      <div className='mt-6'>
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
      </div>
      <GoogleButton className='mt-4' onClick={() => signIn("google")} />
    </main>
  )
}