import React from 'react'

export type PriceWrapperProps = {
  children: React.ReactNode
}
export const PriceWrapper: React.FC<PriceWrapperProps> = ({ children }) => {
  return (
    <div className='mx-auto grid max-w-7xl gap-12 py-24 px-4 sm:px-6 lg:grid-cols-3 lg:gap-8 lg:px-8'>
      {children}
    </div>
  )
}
