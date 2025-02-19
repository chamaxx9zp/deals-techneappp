import React, { forwardRef } from "react";
import Image from "next/image";

const imageBaseUrl = "https://cdn.techneapp-staging.site/";

const Travel = forwardRef(function Travel(props, ref) {
  const { dealDestinations } = props;

  if (!dealDestinations || dealDestinations.length === 0) {
    return <p className="text-gray-500">No travel destinations available.</p>;
  }

  return (
    <section ref={ref} className="py-4 pb-16">
      <h2 className="text-4xl font-bold text-[#E85D24] mb-8">Travel Destinations</h2>

      <div className="grid md:grid-cols-2 gap-6">
        {dealDestinations.map((destination, index) => (
          <div key={index} className="">
            <div className="relative w-full h-[200px] rounded-lg overflow-hidden">
              <Image
                src={`${imageBaseUrl}${destination.destination.image.path}`}
                alt={destination.destination.image.alt || "Destination"}
                fill
                className="object-cover"
              />
            </div>
            <h3 className="text-xl font-semibold mt-4">{destination.destination.name}</h3>
            <p className="text-gray-600">Country: {destination.destination.country}</p>
            <p className="text-gray-600">No. of Nights: {destination.noOfNights}</p>
          </div>
        ))}
      </div>
    </section>
  );
});

export default Travel;
