import React, { useState } from "react";
import { useMediaQuery } from "../hooks/use-media-query";
import { Drawer, DrawerClose, DrawerContent, DrawerDescription, DrawerFooter, DrawerHeader, DrawerTitle, DrawerTrigger } from "@/components/ui/drawer";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const imageBaseUrl = "https://cdn.techneapp-staging.site/";

function ViewMoreHotel({hotel}) {
     const [open, setOpen] = useState(false);
      const isDesktop = useMediaQuery("(min-width: 768px)");
      const [currentImageIndex, setCurrentImageIndex] = useState(0);

      if (!hotel) return null;

      const images = hotel.images.map((img) => `${imageBaseUrl}${img.path}`);

      const parseAmenitiesList = (htmlString: string) => {
        const doc = new DOMParser().parseFromString(htmlString, "text/html");
        return Array.from(doc.querySelectorAll("li")).map((li) => li.textContent);
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
              <DialogTitle className="text-2xl">{hotel.name}</DialogTitle>
              <DialogDescription>
                Explore the details of your hotel below.
              </DialogDescription>
            </DialogHeader>
            <div className="grid md:grid-cols-2 gap-3">
              {/* image gallery  */}
              <div className="">
                <div className="relative w-full h-[300px] md:h-[400px]">
                  <Image
                    src={images[currentImageIndex]}
                    alt={hotel.name}
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
                <div className="mt-2 grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-0 md:gap-2 overflow-x-auto">
                  {images.map((img, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`relative w-full h-[40px] md:h-[80px] rounded-lg overflow-hidden border-2 ${
                        currentImageIndex === index
                          ? "border-orange-500"
                          : "border-gray-300"
                      }`}
                    >
                      <Image
                        src={img}
                        alt={`Thumbnail ${index + 1}`}
                        fill
                        className="object-cover"
                      />
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <div className="h-[500px] overflow-y-auto pr-2">
                  {/* Hotel Description */}
                  <div className="text-gray-800">
                    <div
                      dangerouslySetInnerHTML={{ __html: hotel.description }}
                    />
                  </div>

                  {/* Hotel Amenities - 3 Columns */}
                  <div className="mt-6">
                    <h3 className="text-xl font-semibold mb-3">
                      Hotel Amenities
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                      {parseAmenitiesList(hotel.amenities).map(
                        (item, index) => (
                          <div key={index} className="text-gray-600">
                            {item}
                          </div>
                        )
                      )}
                    </div>
                  </div>

                  {/* Room Amenities - Below Hotel Amenities */}
                  <div className="mt-6">
                    <h3 className="text-xl font-semibold mb-3">
                      Room Amenities
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                      {parseAmenitiesList(hotel.roomAmenities).map(
                        (item, index) => (
                          <div key={index} className="text-gray-600">
                            {item}
                          </div>
                        )
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      ) : (
        <Drawer open={open} onOpenChange={setOpen}>
          <DrawerTrigger asChild>
            <Button className="bg-orange-500 text-white text-center w-full py-3 rounded-lg text-lg font-semibold transition hover:bg-[#8B1D3D] my-4">
              View more <span>➜</span>
            </Button>
          </DrawerTrigger>
          <DrawerContent>
            <DrawerHeader className="text-left">
              <DrawerTitle>More Information</DrawerTitle>
              <DrawerDescription>
                Explore the details of your trip below.
              </DrawerDescription>
            </DrawerHeader>
            <div className="p-4">
              <p className="text-lg font-medium">
                Enjoy your 7-night stay in a luxurious 5-star resort with
                breathtaking views and all-inclusive amenities.
              </p>
              <ul className="list-disc mt-4 ml-6 text-gray-600">
                <li>Luxury accommodation</li>
                <li>Daily breakfast included</li>
                <li>Access to private beaches</li>
                <li>Complimentary spa services</li>
              </ul>
            </div>
            <DrawerFooter className="pt-2">
              <DrawerClose asChild>
                <Button variant="outline">Close</Button>
              </DrawerClose>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      )}
    </>
  );
}

export default ViewMoreHotel