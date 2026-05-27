import React from "react";
import Link from "next/link";

export default function Breadcrumb({ title, canonicalUrl }) {
  const currentUrl = canonicalUrl || `https://www.agarwalontimecargopackers.com/${title.toLowerCase().replace(/[^a-z0-9]+/g, "-")}.html`;
  
  const schemaJson = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://www.agarwalontimecargopackers.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": title,
        "item": currentUrl
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaJson) }}
      />
      <div
        className="breadcumb-wrapper"
        data-bg-src="/assets/img/bg/breadcrumb-bg.webp"
        style={{
          backgroundImage: "url('/assets/img/bg/breadcrumb-bg.webp')",
          backgroundSize: "cover",
          backgroundPosition: "center center",
          backgroundRepeat: "no-repeat"
        }}
      >
        <div className="breadcrumb-bottom-shape">
          <img src="/assets/img/bg/breadcrumb-bottom.webp" alt="" width="1920" height="80" loading="lazy" />
        </div>
        <div className="shape-mockup breadcrumb-left jump-reverse">
          <img src="/assets/img/icon/breadcrumb-left.webp" alt="" width="150" height="200" loading="lazy" />
        </div>
        <div className="shape-mockup breadcrumb-right jump">
          <img src="/assets/img/icon/breadcrumb-right.webp" alt="" width="150" height="200" loading="lazy" />
        </div>
        <div className="container">
          <div className="breadcumb-content">
            <h1 className="breadcumb-title">{title}</h1>
            <ul className="breadcumb-menu">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>{title}</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

