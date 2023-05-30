'use client'

import { type SliderOneItem, SliderOneListing } from '@/components/molecules'
import React, { useState } from 'react'

import { Navigation } from 'swiper'
import 'swiper/css/bundle'
import { Swiper, SwiperSlide } from 'swiper/react'

export const SliderOne: React.FC = () => {
  const [data] = useState<SliderOneItem[]>([
    {
      img: 'image/icons/stress.svg',
      title: 'Anxiety & Stress Management',
      desc: "If you're struggling with chronic anxiety or stress, we offer targeted and effective strategies to help you feel calmer and more resilient.",
    },
    {
      img: 'image/icons/depression.svg',
      title: 'Depression Treatment',
      desc: 'Depression can be challenging to manage alone. We offer a collaborative and supportive approach to help you regain control of your mental health',
    },
    {
      img: 'image/icons/substan.svg',
      title: 'Substance Abuse',
      desc: 'Substance abuse can be complex, but with effective intervention, recovery is possible. We offer specialized care and support focused on mental health',
    },
  ])

  return (
    <div>
      <Swiper
        modules={[Navigation]}
        navigation={{
          prevEl: '#sliderOnePrev',
          nextEl: '#sliderOneNext',
        }}
        spaceBetween={20}
        slidesPerView={2.3}
      >
        {data.map((item, i) => (
          <SwiperSlide key={i} style={{ height: 'unset' }}>
            <SliderOneListing {...item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}
