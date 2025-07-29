"use client";

import React from "react";
import { IoSearch } from "react-icons/io5";

function SearchForm() {
  return (
    <div className="bg-white relative top-28 sm:top-32 text-black rounded-lg shadow-lg mt-10 px-4 py-6 max-w-[1000px] mx-auto flex flex-wrap gap-4">
      
      {/* City / Street */}
      <div className="flex flex-col w-full sm:w-[48%] md:w-[48%] lg:w-[23%]">
        <label className="text-sm text-gray-500 mb-1">City/Street</label>
        <input
          type="text"
          placeholder="Location"
          className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-0"
        />
      </div>

      {/* Property Type */}
      <div className="flex flex-col w-full sm:w-[48%] md:w-[48%] lg:w-[23%]">
        <label className="text-sm text-gray-500 mb-1">Property Type</label>
        <select className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm bg-white focus:outline-none focus:ring-0">
          <option>Select Type</option>
          <option>House</option>
          <option>Apartment</option>
          <option>Office</option>
        </select>
      </div>

      {/* Price Range */}
      <div className="flex flex-col w-full sm:w-[48%] md:w-[48%] lg:w-[23%]">
        <label className="text-sm text-gray-500 mb-1">Price Range</label>
        <select className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm bg-white focus:outline-none focus:ring-0">
          <option>Select Price</option>
          <option>$500 - $1000</option>
          <option>$1000 - $2000</option>
          <option>$2000+</option>
        </select>
      </div>

      {/* Buttons */}
      <div className="flex flex-col w-full sm:w-[48%] md:w-[48%] lg:w-[23%] justify-end">
        <button className="text-sm font-semibold text-black mb-2">
          Advance Filter
        </button>
        <button className="bg-green-600 hover:bg-green-700 text-white px-5 py-3 rounded-md text-lg flex items-center justify-center">
          <IoSearch size={20} />
        </button>
      </div>
    </div>
  );
}

export default SearchForm;
