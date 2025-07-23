export interface PackageType {
  name: string;
  price: string;
  details: string;
  features: string[];
  button: string;
}

export const packages: PackageType[] = [
  {
    name: "Basic",
    price: "$29",
    details: "per user, per month",
    features: [
      "99.5% Uptime Guarantee",
      "120GB CDN Bandwidth",
      "5GB Cloud Storage",
      "Personal Help Support",
      "Enterprise SLA",
    ],
    button: "Start Basic",
  },
  {
    name: "Standard",
    price: "$49",
    details: "per user, per month",
    features: [
      "99.5% Uptime Guarantee",
      "150GB CDN Bandwidth",
      "10GB Cloud Storage",
      "Personal Help Support",
      "Enterprise SLA",
    ],
    button: "Start Standard",
  },
  {
    name: "Platinum",
    price: "$79",
    details: "2 users, per month",
    features: [
      "100% Uptime Guarantee",
      "200GB CDN Bandwidth",
      "20GB Cloud Storage",
      "Personal Help Support",
      "Enterprise SLA",
    ],
    button: "Start Platinum",
  },
];
