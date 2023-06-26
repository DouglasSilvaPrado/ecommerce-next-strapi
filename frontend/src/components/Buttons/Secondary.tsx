import React from 'react'

interface SecondaryProps {
  text: string | React.ReactNode
  price?: number
  className?: string
  onClick?: () => void
}

export const SecondaryButton = ({text, className, price, onClick}: SecondaryProps) => {
  return (
    <button 
      className={`bg-darkGray rounded-lg text-faWhite font-medium ${className} hover:bg-blue`}
      onClick={onClick ? () => onClick() : () => {}}
    >
      { text }
      {price && (
        <span className='text-yellow'> - ${ price }</span>
      )}
    </button>

  )
}
