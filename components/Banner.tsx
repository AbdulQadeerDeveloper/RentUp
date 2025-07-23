"use client";

import { IoSearch } from "react-icons/io5";

export default function Banner() {
  return (
    <section
      className="w-full h-[650px] bg-cover bg-center relative"
      style={{
        backgroundImage: "url('/assets/bannerBg.jpeg')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-0"></div>

      {/* Content */}
      <div className="relative z-10 max-w-[1300px] mx-auto px-4 pt-20 text-center text-white">
        <div className="mx-auto relative top-24 sm:top-32">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-4">
            Search Your Next Home
          </h1>
          <p className="text-sm sm:text-base md:text-lg font-medium">
            Find new & featured property located in your local city.
          </p>
        </div>

        {/* Search Form */}
        <div className="bg-white relative top-28 sm:top-32 text-black rounded-lg shadow-lg mt-10 px-4 py-4 max-w-[1000px] mx-auto flex flex-col sm:flex-wrap md:flex-row gap-4">
          {/* City / Street */}
          <div className="flex flex-col w-full md:w-1/4">
            <label className="text-sm text-gray-500 mb-1">City/Street</label>
            <input
              type="text"
              placeholder="Location"
              className="w-full px-3 focus:outline-none focus:ring-0 py-2 border border-gray-300 rounded-md text-sm"
            />
          </div>

          {/* Property Type */}
          <div className="flex flex-col w-full md:w-1/4">
            <label className="text-sm text-gray-500 mb-1">Property Type</label>
            <select className="w-full px-3 focus:outline-none focus:ring-0 py-2 border border-gray-300 rounded-md text-sm bg-white">
              <option>Select Type</option>
              <option>House</option>
              <option>Apartment</option>
              <option>Office</option>
            </select>
          </div>

          {/* Price Range */}
          <div className="flex flex-col w-full md:w-1/4">
            <label className="text-sm text-gray-500 mb-1">Price Range</label>
            <select className="w-full focus:outline-none focus:ring-0 px-3 py-2 border border-gray-300 rounded-md text-sm bg-white">
              <option>Select Price</option>
              <option>$500 - $1000</option>
              <option>$1000 - $2000</option>
              <option>$2000+</option>
            </select>
          </div>

          {/* Buttons */}
          <div className="flex flex-col w-full md:w-[160px] justify-end gap-2">
            <button className="text-sm font-semibold text-black">
              Advance Filter
            </button>
            <button className="bg-green-600 hover:bg-green-700 text-white px-5 py-3 rounded-md text-lg flex items-center justify-center">
              <IoSearch size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
