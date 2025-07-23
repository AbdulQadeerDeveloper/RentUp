"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { TiThMenu } from "react-icons/ti";
import { IoMdClose } from "react-icons/io";
import Logo from "/public/assets/imgi_1_logo.png";
import { FaRegArrowAltCircleRight } from "react-icons/fa";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white shadow-md fixed top-0 w-full z-50">
      <div className="max-w-[1050px] mx-auto flex items-center justify-between py-4 px-6">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <Image src={Logo} alt="RentUP Logo" width={170} height={40} />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6 font-medium text-black">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/services">Services</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/pricing">Pricing</Link>
          <Link href="/contact">Contact</Link>
        </nav>

        {/* Right Buttons */}
        <div className="hidden md:flex items-center space-x-4">
          <button className="text-black font-medium relative">
            <span className="text-lg">My List</span>
            <span className="absolute -top-2 -right-2 bg-green-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
              2
            </span>
          </button>
          <button className="bg-green-600 text-white px-4 py-2 rounded-md flex items-center space-x-2 hover:bg-green-700 transition">
            <FaRegArrowAltCircleRight />
            <span>Sign In</span>
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(true)}
            className="text-black text-2xl"
            aria-label="Open Menu"
          >
            <TiThMenu />
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="fixed inset-0 bg-green-600 text-white z-50 flex flex-col">
          <div className="flex justify-between items-center px-6 py-4">
            <Image src={Logo} alt="RentUP Logo" width={170} height={40} />
            <button
              onClick={() => setIsOpen(false)}
              className="text-white text-3xl"
              aria-label="Close Menu"
            >
              <IoMdClose />
            </button>
          </div>

          <nav className="flex flex-col px-6 space-y-4 text-lg font-medium mt-4">
            <Link href="/" onClick={() => setIsOpen(false)}>Home</Link>
            <Link href="/about" onClick={() => setIsOpen(false)}>About</Link>
            <Link href="/services" onClick={() => setIsOpen(false)}>Services</Link>
            <Link href="/blog" onClick={() => setIsOpen(false)}>Blog</Link>
            <Link href="/pricing" onClick={() => setIsOpen(false)}>Pricing</Link>
            <Link href="/contact" onClick={() => setIsOpen(false)}>Contact</Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
