import React from 'react'
import { SliderTwo } from '../slider'
import { ArrowLongLeftIcon, ArrowLongRightIcon } from '@heroicons/react/24/outline'

export const HomeSectionFour: React.FC = () => {
  return (
    <section>
      <div data-aos="fade-left" className="container mx-auto mt-52">
        {/* heading */}
        <div className="flex w-full items-start justify-between space-y-4">
          <div className="max-w-[773px] pt-2.5">
            <h3 className="text-5xl text-gray-700">Our latest Blog (Coming soon)</h3>
            <p className="mt-6 text-xl leading-relaxed text-text">
              Our blog covers various topics like mindfulness, self-care, stress management,
              relationships, and more. Stay updated by subscribing to our newsletter.
            </p>
          </div>
        </div>
        {/* end of heading */}
      </div>
      <div data-aos="fade-right" className="mt-64 bg-primaryLight pb-8">
        <div className="container mx-auto flex py-2">
          <div className="-mb-8 whitespace-nowrap pr-4">
            <div className="flex h-full items-center gap-2 pr-12">
              <button
                id="sliderOnePrev"
                className="flex h-14 w-14 items-center justify-center rounded-full border border-primaryLight bg-white hover:bg-primary"
              >
                <ArrowLongLeftIcon className="h-6 w-6" />
              </button>
              <button
                id="sliderOneNext"
                className="flex h-14 w-14 items-center justify-center rounded-full border border-primaryLight bg-white hover:bg-primary"
              >
                <ArrowLongRightIcon className="h-6 w-6" />
              </button>
            </div>
          </div>
          <div className="-mt-48 w-full flex-1 overflow-clip">
            <SliderTwo />
          </div>
        </div>
      </div>
    </section>
  )
}
