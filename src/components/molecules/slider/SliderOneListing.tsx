import React from 'react'

export interface SliderOneItem {
  img: string
  title: string
  desc: string
}

interface Props extends SliderOneItem {}

export const SliderOneListing: React.FC<Props> = ({ img, title, desc }) => {
  return (
    <div className="slider-one-item cursor-pointer rounded-xl border border-primaryLight p-8 hover:bg-primaryLight">
      <div>
        <picture>
          <img src={img} alt={title} className="icon fill-slate-200" />
        </picture>
      </div>
      <div className="mt-10">
        <h3 className="title text-3xl text-gray-700">{title}</h3>
        <p className="desc mt-5 text-xl leading-relaxed text-text">{desc}</p>
      </div>
    </div>
  )
}
