import React from 'react'

interface BadgeCardProps {
  text: string
  bg: string
  color: string
}

export const BadgeCard = ({ text, bg, color }: BadgeCardProps) => {
  return (
    <div className={`bg-${bg} text-sm text-${color} px-2 py-1 rounded-t-xl rounded-r-xl absolute top-0`}>
      { text }
    </div>
  )
}
