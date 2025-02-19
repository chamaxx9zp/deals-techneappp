import React, { forwardRef } from "react";
import Image from "next/image";
import ViewMoreHighlight from "./ViewMoreHighlight";

const Highlight = forwardRef(function Highlight(props, ref) {
  const { highlight } = props;

  if (!highlight) return null; 

  // Convert HTML string to an array of list items
  const extractHighlights = () => {
    if (!highlight.content) return [];
    const parser = new DOMParser();
    const doc = parser.parseFromString(highlight.content, "text/html");
    return Array.from(doc.querySelectorAll("li")).map((li) => li.textContent);
  };

  const highlightsList = extractHighlights();

  return (
    <section ref={ref} className="pb-16">
      <h2 className="text-4xl font-bold text-[#E85D24] mb-8">
        {highlight.caption || "HIGHLIGHTS"}
      </h2>

      <div className="grid md:grid-cols-2 gap-8 items-center">

        <div className="relative md:h-[300px] h-[270px] rounded-lg overflow-hidden">
          <Image
            src={`https://cdn.techneapp-staging.site/${highlight.image}`}
            alt={highlight.imageAlt || "Highlight Image"}
            fill
            className="object-cover rounded-lg"
          />
        </div>

        {/* Right Side - Dynamic Highlights List */}
        <div className="flex flex-col h-full">
          {highlightsList.map((item, index) => (
            <div key={index} className="flex items-start gap-2">
              <span className="text-pink-500 text-2xl">✻</span>
              <p className="text-lg">{item}</p>
            </div>
          ))}

          <div className="flex-grow"></div>

        
        </div>
      </div>
    </section>
  );
});

export default Highlight;
