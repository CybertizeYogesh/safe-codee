import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import Sidebar from "@/components/Sidebar";

export const metadata = {
  title: "Household Shifting Services Bangalore | Movers and Packers",
  description: "Looking for a reliable household transport service near me? We offer the best household shifting services in Bangalore with secure packing, loading, and transit.",
  alternates: {
    canonical: "https://www.agarwalontimecargopackers.com/house.html",
  },
};

export default function HouseShifting() {
  const schemaJson = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "House Shifting Services",
    "description": "Get premium house shifting services from Agarwal On Time Cargo Packers & Movers. Secure packaging, professional loading, and on-time household relocation.",
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
      <Breadcrumb title="Household Shifting Services" />

      <section className="space-top space-extra2-bottom">
        <div className="container">
          <div className="row">
            <div className="col-xxl-8 col-lg-8">
              <div className="page-single mb-30">
                <div className="page-content">
                  <h2 className="sec-title page-title">Household Shifting Services in Bangalore</h2>
                  <p>
                    The safe and proper packaging of goods is of paramount importance to us. We, Agarwal On Time Cargo Packers & Movers, pay attention to every detail during the packaging processes and household goods moving services. Our personnel use premium quality packaging materials like wrapping papers, cartons, wooden boxes, etc., to maintain the safety of the goods. Our packaging personnel are professionally trained to handle all types of packaging needs, be it stationary or glass items. All the packing processes are done under the guidance and supervision of our packaging experts, who work tirelessly making sure that the goods are perfectly packed and do not get damaged during transportation.
                  </p>
                  <p>
                    The major concern is to pack your belongings in such a manner so that they can reach their final destination safely. Agarwal On Time Cargo Packers & Movers have all the necessary items and latest packaging machines that can ensure the safety of your belongings. With their expertise, they can handle your items safely, whether it is delicate glassware, sensitive electronic goods, or gift items.
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
                          src="/img/blog-1.jpg"
                          alt="House Shifting Service"
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
                            <i className="fa-solid fa-badge-check"></i> Packing along with unpacking solutions
                          </li>
                          <li>
                            <i className="fa-solid fa-badge-check"></i> 24/7 All-time Support
                          </li>
                          <li>
                            <i className="fa-solid fa-badge-check"></i> Fully Careful &amp; Safety Guard
                          </li>
                          <li>
                            <i className="fa-solid fa-badge-check"></i> Expert Team Members
                          </li>
                          <li>
                            <i className="fa-solid fa-badge-check"></i> Proper packing supplies utilization
                          </li>
                          <li>
                            <i className="fa-solid fa-badge-check"></i> Skilled and user-friendly staff members
                          </li>
                          <li>
                            <i className="fa-solid fa-badge-check"></i> Careful relocation solutions
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

