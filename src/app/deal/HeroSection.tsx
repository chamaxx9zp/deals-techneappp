"use client";
import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone } from "lucide-react";
import Image from "next/image";
import { DatePickerWithRange } from "./CheckAvailability";
import PriceCard from "./HeroSecComponents/PriceCard";
import ContactUsCard from "./HeroSecComponents/ContactUsCard";

// const images = [
//   "https://images.unsplash.com/photo-1589553416260-f586c8f1514f?w=800&h=400&fit=crop",
//   "https://images.unsplash.com/photo-1613425653628-23fd58c3c2b1?w=800&h=400&fit=crop",
//   "https://images.unsplash.com/photo-1530076886461-ce58ea8abe24?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZnJlZSUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D",
// ];

function HeroSection({ deal }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const imageBaseUrl = "https://cdn.techneapp-staging.site/";
  const images = deal?.heroImages?.map((img) => `${imageBaseUrl}${img.path}`) || [];

  return (
    <>
      <section className="px-4 md:px-10 mt-24">
        <div className="grid md:grid-cols-3 grid-cols-1 gap-5">
          {/* Hero Image section */}
          <div className="md:col-span-2">
            <div className="overflow-hidden rounded-lg">
              <div className="">
                <h2 className=" md:text-4xl font-bold mb-4">
                {deal?.title || "hero title"}
                </h2>
              </div>

              <div className="relative w-full h-[300px] md:h-[400px]">
                <Image
                  src={images[currentImageIndex]}
                  alt="Kilimanjaro"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>

              <div className="mt-4 grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-2 md:gap-4 overflow-x-auto">
                {images.map((img, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className="relative w-full h-[80px] md:h-[120px] rounded-lg overflow-hidden border-2"
                  >
                    <Image
                      src={img}
                      alt={`Thumbnail ${index + 1}`}
                      fill
                      className="object-cover"
                    />
                  </button>
                ))}
              </div>
              
            </div>
          </div>

          {/* desktop only Hero section right side */}
          <div className="hidden md:block grid-cols-1">

            <PriceCard price={deal?.price} farePrice={deal?.farePrice} />

            <ContactUsCard/>

            <div className="bg-orange-500 p-4 rounded-lg mt-4">
              <div className="text-white text-xl font-bold">Check Availability</div>
              <DatePickerWithRange className="" />
            </div>
          </div>

          {/* Mobile Only */}
          <div className="block md:hidden">
            <div className="flex">
              <div className="w-2/3">
                <h2 className=" md:text-3xl font-bold mb-4">
                {deal?.title || "hero title"}
                </h2>
              </div>
              <div className="w-1/3">
                <div className="bg-[#F5943C] rounded-lg shadow-lg">
                  <div className="p-4">
                    <h3 className="text-sm md:text-2xl font-bold text-white text-center">
                      $ 3449 For Six Days
                    </h3>
                  </div>
                </div>
              </div>
            </div>

            <ContactUsCard/>

            <div className="bg-[#F5943C] p-4 rounded-lg mt-4">
              <DatePickerWithRange className="" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default HeroSection;
