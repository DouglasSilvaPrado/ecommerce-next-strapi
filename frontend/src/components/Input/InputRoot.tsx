import React, { ReactNode } from 'react'


type InputRootProps = {
  children: ReactNode
}

export const InputRoot = ( {children}: InputRootProps ) => {
  return (
    <div className='my-4'>
      { children }
    </div>
  )
}
