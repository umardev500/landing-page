'use client'

import { SliderTwoListing } from '@/components/molecules'
import React from 'react'

import { Navigation } from 'swiper'
import 'swiper/css/bundle'
import { Swiper, SwiperSlide } from 'swiper/react'

export const SliderTwo: React.FC = () => {
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
        <SwiperSlide>
          <SliderTwoListing />
        </SwiperSlide>
        <SwiperSlide>
          <SliderTwoListing />
        </SwiperSlide>
        <SwiperSlide>
          <SliderTwoListing />
        </SwiperSlide>
        <SwiperSlide>
          <SliderTwoListing />
        </SwiperSlide>
      </Swiper>
    </div>
  )
}
