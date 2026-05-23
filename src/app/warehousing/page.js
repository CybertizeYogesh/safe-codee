import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import Sidebar from "@/components/Sidebar";

export const metadata = {
  title: "Household Shifting Services & Storage | Warehousing Bangalore",
  description: "Secure warehousing and household storage services in Bangalore. Safe, climate-controlled, and insured storage facilities for short and long-term needs.",
  alternates: {
    canonical: "https://www.agarwalontimecargopackers.com/warehousing.html",
  },
};

export default function Warehousing() {
  const schemaJson = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Warehousing Services",
    "description": "Secure, moisture-free, and CCTV monitored warehousing and goods storage services. Short-term and long-term household storage in India.",
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
      <Breadcrumb title="Warehousing Services" />

      <section className="space-top space-extra2-bottom">
        <div className="container">
          <div className="row">
            <div className="col-xxl-8 col-lg-8">
              <div className="page-single mb-30">
                <div className="page-content">
                  <h2 className="sec-title page-title">Warehousing Services</h2>
                  <p>
                    We are a renowned storage service provider, which brings the most dependable godown services. Our storage hubs are fully secure, dry, insect-free, and monitored 24/7. Whether you need temporary storage during a delayed home handover or a long-term commercial warehouse facility, we offer flexible storage space solutions.
                  </p>
                  <p>
                    All items stored in our warehouses are fully cataloged, packed in moisture-resistant wraps, and stored on wooden pallets. We maintain high standards of cleanliness and safety protocols, including advanced fire suppression and smoke alarms.
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
                          src="/img/warehouse.jpg"
                          alt="Warehousing Services"
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
                            <i className="fa-solid fa-badge-check"></i> 24/7 CCTV surveillance security
                          </li>
                          <li>
                            <i className="fa-solid fa-badge-check"></i> Fully insured storage spaces
                          </li>
                          <li>
                            <i className="fa-solid fa-badge-check"></i> Clean, pest-controlled environment
                          </li>
                          <li>
                            <i className="fa-solid fa-badge-check"></i> Fire alarm &amp; safety sprinkler systems
                          </li>
                          <li>
                            <i className="fa-solid fa-badge-check"></i> Easy access and inventory tracking
                          </li>
                          <li>
                            <i className="fa-solid fa-badge-check"></i> Short-term &amp; long-term storage agreements
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

