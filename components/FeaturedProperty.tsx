"use client";
import React from "react";
import Image from "next/image";
import { CategoriesData } from "../components/shared/featuredPropertyData";

export default function FeaturedProperty() {
  return (
    <section className="bg-[#F7F9FC] py-16">
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold text-black">Featured Property Types</h1>
        <p className="text-base text-gray-600">Find All Type of Property.</p>
      </div>
      <div className="max-w-[85%] mx-auto grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
        {CategoriesData.map((item, idx) => (
          <div
            key={idx}
            className="bg-white rounded-xl shadow p-6 flex flex-col items-center text-center hover:shadow-lg transition"
          >
            <div className="relative w-[65px] h-[65px] mb-4">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-contain"
              />
            </div>
            <div className="mb-2">{item.icon}</div>
            <h2 className="font-semibold text-black">{item.title}</h2>
            <p className="text-sm text-gray-500">{item.count}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
