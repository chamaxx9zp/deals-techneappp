import React from "react";
import Image from "next/image";

const Overview = React.forwardRef<HTMLDivElement, { overview: any }>(
  ({ overview }, ref) => {
    if (!overview) return null; // Prevent rendering if data is missing

    return (
      <section ref={ref} className="pb-8">
        <h2 className="text-4xl font-bold text-[#E85D24] mb-8">Overview</h2>

        {/* Render Overview Content */}
        <div
          className="text-lg text-gray-600"
          dangerouslySetInnerHTML={{ __html: overview.content }}
        />

        {/* Image Gallery */}
        {overview.images?.length > 0 && (
          <div className="mt-6">
            <Image
              src={`https://cdn.techneapp-staging.site/${overview.images[0].path}`} // Replace with actual base URL
              alt={overview.images[0].alt || "Overview Image"}
              width={800} // Set width based on design needs
              height={400} // Set height based on design needs
              className="object-cover rounded-lg"
            />
          </div>
        )}
      </section>
    );
  }
);

export default Overview;
