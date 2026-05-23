import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata = {
  title: "Gallery | Agarwal On Time Cargo Packers & Movers",
  description: "Browse our gallery of packing, moving, vehicle transportation, and warehousing operations showing our professional shifting process.",
  alternates: {
    canonical: "https://www.agarwalontimecargopackers.com/gallery.html",
  },
};

export default function Gallery() {
  const images = [
    { src: "/img/packing.jpg", alt: "Packing Services", title: "Packing Operation" },
    { src: "/img/blog-1.jpg", alt: "House Shifting", title: "House Shifting" },
    { src: "/img/land-transport.jpg", alt: "Land Transport", title: "Road Logistics" },
    { src: "/img/domestic.jpg", alt: "Domestic Relocation", title: "Domestic Shifting" },
    { src: "/img/car-transport.jpg", alt: "Car Transportation", title: "Vehicle Transport" },
    { src: "/img/warehouse.jpg", alt: "Warehousing Services", title: "Warehouse Storage" },
    { src: "/img/office-shifting.jpg", alt: "Office Moving Services", title: "Office Relocation" },
    { src: "/img/air-cargo.jpg", alt: "Air Cargo", title: "Air Shipment" },
    { src: "/assets/img/about/about-2-main.jpg", alt: "Moving Experts", title: "Our Shifting Team" },
  ];

  const schemaJson = {
    "@context": "https://schema.org",
    "@type": "ImageGallery",
    "name": "Agarwal On Time Cargo Packers & Movers Gallery",
    "description": "Browse our gallery of packing, moving, vehicle transportation, and warehousing operations showing our professional shifting process.",
    "image": images.map((img) => `https://www.agarwalontimecargopackers.com${img.src}`),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaJson) }}
      />
      <Navbar />
      <Breadcrumb title="Gallery" />

      <section className="space">
        <div className="container">
          <div className="row gy-4 justify-content-center">
            {images.map((img, idx) => (
              <div key={idx} className="col-md-6 col-lg-4">
                <div className="gallery-card">
                  <div className="gallery-img" style={{ position: "relative", overflow: "hidden", borderRadius: "10px" }}>
                    <img
                      src={img.src}
                      alt={img.alt}
                      width="360"
                      height="260"
                      loading="lazy"
                      style={{ width: "100%", height: "260px", objectFit: "cover", display: "block" }}
                    />
                    <div className="gallery-overlay">
                      <a href={img.src} target="_blank" rel="noopener noreferrer" className="icon-btn">
                        <i className="fal fa-eye"></i>
                      </a>
                    </div>
                  </div>
                  <div className="box-content" style={{ marginTop: "15px", textAlign: "center" }}>
                    <h3 className="box-title" style={{ fontSize: "18px", fontWeight: "600", color: "#1f1f1f" }}>
                      {img.title}
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

