'use client'
import React from 'react'
import { useState, useEffect } from 'react'



function page() {
    const [deal,setDeal] = useState(null)

    useEffect(()=>{
        async function getdeal() {
            const res = await fetch('https://api.techneapp-staging.site/api/deals/public/all/whv/all-inclusive-stay-at-the-pearl-of-the-orient-goa-whv1176')
            const dealData = await res.json()
            setDeal(dealData)
        }
        getdeal()
    },[])
    
    if (!deal) return <div>Loading...</div>
    console.log(deal)
    
    
  return (
    <>
    <section className='py-20 px-4'>
        <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 grid-cols-1"></div>
        </div>
    </section>
    </>
  )
}

export default page