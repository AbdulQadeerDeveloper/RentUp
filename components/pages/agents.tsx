import React from "react";
import { FaLocationArrow } from "react-icons/fa";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
  FaInstagram,
  FaEnvelope,
  FaPhone,
  FaLocationDot,
} from "react-icons/fa6";
import Image from "next/image";

function Agents() {
  const agents = [
    {
      name: "Sargam S. Singh",
      location: "Liverpool, Canada",
      image: "/assets/imgi_19_team-1.jpg",
    },
    {
      name: "Harjeet M. Sile",
      location: "Alameda, Canada",
      image: "/assets/imgi_20_team-2.jpg",
    },
    {
      name: "Arman R. Young",
      location: "Oxnard, USA",
      image: "/assets/imgi_21_team-3.jpg",
    },
    {
      name: "Michael C. Armado",
      location: "Chicago, USA",
      image: "/assets/imgi_22_team-4.jpg",
    },
    {
      name: "Adams Jobe",
      location: "Los Angeles, USA",
      image: "/assets/imgi_23_team-5.jpg",
    },
    {
      name: "Samantha K. Rose",
      location: "Austin, USA",
      image: "/assets/imgi_8_program-3-C0g4YULi.png",
    },
  ];
  return (
    <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-8 pt-5 max-w-[1000px] mx-auto">
      {agents.map((agent, index) => (
        <div
          key={index}
          className="text-center bg-white p-10 rounded-2xl shadow-lg hover:shadow-xl transition duration-300"
        >
          <button className="bg-[#ff6922] relative right-[5rem] bottom-[10px] text-white px-4 py-2.5 font-medium rounded-full hover:opacity-90 transition">
            50 Listings
          </button>

          <div className="relative w-32 h-32 mx-auto overflow-hidden rounded-full border-4 border-blue-100 shadow-md">
            <Image
              src={agent.image}
              alt={agent.name}
              fill
              className="object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>

          <div className="text-yellow-300 relative left-[10rem] bottom-[4rem] rounded-full bg-black w-8 h-8 p-2">
            <FaLocationArrow />
          </div>

          <div className="mt-4 text-gray-500 flex justify-center items-center gap-2 text-sm">
            <FaLocationDot className="text-blue-500" />
            <span>{agent.location}</span>
          </div>

          <h4 className="text-xl font-semibold mt-2 text-gray-800">
            {agent.name}
          </h4>

          <ul className="flex justify-center gap-4 mt-4 text-gray-500 text-lg">
            <li>
              <a href="#" aria-label="Facebook" className="hover:text-blue-600">
                <FaFacebookF />
              </a>
            </li>
            <li>
              <a href="#" aria-label="LinkedIn" className="hover:text-blue-700">
                <FaLinkedinIn />
              </a>
            </li>
            <li>
              <a href="#" aria-label="Twitter" className="hover:text-sky-500">
                <FaTwitter />
              </a>
            </li>
            <li>
              <a
                href="#"
                aria-label="Instagram"
                className="hover:text-pink-500"
              >
                <FaInstagram />
              </a>
            </li>
          </ul>

          <div className="flex justify-between gap-3 mt-6">
            <button className="flex items-center gap-2 bg-[#27AE60] text-white font-semibold px-5 py-3 rounded-md text-base">
              <FaEnvelope /> Message
            </button>
            <button
              aria-label="Call Agent"
              className="bg-black rounded-md text-white px-4 py-4 font-medium"
            >
              <FaPhone />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Agents;
