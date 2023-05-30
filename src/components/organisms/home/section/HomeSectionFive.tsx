import React from 'react'

export const HomeSectionFive: React.FC = () => {
  return (
    <section>
      <div className="container mx-auto mt-52">
        <div className="flex overflow-clip rounded-[32px] bg-primaryLight">
          <div>
            <picture>
              <img src="image/cover-2.png" alt="" />
            </picture>
          </div>
          <div className="flex flex-1 items-center justify-center bg-primaryLight p-8">
            <div className="rounded-xl bg-white lg:px-14 lg:py-16">
              <div className="lg:max-w-[352px]">
                <h3 className="text-center text-4xl text-gray-700">Ready to get started?</h3>
                <p className="mt-5 text-xl text-text">
                  We offer a complimentary 15-minute consultation.
                </p>
                <button className="mt-10 w-full rounded-full bg-primary px-6 py-3 text-center text-lg text-white">
                  Contact us today!
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
