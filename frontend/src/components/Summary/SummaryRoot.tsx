import React, { ReactNode } from 'react'

type SummaryRootProps = {
  children: ReactNode
}
export const SummaryRoot = ( {children}:SummaryRootProps ) => {
  return (
    <div className='bg-faWhite rounded-2xl p-4 lg:bg-transparent'>
      { children }
    </div>
  )
}
