import React from 'react'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

type InputHelperProps = {
  helper: string
}

export const InputHelper = ( {helper}: InputHelperProps ) => {
  return (
    <p className={`${inter.className} text-xs text-jetBlack my-1`}> {helper} </p>
  )
}
