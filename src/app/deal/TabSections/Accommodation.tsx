import React from 'react'

const Accommodation = React.forwardRef<HTMLDivElement>((_, ref) => {
  return (
    <>
        <section
                  ref={ref}
                  className="min-h-screen pb-16"
                >
                  <h2 className="text-4xl font-bold text-[#E85D24] mb-8">
                    ACCOMMODATION
                  </h2>
                  <p className="text-2xl text-gray-700 mb-6">
                    COMFORTABLE AND LUXURIOUS STAY
                  </p>
                </section> 
    </>
  )
}
)

export default Accommodation