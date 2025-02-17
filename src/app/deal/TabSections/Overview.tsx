import React from 'react'

const Overview = React.forwardRef<HTMLDivElement>((_, ref) => {
  return (
    <>
    <section
                  ref={ref}
                  className="pb-8"
                >
                  <h2 className="text-4xl font-bold text-[#E85D24] mb-8">
                    Overview
                  </h2>
                  <p className="text-lg text-gray-600">
                    Embark on an exhilarating 8-day tour with a 6-day trek on
                    Mount Kilimanjaro's Machame Route, also known as the "Whisky
                    Route" for its challenging terrain. Your journey begins with
                    a stay at the luxurious Gran Meliá Arusha before you set off
                    from Machame Gate into lush rainforests and stunning
                    high-altitude landscapes. Experience the diverse
                    environments,
                  </p>
                  <div className="mt-6 border-cyan-300 ">
                    <video
                      src="https://www.youtube.com/watch?v=fHCemviY06Y"
                      className="w-full h-auto rounded-lg shadow-lg"
                      autoPlay
                      loop
                      muted
                      playsInline
                    />
                  </div>
                </section>
    </>
  )
})

export default Overview