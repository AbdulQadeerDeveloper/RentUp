"use client";
import React from "react";
import { FaCheck } from "react-icons/fa";
import { packages } from "../components/shared/pricingData";

export default function RentUPPricing() {
  return (
    <div className="min-h-screen max-w-[1030px] mx-auto bg-white">
      <section className="py-16">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold text-gray-800">Select Your Package</h2>
          <p className="text-gray-600 max-w-xl mx-auto mt-4">
            We've got the documents and tools to make digital marketing quick & painless.
            Choose your perfect plan!
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto px-4">
          {packages.map((pkg, index) => (
            <div
              key={index}
              className="rounded-xl border border-gray-200 shadow-sm overflow-hidden bg-white transition-all hover:shadow-md"
            >
              <div className="p-8">
                <h3 className="text-2xl text-center font-bold text-gray-800 mb-2">
                  {pkg.name}
                </h3>
                <div className="flex justify-center items-baseline mb-1">
                  <span className="text-5xl font-bold text-gray-900">{pkg.price}</span>
                </div>
                <p className="text-gray-600 text-center text-sm mb-6">{pkg.details}</p>
                <ul className="space-y-4 mb-8">
                  {pkg.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <div className="flex-shrink-0 mr-3">
                        <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center">
                          <FaCheck className="text-green-500 text-xs" />
                        </div>
                      </div>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button
                  className={`w-full py-4 px-6 text-white font-medium rounded-full transition-colors ${
                    pkg.name === "Basic"
                      ? "bg-green-500 hover:bg-green-600"
                      : pkg.name === "Standard"
                      ? "bg-blue-500 hover:bg-blue-600"
                      : "bg-purple-500 hover:bg-purple-600"
                  }`}
                >
                  {pkg.button}
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
