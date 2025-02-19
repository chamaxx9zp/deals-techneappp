import React, { useState } from "react";
import Image from "next/image";
import ViewMoreHighlight from "./ViewMoreHighlight";

const Highlight = React.forwardRef<HTMLDivElement>((_, ref) => {

  return (
    <section ref={ref} className="pb-16">
      <h2 className="text-4xl font-bold text-[#E85D24] mb-8">HIGHLIGHTS</h2>
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div className="relative md:h-[400px] h-[270px] rounded-lg overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1613425653628-23fd58c3c2b1?w=800&h=400&fit=crop"
            alt="Beach view with palm trees"
            fill
            className="object-cover rounded-lg"
          />
        </div>

        <div className="flex flex-col justify-between h-full">
          {[
            "Return flights",
            "Accommodation included",
            "7 Nights stay in Goa – 5 stars – Alila Diwa",
            "2km from Majorda Beach",
            "Mish Mar Restaurant is within 0.75 miles",
          ].map((highlight, index) => (
            <div key={index} className="flex items-start gap-2">
              <span className="text-pink-500 text-2xl">✻</span>
              <p className="text-lg">{highlight}</p>
            </div>
          ))}

          <div className="pt-6 w-full">
            <ViewMoreHighlight/>
          </div>
        </div>
      </div>
    </section>
  );
});

export default Highlight;
