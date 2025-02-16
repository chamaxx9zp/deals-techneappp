'use client'
import React from 'react'
import { useEffect, useRef, useState } from "react"
import { Eye, Flame, Home, MapPin, Car, ChevronLeft, ChevronRight } from "lucide-react"
import Image from 'next/image';

const tabs = [
    { id: "overview", label: "Overview", icon: Eye },
    { id: "highlights", label: "Highlights", icon: Flame },
    { id: "accommodations", label: "Accommodations", icon: Home },
    { id: "destination", label: "Destination", icon: MapPin },
    { id: "excursions", label: "Excursions", icon: Car },
  ]

function TabSection() {

  const [activeTab, setActiveTab] = useState("overview")
  const tabsRef = useRef<HTMLDivElement>(null)
  const sectionsRef = useRef<{ [key: string]: HTMLElement | null }>({})

  const scrollTabs = (direction: "left" | "right") => {
    if (tabsRef.current) {
      const scrollAmount = 200
      tabsRef.current.scrollLeft += direction === "left" ? -scrollAmount : scrollAmount
    }
  }

  const scrollToSection = (sectionId: string) => {
    const section = sectionsRef.current[sectionId];
    if (section) {
      const offset = 100; 
      const sectionPosition = section.offsetTop - offset;
      window.scrollTo({ top: sectionPosition, behavior: "smooth" });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200

      Object.entries(sectionsRef.current).forEach(([key, section]) => {
        if (section) {
          const { offsetTop, offsetHeight } = section
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveTab(key)
          }
        }
      })
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])
  return (
    <>
      <section className="px-4 md:px-10 pt-4">
        <div className="grid md:grid-cols-3 grid-cols-1">
          <div className="col-span-2">
            <div className="min-h-screen bg-gray-50">
              <div className="sticky top-0 z-50 bg-white">
                <div className="relative max-w-7xl mx-auto">
                  <button
                    onClick={() => scrollTabs("left")}
                    className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-md p-2 rounded-full hover:bg-gray-50"
                  >
                    <ChevronLeft className="h-5 w-5" />
                  </button>

                  <div
                    ref={tabsRef}
                    className="overflow-x-auto scrollbar-hide px-12"
                  >
                    <div className="flex space-x-2 py-4">
                      {tabs.map((tab) => {
                        const Icon = tab.icon;
                        return (
                          <button
                            key={tab.id}
                            onClick={() => {
                              setActiveTab(tab.id);
                              scrollToSection(tab.id);
                            }}
                            className={`
                      flex items-center gap-2 px-6 py-3 rounded-full transition-colors
                      ${
                        activeTab === tab.id
                          ? "bg-[#E85D24] text-white"
                          : "bg-[#FAF3E9] text-gray-700 hover:bg-[#FAF3E9]/80"
                      }
                    `}
                          >
                            <Icon className="h-5 w-5" />
                            <span className="whitespace-nowrap">
                              {tab.label}
                            </span>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  <button
                    onClick={() => scrollTabs("right")}
                    className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-md p-2 rounded-full hover:bg-gray-50"
                  >
                    <ChevronRight className="h-5 w-5" />
                  </button>
                </div>
              </div>

              <div className="max-w-7xl mx-auto px-4 py-8 bg-[#FAF3E9] shadow-lg rounded-lg">
                <section
                  ref={(el) => (sectionsRef.current.overview = el)}
                  className="pb-8"
                >
                  <h2 className="text-4xl font-bold text-[#E85D24] mb-8">
                    Overview
                  </h2>
                  <p className="text-lg text-gray-600">
                    Embark on an exhilarating 8-day tour with a 6-day trek on
                    Mount Kilimanjaro's Machame Route, also known as the "Whisky
                    Route" for its challenging terrain. Your journey begins with
                    a stay at the luxurious Gran Meliá Arusha before you set off
                    from Machame Gate into lush rainforests and stunning
                    high-altitude landscapes. Experience the diverse
                    environments,
                  </p>
                  <div className="mt-6">
                    <video
                      src="https://www.youtube.com/watch?v=fHCemviY06Y"
                      className="w-full h-auto rounded-lg shadow-lg"
                      autoPlay
                      loop
                      muted
                      playsInline
                    />
                  </div>
                </section>

                <section
                  ref={(el) => (sectionsRef.current.highlights = el)}
                  className="min-h-screen pb-16"
                >
                  <h2 className="text-4xl font-bold text-[#E85D24] mb-8">
                    HIGHLIGHTS
                  </h2>

                  <div className="grid md:grid-cols-2 gap-8 items-center">
                    <div className="relative h-[400px] rounded-lg overflow-hidden">
                      <Image
                        src="https://images.unsplash.com/photo-1613425653628-23fd58c3c2b1?w=800&h=400&fit=crop"
                        alt="Beach view with palm trees"
                        fill
                        className="object-cover rounded-lg"
                      />
                    </div>


                    <div className="flex flex-col justify-between h-full">
                      {[
                        "Return flights",
                        "Accommodation included",
                        "7 Nights stay in Goa – 5 stars – Alila Diwa",
                        "2km from Majorda Beach",
                        "Mish Mar Restaurant is within 0.75 miles",
                        "Mish Mar Restaurant is within 0.75 miles",
                      ].map((highlight, index) => (
                        <div key={index} className="flex items-start gap-2">
                          <span className="text-pink-500 text-2xl">✻</span>
                          <p className="text-lg">{highlight}</p>
                        </div>
                      ))}

                      <div className="pt-6 w-full">
                        <button className="bg-orange-500 text-white text-center w-full py-3 rounded-lg text-lg font-semibold transition hover:opacity-80">
                          View more <span>➜</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </section>

                <section
                  ref={(el) => (sectionsRef.current.accommodations = el)}
                  className="min-h-screen pb-16"
                >
                  <h2 className="text-4xl font-bold text-[#E85D24] mb-8">
                    ACCOMMODATION
                  </h2>
                  <p className="text-2xl text-gray-700 mb-6">
                    COMFORTABLE AND LUXURIOUS STAY
                  </p>
                </section>

                <section
                  ref={(el) => (sectionsRef.current.destination = el)}
                  className="min-h-screen pb-16"
                >
                  <h2 className="text-4xl font-bold text-gray-800 mb-8">
                    Destination
                  </h2>
                </section>

                <section
                  ref={(el) => (sectionsRef.current.excursions = el)}
                  className="min-h-screen pb-16"
                >
                  <h2 className="text-4xl font-bold text-gray-800 mb-8">
                    Excursions
                  </h2>
                </section>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default TabSection