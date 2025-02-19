'use client';
import Image from 'next/image';
import React,{useEffect} from 'react';
import Navbar from './Navbar';
import HeroSection from './HeroSection';
import TabSection from './TabSection';
import Footer from './Footer';
import { useState } from 'react';



function Page() {


  const [deal, setDeal] = useState(null);

  useEffect(() => {
    async function getDeal() {
      try {
        const res = await fetch('https://api.techneapp-staging.site/api/deals/public/all/whv/all-inclusive-stay-at-the-pearl-of-the-orient-goa-whv1176');
        const dealData = await res.json();
        setDeal(dealData);
      } catch (error) {
        console.error('Error fetching deal:', error);
      }
    }
    getDeal();
  }, []);

  if (!deal) return <div>Loading...</div>;

  return (
    <>
      <Navbar />
      <HeroSection deal={deal} />
      <TabSection deal={deal} />
      <Footer/>

    </>
  );
}

export default Page;
