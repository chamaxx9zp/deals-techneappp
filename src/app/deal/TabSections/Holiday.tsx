import React, { forwardRef } from "react";
import Image from "next/image";

function Holiday(props, ref) {
  const { holiday } = props;

  if (!holiday || holiday.length === 0) return null; 

  return (
    <section ref={ref} className="py-4 pb-8">
      <h2 className="text-4xl font-bold  text-[#E85D24] pb-5">Holiday</h2>


      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">

        <div className="relative w-full h-[300px] md:h-[400px]">
          <Image
            src={`https://cdn.techneapp-staging.site/${holiday[0].holiday.image}`} 
            alt={holiday[0].holiday.title}
            fill
            className="object-cover rounded-lg shadow-xl"
          />
        </div>

        <div className="flex flex-col h-full">
          <h3 className="text-2xl font-semibold text-gray-900 mb-4">
            {holiday[0].holiday.title}
          </h3>
          <div
            className="text-lg text-gray-600"
            dangerouslySetInnerHTML={{ __html: holiday[0].holiday.description }}
          />
          <div className="flex-grow"></div>
          <p className="mt-4 md:text-2xl text-xl font-semibold text-orange-500">
            From £{holiday[0].holiday.pricePerPerson} PP
          </p>
        </div>
        
      </div>
    </section>
  );
}

export default forwardRef(Holiday);
