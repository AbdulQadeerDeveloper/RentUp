"use client";

import Image from "next/image";
import { propertyTypes } from "../components/shared/propertyTypesData";

export default function FeaturedPropertyTypes() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-[1030px] mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          Featured Property Types
        </h2>
        <p className="text-gray-500 mb-10">
          Find all type of property in featured category
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-6">
          {propertyTypes.map((type, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center text-center hover:shadow-xl transition duration-300"
            >
              <Image
                src={type.icon}
                alt={type.title}
                width={60}
                height={60}
                className="mb-4"
              />
              <h3 className="text-lg font-semibold text-gray-800 mb-1">
                {type.title}
              </h3>
              <p className="text-sm text-gray-500">{type.count}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
