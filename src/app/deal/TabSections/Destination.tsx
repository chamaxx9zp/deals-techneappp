import React, { forwardRef } from "react";
import Image from "next/image";

function Destination(props, ref) {
  const { holiday } = props;

  if (!holiday || holiday.length === 0) return null; // Prevent rendering if data is missing

  return (
    <section ref={ref} className="py-4 pb-16">
      <h2 className="text-4xl font-bold  text-[#E85D24] mb-8">Destination</h2>

      {/* Render holiday details */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Left Side - Image */}
        <div className="relative w-full h-[300px] md:h-[400px]">
          <Image
            src={`https://cdn.techneapp-staging.site/${holiday[0].holiday.image}`} // Replace with actual base URL
            alt={holiday[0].holiday.title}
            fill
            className="object-cover rounded-lg"
          />
        </div>

        {/* Right Side - Description */}
        <div>
          <h3 className="text-2xl font-semibold text-gray-900 mb-4">
            {holiday[0].holiday.title}
          </h3>
          <div
            className="text-lg text-gray-600"
            dangerouslySetInnerHTML={{ __html: holiday[0].holiday.description }}
          />
          <p className="mt-4 text-xl font-semibold text-orange-500">
            From £{holiday[0].holiday.pricePerPerson} per person
          </p>
        </div>
      </div>
    </section>
  );
}

// Wrap with forwardRef
export default forwardRef(Destination);
