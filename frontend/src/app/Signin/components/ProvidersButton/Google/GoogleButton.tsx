'use client'

import React from 'react'
import GoogleButton from 'react-google-button'
import { signIn } from 'next-auth/react'
export const GoogleButtonRC = () => {
  return (
    <div>
      <GoogleButton className='mt-4' onClick={() => signIn("google")} />
    </div>
  )
}
