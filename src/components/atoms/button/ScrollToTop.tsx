import { ArrowSmallUpIcon } from '@heroicons/react/24/outline'
import React, { useEffect, useRef } from 'react'
import animateScrollTo from 'animated-scroll-to'

export const ScrollToTop: React.FC = () => {
  const buttonRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    window.onscroll = () => {
      const scrollingSize =
        document.body.scrollTop !== 0 ? document.body.scrollTop : document.documentElement.scrollTop
      if (scrollingSize > 500) {
        buttonRef.current?.classList.remove('opacity-0')
        buttonRef.current?.classList.add('opacity-1')
      } else {
        buttonRef.current?.classList.add('opacity-0')
        buttonRef.current?.classList.remove('opacity-1')
      }
    }
  }, [])

  const handleClick = () => {
    animateScrollTo(0).catch((err) => {
      console.log(err)
    })
  }

  return (
    <div
      ref={buttonRef}
      onClick={handleClick}
      className="fixed bottom-4 right-4 flex h-14 w-14 cursor-pointer items-center justify-center rounded-full bg-orange-100 text-gray-600 opacity-0 shadow duration-150 hover:shadow-lg"
    >
      <ArrowSmallUpIcon className="h-6 w-6" />
    </div>
  )
}
