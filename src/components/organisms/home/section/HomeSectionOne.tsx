import React from 'react'

export const HomeSectionOne: React.FC = () => {
  return (
    <section>
      <div className="container mx-auto mt-52">
        {/* heading */}
        <div className="space-y-4">
          <h3 className="text-center text-5xl text-gray-700">Welcome to Merriam Therapy</h3>
          <p className="text-center text-xl text-gray-500">
            We are committed to providing a supportive virtual environment where you can feel heard,
            <br />
            understood, and empowered to make positive changes in your life.
          </p>
        </div>

        {/* content */}
        <div className="mt-28 flex flex-wrap overflow-clip rounded-[32px] bg-primaryLight">
          <div className="">
            <picture>
              <img
                className="h-full object-cover lg:min-w-[438px]"
                src="image/cover-2.png"
                alt="cover"
              />
            </picture>
          </div>
          <div className="flex-1 p-4 lg:py-8 lg:pl-14 lg:pr-8">
            <h3 className="text-5xl text-gray-700">Ellen S., LSWAIC</h3>
            <p className="mt-6 text-lg text-gray-500">
              I am a Licensed Social Work Associate Independent Clinical in Washington (license#
              SC60868009). I hold a Master&apos;s of Social Work from the University of Washington,
              Seattle. <br />
              <br /> I have been working in mental health for over ten years. I offer therapy
              services for individuals with various issues ranging from anxiety and depression to
              grief, loss, and workplace issues. My most recent job was as a mental health therapist
              in an acute psychiatric hospital. <br /> <br /> I work to provide a safe and
              respectful environment that promotes healing and opportunity for change. My approach
              includes Cognitive-Behavioral Therapy (CBT), Motivational Interviewing (MI), and
              Mindfulness. It is ok to ask for help and feel sad, but focusing on your mental and
              emotional well-being is essential. Let&apos;s work together to identify techniques,
              tools, and resources that are suitable for you. <br />
              <br /> I was born and raised in Indonesia, and I speak English and Indonesian
              fluently. I can provide therapy in English and Indonesian for Indonesian-speaking
              individuals.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
