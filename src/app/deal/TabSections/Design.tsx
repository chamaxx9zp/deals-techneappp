import React from 'react'

const Design = React.forwardRef<HTMLDivElement>((_, ref) => {
  return (
    <>
          <section
                  ref={ref}
                  className="min-h-screen pb-16"
                >
                  <h2 className="text-4xl font-bold text-gray-800 mb-8">
                    Design
                  </h2>
                </section>  
    </>
  )
}
)

export default Design