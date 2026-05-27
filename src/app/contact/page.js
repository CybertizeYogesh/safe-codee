import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import ContactPageForm from "@/components/ContactPageForm";
import Script from "next/script";

export const metadata = {
  title: "Contact Us | Agarwal Packers and Movers Bangalore",
  description: "Need local packers and movers near me? Contact Agarwal Packers and Movers Bangalore at +91 8095279595 for affordable household transport service near me.",
  alternates: {
    canonical: "https://www.agarwalontimecargopackers.com/contact.html",
  },
};

export default function Contact() {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Agarwal On Time Cargo Packers & Movers",
    "image": "https://www.agarwalontimecargopackers.com/assets/img/logo.webp",
    "@id": "https://www.agarwalontimecargopackers.com/#localbusiness",
    "url": "https://www.agarwalontimecargopackers.com",
    "telephone": "+91 8095279595",
    "email": "agarwalpackersmoversa@gmail.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "#30 near marthalli bridge",
      "addressLocality": "Bangalore",
      "addressRegion": "Karnataka",
      "postalCode": "560037",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 12.9562,
      "longitude": 77.6980
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
      ],
      "opens": "00:00",
      "closes": "23:59"
    }
  };

  const contactPageSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Contact | Agarwal On Time Cargo Packers & Movers",
    "description": "Get in touch with Agarwal On Time Cargo Packers & Movers for reliable moving and packing services in Bangalore and across India.",
    "url": "https://www.agarwalontimecargopackers.com/contact.html"
  };

  return (
    <>
      <Script
        src="https://www.google.com/recaptcha/api.js"
        strategy="afterInteractive"
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactPageSchema) }}
      />
      <Navbar />
      <Breadcrumb title="Get a Free Quote" />

      {/* Contact Cards Section */}
      <div className="contact-area-2 space-top" id="contact-sec">
        <div className="container">
          <div className="title-area text-center">
            <h2 className="sec-title">Our Contact Information</h2>
          </div>
          <div className="row gy-4 justify-content-center">
            <div className="col-xl-4 col-lg-6 contact-feature-wrap">
              <div className="contact-feature">
                <div className="contact-feature-icon">
                  <i className="fas fa-location-dot"></i>
                </div>
                <div className="media-body">
                  <p className="contact-feature_label">Our Address</p>
                  #30 near marthalli bridge Bangalore 560037
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6 contact-feature-wrap">
              <div className="contact-feature">
                <div className="contact-feature-icon">
                  <i className="fas fa-phone"></i>
                </div>
                <div className="media-body">
                  <p className="contact-feature_label">Contact Number</p>
                  <a href="tel:8095279595" className="contact-feature_link">+91 8095279595</a>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6 contact-feature-wrap">
              <div className="contact-feature">
                <div className="contact-feature-icon">
                  <i className="fa-sharp fa-regular fa-envelope"></i>
                </div>
                <div className="media-body">
                  <p className="contact-feature_label">E-mail</p>
                  <a href="mailto:agarwalpackersmoversa@gmail.com" className="contact-feature_link">
                    agarwalpackersmoversa@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Form Section */}
      <div className="space">
        <div className="container">
          <div className="bg-smoke rounded-20">
            <div className="row gx-0">
              <div className="col-xl-12">
                <ContactPageForm />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Map Embed Section */}
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.00165406126!2d77.6953713!3d12.9557999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3babf22f7cd4bf19%3A0x9d4948aa33e9b11b!2sMarathahalli%20Bridge%2C%20Marathahalli%2C%20Bengaluru%2C%20Karnataka%20560037!5e0!3m2!1sen!2sin!4v1716450000000!5m2!1sen!2sin"
        width="100%"
        height="450"
        style={{ border: 0, display: "block" }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>

      <Footer />
    </>
  );
}

