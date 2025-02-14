import React from 'react'
import { Button } from "@/components/ui/button"

function Navbar() {
  return (
    <>
        <section className="px-10 pt-4">
      <nav className="bg-[#8B1D3D] text-white p-4 rounded-lg mb-6 flex justify-between items-center">
        <h1 className="text- md:text-xl font-bold">WanderQuest</h1>
        <div className="hidden md:flex gap-6">
          {["Destinations", "Destinations", "Destinations", "Destinations"].map((item, index) => (
            <Button key={index} variant="ghost" className="text-white hover:text-white/80">
              {item}
            </Button>
          ))}
        </div>
      </nav>
    </section>
    </>
  )
}

export default Navbar