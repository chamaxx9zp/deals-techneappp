import React from "react";
import { Button } from "@/components/ui/button";

function Navbar() {
  return (
    <>
      {/* Fixed Navbar */}
      <nav className="fixed top-0 left-0 w-full bg-[#8B1D3D] text-white p-5 z-50 flex justify-between items-center shadow-lg md:px-10">
        <h1 className="text-md md:text-xl font-bold">WanderQuest</h1>
        <div className="hidden md:flex gap-6">
          {["Destinations", "Destinations", "Destinations", "Destinations"].map((item, index) => (
            <Button key={index} variant="ghost" className="text-white hover:text-white/80">
              {item}
            </Button>
          ))}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
