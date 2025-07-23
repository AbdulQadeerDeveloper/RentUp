"use client";
import React from "react";
import Image from "next/image";
import { aboutData } from "../components/shared/aboutData"; 

export default function AboutPage() {
  const data = aboutData;

  return (
    <>
      {/* Hero Section */}
      <div className="relative pt-32 pb-20 h-[20rem] md:h-[20rem] w-full">
        <Image
          src={data.imageurl}
          alt="About RentUP"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-[#1D2636] opacity-80 z-10"></div>

        <div className="relative z-20 max-w-[80%] mx-auto text-white flex flex-col justify-center h-full px-4 text-left">
          <h1 className="text-sm font-semibold mb-4">{data.heading}</h1>
          <p className="text-4xl md:text-4xl font-bold max-w-2xl">
            {data.para}
          </p>
        </div>
      </div>

      {/* About Content Section */}
      <section className="py-10 bg-white max-w-[82%] mx-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col md:flex-row items-center gap-10">
            {/* Text Content */}
            <div className="md:w-1/2 pt-4">
              <h2 className="text-4xl font-bold text-gray-900 pb-2">
                {data.smallTitle}
              </h2>
              <p className="text-sm text-gray-500 max-w-2xl pb-4">
                {data.smallContent}
              </p>
              <div className="text-gray-700 text-sm leading-relaxed">
                <p className="mb-3">{data.paragraph1}</p>
                <p className="mb-3">{data.paragraph2}</p>
                <div className="mt-6">
                  <button
                    className="px-6 py-3 bg-[#27AE60] text-white font-medium rounded-full transition hover:bg-[#219653]"
                    aria-label="Learn more about us"
                  >
                    More About Us
                  </button>
                </div>
              </div>
            </div>

            {/* Image */}
            <div className="md:w-1/2">
              <div className="w-full h-full overflow-hidden rounded-xl shadow-lg">
                <Image
                  src={data.imageurl}
                  alt="Our Agency Team"
                  width={800}
                  height={600}
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
