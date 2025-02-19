import React, { useState } from "react";
import { Drawer, DrawerClose, DrawerContent, DrawerDescription, DrawerFooter, DrawerHeader, DrawerTitle, DrawerTrigger } from "@/components/ui/drawer";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useMediaQuery } from "../../hooks/use-media-query";

const ViewMoreHighlight = () => {
  const [open, setOpen] = useState(false);
  const isDesktop = useMediaQuery("(min-width: 768px)");

  return (
    <>
      {isDesktop ? (
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
    </>
  );
};

export default ViewMoreHighlight;
