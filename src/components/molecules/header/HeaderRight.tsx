'use client'

import { Popover } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import React from 'react'
import { LangDropdown } from '../lang'

export const HeaderRight: React.FC = () => {
  return (
    <ul className="flex items-center lg:gap-2">
      <li>
        <Link href={'/'} className="whitespace-nowrap px-4 py-2 text-gray-500 outline-none">
          Home
        </Link>
      </li>
      <li>
        <Link href={'/'} className="whitespace-nowrap px-4 py-2 text-gray-500 outline-none">
          About
        </Link>
      </li>
      <li>
        <Link href={'/'} className="whitespace-nowrap px-4 py-2 text-gray-500 outline-none">
          Services
        </Link>
      </li>
      <li>
        <Link href={'/'} className="whitespace-nowrap px-4 py-2 text-gray-500 outline-none">
          Resources
        </Link>
      </li>
      <li>
        <Link href={'/'} className="whitespace-nowrap px-4 py-2 text-gray-500 outline-none">
          Blog
        </Link>
      </li>
      <li>
        <Link
          href={'/'}
          className="whitespace-nowrap rounded-full bg-primaryLight px-4 py-2 text-gray-700 outline-none"
        >
          Contact Us
        </Link>
      </li>
      <li className="relative">
        <Popover>
          {({ open }) => (
            <>
              <Popover.Button className="flex items-center gap-2 whitespace-nowrap px-4 py-2 text-gray-500 outline-none">
                English
                <span className={`${open ? 'rotate-180' : ''} duration-300`}>
                  <ChevronDownIcon className="h-5 w-5" />
                </span>
              </Popover.Button>

              <LangDropdown />
            </>
          )}
        </Popover>
      </li>
    </ul>
  )
}
