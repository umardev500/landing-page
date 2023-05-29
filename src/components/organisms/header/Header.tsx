import { HeaderRight } from '@/components/molecules'
import React from 'react'

export const Header: React.FC = () => {
  return (
    <header className="px-6">
      <div className="container mx-auto">
        <div className="flex lg:justify-between lg:py-6">
          <div></div>
          <HeaderRight />
        </div>
      </div>
    </header>
  )
}
