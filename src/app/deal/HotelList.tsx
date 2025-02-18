"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight, MapPin, Star } from "lucide-react"
import Image from "next/image"

const hotels = [
  {
    name: "Fullmoon Villa Ubud",
    location: "Jalan Jineng, Banjar Abiansemal",
    rating: 4,
    image:
      "https://images.pexels.com/photos/30241292/pexels-photo-30241292/free-photo-of-elegant-parisian-street-with-classic-architecture.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load",
  },
  {
    name: "Sunrise Resort Ubud",
    location: "Jalan Raya Ubud",
    rating: 5,
    image: "https://images.pexels.com/photos/24807135/pexels-photo-24807135/free-photo-of-sunbeds-around-pool-in-summer-resort.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
  {
    name: "Paradise Villa Bali",
    location: "Jalan Paradise, Ubud",
    rating: 4,
    image: "https://images.pexels.com/photos/10973940/pexels-photo-10973940.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
]

export default function HotelList() {
  const [currentHotel, setCurrentHotel] = useState(0)

  const nextHotel = () => {
    setCurrentHotel((prev) => (prev + 1) % hotels.length)
  }

  const prevHotel = () => {
    setCurrentHotel((prev) => (prev - 1 + hotels.length) % hotels.length)
  }

  return (
    <div className="max-w-2xl mx-auto p-6">
      <div className="bg-white rounded-2xl shadow-sm">
        <div className="p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-900">Included Hotel</h2>
            <div className="flex gap-2">
              <button
                onClick={prevHotel}
                className="p-2 rounded-full border hover:bg-gray-50 transition-colors"
                aria-label="Previous hotel"
              >
                <ChevronLeft className="w-6 h-6 text-gray-600" />
              </button>
              <button
                onClick={nextHotel}
                className="p-2 rounded-full border hover:bg-gray-50 transition-colors"
                aria-label="Next hotel"
              >
                <ChevronRight className="w-6 h-6 text-gray-600" />
              </button>
            </div>
          </div>

          <div className="relative aspect-[3/2] rounded-xl overflow-hidden mb-6">
            <Image
              src={hotels[currentHotel].image || "/placeholder.svg"}
              alt={hotels[currentHotel].name}
              fill
              className="object-cover"
            />
          </div>

          <h3 className="text-xl font-semibold text-gray-900 mb-3">{hotels[currentHotel].name}</h3>

          <div className="flex gap-1 mb-4">
            {[...Array(hotels[currentHotel].rating)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
            ))}
          </div>

          <div className="flex items-center gap-2 text-gray-600 mb-6">
            <MapPin className="w-5 h-5" />
            <span>{hotels[currentHotel].location}</span>
          </div>

          <div className="bg-[#FDF7E7] border border-[#E5C57A] rounded-lg p-4">
            <p className="text-[#9E6C24]">
              Note: Our agents will provide you these or similar hotels depending on availability
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

