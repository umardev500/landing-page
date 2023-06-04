'use client'

import { Popover } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import React from 'react'
import { LangDropdown } from '../lang'
import animateScrollTo from 'animated-scroll-to'

export const HeaderRight: React.FC = () => {
  const handleClick = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>, name: string) => {
    event.preventDefault()
    const el = document.querySelector(name) as HTMLElement
    animateScrollTo(el).catch((err) => {
      console.log(err)
    })
  }

  return (
    <ul className="hidden items-center lg:flex lg:gap-2">
      <li>
        <Link
          onClick={(e) => {
            handleClick(e, '.home')
          }}
          href={'/'}
          className="whitespace-nowrap px-4 py-2 text-xl font-bold text-gray-500 outline-none"
        >
          Home
        </Link>
      </li>
      <li>
        <Link
          onClick={(e) => {
            handleClick(e, '.about')
          }}
          href={'/'}
          className="whitespace-nowrap px-4 py-2 text-xl text-gray-500 outline-none"
        >
          About
        </Link>
      </li>
      <li>
        <Link
          onClick={(e) => {
            handleClick(e, '.services')
          }}
          href={'/'}
          className="whitespace-nowrap px-4 py-2 text-xl text-gray-500 outline-none"
        >
          Services
        </Link>
      </li>
      <li>
        <Link
          onClick={(e) => {
            handleClick(e, '.resources')
          }}
          href={'/'}
          className="whitespace-nowrap px-4 py-2 text-xl text-gray-500 outline-none"
        >
          Resources
        </Link>
      </li>
      <li>
        <Link
          onClick={(e) => {
            handleClick(e, '.blog')
          }}
          href={'/'}
          className="whitespace-nowrap px-4 py-2 text-xl text-gray-500 outline-none"
        >
          Blog
        </Link>
      </li>
      <li>
        <Link
          onClick={(e) => {
            handleClick(e, '.contact')
          }}
          href={'/'}
          className="whitespace-nowrap rounded-full bg-primaryLight px-4 py-3 text-xl text-gray-700 outline-none"
        >
          Contact Us
        </Link>
      </li>
      <li className="relative z-50">
        <Popover>
          {({ open }) => (
            <>
              <Popover.Button className="flex items-center gap-2 whitespace-nowrap px-4 py-2 text-xl text-gray-500 outline-none">
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
