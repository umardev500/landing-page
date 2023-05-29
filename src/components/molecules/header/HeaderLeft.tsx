import { Logo } from '@/components/atoms'
import { Bars3Icon } from '@heroicons/react/24/outline'
import React from 'react'

export const HeaderLeft: React.FC = () => {
  return (
    <div className="flex flex-1 items-center gap-2">
      <button className="lg:hidden">
        <Bars3Icon className="h-6 w-6 text-gray-500" />
      </button>
      <div className="flex flex-1 items-center justify-center lg:justify-normal">
        <Logo className="h-8 lg:h-16" />
      </div>
    </div>
  )
}
