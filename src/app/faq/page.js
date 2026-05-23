import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import FAQAccordion from "@/components/FAQAccordion";

export const metadata = {
  title: "Faq's | Agarwal On Time Cargo Packers & Movers",
  description: "Frequently Asked Questions about our vehicle transport, domestic shifting, packing materials, delay policies, claims, and other relocation details.",
  alternates: {
    canonical: "https://www.agarwalontimecargopackers.com/faq.html",
  },
};

export default function FAQPage() {
  const faqs = [
    {
      question: "Do I need to do anything to prepare my vehicle for transport?",
      answer: "You can take pictures of your vehicle that you can compare later. Also, record all the existing damages. You should also check the fluid levels and other parts like brake, tires, batteries, etc.",
    },
    {
      question: "Where do I need to drop off and pick up my vehicle?",
      answer: "Agarwal On Time Cargo Packers & Movers offers door-to-door vehicle relocation services. You do not have to drop off or pick up your vehicle from any other location.",
    },
    {
      question: "How long will my vehicle shipment take?",
      answer: "The duration of shipment of your vehicle will depend on the distance to be covered. However, the Agarwal On Time Cargo Packers & Movers team is highly efficient and will ensure quick delivery of your vehicle.",
    },
    {
      question: "Are there any circumstances that could cause a delay in my delivery?",
      answer: "There can be a delay in the delivery because of weekends or public holidays, or the COVID-19 guidelines.",
    },
    {
      question: "What if there is damage to my vehicle during auto transportation?",
      answer: "In case of damage to your vehicle, you can contact our team of dedicated claim surveyors available at each branch. These are available to all your customer queries. Agarwal On Time Cargo Packers & Movers will settle your claim within just 14 days from the date of generation of the claim.",
    },
    {
      question: "Why one should choose Agarwal On Time Cargo Packers & Movers?",
      answer: "Agarwal On Time Cargo Packers & Movers values the client and his valuable belongings. We have the appropriate vehicle carrier which can load the car/bike in your presence at your home and similarly can deliver the same at your new location.",
    },
  ];

  const schemaJson = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaJson) }}
      />
      <Navbar />
      <Breadcrumb title="Faq's" />

      <div className="space overflow-hidden" id="faq-sec">
        <div className="container">
          <div className="row gx-60 justify-content-center">
            <div className="col-lg-4">
              <div className="title-area mb-4">
                <span className="sub-title after-none">FAQS</span>
                <h2 className="sec-title">Frequently Asked Questions?</h2>
                <p className="sec-text">
                  As a company that helps you shift your household goods and even your cars and vehicles, we are the best
                  in the business. We do it with professional skills in our team, you can be sure.
                </p>
              </div>
              <div className="widget widget_quote">
                <h3 className="widget_title">Feedback Form</h3>
                <form className="widget-form form-rounded-30">
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      name="name"
                      placeholder="Your Name"
                      aria-label="Your Name"
                      required
                    />
                    <i className="fal fa-user"></i>
                  </div>
                  <div className="form-group">
                    <textarea
                      name="message"
                      cols="30"
                      rows="3"
                      className="form-control"
                      placeholder="Your Message"
                      aria-label="Your Message"
                      required
                    ></textarea>
                    <i className="fal fa-comment"></i>
                  </div>
                  <div className="form-btn">
                    <button type="submit" className="th-btn w-100">
                      Submit Now
                    </button>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-lg-8">
              <FAQAccordion items={faqs} />
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

