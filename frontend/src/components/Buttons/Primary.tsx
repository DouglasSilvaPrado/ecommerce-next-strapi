import React from 'react'

interface primaryProps {
  text: string
  className?: string
}

export const PrimaryButton = ({text, className}: primaryProps ) => {
  return (
    <button className={`rounded-lg bg-blue text-gray text-sm font-medium ${className}`}>
      { text }
    </button>
  )
}
