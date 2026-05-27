import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import Sidebar from "@/components/Sidebar";

export const metadata = {
  title: "Sea Freight Cargo | Agarwal On Time Cargo Packers & Movers",
  description: "International ocean freight and sea cargo services. Full Container Load (FCL) and Less than Container Load (LCL) logistics support.",
  alternates: {
    canonical: "https://www.agarwalontimecargopackers.com/sea.html",
  },
};

export default function SeaFreightCargo() {
  const schemaJson = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Sea Freight Cargo Services",
    "description": "International ocean freight and sea cargo services. Full Container Load (FCL) and Less than Container Load (LCL) logistics support.",
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
      <Breadcrumb title="Sea Freight Cargo" />

      <section className="space-top space-extra2-bottom">
        <div className="container">
          <div className="row">
            <div className="col-xxl-8 col-lg-8">
              <div className="page-single mb-30">
                <div className="page-content">
                  <h2 className="sec-title page-title">Sea Freight Cargo Services</h2>
                  <p>
                    Sea Freight Cargo is suitable for large volumes of industrial goods, heavy machinery, or export shipping. We coordinate containers (FCL and LCL) with international shipping lines. Our experts handle container packaging, seaworthy palletizing, customs documentation at port hubs, and maritime cargo tracking.
                  </p>
                  <p>
                    We offer export packing solutions, ensuring that your long-voyage items are fully protected against salinity, moisture, and warehouse handling during ocean transit. Our team supports and handles ocean bill of lading paperwork.
                  </p>
                  <h3 className="sec-title page-title mb-2">Service Quality</h3>
                  <p className="mb-30">
                    Our mission has always been the same, but we strive to improve customer satisfaction through consistent feedback and reviews. We are just a phone call away from you.
                  </p>
                  <div className="row mt-30 gx-40">
                    <div className="col-md-5">
                      <div className="page-img">
                        {/* We use warehouse.jpg or similar shipping-related image for Sea freight */}
                        <img
                          className="w-100"
                          src="/img/warehouse.webp"
                          alt="Sea Freight Cargo Service"
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
                            <i className="fa-solid fa-badge-check"></i> FCL (Full Container) and LCL (Less than Container)
                          </li>
                          <li>
                            <i className="fa-solid fa-badge-check"></i> Sea-worthy moisture-resistant packing
                          </li>
                          <li>
                            <i className="fa-solid fa-badge-check"></i> Port-to-port and door-to-door logistics
                          </li>
                          <li>
                            <i className="fa-solid fa-badge-check"></i> Custom customs clearance assistance
                          </li>
                          <li>
                            <i className="fa-solid fa-badge-check"></i> International cargo transit booking coordination
                          </li>
                          <li>
                            <i className="fa-solid fa-badge-check"></i> Specialized heavy machinery handling
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

