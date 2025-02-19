import React from "react";
import Image from "next/image";

const Overview = React.forwardRef<HTMLDivElement, { overview: any }>(
  ({ overview }, ref) => {
    if (!overview) return null;

    return (
      <section ref={ref} className="pb-8">
        <h2 className="text-4xl font-bold text-[#E85D24] mb-8">Overview</h2>

        <div
          className="text-lg text-gray-600"
          dangerouslySetInnerHTML={{ __html: overview.content }}
        />

        {overview.images?.length > 0 && (
          <div className="mt-6">
            <Image
              src={`https://cdn.techneapp-staging.site/${overview.images[0].path}`} 
              alt={overview.images[0].alt || "Overview Image"}
              width={800} 
              height={400} 
              className="object-cover rounded-lg shadow-2xl"
            />
          </div>
        )}
      </section>
    );
  }
);

export default Overview;
