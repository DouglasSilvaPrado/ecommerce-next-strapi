import React from 'react'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

type InputProps = {
  type: string
  placeholder: string
}

export const InputContent = ({ type, placeholder }: InputProps) => {
  return (
      <input 
        className={`${inter.className} text-gunmetalGray rounded-lg border border-darkGray px-4 py-3  w-full`}
        type={type} 
        placeholder={placeholder}
       />
  )
}
