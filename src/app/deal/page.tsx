'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Navbar from './Navbar';


function Page() {
//   const [deal, setDeal] = useState(null);

//   useEffect(() => {
//     async function getDeal() {
//       try {
//         const res = await fetch('https://api.techneapp-staging.site/api/deals/public/all/whv/all-inclusive-stay-at-the-pearl-of-the-orient-goa-whv1176');
//         const dealData = await res.json();
//         setDeal(dealData);
//       } catch (error) {
//         console.error('Error fetching deal:', error);
//       }
//     }
//     getDeal();
//   }, []);

//   if (!deal) return <div>Loading...</div>;


  return (
    <>
    <Navbar/>
    

    </>
   
  );
}

export default Page;
