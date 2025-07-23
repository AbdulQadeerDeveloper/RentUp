export type Listing = {
  image: string;
  status: string;
  title: string;
  location: string;
  price: string;
  type: string;
};

export const listings: Listing[] = [
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
