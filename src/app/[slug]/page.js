import React from "react";
import dynamic from "next/dynamic";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import { locationsList } from "@/data/locations";
import { notFound } from "next/navigation";

const SidebarQuoteForm = dynamic(() => import("@/components/SidebarQuoteForm"), { ssr: true });
const FAQAccordion = dynamic(() => import("@/components/FAQAccordion"), { ssr: true });
const GallerySlider = dynamic(() => import("@/components/GallerySlider"), { ssr: true });
const Sidebar = dynamic(() => import("@/components/Sidebar"), { ssr: true });

export async function generateStaticParams() {
  return locationsList.map((loc) => ({
    slug: loc.slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const location = locationsList.find((loc) => loc.slug === slug);

  if (!location) {
    return {
      title: "Page Not Found",
    };
  }

  const isVehicle = location.type === "vehicle";
  const title = isVehicle
    ? `${location.name} | Safe Vehicle Shifting Services`
    : `Packers and Movers in ${location.name} | Best Charges`;
  const description = isVehicle
    ? `Hire professional vehicle shifting carriers for ${location.name}. Safe loading, reliable transport trailers, and on-time car or bike shipping.`
    : `Best Packers and Movers in ${location.name}. Highly rated household shifting, office moving, and local relocation services at affordable rates.`;

  return {
    title,
    description,
    alternates: {
      canonical: `https://www.agarwalontimecargopackers.com/${slug}.html`,
    },
  };
}

export default async function LocationPage({ params }) {
  const { slug } = await params;
  const location = locationsList.find((loc) => loc.slug === slug);

  if (!location) {
    notFound();
  }

  const isVehicle = location.type === "vehicle";
  const displayName = location.name;

  const faqs = [
    {
      question: `Do I need to do anything to prepare my vehicle for transport in ${displayName}?`,
      answer: `You can take pictures of your vehicle that you can compare later. Also, record all the existing damages. You should also check the fluid levels and other parts like brakes, tires, batteries, etc. before handing it over to our carriers.`
    },
    {
      question: `Where do I need to drop off and pick up my vehicle?`,
      answer: `Agarwal On Time Cargo Packers & Movers offers door-to-door vehicle relocation services. You do not have to drop off or pick up your vehicle from any other location; we handle it directly from your doorstep.`
    },
    {
      question: `How long will my vehicle shipment take to/from ${displayName}?`,
      answer: `The duration of shipment of your vehicle will depend on the distance to be covered. However, the Agarwal On Time Cargo Packers & Movers team is highly efficient and will ensure quick delivery of your vehicle.`
    },
    {
      question: `Are there any circumstances that could cause a delay in my delivery?`,
      answer: `There can be a minor delay in the delivery because of weekends, public holidays, bad weather conditions, or local state entry guidelines.`
    },
    {
      question: `What if there is damage to my vehicle during auto transportation?`,
      answer: `In case of damage to your vehicle, you can contact our team of dedicated claim surveyors available at each branch. These are available to all your customer queries. Agarwal On Time Cargo Packers & Movers will settle your claim within just 14 days from the date of generation of the claim.`
    },
    {
      question: `Why should one choose Agarwal On Time Cargo Packers & Movers ${displayName}?`,
      answer: `Agarwal On Time Cargo Packers & Movers ${displayName} values the client and their valuable belongings. We have the appropriate vehicle carrier which can load the car/bike in your presence at your home and similarly can deliver the same at your new location safely.`
    }
  ];

  // LocalBusiness Schema
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": `Agarwal On Time Cargo Packers & Movers - ${displayName}`,
    "image": "https://www.agarwalontimecargopackers.com/assets/img/logo.png",
    "telephone": "+91 8095279595",
    "email": "agarwalpackersmoversa@gmail.com",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": displayName,
      "addressRegion": location.region,
      "addressCountry": "IN"
    },
    "url": `https://www.agarwalontimecargopackers.com/${slug}.html`
  };

  // FAQ Schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <Navbar />
      <Breadcrumb title={displayName} />

      <section className="space-top space-extra2-bottom">
        <div className="container">
          <div className="row">
            <div className="col-xxl-8 col-lg-8">
              <div className="page-single mb-30">
                <div className="page-content">
                  <h3 className="sec-title page-title">Packers and Movers - {displayName}</h3>
                  <p className="">
                    Packing and Moving in {displayName} is really a difficult task because it's a time when people get very puzzled. In earlier times, it was a very difficult job to shift your belongings from one place to another but now it is not so. Today, there are countless moving and packing companies which are ready to take the pain of relocation, and people also show their interest to take the assistance of these relocation companies.
                  </p>
                  <p>
                    Agarwal On Time Cargo Packers & Movers in {displayName} is available to take the whole burden of relocation on them and make the move simpler for our customers. The workers of our relocation company are experienced and well-trained and are always ready to make the move safe and comfortable.
                  </p>
                  <p>
                    Packing is one of the most important and difficult tasks that make people irritated all the time. In this task, our experts pack a number of goods such as wardrobes, linen, mattresses, beds, furniture, kitchen appliances, utensils, pots, and pans. All these items are essential, and several have zero tolerance to jerks. The workers use high-quality packing materials to pack the goods safely. We always give our best to keep the goods safe all through the transit. We accurately pack the goods and make our customers tension-free about the safety of their goods.
                  </p>

                  <GallerySlider />

                  <h3 className="sec-title page-title mb-2">Moving Services</h3>
                  <p className="mb-30">
                    The safe and proper packaging of goods is of paramount importance to us. We, Agarwal On Time Cargo Packers & Movers, pay attention to every detail while packaging processes to ensure the safety of your household goods moving services.
                  </p>

                  <div className="row mt-30 gx-40">
                    <div className="col-md-7">
                      <div className="page-img">
                        <img className="w-100" src="/img/packing.jpg" alt="Packing operations" style={{ borderRadius: "15px" }} />
                      </div>
                    </div>
                    <div className="col-md-5">
                      <p>
                        Our personnel use premium quality packaging materials like wrapping papers, cartons, wooden boxes, etc., to maintain the safety of the goods. Our packaging personnel are professionally trained to handle all types of packaging needs, be it stationary or glass items.
                      </p>
                      <div className="checklist body-color">
                        <ul>
                          <li><i className="fa-solid fa-badge-check"></i>Packing along with unpacking solutions</li>
                          <li><i className="fa-solid fa-badge-check"></i>24/7 Alltime Supporting</li>
                          <li><i className="fa-solid fa-badge-check"></i>Fully Careful & Safety Guard</li>
                          <li><i className="fa-solid fa-badge-check"></i>Expert Team Members</li>
                          <li><i className="fa-solid fa-badge-check"></i>Proper packing supplies utilization</li>
                          <li><i className="fa-solid fa-badge-check"></i>Skilled and user-friendly staff members</li>
                          <li><i className="fa-solid fa-badge-check"></i>Careful relocation solutions</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="mt-5">
                    <FAQAccordion items={faqs} />
                  </div>
                </div>
              </div>
            </div>

            <div className="col-xxl-4 col-lg-4">
              <aside className="sidebar-area">
                <SidebarQuoteForm />
                <Sidebar wrapWithAside={false} />
              </aside>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom Work Process section */}
      <section className="space pt-0" id="process-sec">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center text-xl-start">
              <div className="title-area">
                <span className="sub-title before-none lg-after-none justify-content-center justify-content-xl-start">Work Process</span>
                <h2 className="sec-title">How We Are Working!</h2>
              </div>
            </div>
          </div>
          <div className="row gy-4 justify-content-center">
            <div className="col-xl-3 col-md-6 process-box-wrap">
              <div className="process-box">
                <div className="box-icon"><i className="fa-solid fa-address-card"></i></div>
                <h3 className="box-title">Booking</h3>
                <p className="box-text">Once confirmation of booking is done, a quotation is issued followed by quotation finalization and final confirmation.</p>
              </div>
            </div>
            <div className="col-xl-3 col-md-6 process-box-wrap">
              <div className="process-box">
                <div className="box-icon"><i className="fa-solid fa-box"></i></div>
                <h3 className="box-title">Packing</h3>
                <p className="box-text">The Packing Supervisor gets in touch with you, and will drop at your place timely for the infallible packing treatment.</p>
              </div>
            </div>
            <div className="col-xl-3 col-md-6 process-box-wrap">
              <div className="process-box">
                <div className="box-icon"><i className="fa fa-truck"></i></div>
                <h3 className="box-title">Transportation</h3>
                <p className="box-text">After getting a green signal and conclusions of the requisite payments, the transportation team gets into action instantaneously.</p>
              </div>
            </div>
            <div className="col-xl-3 col-md-6 process-box-wrap">
              <div className="process-box">
                <div className="box-icon"><i className="fa-sharp fa-solid fa-handshake"></i></div>
                <h3 className="box-title">Destination</h3>
                <p className="box-text">The delighting point is that we also provide service of holding your HHG container for up to 24 hours without any charges, and with zero transshipment.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
