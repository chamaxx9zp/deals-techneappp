import React from "react";
import Image from "next/image";

const Overview = React.forwardRef<HTMLDivElement, { overview: any }>(
  ({ overview }, ref) => {
    if (!overview) return null;

    return (
      <section ref={ref} className="md:pb-5">
        <h2 className="text-4xl font-bold text-[#E85D24] pb-5">Overview</h2>

        <div
          className="text-lg text-gray-600"
          dangerouslySetInnerHTML={{ __html: overview.content }}
        />

        {overview.images?.length > 0 && (
          <div className="relative w-full h-[400px] mt-6">
            <Image
              src={`https://cdn.techneapp-staging.site/${overview.images[0].path}`} 
              alt={overview.images[0].alt || "Overview Image"}
              fill
              className="object-cover rounded-lg shadow-2xl"
            />
          </div>
        )}
          <div className="text-center md:hidden block text-sm border-t mt-5 mb-2 border-orange-500 pt-4">
        </div>
      </section>
    );
  }
);

export default Overview;
