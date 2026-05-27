import React from "react";
import dynamic from "next/dynamic";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSlider from "@/components/HeroSlider";
import QuickQuoteForm from "@/components/QuickQuoteForm";
import Link from "next/link";
import Counter from "@/components/Counter";
import { locationsList } from "@/data/locations";



const ServiceSlider = dynamic(() => import("@/components/ServiceSlider"), { ssr: true });
const FAQAccordion = dynamic(() => import("@/components/FAQAccordion"), { ssr: true });
const TestimonialSlider = dynamic(() => import("@/components/TestimonialSlider"), { ssr: true });

export const metadata = {
  title: "Agarwal Packers and Movers Bangalore | Best Packers and Movers in Bangalore",
  description: "Looking for local packers and movers near me? Agarwal Packers and Movers Bangalore offers reliable home moving services, household shifting services, and car transportation at affordable charges. Get a free quote today!",
  alternates: {
    canonical: "/",
  },
};

export default function Home() {
  const services = [
    {
      title: "House Shifting",
      path: "/house.html",
      image: "/img/blog-1.webp",
      desc: "The safe and proper packaging of goods is of paramount importance to us. We, Agarwal On Time Cargo Packers & Movers..",
      discount: "Best Discount"
    },
    {
      title: "Land Transport",
      path: "/transport.html",
      image: "/img/land-transport.webp",
      desc: "We also provide basic ground transportation for goods all over India, covering great distances and overcoming..",
      discount: "Best Discount"
    },
    {
      title: "Packing and Moving",
      path: "/packing.html",
      image: "/img/packing.webp",
      desc: "Packing and Moving is really a difficult task because it's a time when people get very puzzle. In earlier times..",
      discount: "Best Discount"
    },
    {
      title: "Domestic Relocation",
      path: "/domestic.html",
      image: "/img/domestic.webp",
      desc: "Agarwal On Time Cargo Packers & Movers has devised convenient and brilliant ways to move its customers' households..",
      discount: "Best Discount"
    },
    {
      title: "Car Transportation",
      path: "/car.html",
      image: "/img/car-transport.webp",
      desc: "We Offer reliable Car Transportation to individuals as well as corporate customers to ensure swift, safe..",
      discount: "Best Discount"
    },
    {
      title: "Warehousing",
      path: "/warehousing.html",
      image: "/img/warehouse.webp",
      desc: "We are a renowned storage service provider, which bring the most dependable godown services.",
      discount: "Best Discount"
    },
    {
      title: "Office Moving",
      path: "/office.html",
      image: "/img/office-shifting.webp",
      desc: "logo focuses on delivering excellent shift encounter for businesses and companies. We are fully dedicate..",
      discount: "Best Discount"
    },
    {
      title: "Air Cargo",
      path: "/air.html",
      image: "/img/air-cargo.webp",
      desc: "Agarwal On Time Cargo Packers & Movers offers to our clients ,a cost effective, secure, timely and efficient solution..",
      discount: "Best Discount"
    }
  ];

  const testimonials = [
    {
      name: "Pradum Gaur",
      location: "Bangalore",
      rating: 5,
      title: "Sparkling Clean Home",
      text: "Good service given by Agarwal On Time Cargo Packers and Movers they shifted my office item from Bangalore to noida .the good reached on time with full safety."
    },
    {
      name: "Mukesh Sharma",
      location: "Bangalore",
      rating: 5,
      title: "Professional & Reliable",
      text: "I recently used Agarwal On Time Cargo Packers and Movers in Bangalore for my home relocation, and I was very impressed with their service. Their team members were very professional, punctual and used high-quality packing material"
    },
    {
      name: "Virendra",
      location: "Udaipur",
      rating: 5,
      title: "Flexible Scheduling",
      text: "Awesome experience with this packer and mover service! I had lot of glassware and even a large and heavy aquarium that the team shifted with ease and without any damage! Highly recommend them!"
    },
    {
      name: "Vipin Singh",
      location: "Alwar",
      rating: 5,
      title: "Sparkling Clean Home",
      text: "After reading some online reviews, I contacted with them. They visited my home and gave me the cost of less than half compared to most of their competitors charges. Their prompt service, including packing, shifting, and unpacking was awesome. Also, I was impressed with their prices and professionalism."
    }
  ];

  const faqs = [
    {
      question: "Do I need to do anything to prepare my vehicle for transport?",
      answer: "You can take pictures of your vehicle that you can compare later. Also, record all the existing damages. You should also check the fluid levels and other parts like brake, tires, batteries, etc."
    },
    {
      question: "Where do I need to drop off and pick up my vehicle?",
      answer: "Agarwal On Time Cargo Packers & Movers offers door-to-door vehicle relocation services. You do not have to drop off or pick up your vehicle from any other location."
    },
    {
      question: "How long will my vehicle shipment take?",
      answer: "The duration of shipment of your vehicle will depend on the distance to be covered. However, the Agarwal On Time Cargo Packers & Movers team is highly efficient and will ensure quick delivery of your vehicle."
    },
    {
      question: "Are there any circumstances that could cause a delay in my delivery?",
      answer: "There can be a delay in the delivery because of weekends or public holidays, or the COVID-19 guidelines."
    },
    {
      question: "What if there is damage to my vehicle during auto transportation?",
      answer: "In case of damage to your vehicle, you can contact our team of dedicated claim surveyors available at each branch. These are available to all your customer queries. Agarwal On Time Cargo Packers & Movers will settle your claim within just 14 days from the date of generation of the claim."
    },
    {
      question: "Why one should choose Agarwal On Time Cargo Packers & Movers?",
      answer: "Agarwal On Time Cargo Packers & Movers values the client and his valuable belongings. We have the appropriate vehicle carrier which can load the car/bike in your presence at your home and similarly can deliver the same at your new location."
    }
  ];

  const orgSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Agarwal On Time Cargo Packers & Movers",
    "url": "https://www.agarwalontimecargopackers.com",
    "logo": "https://www.agarwalontimecargopackers.com/assets/img/logo.webp",
    "sameAs": [],
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+91 8095279595",
      "contactType": "customer service",
      "areaServed": "IN",
      "availableLanguage": ["en", "Hindi"]
    }
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Agarwal On Time Cargo Packers & Movers",
    "url": "https://www.agarwalontimecargopackers.com",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://www.agarwalontimecargopackers.com/?s={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

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
    },
    "sameAs": []
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <Navbar />

      {/* Hero section */}
      <div className="th-hero-wrapper hero-2" id="hero">
        <HeroSlider />
        <QuickQuoteForm />
      </div>

      {/* About section */}
      <div className="overflow-hidden space-bottom space-top" id="about-sec">
        <div className="container">
          <div className="row gy-30 align-items-center">
            <div className="col-xl-6 mb-xl-0">
              <div className="about-sec-2-left">
                <div className="img-box1">
                  <div className="shape1 jump">
                    <img src="/assets/img/about/about-2-right.jpg" alt="Agarwal On Time Cargo Packers and Movers Loading Operations" width="270" height="380" loading="lazy" />
                  </div>
                  <div className="img2">
                    <img className="tilt-active" src="/assets/img/about/about-2-main.webp" alt="Agarwal On Time Cargo Packers and Movers Shifting Team" width="400" height="500" loading="lazy" />
                  </div>
                  <div className="year-counter">
                    <div className="rotate-text">
                      <h5 className="year-counter_text-small">Years Of</h5>
                      <h4 className="year-counter_text-big">Experience</h4>
                    </div>
                    <div className="year-counter_number">
                      <span className="counter-number"><Counter end={16} /></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-6">
              <div className="title-area">
                <span className="sub-title before-none">About Us</span>
                <h2 className="sec-title">Welcome to Agarwal On Time Cargo Packers & Movers</h2>
                <p className="sec-text">
                  The stressful moving is about moving your family along with belongings to a new place from its residing
                  location is really painful and wounding job correlated with several tasks packing, unpacking and moving
                  to be happened to the entire furnished house, is same to all sorts of stuff. The complete relocation
                  task may distress and daunt goodsâ€™ owners. Complete peace of mind is provided by the Agarwal On Time Cargo Packers & Movers in Bangalore. Relocation home or relocating office goods are all tensions-filled tasks and about to
                  handle all these will create an anxiety, as you are tempted to move it perfectly to the new and right
                  place.
                </p>
              </div>
              <div className="checklist style2 mb-35">
                <ul>
                  <li>
                    <i className="fa-solid fa-circle"></i> Packing along with unpacking solutions
                  </li>
                  <li>
                    <i className="fa-solid fa-circle"></i> Proper packing supplies utilization
                  </li>
                  <li>
                    <i className="fa-solid fa-circle"></i> Skilled and user-friendly staff members
                  </li>
                  <li>
                    <i className="fa-solid fa-circle"></i> Careful relocation solutions
                  </li>
                </ul>
              </div>
              <div>
                <Link href="/about.html" className="th-btn star-btn">
                  Discover More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Counters Section */}
      <div className="space-bottom">
        <div className="container">
          <div className="counter-card-wrap style2">
            <div className="counter-card">
              <div className="media-body">
                <div className="box-number">
                  <span className="counter-number"><Counter end={4050} /></span>+
                </div>
                <p className="box-text">Satisfied Customers</p>
              </div>
            </div>
            <div className="right-shape">
              <img src="/assets/img/icon/counter-shape-2-1.webp" alt="" width="48" height="48" loading="lazy" />
            </div>
            <div className="counter-card">
              <div className="media-body">
                <div className="box-number">
                  <span className="counter-number"><Counter end={16} /></span>+
                </div>
                <p className="box-text">Our Staff</p>
              </div>
            </div>
            <div className="right-shape">
              <img src="/assets/img/icon/counter-shape-2-1.webp" alt="" width="48" height="48" loading="lazy" />
            </div>
            <div className="counter-card">
              <div className="media-body">
                <div className="box-number">
                  <span className="counter-number"><Counter end={6060} /></span>+
                </div>
                <p className="box-text">Total Customers</p>
              </div>
            </div>
            <div className="right-shape">
              <img src="/assets/img/icon/counter-shape-2-1.webp" alt="" width="48" height="48" loading="lazy" />
            </div>
            <div className="counter-card">
              <div className="media-body">
                <div className="box-number">
                  <span className="counter-number"><Counter end={22} /></span>+
                </div>
                <p className="box-text">Our Vehicle</p>
              </div>
            </div>
            <div className="right-shape">
              <img src="/assets/img/icon/counter-shape-2-1.webp" alt="" width="48" height="48" loading="lazy" />
            </div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <section className="th-service-1 overflow-hidden space" id="service-sec" style={{ backgroundImage: "url('/assets/img/bg/service-bg-1-1.webp')" }}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xxl-6 col-xl-7 col-lg-7 col-md-8">
              <div className="title-area text-center">
                <span className="sub-title justify-content-center">Our Services</span>
                <h2 className="sec-title">
                  The Services We Provide For <span className="text-theme">Our Customer</span>
                </h2>
              </div>
            </div>
          </div>
          <div className="row gy-30 justify-content-center">
            <ServiceSlider services={services} />
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <div className="why-choose-area overflow-hidden space">
        <div className="container">
          <div className="row justify-content-lg-between justify-content-center align-items-center">
            <div className="col-xl-6 text-center text-xl-start">
              <div className="title-area">
                <span className="sub-title before-none lg-after-none justify-content-center justify-content-xl-start">
                  Why choose us
                </span>
                <h2 className="sec-title">Choose Excellence, Choose Our Company</h2>
              </div>
            </div>
            <div className="col-lg-auto d-none d-lg-block">
              <div className="why-choose-1-right">
                <img className="why-count-star-1-1 shape-mockup moving" src="/assets/img/icon/why-count-star-1-1.svg" alt="" width="32" height="32" loading="lazy" />
                <div className="why-choose-1-right-card">
                  <div className="box-number">
                    <span className="number">
                      <span className="counter-number"><Counter end={4.4} /></span>k
                    </span>
                    <span className="plus">+</span>
                  </div>
                  <p className="box-text">Shifting Done</p>
                </div>
              </div>
            </div>
          </div>
          <div className="row gx-60 gy-40 whytopmargin align-items-center justify-content-center">
            <div className="col-xl-4 col-lg-8">
              <div className="why-img-box1">
                <div className="img1">
                  <img src="/img/why.gif" alt="Packers and Movers Bangalore Shifting Process Animation" width="460" height="400" loading="lazy" />
                </div>
              </div>
            </div>
            <div className="col-xl-8">
              <div className="choose-feature-wrap">
                <div className="choose-feature-wrap__box">
                  <div className="box-icon">
                    <i className="fa-thin fa-users"></i>
                  </div>
                  <div className="choose-feature-wrap__content">
                    <h3 className="box-title">24/7 Support</h3>
                    <p className="box-text">
                      Effective Customer Care Department addressing to all your queries and grievances.
                    </p>
                  </div>
                </div>
                <div className="choose-feature-wrap__box">
                  <div className="box-icon">
                    <i className="fa-light fa-clock-one-thirty"></i>
                  </div>
                  <div className="choose-feature-wrap__content">
                    <h3 className="box-title">On-Time Services</h3>
                    <p className="box-text">
                      We at Agarwal On Time Cargo Packers & Movers aim to deliver goods on time or before time.
                    </p>
                  </div>
                </div>
                <div className="choose-feature-wrap__box">
                  <div className="box-icon">
                    <i className="fa-thin fa-box"></i>
                  </div>
                  <div className="choose-feature-wrap__content">
                    <h3 className="box-title">Flexible Package</h3>
                    <p className="box-text">
                      Our main objective is to pack, transit, unpack, and to deliver your goods without any damag.
                    </p>
                  </div>
                </div>
                <div className="choose-feature-wrap__box">
                  <div className="box-icon">
                    <i className="fa-thin fa-face-smile"></i>
                  </div>
                  <div className="choose-feature-wrap__content">
                    <h3 className="box-title">Transparent Pricing</h3>
                    <p className="box-text">We provide the best packing and moving services at affordable prices.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Brand Logos section */}
        <div className="container">
          <div className="row">
            <div className="brand-bg-wrap">
              <div className="row">
                <div className="col-12">
                  <div className="brand-1-top">
                    <h3 className="box-title">
                      Trusted by over <span className="number text-theme"><Counter end={22} />+</span> companies in India
                    </h3>
                  </div>
                </div>
                <div className="col-12">
                  <div className="brand-logos-row" style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: "20px", alignItems: "center" }}>
                    <div className="brand-box">
                      <img src="/img/brand-logo/clients1.webp" alt="Associated Packers Movers Client Brand" width="150" height="80" loading="lazy" />
                    </div>
                    <div className="brand-box">
                      <img src="/img/brand-logo/clients2.webp" alt="Associated Packers Movers Client Brand" width="150" height="80" loading="lazy" />
                    </div>
                    <div className="brand-box">
                      <img src="/img/brand-logo/clients3.webp" alt="Associated Packers Movers Client Brand" width="150" height="80" loading="lazy" />
                    </div>
                    <div className="brand-box">
                      <img src="/img/brand-logo/clients4.webp" alt="Associated Packers Movers Client Brand" width="150" height="80" loading="lazy" />
                    </div>
                    <div className="brand-box">
                      <img src="/img/brand-logo/clients5.webp" alt="Associated Packers Movers Client Brand" width="150" height="80" loading="lazy" />
                    </div>
                    <div className="brand-box">
                      <img src="/img/brand-logo/c7.webp" alt="Associated Packers Movers Client Brand" width="150" height="80" loading="lazy" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Detailed Content, pricing table, and area list */}
      <section className="homecontent">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-10 col-lg-10">
              <div className="title-area text-center">
                <span className="sub-title justify-content-center">Best Packing Moving Services</span>
                <h2 className="sec-title">Agarwal On Time Cargo Packers & Movers - Bangalore</h2>
              </div>
            </div>
            <p>
              Agarwal On Time Cargo Packers & Movers is a renowned packers and movers in Bangalore. With 16 years of experience in the
              industry, we have established a strong reputation for our reliable and efficient moving services. Whether
              it&apos;s a house relocation services or a commercial move, we offer a comprehensive range of shifting services
              to cater to diverse moving needs. Our team of skilled professionals ensures the safe and secure packing of
              belongings, using high-quality packing materials to prevent damage during transportation.
            </p>
            <p>
              Our commitment to customer satisfaction is reflected in our personalized approach, where we tailor our
              services according to the specific requirements of each client. Additionally, we provide insurance coverage
              for goods in transit, giving customers peace of mind.
            </p>
            <p>
              With a strong network of branches across Bangalore and a dedicated customer support team, Agarwal On Time Cargo Packers & Movers ensures a smooth and hassle-free moving experience. Our professionalism, reliability, and excellent
              track record make us a preferred choice for individuals and businesses seeking packers and movers services in
              Bangalore.
            </p>
          </div>
          <div className="dividepart">
            <div className="row">
              <div className="col-lg-8">
                <h2>Agarwal On Time Cargo Packers & Movers Charges in Bangalore | Affordable Packers and Movers in Bangalore</h2>
                <p>
                  Agarwal On Time Cargo Packers & Movers in Bangalore constantly upgrade their services to offer you an enhanced moving
                  experience. With years of experience, extensive training, and the right tools and vehicles, you can
                  ensure that your belongings reach the new address in excellent condition and on time.
                  <br />
                  With the advanced and state-of-the-art facilities offered by Agarwal On Time Cargo Packers & Movers in Bangalore, we
                  have emerged as one of the sought-after options for anyone planning to relocate. Other than this,
                  Agarwal On Time Cargo Packers and Movers in Bangalore offer best-in-class and round-the-clock customer support to
                  come up with immediate solutions to their queries.
                </p>
                <ul>
                  <li>Quick and best-in-class service ensuring the safety of your belongings.</li>
                  <li>Free pre-shifting survey by our representative at your home or office.</li>
                  <li>Cost-effective and transparent packers and mover charges.</li>
                  <li>A final quote with no hidden charges</li>
                  <li>Customized services meeting specific needs of individuals, families, and organizations.</li>
                </ul>
                <p>Following are the six packages that we provide to meet your shifting needs</p>
                <table className="table table-bordered">
                  <tbody>
                    <tr>
                      <td>
                        <strong>Shifting Type</strong>
                      </td>
                      <td>
                        <strong>Packing Prices</strong>
                      </td>
                      <td>
                        <strong>Labour Costs</strong>
                      </td>
                    </tr>
                    <tr>
                      <td>1 BHK Shifting</td>
                      <td>â‚¹ 5000 - 7000</td>
                      <td>â‚¹ 3000 - 5000</td>
                    </tr>
                    <tr>
                      <td>2 BHK Shifting</td>
                      <td>â‚¹ 6000 - 8000</td>
                      <td>â‚¹ 4000 - 5000</td>
                    </tr>
                    <tr>
                      <td>3 BHK Shifting</td>
                      <td>â‚¹ 8000 - 12000</td>
                      <td>â‚¹ 5000 - 6000</td>
                    </tr>
                    <tr>
                      <td>Few Goods Shifting</td>
                      <td>â‚¹ 3500 - 5000</td>
                      <td>â‚¹ 2000 - 3000</td>
                    </tr>
                    <tr>
                      <td>Car Shifting</td>
                      <td>â‚¹ 3000 - 6000</td>
                      <td>â‚¹ 1000 - 3000</td>
                    </tr>
                    <tr>
                      <td>Bike Shifting</td>
                      <td>â‚¹ 2000 - 10000</td>
                      <td>â‚¹ 1000 - 2000</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="col-lg-4">
                <div className="scrolligpart">
                  <h3>
                    <span className="clrbl">We&apos;re Available in These Areas in Bangalore</span>
                  </h3>
                  <div className="navbg2">
                    <ul className="nav nav-list">
                      {locationsList
                        .filter((loc) => loc.region === "Bangalore" && !loc.type)
                        .map((loc, idx) => (
                          <li key={idx}>
                            <Link href={`/${loc.slug}.html`}> Packers And Movers in {loc.name}</Link>
                          </li>
                        ))}
                    </ul>
                  </div>

                  <h3>
                    <span className="clrbl">Service Area Karnataka</span>
                  </h3>
                  <div className="navbg2">
                    <ul className="nav nav-list">
                      <li>
                        <Link href="#"> Packers And Movers in Karnataka</Link>
                      </li>
                      {locationsList
                        .filter((loc) => loc.region === "Karnataka")
                        .map((loc, idx) => (
                          <li key={idx}>
                            <Link href={`/${loc.slug}.html`}> Packers And Movers in {loc.name}</Link>
                          </li>
                        ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ & Feedback section */}
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
                    <input type="text" className="form-control" name="name" placeholder="Your Name" required />
                    <i className="fal fa-user"></i>
                  </div>
                  <div className="form-group">
                    <textarea name="message" cols="30" rows="3" className="form-control" placeholder="Your Message" required></textarea>
                    <i className="fal fa-comment"></i>
                  </div>
                  <div className="form-btn">
                    <button type="submit" className="th-btn w-100">Submit Now</button>
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

      {/* Testimonials section */}
      <section className="testi-card-area-1 overflow-hidden" id="testi-sec">
        <div className="container">
          <div className="row gy-5 justify-content-center">
            <div className="col-xl-5 col-lg-12">
              <div className="testi-img-box">
                <div className="testi-1-main-img">
                  <img src="/img/ab4.webp" alt="Happy Customer Reviews Overview" width="500" height="400" loading="lazy" />
                </div>
                <div className="testi-1-shape-1"></div>
                <div className="testi-1-shape-2"></div>
              </div>
            </div>
            <div className="col-xl-7 col-lg-12">
              <div className="th-container-right">
                <div className="row">
                  <div className="col-xl-6">
                    <div className="title-area">
                      <span className="sub-title before-none lg-before-none">Testimonials</span>
                      <h2 className="sec-title">Feedback About Their Experience With Us</h2>
                    </div>
                  </div>
                </div>
                <TestimonialSlider testimonials={testimonials} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process section */}
      <section className="space" id="process-sec">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center text-xl-start">
              <div className="title-area">
                <span className="sub-title before-none lg-after-none justify-content-center justify-content-xl-start">
                  Work Process
                </span>
                <h2 className="sec-title">How We Are Working!</h2>
              </div>
            </div>
          </div>
          <div className="row gy-4 justify-content-center">
            <div className="col-xl-3 col-md-6 process-box-wrap">
              <div className="process-box">
                <div className="box-icon">
                  <i className="fa-solid fa-address-card"></i>
                </div>
                <h3 className="box-title">Booking</h3>
                <p className="box-text">
                  Once confirmation of booking is done, a quotation is issued followed by quotation finalization and final
                  confirmation.
                </p>
              </div>
            </div>
            <div className="col-xl-3 col-md-6 process-box-wrap">
              <div className="process-box">
                <div className="box-icon">
                  <i className="fa-solid fa-box"></i>
                </div>
                <h3 className="box-title">Packing</h3>
                <p className="box-text">
                  The Packing Supervisor gets in touch with you, and will drop at your place timely for the infallible
                  packing treatment.
                </p>
              </div>
            </div>
            <div className="col-xl-3 col-md-6 process-box-wrap">
              <div className="process-box">
                <div className="box-icon">
                  <i className="fa fa-truck"></i>
                </div>
                <h3 className="box-title">Transportation</h3>
                <p className="box-text">
                  After getting a green signal and conclusions of the requisite payments, the transportation team gets into
                  action instantaneously.
                </p>
              </div>
            </div>
            <div className="col-xl-3 col-md-6 process-box-wrap">
              <div className="process-box">
                <div className="box-icon">
                  <i className="fa-sharp fa-solid fa-handshake"></i>
                </div>
                <h3 className="box-title">Destination</h3>
                <p className="box-text">
                  The delighting point is that we also provide service of holding your HHG container for up to 24 hours
                  without any charges, and with zero transshipment.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Branch links section */}
      <section className="branchbuttuon">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <h5>
                <Link href="/car-transport-bangalore.html"> Car Transport Bangalore</Link>
              </h5>
            </div>
            <div className="col-md-4">
              <h5 className="colorchange">
                <Link href="/packers-and-movers-bangalore.html"> Packers and Movers Bangalore</Link>
              </h5>
            </div>
            <div className="col-md-4">
              <h5>
                <Link href="/bike-transport-bangalore.html"> Bike Transport Bangalore</Link>
              </h5>
            </div>
          </div>
        </div>
      </section>

      {/* All India Branches directory list */}
      <section className="branches space pt-0">
        <div className="container">
          <div className="title-area text-center">
            <span className="sub-title justify-content-center">Our Branches</span>
            <h2 className="sec-title">Packers and Movers in All India</h2>
          </div>
          <div className="row">
            <div className="col-lg-4">
              <ul>
                <li>
                  <i className="fas fa-location-dot"></i>
                  <Link href="/packers-and-movers-mumbai.html">Packers and Movers Mumbai</Link>
                </li>
                <li>
                  <i className="fas fa-location-dot"></i>
                  <Link href="/packers-and-movers-ahmedabad.html">Packers and Movers Ahmedabad</Link>
                </li>
                <li>
                  <i className="fas fa-location-dot"></i>
                  <Link href="/packers-and-movers-pune.html">Packers and Movers Pune</Link>
                </li>
                <li>
                  <i className="fas fa-location-dot"></i>
                  <Link href="/packers-and-movers-nagpur.html">Packers and Movers Nagpur</Link>
                </li>
                <li>
                  <i className="fas fa-location-dot"></i>
                  <Link href="/packers-and-movers-visakhapatnam.html">Packers and Movers Visakhapatnam</Link>
                </li>
                <li>
                  <i className="fas fa-location-dot"></i>
                  <Link href="/packers-and-movers-nashik.html">Packers and Movers Nashik</Link>
                </li>
                <li>
                  <i className="fas fa-location-dot"></i>
                  <Link href="/packers-and-movers-varanasi.html">Packers and Movers Varanasi</Link>
                </li>
                <li>
                  <i className="fas fa-location-dot"></i>
                  <Link href="/packers-and-movers-amritsar.html">Packers and Movers Amritsar</Link>
                </li>
                <li>
                  <i className="fas fa-location-dot"></i>
                  <Link href="/packers-and-movers-vijayawada.html">Packers and Movers Vijayawada</Link>
                </li>
                <li>
                  <i className="fas fa-location-dot"></i>
                  <Link href="/packers-and-movers-chandigarh.html">Packers and Movers Chandigarh</Link>
                </li>
                <li>
                  <i className="fas fa-location-dot"></i>
                  <Link href="/packers-and-movers-delhi.html">Packers and Movers Delhi</Link>
                </li>
              </ul>
            </div>
            <div className="col-lg-4">
              <ul>
                <li>
                  <i className="fas fa-location-dot"></i>
                  <Link href="/packers-and-movers-chennai.html">Packers and Movers Chennai</Link>
                </li>
                <li>
                  <i className="fas fa-location-dot"></i>
                  <Link href="/packers-and-movers-mangalore.html">Packers and Movers Mangalore</Link>
                </li>
                <li>
                  <i className="fas fa-location-dot"></i>
                  <Link href="/packers-and-movers-indore.html">Packers and Movers Indore</Link>
                </li>
                <li>
                  <i className="fas fa-location-dot"></i>
                  <Link href="/packers-and-movers-patna.html">Packers and Movers Patna</Link>
                </li>
                <li>
                  <i className="fas fa-location-dot"></i>
                  <Link href="/packers-and-movers-ranchi.html">Packers and Movers Ranchi</Link>
                </li>
                <li>
                  <i className="fas fa-location-dot"></i>
                  <Link href="/packers-and-movers-srinagar.html">Packers and Movers Srinagar</Link>
                </li>
                <li>
                  <i className="fas fa-location-dot"></i>
                  <Link href="/packers-and-movers-allahabad.html">Packers and Movers Allahabad</Link>
                </li>
                <li>
                  <i className="fas fa-location-dot"></i>
                  <Link href="/packers-and-movers-belgaum.html">Packers and Movers Belgaum</Link>
                </li>
                <li>
                  <i className="fas fa-location-dot"></i>
                  <Link href="/packers-and-movers-mysore.html">Packers and Movers Mysore</Link>
                </li>
                <li>
                  <i className="fas fa-location-dot"></i>
                  <Link href="/packers-and-movers-bangalore.html">Packers and Movers Bangalore</Link>
                </li>
                <li>
                  <i className="fas fa-location-dot"></i>
                  <Link href="/packers-and-movers-kolkata.html">Packers and Movers Kolkata</Link>
                </li>
              </ul>
            </div>
            <div className="col-lg-4">
              <ul>
                <li>
                  <i className="fas fa-location-dot"></i>
                  <Link href="/packers-and-movers-lucknow.html">Packers and Movers Lucknow</Link>
                </li>
                <li>
                  <i className="fas fa-location-dot"></i>
                  <Link href="/packers-and-movers-ghaziabad.html">Packers and Movers Ghaziabad</Link>
                </li>
                <li>
                  <i className="fas fa-location-dot"></i>
                  <Link href="/packers-and-movers-hyderabad.html">Packers and Movers Hyderabad</Link>
                </li>
                <li>
                  <i className="fas fa-location-dot"></i>
                  <Link href="/packers-and-movers-surat.html">Packers and Movers Surat</Link>
                </li>
                <li>
                  <i className="fas fa-location-dot"></i>
                  <Link href="/packers-and-movers-bhopal.html">Packers and Movers Bhopal</Link>
                </li>
                <li>
                  <i className="fas fa-location-dot"></i>
                  <Link href="/packers-and-movers-agra.html">Packers and Movers Agra</Link>
                </li>
                <li>
                  <i className="fas fa-location-dot"></i>
                  <Link href="/packers-and-movers-coimbatore.html">Packers and Movers Coimbatore</Link>
                </li>
                <li>
                  <i className="fas fa-location-dot"></i>
                  <Link href="/packers-and-movers-hubli.html">Packers and Movers Hubli</Link>
                </li>
                <li>
                  <i className="fas fa-location-dot"></i>
                  <Link href="/packers-and-movers-rajkot.html">Packers and Movers Rajkot</Link>
                </li>
                <li>
                  <i className="fas fa-location-dot"></i>
                  <Link href="/packers-and-movers-navi-mumbai.html">Packers and Movers Navi Mumbai</Link>
                </li>
                <li>
                  <i className="fas fa-location-dot"></i>
                  <Link href="/packers-and-movers-gwalior.html">Packers and Movers Gwalior</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

