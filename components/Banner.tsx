"use client";

import { IoSearch } from "react-icons/io5";
import SearchForm from "./searchForm";

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
       <SearchForm/>
      </div>
    </section>
  );
}
