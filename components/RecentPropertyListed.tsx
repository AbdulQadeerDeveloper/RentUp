"use client";

import { FaHeart } from "react-icons/fa";
import { IoLocation } from "react-icons/io5";
import { listings } from "../components/shared/propertyData"; 

export default function PropertyListed() {
  return (
    <section className="max-w-[1030px] mx-auto px-4 py-16">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-gray-800">Recent Property Listed</h2>
        <p className="text-gray-500 max-w-xl mx-auto mt-2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-3 sm:grid-cols-1">
        {listings.map((listing, idx) => (
          <div
            key={idx}
            className="bg-white shadow-md overflow-hidden group"
          >
            <div className="relative">
              <img
                src={listing.image}
                alt={listing.title}
                className="w-full h-56 object-cover transition duration-300 group-hover:scale-105"
              />
              <div className="absolute top-3 right-3 bg-white p-2 rounded-full shadow hover:text-red-500">
                <FaHeart className="text-gray-500 text-sm" />
              </div>
            </div>
            <div className="p-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-semibold text-orange-500 bg-orange-100 px-2 py-1 rounded">
                  {listing.status}
                </span>
              </div>
              <h3 className="text-lg font-semibold">{listing.title}</h3>
              <p className="text-gray-600 text-sm font-medium flex items-center gap-1 mt-1">
                <IoLocation className="text-lg" />
                {listing.location}
              </p>
            </div>
            <div className="p-4 border-t flex justify-between items-center">
              <span className="bg-green-600 px-6 rounded-full py-2 text-white font-bold text-lg">
                {listing.price}
              </span>
              <span className="text-gray-700 font-semibold">{listing.type}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
