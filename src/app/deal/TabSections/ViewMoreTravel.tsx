'use client'
import React, { useState } from "react";
import {
  Drawer,
  DrawerTrigger,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerDescription,
} from "@/components/ui/drawer";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useMediaQuery } from "../../hooks/use-media-query";
import { ChevronLeft, ChevronRight } from "lucide-react";

const imageBaseUrl = "https://cdn.techneapp-staging.site/";

const ViewMoreTravel = ({ techneDestinationSection }) => {
  const [open, setOpen] = useState(false);
  const isDesktop = useMediaQuery("(min-width: 768px)");
  const [currentIndex, setCurrentIndex] = useState(0);

  console.log(techneDestinationSection);

  if (!techneDestinationSection || techneDestinationSection.length === 0) {
    return <p>No additional destination information available.</p>;
  }

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % techneDestinationSection.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      (prevIndex - 1 + techneDestinationSection.length) % techneDestinationSection.length
    );
  };

  return (
    <>
      {isDesktop ? (
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger asChild>
            <Button className="bg-orange-500 text-white text-center w-full py-3 rounded-lg text-lg font-semibold transition hover:bg-[#8B1D3D]">
              View more <span>➜</span>
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-7xl w-full">
            <DialogHeader>
              <DialogTitle>More Information</DialogTitle>
              <DialogDescription>
                Explore the details of your travel destinations below.
              </DialogDescription>
            </DialogHeader>
            <div className="grid grid-cols-2 gap-6">
              <div className="relative w-full h-[400px]">
                <Image
                  src={`${imageBaseUrl}${techneDestinationSection[currentIndex].images[0].path}`}
                  alt={
                    techneDestinationSection[currentIndex].images[0].imageAlt ||
                    "Destination Image"
                  }
                  fill
                  className="object-cover rounded-lg"
                />
                <div className="absolute inset-0 flex justify-between items-center p-4">
                  <button
                    className="bg-white p-2 rounded-full shadow-md"
                    onClick={prevSlide}
                  >
                    <ChevronLeft className="w-6 h-6 text-gray-700" />
                  </button>
                  <button
                    className="bg-white p-2 rounded-full shadow-md"
                    onClick={nextSlide}
                  >
                    <ChevronRight className="w-6 h-6 text-gray-700" />
                  </button>
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4">
                  {techneDestinationSection[currentIndex].images[0].imageAlt || "Travel Highlight"}
                </h3>
                <div
                  className="text-lg text-gray-600 overflow-y-auto max-h-[400px] pr-2"
                  dangerouslySetInnerHTML={{
                    __html: techneDestinationSection[currentIndex].images[0].description,
                  }}
                />
              </div>
            </div>
          </DialogContent>
        </Dialog>
      ) : (
        <Drawer open={open} onOpenChange={setOpen}>
  <DrawerTrigger asChild>
    <Button className="bg-orange-500 text-white text-center w-full py-3 rounded-lg text-lg font-semibold transition hover:bg-[#8B1D3D]">
      View more <span>➜</span>
    </Button>
  </DrawerTrigger>
  <DrawerContent className="max-w-7xl w-full">
    <DrawerHeader>
      <DrawerTitle>More Information</DrawerTitle>
      <DrawerDescription>
        Explore the details of your travel destinations below.
      </DrawerDescription>
    </DrawerHeader>
    <div className="flex flex-col gap-4">
      {/* Image Section */}
      <div className="relative w-full h-[400px]">
        <Image
          src={`${imageBaseUrl}${techneDestinationSection[currentIndex].images[0].path}`}
          alt={
            techneDestinationSection[currentIndex].images[0].imageAlt ||
            "Destination Image"
          }
          fill
          className="object-cover rounded-lg"
        />
        <div className="absolute inset-0 flex justify-between items-center p-4">
          <button
            className="bg-white p-2 rounded-full shadow-md"
            onClick={prevSlide}
          >
            <ChevronLeft className="w-6 h-6 text-gray-700" />
          </button>
          <button
            className="bg-white p-2 rounded-full shadow-md"
            onClick={nextSlide}
          >
            <ChevronRight className="w-6 h-6 text-gray-700" />
          </button>
        </div>
      </div>

      {/* Carousel Indicators */}
      <div className="flex justify-center space-x-2">
        {techneDestinationSection.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`w-3 h-3 rounded-full ${
              currentIndex === idx ? "bg-orange-500" : "bg-gray-300"
            }`}
          ></button>
        ))}
      </div>

      {/* Description Section */}
      <div>
        <h3 className="text-2xl font-bold mb-4">
          {techneDestinationSection[currentIndex].images[0].imageAlt ||
            "Travel Highlight"}
        </h3>
        <div
          className="text-lg text-gray-600 overflow-y-auto max-h-[400px] pr-2"
          dangerouslySetInnerHTML={{
            __html: techneDestinationSection[currentIndex].images[0].description,
          }}
        />
      </div>
    </div>
  </DrawerContent>
</Drawer>

      )}
    </>
  );
};

export default ViewMoreTravel;
