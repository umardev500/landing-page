import { Logo } from '@/components/atoms'
import { Bars3Icon } from '@heroicons/react/24/outline'
import React from 'react'

export const HeaderLeft: React.FC = () => {
  return (
    <div className="flex items-center gap-2">
      <button className="lg:hidden">
        <Bars3Icon className="h-6 w-6" />
      </button>
      <Logo className="lg:h-16" />
    </div>
  )
}
