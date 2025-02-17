import React, { useState } from "react";
import Image from "next/image";
import { Drawer, DrawerClose, DrawerContent, DrawerDescription, DrawerFooter, DrawerHeader, DrawerTitle, DrawerTrigger } from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";
import { useMediaQuery } from "../../hooks/use-media-query";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

const Highlight = React.forwardRef<HTMLDivElement>((_, ref) => {
  const [open, setOpen] = useState(false);
  const isDesktop = useMediaQuery("(min-width: 768px)");

  return (
    <section ref={ref} className="min-h-screen pb-16">
      <h2 className="text-4xl font-bold text-[#E85D24] mb-8">HIGHLIGHTS</h2>
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
          ].map((highlight, index) => (
            <div key={index} className="flex items-start gap-2">
              <span className="text-pink-500 text-2xl">✻</span>
              <p className="text-lg">{highlight}</p>
            </div>
          ))}

          <div className="pt-6 w-full">
            {isDesktop ? (
              // Large window dialog for desktop
              <Dialog open={open} onOpenChange={setOpen}>
                <DialogTrigger asChild>
                  <Button className="bg-orange-500 text-white text-center w-full py-3 rounded-lg text-lg font-semibold transition hover:opacity-80">
                    View more <span>➜</span>
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-4xl w-full">
                  <DialogHeader>
                    <DialogTitle>More Information</DialogTitle>
                    <DialogDescription>Explore the details of your trip below.</DialogDescription>
                  </DialogHeader>
                  <div className="grid grid-cols-2 gap-6 p-4">
                    <Image
                      src="https://images.unsplash.com/photo-1613425653628-23fd58c3c2b1?w=800&h=600&fit=crop"
                      alt="Scenic View"
                      width={400}
                      height={300}
                      className="rounded-lg object-cover"
                    />
                    <div>
                      <p className="text-lg font-medium">
                        Enjoy your 7-night stay in a luxurious 5-star resort with breathtaking views and all-inclusive amenities.
                      </p>
                      <ul className="list-disc mt-4 ml-6 text-gray-600">
                        <li>Luxury accommodation</li>
                        <li>Daily breakfast included</li>
                        <li>Access to private beaches</li>
                        <li>Complimentary spa services</li>
                      </ul>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            ) : (
              // Drawer for mobile
              <Drawer open={open} onOpenChange={setOpen}>
                <DrawerTrigger asChild>
                  <Button className="bg-orange-500 text-white text-center w-full py-3 rounded-lg text-lg font-semibold transition hover:opacity-80">
                    View more <span>➜</span>
                  </Button>
                </DrawerTrigger>
                <DrawerContent>
                  <DrawerHeader className="text-left">
                    <DrawerTitle>More Information</DrawerTitle>
                    <DrawerDescription>Explore the details of your trip below.</DrawerDescription>
                  </DrawerHeader>
                  <div className="p-4">
                    <p className="text-lg font-medium">
                      Enjoy your 7-night stay in a luxurious 5-star resort with breathtaking views and all-inclusive amenities.
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
          </div>
        </div>
      </div>
    </section>
  );
});

export default Highlight;
