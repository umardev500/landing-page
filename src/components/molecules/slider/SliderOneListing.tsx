import React from 'react'

export const SliderOneListing: React.FC = () => {
  return (
    <div className="slider-one-item cursor-pointer rounded-xl border border-primaryLight p-8 hover:bg-primaryLight">
      <div>
        <picture>
          <img src="image/icons/depression.svg" alt="" className="icon fill-slate-200" />
        </picture>
      </div>
      <div className="mt-10">
        <h3 className="title text-3xl text-gray-700">Depression Treatment</h3>
        <p className="desc mt-5 text-xl leading-relaxed text-gray-500">
          Depression can be challenging to manage alone. We offer a collaborative and supportive
          approach to help you regain control of your mental health
        </p>
      </div>
    </div>
  )
}
