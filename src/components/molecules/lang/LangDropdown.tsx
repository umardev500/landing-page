'use client'

import { Popover, Transition } from '@headlessui/react'
import React, { Fragment } from 'react'

export const LangDropdown: React.FC = () => {
  return (
    <Transition
      as={Fragment}
      enter="transition ease-out duration-200"
      enterFrom="opacity-0 translate-y-1"
      enterTo="opacity-100 translate-y-0"
      leave="transition ease-in duration-150"
      leaveFrom="opacity-100 translate-y-0"
      leaveTo="opacity-0 translate-y-1"
    >
      <Popover.Panel className="absolute right-0 mt-2 min-w-[150px] rounded-md bg-white shadow">
        <div className="flex flex-col">
          <button className="px-4 py-1.5 text-left text-gray-700 hover:bg-gray-100">English</button>
          <button className="px-4 py-1.5 text-left text-gray-700 hover:bg-gray-100">
            Indonesia
          </button>
          <button className="px-4 py-1.5 text-left text-gray-700 hover:bg-gray-100">Arabic</button>
        </div>
      </Popover.Panel>
    </Transition>
  )
}
