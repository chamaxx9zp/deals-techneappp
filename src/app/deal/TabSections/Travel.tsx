import React, { forwardRef } from "react";
import Image from "next/image";
import ViewMoreTravel from "./ViewMoreTravel";
import WeatherStatus from "./WeatherStatus";

const imageBaseUrl = "https://cdn.techneapp-staging.site/";

const Travel = forwardRef(function Travel(props, ref) {
  const { dealDestinations } = props;

  const techneDestinationSection = dealDestinations[0]?.destination?.techneDestinationSection;


  if (!dealDestinations || dealDestinations.length === 0) {
    return <p className="text-gray-500">No travel destinations available.</p>;
  }

  return (
    <section ref={ref} className="md:pb-8">
      <h2 className="text-4xl font-bold text-[#E85D24] pb-5">Travel Destinations</h2>

      <div className="grid gap-4">
        <div className="">
        {dealDestinations.map((destination, index) => (
          <div key={index} className="">
            {/* Image with overlay text */}
            <div className="relative w-full h-[250px] md:h[400px] rounded-lg overflow-hidden">
              <Image
                src={`${imageBaseUrl}${destination.destination.image.path}`}
                alt={destination.destination.image.alt || "Destination"}
                fill
                className="object-cover"
              />
              <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/60 to-transparent text-white p-4">
                <p className="text-lg font-semibold">{destination.destination.name}</p>
                <p className="text-sm">Country: {destination.destination.country}</p>
                <p className="text-sm">No. of Nights: {destination.noOfNights}</p>
              </div>
            </div>
          </div>
        ))}
        </div>
        <ViewMoreTravel techneDestinationSection={techneDestinationSection} />
        <div className="">
          <WeatherStatus/>
          
        </div>
        
        
      </div>
      <div className="text-center md:hidden block text-sm border-t mt-6 border-orange-500 pt-4"></div>

    </section>
  );
});

export default Travel;
