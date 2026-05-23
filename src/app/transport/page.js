import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import Sidebar from "@/components/Sidebar";

export const metadata = {
  title: "Local Packers and Movers Near Me | Land Transport Bangalore",
  description: "Need local packers and movers near me? Our land transport division offers reliable truck shifting and logistics services in Bangalore and Karnataka.",
  alternates: {
    canonical: "https://www.agarwalontimecargopackers.com/transport.html",
  },
};

export default function LandTransport() {
  const schemaJson = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Land Transport Services",
    "description": "Secure and timely road transport services across India. Containerized trucks, open trucks, and light vehicles for smooth consignment delivery.",
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
      <Breadcrumb title="Land Transport" />

      <section className="space-top space-extra2-bottom">
        <div className="container">
          <div className="row">
            <div className="col-xxl-8 col-lg-8">
              <div className="page-single mb-30">
                <div className="page-content">
                  <h2 className="sec-title page-title">Land Transport Service</h2>
                  <p>
                    We also provide basic ground transportation for goods all over India, covering great distances and overcoming difficult terrain. Our transport fleet includes containerized trucks, open trucks, and light vehicles to suit any consignment volume. Whether you need local intra-city delivery or inter-state container transportation, our logistical infrastructure ensures seamless and smooth goods transit.
                  </p>
                  <p>
                    Our transport experts coordinate all processes, from vehicle selection to driving route planning. All vehicles undergo rigorous inspection and regular maintenance. Furthermore, our drivers are highly licensed and experienced in long-distance driving across major highways in India.
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
                          src="/img/land-transport.jpg"
                          alt="Land Transport Service"
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
                            <i className="fa-solid fa-badge-check"></i> Advanced tracking system
                          </li>
                          <li>
                            <i className="fa-solid fa-badge-check"></i> Verified and experienced drivers
                          </li>
                          <li>
                            <i className="fa-solid fa-badge-check"></i> All-weather containerized fleet
                          </li>
                          <li>
                            <i className="fa-solid fa-badge-check"></i> Prompt on-time cargo delivery
                          </li>
                          <li>
                            <i className="fa-solid fa-badge-check"></i> Cost-effective pricing models
                          </li>
                          <li>
                            <i className="fa-solid fa-badge-check"></i> Safe loading &amp; securing techniques
                          </li>
                          <li>
                            <i className="fa-solid fa-badge-check"></i> 24/7 client helpline support
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

