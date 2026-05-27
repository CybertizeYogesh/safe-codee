import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import Sidebar from "@/components/Sidebar";

export const metadata = {
  title: "Best Packers and Movers Bangalore | Packing Services",
  description: "Get professional packing services in Bangalore. We use high-quality materials and expert packers for safe home moving and office shifting.",
  alternates: {
    canonical: "https://www.agarwalontimecargopackers.com/packing.html",
  },
};

export default function PackingServices() {
  const schemaJson = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Packing Services",
    "description": "Secure and professional packing services in India. High-quality bubble wraps, corrugated sheets, cartoon boxes, and custom wooden crates.",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Agarwal On Time Cargo Packers & Movers",
      "image": "https://www.agarwalontimecargopackers.com/assets/img/logo.webp",
      "telephone": "+91 8095279595",
      "email": "agarwalpackersmoversa@gmail.com",
      "url": "https://www.agarwalontimecargopackers.com"
    },
    "areaServed": "India"
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaJson) }}
      />
      <Navbar />
      <Breadcrumb title="Packing Services" />

      <section className="space-top space-extra2-bottom">
        <div className="container">
          <div className="row">
            <div className="col-xxl-8 col-lg-8">
              <div className="page-single mb-30">
                <div className="page-content">
                  <h2 className="sec-title page-title">Packing Services</h2>
                  <p>
                    Packing and Moving is really a difficult task because it&apos;s a time when people get very puzzled. In earlier times shifting was done manually and was very risky, but our professional crew uses systematic packing styles to make it stress-free. We use high-quality packing materials to ensure all your goods stay safe during transport.
                  </p>
                  <p>
                    We provide special multi-layer packing for items like home appliances, computers, glass showcases, and expensive decorative pieces. Bubble wraps, air cushions, corrugated rolls, thermocol sheets, and premium quality adhesive tapes are standard packing supplies in our toolkit.
                  </p>
                  <h3 className="sec-title page-title mb-2">Service Quality</h3>
                  <p className="mb-30">
                    Our mission has always been the same, but we strive to improve customer satisfaction through consistent feedback and reviews. We are just a phone call away from you.
                  </p>
                  <div className="row mt-30 gx-40">
                    <div className="col-md-5">
                      <div className="page-img">
                        <img
                          className="w-100"
                          src="/img/packing.webp"
                          alt="Packing Services"
                          width="350"
                          height="230"
                          loading="lazy"
                          style={{ borderRadius: "10px", objectFit: "cover" }}
                        />
                      </div>
                    </div>
                    <div className="col-md-7">
                      <div className="checklist body-color">
                        <ul>
                          <li>
                            <i className="fa-solid fa-badge-check"></i> High-quality bubble wrapping
                          </li>
                          <li>
                            <i className="fa-solid fa-badge-check"></i> Sturdy double-walled corrugated boxes
                          </li>
                          <li>
                            <i className="fa-solid fa-badge-check"></i> Custom wooden crating for glass items
                          </li>
                          <li>
                            <i className="fa-solid fa-badge-check"></i> Professional labeling and inventory checklist
                          </li>
                          <li>
                            <i className="fa-solid fa-badge-check"></i> Certified packing supervisors
                          </li>
                          <li>
                            <i className="fa-solid fa-badge-check"></i> Stress-free loading guidelines
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xxl-4 col-lg-4">
              <Sidebar />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

