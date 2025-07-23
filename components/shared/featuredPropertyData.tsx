import { BsHouseFill, BsBuildings, BsBuildingCheck } from "react-icons/bs";
import { MdApartment, MdOutlineVilla } from "react-icons/md";
import { ReactNode } from "react";

export type CategoryItem = {
  icon: ReactNode;
  title: string;
  count: string;
  image: string;
};

export const CategoriesData: CategoryItem[] = [
  {
    icon: <BsHouseFill size={32} className="text-red-400" />,
    title: "Family House",
    count: "122 Property",
    image: "/assets/imgi_3_h2.png",
  },
  {
    icon: <MdOutlineVilla size={32} className="text-green-400" />,
    title: "House & Villa",
    count: "155 Property",
    image: "/assets/imgi_2_h1.png",
  },
  {
    icon: <MdApartment size={32} className="text-yellow-400" />,
    title: "Apartment",
    count: "300 Property",
    image: "/assets/imgi_4_h3.png",
  },
  {
    icon: <BsBuildingCheck size={32} className="text-purple-400" />,
    title: "Office & Studio",
    count: "80 Property",
    image: "/assets/imgi_5_h4.png",
  },
  {
    icon: <BsBuildings size={32} className="text-blue-400" />,
    title: "Villa & Condo",
    count: "80 Property",
    image: "/assets/imgi_6_h6.png",
  },
];
