"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"
import Image from "next/image"
import ViewMoreHotel from "./ViewMoreHotel"


const imageBaseUrl = "https://cdn.techneapp-staging.site/";

export default function HotelList({ hotels }) {
  if (!hotels.length) return <p>No hotel available</p>;

  const hotel = hotels[0];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % hotel.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + hotel.images.length) % hotel.images.length);
  };

  return (
    <div className="mx-auto">
      <div className="bg-white rounded-2xl shadow-sm">
        <div className="">
          <div className="flex items-center justify-between mb-6 bg-[#e05422] py-4 px-4 rounded-lg">
            <h2 className="text-2xl font-bold text-white">Included Hotel</h2>

            <div className="flex gap-2">
              <button
                onClick={prevImage}
                className="p-2 rounded-full border bg-transparent hover:bg-white transition-colors w-12 h-12 flex items-center justify-center group"
                aria-label="Previous image"
              >
                <ChevronLeft className="w-6 h-6 text-white transition-colors group-hover:text-black" />
              </button>
              <button
                onClick={nextImage}
                className="p-2 rounded-full border bg-transparent hover:bg-white transition-colors w-12 h-12 flex items-center justify-center group"
                aria-label="Next image"
              >
                <ChevronRight className="w-6 h-6 text-white transition-colors group-hover:text-black" />
              </button>
            </div>
          </div>

          <div className="relative aspect-[3/2] rounded-xl overflow-hidden mb-6">
            <Image
              src={
                hotel.images[currentImageIndex]?.path
                  ? `${imageBaseUrl}${hotel.images[currentImageIndex].path}`
                  : "/placeholder.svg"
              }
              alt={hotel.name}
              fill
              className="object-cover"
            />
          </div>

          <h3 className="text-xl font-semibold text-gray-900 mb-3">
            {hotel.name}
          </h3>

          <div className="flex gap-1 mb-4">
            {Array.from({ length: Number(hotel.rating) }).map((_, index) => (
              <Star
                key={index}
                className="w-5 h-5 fill-yellow-400 text-yellow-400"
              />
            ))}
          </div>

          <div className="text-gray-700">
            <p>{hotel.description.substring(0, 280)}...</p>
          </div>

          <ViewMoreHotel hotel={hotel} />
        </div>
      </div>
    </div>
  );
}
