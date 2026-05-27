import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import Sidebar from "@/components/Sidebar";

export const metadata = {
  title: "Air Cargo | Agarwal On Time Cargo Packers & Movers",
  description: "Fast, reliable, and cost-effective air cargo solutions in India. Urgent shipment transit with complete customs clearance assistance.",
  alternates: {
    canonical: "https://www.agarwalontimecargopackers.com/air.html",
  },
};

export default function AirCargo() {
  const schemaJson = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Air Cargo Services",
    "description": "Fast, reliable, and cost-effective air cargo solutions in India. Urgent shipment transit with complete customs clearance assistance.",
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
      <Breadcrumb title="Air Cargo" />

      <section className="space-top space-extra2-bottom">
        <div className="container">
          <div className="row">
            <div className="col-xxl-8 col-lg-8">
              <div className="page-single mb-30">
                <div className="page-content">
                  <h2 className="sec-title page-title">Air Cargo Services</h2>
                  <p>
                    Agarwal On Time Cargo Packers & Movers offers our clients a cost-effective, secure, timely, and efficient solution for high-value or urgent shipments via air cargo. We maintain partnerships with major domestic airlines to guarantee priority booking space for your packages.
                  </p>
                  <p>
                    From express document shipments to heavy weight commercial machinery parts, our air cargo division handles packaging, airport custom clearances, door-to-door or door-to-airport freight forwarding seamlessly.
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
                          src="/img/air-cargo.webp"
                          alt="Air Cargo Service"
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
                            <i className="fa-solid fa-badge-check"></i> Priority flight slot bookings
                          </li>
                          <li>
                            <i className="fa-solid fa-badge-check"></i> Express door-to-door cargo delivery
                          </li>
                          <li>
                            <i className="fa-solid fa-badge-check"></i> Complete custom clearance documentation
                          </li>
                          <li>
                            <i className="fa-solid fa-badge-check"></i> Specialized packing for fragile air goods
                          </li>
                          <li>
                            <i className="fa-solid fa-badge-check"></i> Real-time flight tracking updates
                          </li>
                          <li>
                            <i className="fa-solid fa-badge-check"></i> Highly cost-effective air freight rates
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

