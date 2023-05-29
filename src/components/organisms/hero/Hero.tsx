import React from 'react'

export const Hero: React.FC = () => {
  return (
    <section className="px-4">
      <div className="container mx-auto grid py-10 lg:grid-cols-3">
        <div className="col-span-2 flex items-center">
          <h1 className="text-6xl leading-tight text-gray-700 lg:pr-10">
            Rediscover Your Strength and Resilience through the Power of Therapy
          </h1>
        </div>
        <div className="flex justify-center">
          <picture>
            <img src="images/cover.png" alt="" />
          </picture>
        </div>
      </div>
    </section>
  )
}
