import React from 'react'
type InputErrorProps = {
  error?: string
}
export const InputError = ({ error }: InputErrorProps) => {
  return (
    <>
       {error && (
        <p className='text-xs text-red-500 mt-2'>
          { error }
        </p>
      )}
    </>
  )
}
