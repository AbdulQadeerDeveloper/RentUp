import Image from "next/image";
import { locationsData } from "../components/shared/exploreByLocation.Data";

export default function ExploreByLocation() {
  return (
    <section className="py-16 max-w-[1030px] mx-auto">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold">Explore By Location</h2>
        <p className="text-gray-600 max-w-xl mx-auto mt-2">
          Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-6 px-4 mx-auto">
        {locationsData.map((location, index) => (
          <div
            key={index}
            className="relative rounded-lg overflow-hidden group cursor-pointer h-[250px]"
          >
            <Image
              src={location.image}
              alt={location.name}
              className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
              fill
            />
            <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-white z-10">
              <h5 className="text-lg font-semibold mb-2">{location.name}</h5>
              <p className="flex gap-4 text-sm">
                <label>{location.villas} Villas</label>
                <label>{location.offices} Offices</label>
                <label>{location.apartments} Apartments</label>
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
