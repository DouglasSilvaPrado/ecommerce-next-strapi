import React from 'react'
import { AiFillCheckCircle } from 'react-icons/ai'
export default function Page() {
  return (
    <div className='bg-faWhite p-4 rounded-lg h-full flex items-center'>
      <div className='bg-yellow w-full p-4 rounded-lg text-white flex justify-between items-center'>
        <h2 className='font-semibold'>Thank you very much for shopping with us</h2>
        <AiFillCheckCircle className='w-10 h-10' />
      </div>
    </div>
  )
}
