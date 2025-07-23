"use client";

import { FaHeart } from "react-icons/fa";
import { IoLocation } from "react-icons/io5";

type Listing = {
  image: string;
  status: string;
  title: string;
  location: string;
  price: string;
  type: string;
};

const listings: Listing[] = [
  {
    image: "/assets/imgi_7_p-1.png",
    status: "For Rent",
    title: "Red Carpet Real Estate",
    location: "210 Zirak Road, Canada",
    price: "$3,700",
    type: "Apartment",
  },
  {
    image: "/assets/imgi_8_p-2.png",
    status: "For Sale",
    title: "Fairmount Properties",
    location: "5698 Zirak Road, NewYork",
    price: "$9,750",
    type: "Condos",
  },
  {
    image: "/assets/imgi_9_p-7.png",
    status: "For Rent",
    title: "The Real Estate Corner",
    location: "5624 Mooker Market, USA",
    price: "$5,860",
    type: "Offices",
  },
  {
    image: "/assets/imgi_10_p-4.png",
    status: "For Rent",
    title: "Herringbone Realty",
    location: "5621 Liverpool, London",
    price: "$3,700",
    type: "Homes & Villas",
  },
  {
    image: "/assets/imgi_11_p-5.png",
    status: "For Sale",
    title: "Brick Lane Realty",
    location: "210 Montreal Road, Canada",
    price: "$9,750",
    type: "Commercial",
  },
  {
    image: "/assets/imgi_12_p-6.png",
    status: "For Rent",
    title: "Banyon Tree Realty",
    location: "210 Zirak Road, Canada",
    price: "$5,860",
    type: "Apartment",
  },
];

export default function PropertyListed() {
  return (
    <section className="max-w-[1030px] mx-auto px-4 py-16">

      <div className="grid gap-6 md:grid-cols-3 sm:grid-cols-1">
        {listings.map((listing, idx) => (
          <div
            key={idx}
            className="bg-white rounded-xl shadow-md overflow-hidden group"
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
