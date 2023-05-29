'use client'

import { SliderOneListing } from '@/components/molecules'
import React from 'react'

import { Navigation } from 'swiper'
import 'swiper/css/bundle'
import { Swiper, SwiperSlide } from 'swiper/react'

export const SliderOne: React.FC = () => {
  return (
    <div>
      <Swiper
        modules={[Navigation]}
        navigation={{
          prevEl: '#sliderOnePrev',
          nextEl: '#sliderOneNext',
        }}
        spaceBetween={50}
        slidesPerView={2.5}
      >
        <SwiperSlide>
          <SliderOneListing />
        </SwiperSlide>
        <SwiperSlide>
          <SliderOneListing />
        </SwiperSlide>
        <SwiperSlide>
          <SliderOneListing />
        </SwiperSlide>
        <SwiperSlide>
          <SliderOneListing />
        </SwiperSlide>
      </Swiper>
    </div>
  )
}
