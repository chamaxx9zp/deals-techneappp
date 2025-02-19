import React from 'react'

const PriceCard = ({ price, farePrice }) => {
  return (
    <>
    <div className="mx-auto">
      <div className="rounded-2xl overflow-hidden shadow-lg">
        <div className="bg-gradient-to-r from-orange-500 to-orange-400 p-6 text-white">
          <div className="space-y-2">
            <p className="text-lg line-through opacity-80">£{farePrice}  PP</p>
            <div className="space-y-1">
              <p className="text-5xl font-bold">
                <span className="text-3xl">fr </span>£{price} <span className="text-3xl">PP</span>
              </p>
              <p className="text-xl tracking-wide">FOR A SINGLE PERSON</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default PriceCard