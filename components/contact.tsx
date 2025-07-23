"use client"; 

import React from "react";
import Image from "next/image";
import { FaPaperPlane } from "react-icons/fa";
import { contactData } from "../components/shared/contactData"; 

export default function ContactPage() {
  return (
    <>
      {/* Banner */}
      <div className="relative pt-32 pb-20 h-[20rem] md:h-[20rem] mx-auto">
        <div className="absolute inset-0">
          <Image
            src={contactData.imageUrl}
            alt="Contact Banner"
            fill
            className="object-cover"
            quality={100}
            priority
          />
        </div>
        <div className="absolute inset-0 bg-[#1D2636] opacity-80 z-10" />
        <div className="relative z-20 max-w-[80%] mx-auto text-white flex flex-col justify-center h-full px-4 text-left">
          <h1 className="text-sm font-semibold mb-4">{contactData.heading}</h1>
          <p className="text-4xl md:text-4xl font-bold max-w-2xl">
            {contactData.para}
          </p>
        </div>
      </div>

      {/* Form */}
      <div className="max-w-[80%] mx-auto px-4 sm:px-6 pt-10 pb-12">
        <div className="bg-white rounded-xl p-8 shadow-lg">
          <h2 className="text-sm font-bold text-gray-900 mb-2">
            Fillup The Form
          </h2>
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Your full name"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 text-black"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Your email address"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 text-black"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="subject"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                placeholder="Subject of your message"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 text-black"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                placeholder="Type your message here..."
                className="w-full px-4 py-3 rounded-lg border border-gray-300 text-black"
              />
            </div>

            <div className="text-left pt-4">
              <button
                type="submit"
                className="inline-flex items-center px-6 py-3 bg-[#27AE60] text-white font-medium rounded-lg"
              >
                <FaPaperPlane className="mr-2" />
                Submit Request
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
