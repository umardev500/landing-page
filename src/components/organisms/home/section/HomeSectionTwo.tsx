'use client'

import { ArrowLongLeftIcon, ArrowLongRightIcon } from '@heroicons/react/24/outline'
import React from 'react'
import { SliderOne } from '../slider'

export const HomeSectionTwo: React.FC = () => {
  return (
    <section>
      <div className="container mx-auto mt-52">
        {/* heading */}
        <div className="flex w-full items-start justify-between space-y-4">
          <div className="max-w-[773px] pt-2.5">
            <h3 className="text-5xl text-gray-700">Services</h3>
            <p className="mt-6 text-xl text-gray-500">
              At Merriam Therapy, we are dedicated to providing inclusive individual therapy
              services that honor and embrace the diverse backgrounds of our clients. We are
              committed to creating a safe, supportive, and culturally sensitive space where you can
              explore your unique experiences and challenges. We offer therapy services to support
              you in navigating your challenges, such as depression, anxiety, anger, Self-Esteem,
              Spirituality, grief, and loss.
            </p>
          </div>
          <div className="flex items-center gap-2">
            <button
              id="sliderOnePrev"
              className="flex h-14 w-14 items-center justify-center rounded-full border border-primaryLight hover:bg-primaryLight"
            >
              <ArrowLongLeftIcon className="h-6 w-6" />
            </button>
            <button
              id="sliderOneNext"
              className="flex h-14 w-14 items-center justify-center rounded-full border border-primaryLight hover:bg-primaryLight"
            >
              <ArrowLongRightIcon className="h-6 w-6" />
            </button>
          </div>
        </div>

        {/* slider */}
        <div className="mt-10">
          <SliderOne />
        </div>
      </div>
    </section>
  )
}
