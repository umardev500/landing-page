import { ArrowLongRightIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import React from 'react'

export interface SliderTwoItem {
  title: string
  img: string
}

interface Props extends SliderTwoItem {}

export const SliderTwoListing: React.FC<Props> = ({ img, title }) => {
  return (
    <div className="cursor-pointer rounded-xl">
      <div>
        <picture>
          <img src={img} alt={title} className="max-h-[400px] fill-slate-200" />
        </picture>
      </div>
      <div className="mt-5">
        <h3 className="title text-2xl text-gray-700">{title}</h3>
        <Link href={'/'} className="poppins mt-5 flex gap-2 font-semibold text-primary">
          Read more
          <ArrowLongRightIcon className="h-6 w-6" />
        </Link>
      </div>
    </div>
  )
}
