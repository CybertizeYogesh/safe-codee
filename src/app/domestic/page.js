import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import Sidebar from "@/components/Sidebar";

export const metadata = {
  title: "Home Moving Services Bangalore | Domestic Relocation",
  description: "Agarwal On Time Cargo Packers & Movers offers professional domestic home moving services from Bangalore to any city in India with complete transit safety.",
  alternates: {
    canonical: "https://www.agarwalontimecargopackers.com/domestic.html",
  },
};

export default function DomesticRelocation() {
  const schemaJson = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Domestic Relocation Services",
    "description": "Seamless domestic relocation services in India. Closed container trucks and inter-state shifting coordination with comprehensive insurance coverage.",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Agarwal On Time Cargo Packers & Movers",
      "image": "https://www.agarwalontimecargopackers.com/assets/img/logo.png",
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
      <Breadcrumb title="Domestic Relocation" />

      <section className="space-top space-extra2-bottom">
        <div className="container">
          <div className="row">
            <div className="col-xxl-8 col-lg-8">
              <div className="page-single mb-30">
                <div className="page-content">
                  <h2 className="sec-title page-title">Domestic Relocation Service</h2>
                  <p>
                    Agarwal On Time Cargo Packers & Movers has devised convenient and brilliant ways to move its customers&apos; households. We have custom closed containers that keep goods safe from rains, heat, dust, and wind across state lines. Our wide-spread network across the country makes it easy for us to coordinate relocations between any states in India.
                  </p>
                  <p>
                    From initial pre-move planning and packing to customs formalities, transit, and unloading at destination, our domestic division provides a single window system to manage all logistics. We also offer transit insurance options for safety and peace of mind.
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
                          src="/img/domestic.jpg"
                          alt="Domestic Relocation Service"
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
                            <i className="fa-solid fa-badge-check"></i> Inter-state closed container trucks
                          </li>
                          <li>
                            <i className="fa-solid fa-badge-check"></i> Complete transit insurance coverage
                          </li>
                          <li>
                            <i className="fa-solid fa-badge-check"></i> Shared or full truck-load options
                          </li>
                          <li>
                            <i className="fa-solid fa-badge-check"></i> Real-time transit notification updates
                          </li>
                          <li>
                            <i className="fa-solid fa-badge-check"></i> Branch network coordinate destination support
                          </li>
                          <li>
                            <i className="fa-solid fa-badge-check"></i> Special handling for heavy household items
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

