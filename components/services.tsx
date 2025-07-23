"use client"; 

import React from "react";
import Image from "next/image";
import { serviceData } from "../components/shared/serviceData"; 

export default function ServicesPage() {
  return (
    <div className="relative pt-32 pb-20 h-[20rem] md:h-[20rem] mx-auto">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src={serviceData.imageUrl}
          alt="Services RentUP"
          fill
          className="object-cover"
          quality={100}
          priority
        />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-[#1D2636] opacity-80 z-10" />

      {/* Content */}
      <div className="relative z-20 max-w-[80%] mx-auto text-white flex flex-col justify-center h-full px-4 text-left">
        <h1 className="text-sm font-semibold mb-4">{serviceData.heading}</h1>
        <p className="text-4xl md:text-4xl font-bold max-w-2xl">{serviceData.para}</p>
      </div>
    </div>
  );
}
