import React, { forwardRef } from "react";
import Image from "next/image";

function Excursion(props, ref) {
  const { excursions } = props;

  if (!excursions) return null;

  return (
    <section ref={ref} className="pb-16">
      <h2 className="text-4xl font-bold text-[#E85D24] mb-8">Excursions</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">

        <div className="relative w-full h-[300px] md:h-[400px]">
          <Image
            src="https://images.pexels.com/photos/235837/pexels-photo-235837.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="Excursion"
            fill
            className="object-cover rounded-lg shadow-xl"
          />
        </div>

        {/* Right Side - Excursion Description */}
        <div className="flex flex-col h-full">
          <h3 className="text-2xl font-semibold text-gray-900 mb-4">
            Available Excursions
          </h3>
          
          <div
            className="text-lg text-gray-600"
            dangerouslySetInnerHTML={{ __html: excursions }}
          />
        </div>
      </div>
    </section>
  );
}

export default forwardRef(Excursion);
