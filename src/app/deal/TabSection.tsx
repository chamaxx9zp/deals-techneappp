'use client'
import React from 'react'
import { useEffect, useRef, useState } from "react"
import { Eye, Flame, Home, MapPin, Car, ChevronLeft, ChevronRight, Plane } from "lucide-react"
import Image from 'next/image';
import Highlight from './TabSections/Highlight';
import Accommodation from './TabSections/Accommodation';
import Overview from './TabSections/Overview';
import Holiday from './TabSections/Holiday';
import Payment from './TabSections/Payment';
import Excursion from './TabSections/Excursion';
import HotelList from './HotelList';
import Travel from './TabSections/Travel';


const tabs = [
    { id: "overview", label: "Overview", icon: Eye },
    { id: "highlights", label: "Highlights", icon: Flame },
    { id: "iteration", label: "Iterations", icon: Home },
    { id: "holiday", label: "Holiday", icon: MapPin },
    { id: "excursions", label: "Excursions", icon: Car },
    { id: "travel", label: "Travel", icon: Plane },
    { id: "payment", label: "Payment", icon: Car },
    
  ]

function TabSection({deal}) {

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
      const offset = 180; 
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
      <section className="px-0 md:px-10 pt-4">
        <div className="grid md:grid-cols-3 grid-cols-1 md:gap-5">
          <div className="col-span-2">
            <div className="min-h-screen bg-gray-50">
              <div className="sticky top-[74px] md:top-[88px] z-50 backdrop-blur-2xl bg-[#8B1D3D]/10 rounded-lg">
                <div className="relative max-w-7xl mx-auto">
                  <button
                    onClick={() => scrollTabs("left")}
                    className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-md p-2 rounded-full hover:bg-gray-50 md:block hidden"
                  >
                    <ChevronLeft className="h-5 w-5" />
                  </button>

                  <div
                    ref={tabsRef}
                    className="overflow-x-auto scrollbar-hide md:px-12 px-2"
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
                    className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-md p-2 rounded-full hover:bg-gray-50 md:block hidden"
                  >
                    <ChevronRight className="h-5 w-5" />
                  </button>
                </div>
              </div>

              <div className="max-w-7xl mx-auto px-4 py-8 bg-[#FAF3E9] shadow-lg rounded-lg">
                <Overview
                  ref={(el) => (sectionsRef.current.overview = el)}
                  overview={deal.overview}
                />
                <Highlight
                  ref={(el) => (sectionsRef.current.highlights = el)}
                  highlight={deal.highlight}
                />

                <Accommodation
                  ref={(el) => (sectionsRef.current.iteration = el)}
                />
                <Holiday
                  ref={(el) => (sectionsRef.current.holiday = el)}
                  holiday={deal.holidays}
                />

                <Excursion
                  ref={(el) => (sectionsRef.current.excursions = el)}
                  excursions={deal.excursions}
                />
                 <Travel ref={(el) => (sectionsRef.current.travel = el)} dealDestinations={deal.dealDestinations} />

                <Payment
                  ref={(el) => (sectionsRef.current.payment = el)}
                  payment={deal.payment}
                />
               

              </div>
            </div>
          </div>
          <div className="relative">
            <div className="sticky top-[90px]">
              <HotelList hotels={deal?.hotels || []} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default TabSection