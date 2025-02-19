import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone } from "lucide-react";
import { Headset } from 'lucide-react';
import { MailOpen } from 'lucide-react';


function ContactUsCard() {
  return (
    <>
        <Card className="bg-[#FFE1B3] border-0 mt-6">
            <CardHeader>
            <CardTitle className="text-lg">Contact Us</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
            <div className="flex items-center gap-3 bg-red-500 p-3 rounded-lg">
                <Phone className="text-white" />
                <span>
                <div className="text-sm text-white">Call</div>
                <div className="text-lg text-white">0572227400</div>
                </span>
            </div>
            <div className="flex items-center gap-3 bg-green-500 p-3 rounded-lg">
                <Headset className="text-white" />
                <span>
                <div className="text-sm text-white">Whatsapp</div>
                <div className="text-lg text-white">0775007777</div>
                </span>
            </div>
            <div className="flex items-center gap-3 bg-blue-500 p-3 rounded-lg group">
                <MailOpen className="text-white" />
                <span>
                <div className="text-sm text-white">Email</div>
                <div className="text-lg text-white">info@wanderquest.com</div>
                </span>
            </div>
            </CardContent>
        </Card>
    </>
  )
}

export default ContactUsCard