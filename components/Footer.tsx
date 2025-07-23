"use client";

import React from "react";
import Image from "next/image";
import Logo from "@/public/assets/imgi_24_logo-light.png";

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#1D2636] text-white py-12 px-4">
      <div className="max-w-[82%] mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Logo and Subscription */}
        <div>
          <div className="mb-4">
            <Image src={Logo} alt="RentUP Logo" width={160} height={40} />
          </div>
          <p className="text-lg font-bold mb-2">
            Do You Need Help With Anything?
          </p>
          <p className="text-sm text-gray-500 font-medium mb-4">
            Receive updates, hot deals, tutorials, discounts sent straight to your inbox.
          </p>
          <div className="flex">
            <input
              type="email"
              placeholder="Email Address"
              className="w-full px-3 py-2 rounded-l text-black focus:outline-none"
            />
            <button className="bg-green-500 px-4 py-2 rounded-r hover:bg-green-600 transition">
              Subscribe
            </button>
          </div>
        </div>

        {/* Footer Links */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Layouts */}
          <div>
            <h3 className="text-lg font-semibold mb-3">LAYOUTS</h3>
            <ul className="space-y-2 text-sm text-gray-500 font-medium">
              <li>Home Page</li>
              <li>About Page</li>
              <li>Service Page</li>
              <li>Property Page</li>
              <li>Contact Page</li>
              <li>Single Blog</li>
            </ul>
          </div>

          {/* All Sections */}
          <div>
            <h3 className="text-lg font-semibold mb-3">ALL SECTIONS</h3>
            <ul className="space-y-2 text-sm text-gray-500 font-medium">
              <li>Headers</li>
              <li>Features</li>
              <li>Services</li>
              <li>Footers</li>
              <li>Videos</li>
              <li>Testimonials</li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold mb-3">COMPANY</h3>
            <ul className="space-y-2 text-sm text-gray-500 font-medium">
              <li>About</li>
              <li>Blog</li>
              <li>Pricing</li>
              <li>Affiliate</li>
              <li>Login</li>
              <li>Changelog</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Text */}
      <div className="text-center mt-10 text-sm text-gray-500 font-medium border-t-2 border-gray-500 pt-4">
        © 2025 RentUP. Designed by BasicCoder.
      </div>
    </footer>
  );
};

export default Footer;
