import React from 'react'
import { Rubik } from 'next/font/google'
const rubik = Rubik({ subsets: ['latin'] })

type SummaryTitleProps = {
  title: string
}

export const SummaryTitle = ({title}: SummaryTitleProps) => {
  return (
    <h2 className={`${rubik.className} mb-2 font-semibold text-xl`}>{title}</h2>
  )
}