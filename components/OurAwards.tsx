"use client";

import React from "react";
import { awards } from "../components/shared/awardsdata"; 

export default function OurAwards() {
  return (
    <section className="bg-[#122947] min-h-[500px] text-white py-16">
      <div className="text-center mb-10 px-4">
        <h2 className="text-xl text-green-400 font-semibold">Our Awards</h2>
        <p className="text-lg md:text-2xl font-bold mt-2">
          Over 1,24,000+ Happy Users Being With Us <br />
          Still They Love Our Services
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-10 max-w-5xl mx-auto text-center">
        {awards.map((award, index) => (
          <div key={index} className="flex flex-col items-center">
            <div className="bg-white/10 rounded-[4%_50%] text-white text-4xl h-[100px] w-[100px] flex items-center justify-center mb-4">
              {award.icon}
            </div>
            <h1 className="text-2xl font-bold">{award.value}</h1>
            <p className="text-sm mt-1">{award.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
