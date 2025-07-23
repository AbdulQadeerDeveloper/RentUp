import { FaTrophy, FaBriefcase, FaLightbulb, FaHeart } from "react-icons/fa";
import { ReactNode } from "react";

export type Award = {
  title: string;
  value: string;
  icon: ReactNode;
};

export const awards: Award[] = [
  { title: "Blue Burmin Award", value: "32 M", icon: <FaTrophy /> },
  { title: "Mimo X11 Award", value: "43 M", icon: <FaBriefcase /> },
  { title: "Australian UGC Award", value: "51 M", icon: <FaLightbulb /> },
  { title: "IITCA Green Award", value: "42 M", icon: <FaHeart /> },
];
