import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import Sidebar from "@/components/Sidebar";

export const metadata = {
  title: "Car Transportation Companies Bangalore | Vehicle Shipping",
  description: "Searching for reliable car transportation companies? We offer secure car carrier shipping and vehicle shifting services in Bangalore and all India.",
  alternates: {
    canonical: "https://www.agarwalontimecargopackers.com/car.html",
  },
};

export default function CarTransportation() {
  const schemaJson = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Car Transportation Services",
    "description": "Secure vehicle shipping and car transportation services in India. High-quality car carrier trailers, door-to-door delivery, and claim settlement.",
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
      <Breadcrumb title="Car Transportation Companies" />

      <section className="space-top space-extra2-bottom">
        <div className="container">
          <div className="row">
            <div className="col-xxl-8 col-lg-8">
              <div className="page-single mb-30">
                <div className="page-content">
                  <h2 className="sec-title page-title">Car Transportation Companies in Bangalore</h2>
                  <p>
                    We offer reliable Car Transportation to individuals as well as corporate customers to ensure swift, safe vehicle shipping using specialized car carrier trailers. The car transport vehicle is equipped with customized locking chains, seat belt anchors, and protective padding to keep the car securely in position.
                  </p>
                  <p>
                    We value your premium vehicle and make sure that it gets picked up from your home and delivered directly to the new destination. A comprehensive pre-car inspection report will be prepared before shipping so you can verify the status at delivery.
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
                          src="/img/car-transport.webp"
                          alt="Car Transportation Service"
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
                            <i className="fa-solid fa-badge-check"></i> Door-to-door vehicle pickup &amp; delivery
                          </li>
                          <li>
                            <i className="fa-solid fa-badge-check"></i> High-quality hydraulic car carriers
                          </li>
                          <li>
                            <i className="fa-solid fa-badge-check"></i> Scratch-free loading equipment
                          </li>
                          <li>
                            <i className="fa-solid fa-badge-check"></i> Quick claims surveyor settlements
                          </li>
                          <li>
                            <i className="fa-solid fa-badge-check"></i> Complete vehicle transit insurance
                          </li>
                          <li>
                            <i className="fa-solid fa-badge-check"></i> Experienced car shipping team
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

