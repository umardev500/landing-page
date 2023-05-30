import { ArrowLongRightIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import React from 'react'

export const HomeSectionThree: React.FC = () => {
  return (
    <section>
      <div className="container mx-auto mt-52">
        {/* heading */}
        <div className="flex w-full items-start justify-between space-y-4">
          <div className="max-w-[773px] pt-2.5">
            <h3 className="text-5xl text-gray-700">
              Knowledge Is Powerful in Helping You to Improve Your Mental Health
            </h3>
            <p className="mt-6 text-xl leading-relaxed text-text">
              Explore our collection of videos covering various mental health issues, including
              depression, anxiety, and various other mental health concerns. These videos are
              designed to provide you with valuable knowledge and resources to understand and manage
              your mental well-being. Feel free to explore the resources below to support your
              mental health journey. We regularly update our video library to address various mental
              health topics and to provide relevant, and up-to-date information.
            </p>
          </div>
        </div>

        {/* Content */}
        <div className="mt-20">
          {/* first card */}
          <div className="grid grid-cols-2 rounded-xl bg-primaryLight px-12 py-12">
            {/* left */}
            <div className="pr-4">
              <h3 className="poppins text-4xl leading-normal">
                Lorem ipsum dolor sit amet consectetur adipiscing{' '}
              </h3>
              <p className="poppins mt-5 text-xl text-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua.
              </p>

              <Link href={'/'} className="poppins mt-10 flex gap-2 font-semibold text-primary">
                Read more
                <ArrowLongRightIcon className="h-6 w-6" />
              </Link>
            </div>
            {/* end left */}
            {/* right */}
            <div className="pl-4">
              <picture>
                <img src="image/thumb.png" className="w-full object-cover" alt="thumb" />
              </picture>
            </div>
            {/* end right */}
          </div>
          {/* end of first card */}
          {/* second card */}
          <div className="mt-5 grid grid-cols-3 gap-5">
            {/* card loop */}
            <div className="rounded-xl bg-primaryLight p-12">
              <h3 className="poppins text-4xl leading-normal">Lorem ipsum dolor sit amet</h3>
              <div className="mt-10">
                <picture>
                  <img
                    className="w-full object-cover"
                    src="image/small/thumb-small.png"
                    alt="thumb"
                  />
                </picture>
              </div>
            </div>
            <div className="rounded-xl bg-primaryLight p-12">
              <h3 className="poppins text-4xl leading-normal">Lorem ipsum dolor sit amet</h3>
              <div className="mt-10">
                <picture>
                  <img
                    className="w-full object-cover"
                    src="image/small/thumb-small-2.png"
                    alt="thumb"
                  />
                </picture>
              </div>
            </div>
            <div className="rounded-xl bg-primaryLight p-12">
              <h3 className="poppins text-4xl leading-normal">Lorem ipsum dolor sit amet</h3>
              <div className="mt-10">
                <picture>
                  <img
                    className="w-full object-cover"
                    src="image/small/thumb-small-3.png"
                    alt="thumb"
                  />
                </picture>
              </div>
            </div>
            {/* end ofcard loop */}
          </div>
          {/* end of second card */}
        </div>
      </div>
    </section>
  )
}
