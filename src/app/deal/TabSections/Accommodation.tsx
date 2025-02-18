"use client"

import React, { useState } from "react"
import { cn } from "@/lib/utils"
import { Card } from "@/components/ui/card"

interface Itinerary {
  id: number
  day: number
  content: string
  image: string | null
  imageAlt: string | null
}

const itineraries: Itinerary[] = [
  {
    id: 4040,
    day: 1,
    content:
      "<p><strong>Arrival</strong></p><p>Arrive in Tanzania and settle into the luxurious Gran Meliá Arusha. Enjoy a warm welcome dinner while taking in the hotel's elegant ambiance, including its spa, infinity pool, and gourmet dining options. This is the perfect opportunity to relax and prepare for your upcoming trek.</p>",
    image: null,
    imageAlt: null,
  },
  {
    id: 4041,
    day: 2,
    content:
      "<p><strong>Moshi-Machame Camp</strong></p><p>After breakfast, transfer to Machame Gate and begin your trek through lush rainforest. Expect muddy and slippery trails. Arrive at Machame Camp in the late afternoon for a hearty lunch and evening dinner as you start acclimating to the high-altitude environment.</p>",
    image: null,
    imageAlt: null,
  },
  {
    id: 4042,
    day: 3,
    content:
      "<p><strong>Machame Camp-Shira II Camp</strong></p><p>Ascend from Machame Camp to Shira II Camp, crossing streams and rocky ridges. Enjoy breathtaking views of the Western Breach and glaciers. Settle into Shira II Camp for the night with a warm dinner and prepare for the colder temperatures at this exposed campsite.</p>",
    image: null,
    imageAlt: null,
  },
  {
    id: 4043,
    day: 4,
    content:
      "<p><strong>Shira II Camp—Barranco Camp</strong></p><p>Continue from Shira II Camp to Barranco Camp, encountering the Lava Tower. Experience altitude effects and have lunch at the tower. Descend 680 metres to Barranco Camp, nestled in a valley below the Great Barranco Wall, offering an excellent acclimatisation advantage.</p>",
    image: null,
    imageAlt: null,
  },
  {
    id: 4044,
    day: 5,
    content:
      "<p><strong>Barranco Camp-Barafu Camp</strong></p><p>Conquer the Great Barranco Wall after breakfast and traverse the Karanga Valley. Arrive at Barafu Camp, the last water stop before the summit. Settle into this exposed camp on a rocky ridge, rest, and prepare for the summit attempt with an early dinner.</p>",
    image: null,
    imageAlt: null,
  },
  {
    id: 4045,
    day: 6,
    content:
      "<p><strong>Barafu Camp, Uhuru Peak, Mweka Camp</strong></p><p>Start the summit attempt around midnight. Ascend through stone scree to Stella Point and then to Uhuru Peak for sunrise. Descend to Barafu Camp for lunch, then continue down to Mweka Camp in the rainforest for a restful night.</p>",
    image: null,
    imageAlt: null,
  },
  {
    id: 4046,
    day: 7,
    content:
      "<p><strong>Mweka Camp—Arusha</strong></p><p>Descend from Mweka Camp to Mweka Gate, celebrate your achievement with staff, and receive your summit certificate. Return to Arusha and check into the Mount Meru Hotel. Enjoy dinner and relaxation at this tranquil retreat, with amenities to unwind after your trek.</p>",
    image: null,
    imageAlt: null,
  },
  {
    id: 4047,
    day: 8,
    content:
      "<p><strong>Departure</strong></p><p>Depending on your flight time, explore Arusha with a city tour and visit local markets. Enjoy breakfast and lunch at the Mount Meru Hotel before transferring to the airport for your onward journey. If booked, transition smoothly to a safari or Zanzibar for further adventures.</p>",
    image: null,
    imageAlt: null,
  },
]

// Helper function to extract title and content from HTML string
function extractTitleAndContent(html: string) {
  const titleMatch = html.match(/<strong>(.*?)<\/strong>/)
  const title = titleMatch ? titleMatch[1] : ""
  const content = html.replace(/<p><strong>.*?<\/strong><\/p>/, "").replace(/<\/?p>/g, "")

  return {
    title: `<h2 class="text-2xl font-semibold text-[#2B6777] mb-4">${title}</h2>`,
    content: `<p class="text-gray-600 leading-relaxed">${content}</p>`,
  }
}

const Accommodation = React.forwardRef<HTMLDivElement>((_, ref) => {
  const [activeDay, setActiveDay] = useState(1)
  const currentItinerary = itineraries.find((item) => item.day === activeDay)

  return (
    <>
      <section ref={ref} className="pb-16">
        <h2 className="text-4xl font-bold text-[#E85D24] mb-8">Itinerary</h2>
        <p className="text-xl text-gray-700 mb-6">COMFORTABLE AND LUXURIOUS STAY</p>

        {/* Day selector */}
        <div className="relative mb-8">
          <div className="flex space-x-8 overflow-x-auto pb-4 scrollbar-hide">
            {Array.from({ length: 8 }, (_, i) => i + 1).map((day) => (
              <button
                key={day}
                onClick={() => setActiveDay(day)}
                className={cn(
                  "relative min-w-[100px] focus:outline-none group transition-colors duration-200",
                  activeDay === day ? "text-[#2B6777]" : "text-gray-500 hover:text-gray-700",
                )}
              >
                <span className="text-lg font-medium">Day - {day}</span>
                {activeDay === day && (
                  <div className="absolute -bottom-4 left-0 w-full h-1 bg-[#C81E51] rounded-full" />
                )}
              </button>
            ))}
          </div>
          <div className="absolute bottom-0 left-0 w-full h-px bg-gray-200" />
        </div>

        {/* Content section */}
        {currentItinerary && (
          <Card className="p-6 transition-all duration-300 transform translate-y-0 opacity-100">
            <div
              className="prose prose-lg max-w-none"
              dangerouslySetInnerHTML={{
                __html: extractTitleAndContent(currentItinerary.content).title,
              }}
            />
            <div
              className="prose prose-lg max-w-none"
              dangerouslySetInnerHTML={{
                __html: extractTitleAndContent(currentItinerary.content).content,
              }}
            />
          </Card>
        )}
      </section>
    </>
  )
})

export default Accommodation
