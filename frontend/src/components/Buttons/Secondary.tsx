import React from 'react'

interface SecondaryProps {
  text: string | React.ReactNode
  price?: number
  className?: string
}

export const SecondaryButton = ({text, className, price}: SecondaryProps) => {
  return (
    <button className={`bg-darkGray rounded-lg text-faWhite font-medium ${className} hover:bg-blue`}>
      { text }
      {price && (
        <span className='text-yellow'> - ${ price }</span>
      )}
    </button>

  )
}
