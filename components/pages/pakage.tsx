"use client";
import React from "react";
import Image from "next/image";

// Type definition
interface ServiceType {
  imageUrl: string;
  heading: string;
  para: string;
}

// Static Data
const serviceData: ServiceType = {
  imageUrl: "/assets/pricing.4552ccf3b91e93029513.jpg",
  heading: "30 days money back guarantee",
  para: "No Extra Fees. Friendly Support",
};

export default function PakagePage() {
  const data = serviceData;

  return (
    <div className="relative pt-32 pb-20 h-[20rem] md:h-[20rem] mx-auto">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src={data.imageUrl}
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
        <h1 className="text-sm font-semibold mb-4">{data.heading}</h1>
        <p className="text-4xl md:text-4xl font-bold max-w-2xl">
          {data.para}
        </p>
      </div>
    </div>
  );
}
