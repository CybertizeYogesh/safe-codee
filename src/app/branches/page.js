import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import Link from "next/link";

export const metadata = {
  title: "Our Branches | Agarwal On Time Cargo Packers & Movers",
  description: "Find our office locations and packers and movers services in Mumbai, Delhi, Bangalore, Chennai, Hyderabad, Pune, Mangalore, and other major cities in India.",
  alternates: {
    canonical: "https://www.agarwalontimecargopackers.com/branches.html",
  },
};

export default function Branches() {
  const branches = [
    { name: "Packers and Movers Mumbai", path: "/packers-and-movers-mumbai.html" },
    { name: "Packers and Movers Ahmedabad", path: "/packers-and-movers-ahmedabad.html" },
    { name: "Packers and Movers Pune", path: "/packers-and-movers-pune.html" },
    { name: "Packers and Movers Nagpur", path: "/packers-and-movers-nagpur.html" },
    { name: "Packers and Movers Visakhapatnam", path: "/packers-and-movers-visakhapatnam.html" },
    { name: "Packers and Movers Nashik", path: "/packers-and-movers-nashik.html" },
    { name: "Packers and Movers Varanasi", path: "/packers-and-movers-varanasi.html" },
    { name: "Packers and Movers Amritsar", path: "/packers-and-movers-amritsar.html" },
    { name: "Packers and Movers Vijayawada", path: "/packers-and-movers-vijayawada.html" },
    { name: "Packers and Movers Chandigarh", path: "/packers-and-movers-chandigarh.html" },
    { name: "Packers and Movers Delhi", path: "/packers-and-movers-delhi.html" },
    { name: "Packers and Movers Chennai", path: "/packers-and-movers-chennai.html" },
    { name: "Packers and Movers Mangalore", path: "/packers-and-movers-mangalore.html" },
    { name: "Packers and Movers Indore", path: "/packers-and-movers-indore.html" },
    { name: "Packers and Movers Patna", path: "/packers-and-movers-patna.html" },
    { name: "Packers and Movers Ranchi", path: "/packers-and-movers-ranchi.html" },
    { name: "Packers and Movers Srinagar", path: "/packers-and-movers-srinagar.html" },
    { name: "Packers and Movers Allahabad", path: "/packers-and-movers-allahabad.html" },
    { name: "Packers and Movers Belgaum", path: "/packers-and-movers-belgaum.html" },
    { name: "Packers and Movers Mysore", path: "/packers-and-movers-mysore.html" },
    { name: "Packers and Movers Bangalore", path: "/packers-and-movers-bangalore.html" },
    { name: "Packers and Movers Kolkata", path: "/packers-and-movers-kolkata.html" },
    { name: "Packers and Movers Lucknow", path: "/packers-and-movers-lucknow.html" },
    { name: "Packers and Movers Ghaziabad", path: "/packers-and-movers-ghaziabad.html" },
    { name: "Packers and Movers Hyderabad", path: "/packers-and-movers-hyderabad.html" },
    { name: "Packers and Movers Surat", path: "/packers-and-movers-surat.html" },
    { name: "Packers and Movers Bhopal", path: "/packers-and-movers-bhopal.html" },
    { name: "Packers and Movers Agra", path: "/packers-and-movers-agra.html" },
    { name: "Packers and Movers Coimbatore", path: "/packers-and-movers-coimbatore.html" },
    { name: "Packers and Movers Hubli", path: "/packers-and-movers-hubli.html" },
    { name: "Packers and Movers Rajkot", path: "/packers-and-movers-rajkot.html" },
    { name: "Packers and Movers Navi Mumbai", path: "/packers-and-movers-navi-mumbai.html" },
    { name: "Packers and Movers Gwalior", path: "/packers-and-movers-gwalior.html" },
  ];
  const itemsPerCol = Math.ceil(branches.length / 3);
  const col1 = branches.slice(0, itemsPerCol);
  const col2 = branches.slice(itemsPerCol, itemsPerCol * 2);
  const col3 = branches.slice(itemsPerCol * 2);

  const schemaJson = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Agarwal On Time Cargo Packers & Movers Branches",
    "description": "Directory of our packers and movers branches in all major cities in India.",
    "itemListElement": branches.map((branch, idx) => ({
      "@type": "ListItem",
      "position": idx + 1,
      "url": `https://www.agarwalontimecargopackers.com${branch.path}`
    }))
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaJson) }}
      />
      <Navbar />
      <Breadcrumb title="Our Branches" />

      <section className="branches space">
        <div className="container">
          <div className="title-area text-center">
            <h2 className="sec-title">Packers and Movers in All India</h2>
          </div>

          <div className="row">
            <div className="col-lg-4">
              <ul>
                {col1.map((branch, idx) => (
                  <li key={idx}>
                    <i className="fas fa-location-dot"></i>
                    <Link href={branch.path}>
                      {branch.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="col-lg-4">
              <ul>
                {col2.map((branch, idx) => (
                  <li key={idx}>
                    <i className="fas fa-location-dot"></i>
                    <Link href={branch.path}>
                      {branch.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="col-lg-4">
              <ul>
                {col3.map((branch, idx) => (
                  <li key={idx}>
                    <i className="fas fa-location-dot"></i>
                    <Link href={branch.path}>
                      {branch.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

