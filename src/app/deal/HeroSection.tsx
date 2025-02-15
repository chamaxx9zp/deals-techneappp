'use client'
import React , { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone } from "lucide-react";
import Image from 'next/image';



const images = [
    "https://images.unsplash.com/photo-1589553416260-f586c8f1514f?w=800&h=400&fit=crop",
    "https://images.unsplash.com/photo-1613425653628-23fd58c3c2b1?w=800&h=400&fit=crop",
    "https://images.unsplash.com/photo-1530076886461-ce58ea8abe24?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZnJlZSUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D",
  ];



function HeroSection() {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

  return (
    <>
 <section className="px-4 md:px-10 mt-6">
        <div className="grid md:grid-cols-3 grid-cols-1 gap-5">
          <div className="md:col-span-2">
            <div className="overflow-hidden rounded-lg">
              <div className="relative md:h-[450px] h-[250px]">
                <Image
                  src={images[currentImageIndex]}
                  alt="Kilimanjaro"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
              <div className="flex gap-4 mt-4">
                {images.map((img, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className="relative w-1/3 h-[80px] md:h-[150px] rounded-lg overflow-hidden"
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

          <div className="invisible md:visible grid grid-cols-1">

            <div className="bg-[#F5943C] rounded-lg shadow-lg">
              <div className="p-4">
                <h3 className="text-sm md:text-2xl font-bold text-white text-center">
                  $ 3449 For Six Days
                </h3>
              </div>
            </div>

            <Card className="bg-[#FFE1B3] border-0 mt-6">
              <CardHeader>
                <CardTitle className="text-lg">Contact Us</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="flex items-center gap-3 bg-white/80 p-3 rounded-lg">
                  <Phone className="text-[#8B1D3D]" />
                  <span>
                    <div className="text-sm">Hi</div>
                    <div className="text-lg">76544</div>
                  </span>
                </div>
                <div className="flex items-center gap-3 bg-white/80 p-3 rounded-lg">
                  <Phone className="text-[#8B1D3D]" />
                  <span>
                    <div className="text-sm">Hi</div>
                    <div className="text-lg">76544</div>
                  </span>
                </div>
                <div className="flex items-center gap-3 bg-white/80 p-3 rounded-lg">
                  <Phone className="text-[#8B1D3D]" />
                  <span>
                    <div className="text-sm">Hi</div>
                    <div className="text-lg">76544</div>
                  </span>
                </div>
              </CardContent>
            </Card>


            <div className="bg-[#F5943C] p-4 rounded-lg mt-4">
              <div className="text-white">Check Availability</div>
            </div>

          </div>

          <div className="visible md:invisible">
            <div className="flex">
              <div className="w-2/3">
                <h2 className="text-xl md:text-3xl font-bold mb-6">
                  A 6-Day Trek on Kilimanjaro's Machame Route 🏔️⛺️👢
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

            <Card className="bg-[#FFE1B3] border-0">
              <CardHeader>
                <CardTitle className="text-lg">Contact Us</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="flex items-center gap-3 bg-white/80 p-3 rounded-lg">
                  <Phone className="text-[#8B1D3D]" />
                  <span>
                    <div className="text-sm">Hi</div>
                    <div className="text-lg">76544</div>
                  </span>
                </div>
                <div className="flex items-center gap-3 bg-white/80 p-3 rounded-lg">
                  <Phone className="text-[#8B1D3D]" />
                  <span>
                    <div className="text-sm">Hi</div>
                    <div className="text-lg">76544</div>
                  </span>
                </div>
                <div className="flex items-center gap-3 bg-white/80 p-3 rounded-lg">
                  <Phone className="text-[#8B1D3D]" />
                  <span>
                    <div className="text-sm">Hi</div>
                    <div className="text-lg">76544</div>
                  </span>
                </div>
              </CardContent>
            </Card>

            <div className="bg-[#F5943C] p-4 rounded-lg mt-4">
              <div className="text-white">Check Availability</div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default HeroSection