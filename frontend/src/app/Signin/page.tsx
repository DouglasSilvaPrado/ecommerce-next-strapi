'use client'

import { Rubik } from 'next/font/google'
import Link from 'next/link'
import { signIn } from 'next-auth/react'
import GoogleButton from 'react-google-button'
import { Form } from './components/Form/Form'
import { usePrivateRouter } from '@/hooks/usePrivateRouter'

const rubik = Rubik({ subsets: ['latin'] })

export default function Signin() {
  usePrivateRouter()

  return (
    <main>
      <div className='text-darkGray'>
        <h1 className={`${rubik.className} font-semibold text-2xl`}>Login</h1>
        <Link href='/Register' className='font-semibold underline cursor-pointer'>Forgot your password?</Link>
      </div>
      <div className='mt-6'>
        <Form />
      </div>
      <GoogleButton className='mt-4' onClick={() => signIn("google")} />
    </main>
  )
}