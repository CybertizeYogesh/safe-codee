import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import Sidebar from "@/components/Sidebar";

export const metadata = {
  title: "Office Shifting Services Bangalore | Best Moving Company",
  description: "Minimize office downtime with the best moving company for office relocation in Bangalore. We handle IT equipment, desks, and archives securely.",
  alternates: {
    canonical: "https://www.agarwalontimecargopackers.com/office.html",
  },
};

export default function OfficeMoving() {
  const schemaJson = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Office Moving Services",
    "description": "Corporate office shifting and business relocation services. Fast and organized server moving, IT equipment handling, and workstation setup.",
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
      <Breadcrumb title="Office Moving Services" />

      <section className="space-top space-extra2-bottom">
        <div className="container">
          <div className="row">
            <div className="col-xxl-8 col-lg-8">
              <div className="page-single mb-30">
                <div className="page-content">
                  <h2 className="sec-title page-title">Office Moving Services</h2>
                  <p>
                    We focus on delivering an excellent shifting experience for businesses and companies. We are fully dedicated to minimizing your company&apos;s downtime through prompt and organized office asset relocation. Our corporate moving experts handle everything from IT hardware, servers, office documentation, file cabinets, to office furniture.
                  </p>
                  <p>
                    We coordinate moving plans outside regular business hours (e.g. over weekends or night shifts) to guarantee zero disruption to your daily business operations. Heavy server cabinets, projectors, and delicate whiteboard displays receive double layers of cushioning bubble wrapping.
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
                          src="/img/office-shifting.webp"
                          alt="Office Shifting Service"
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
                            <i className="fa-solid fa-badge-check"></i> Minimal business operation downtime
                          </li>
                          <li>
                            <i className="fa-solid fa-badge-check"></i> Secure IT server and network hardware moving
                          </li>
                          <li>
                            <i className="fa-solid fa-badge-check"></i> Systematic indexing of documents and files
                          </li>
                          <li>
                            <i className="fa-solid fa-badge-check"></i> Weekend/night-shift moving options
                          </li>
                          <li>
                            <i className="fa-solid fa-badge-check"></i> Expert packing of executive workstations
                          </li>
                          <li>
                            <i className="fa-solid fa-badge-check"></i> Prompt relocation planning supervisors
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

