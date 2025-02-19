import React, { forwardRef } from "react";
import Image from "next/image";

function Payment(props, ref) {
  const { payment } = props;

  if (!payment) return null;

  return (
    <section ref={ref} className="pb-16">
      <h2 className="text-4xl font-bold text-[#E85D24] mb-8">Payment</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Left Side */}
        <div className="relative w-full h-[300px] md:h-[400px]">
          <Image
            src="https://images.pexels.com/photos/259200/pexels-photo-259200.jpeg?auto=compress&cs=tinysrgb&w=1200"
            alt="Design"
            fill
            className="object-cover rounded-lg shadow-xl"
          />
        </div>

        {/* Right Side */}
        <div className="flex flex-col h-full">
          <h3 className="text-2xl font-semibold text-gray-900 mb-4">
            Payment Plan
          </h3>
          <div
            className="text-lg text-gray-600"
            dangerouslySetInnerHTML={{ __html: payment }}
          />
        </div>
      </div>
    </section>
  );
}

// Wrap with forwardRef
export default forwardRef(Payment);
