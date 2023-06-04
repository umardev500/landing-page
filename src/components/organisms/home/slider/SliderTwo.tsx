'use client'

import { SliderTwoListing, type SliderTwoItem } from '@/components/molecules'
import React, { useState } from 'react'

import { Navigation } from 'swiper'
import 'swiper/css/bundle'
import { Swiper, SwiperSlide } from 'swiper/react'

export const SliderTwo: React.FC = () => {
  const [data] = useState<SliderTwoItem[]>([
    {
      img: 'image/slider/slider.png',
      title: 'Schizophrenia',
    },
    {
      img: 'image/slider/slider-2.png',
      title: 'Depressions',
    },
    {
      img: 'image/slider/slider-3.png',
      title: 'Personal Meeting',
    },
  ])

  return (
    <div className="w-full">
      <Swiper
        modules={[Navigation]}
        navigation={{
          prevEl: '#sliderOnePrev',
          nextEl: '#sliderOneNext',
        }}
        spaceBetween={20}
        slidesPerView={2.8}
      >
        {data.map((item, i) => (
          <SwiperSlide key={i}>
            <SliderTwoListing {...item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}
