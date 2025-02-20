"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import Image from "next/image";
import ViewMoreHotel from "./ViewMoreHotel";

const imageBaseUrl = "https://cdn.techneapp-staging.site/";

export default function HotelList({ hotels }) {
  if (!hotels.length) return <p>No hotel available</p>;

  const hotel = hotels[0];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % hotel.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex(
      (prev) => (prev - 1 + hotel.images.length) % hotel.images.length
    );
  };

  const truncateHTML = (htmlString: string, maxLength: number) => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(htmlString, "text/html");

    let charCount = 0;
    let truncatedContent = "";

    const traverseNodes = (node) => {
      if (charCount >= maxLength) return;

      if (node.nodeType === Node.TEXT_NODE) {
        let remainingChars = maxLength - charCount;
        truncatedContent += node.textContent.slice(0, remainingChars);
        charCount += node.textContent.length;
      } else if (node.nodeType === Node.ELEMENT_NODE) {
        let tag = node.tagName.toLowerCase();
        truncatedContent += `<${tag}>`;
        node.childNodes.forEach(traverseNodes);
        truncatedContent += `</${tag}>`;
      }
    };

    doc.body.childNodes.forEach(traverseNodes);

    return truncatedContent + (charCount >= maxLength ? "" : "");
  };

  return (
    <div className="mx-auto px-3 md:px-0">
      <div className="bg-white rounded-2xl shadow-sm">

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

{/* <div className="relative w-full h-[300px] rounded-lg overflow-hidden">
          <Image
            src={`${imageBaseUrl}${hotel.images[currentImageIndex]}`}
            alt={`Hotel Image ${currentImageIndex + 1}`}
            fill
            className="object-cover rounded-lg"
          />


          <div className="absolute bottom-4 right-4 flex gap-2">
            <button
              onClick={prevImage}
              className="p-2 rounded-full bg-white bg-opacity-80 hover:bg-opacity-100 transition-all w-12 h-12 flex items-center justify-center shadow-md"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-6 h-6 text-black" />
            </button>
            <button
              onClick={nextImage}
              className="p-2 rounded-full bg-white bg-opacity-80 hover:bg-opacity-100 transition-all w-12 h-12 flex items-center justify-center shadow-md"
              aria-label="Next image"
            >
              <ChevronRight className="w-6 h-6 text-black" />
            </button>
          </div>
        </div> */}

          {/* <h3 className="text-xl font-semibold text-gray-900 mb-3">
            {hotel.name}
          </h3> */}

          <div className="flex gap-1 mb-4">
            {Array.from({ length: Number(hotel.rating) }).map((_, index) => (
              <Star
                key={index}
                className="w-5 h-5 fill-yellow-400 text-yellow-400"
              />
            ))}
          </div>

          <div className="text-gray-800">
            {hotels.map((hotel, index) => {
              const truncatedDescription = truncateHTML(hotel.description, 280);

              return (
                <div key={index}>
                  <h3 className="text-xl font-bold">{hotel.name}</h3>
                  <div
                    dangerouslySetInnerHTML={{ __html: truncatedDescription }}
                  />
                </div>
              );
            })}
          </div>

          <ViewMoreHotel hotel={hotel} />

      </div>
    </div>
  );
}
