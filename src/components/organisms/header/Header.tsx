import { HeaderRight } from '@/components/molecules'
import { HeaderLeft } from '@/components/molecules/header/HeaderLeft'
import React from 'react'

export const Header: React.FC = () => {
  return (
    <header className="border-b px-6">
      {/* container */}
      <div className="container mx-auto">
        {/* header inner */}
        <div className="flex items-center lg:justify-between lg:py-3">
          <HeaderLeft />
          <HeaderRight />
        </div>
        {/* end of header inner */}
      </div>
      {/* end of container */}
    </header>
  )
}
