"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Sidebar({ wrapWithAside = true }) {
  const pathname = usePathname();

  const services = [
    { name: "House Shifting", path: "/house.html" },
    { name: "Land Transport", path: "/transport.html" },
    { name: "Packing Services", path: "/packing.html" },
    { name: "Domestic Relocation", path: "/domestic.html" },
    { name: "Car Transportation", path: "/car.html" },
    { name: "Warehousing Services", path: "/warehousing.html" },
    { name: "Office Moving Services", path: "/office.html" },
    { name: "Air Cargo", path: "/air.html" },
    { name: "Sea Freight Cargo", path: "/sea.html" },
  ];

  const content = (
    <div className="widget widget_categories">
      <h3 className="widget_title">Services Categories</h3>
      <ul>
        {services.map((service, idx) => {
          const isActive = pathname === service.path || pathname === service.path.replace(".html", "");
          return (
            <li key={idx} className={isActive ? "active" : ""}>
              <Link href={service.path}>
                {service.name}
              </Link>
              <span>
                <i className="fa-sharp fa-light fa-arrow-right"></i>
              </span>
            </li>
          );
        })}
      </ul>
    </div>
  );

  if (wrapWithAside) {
    return <aside className="sidebar-area">{content}</aside>;
  }

  return content;
}
