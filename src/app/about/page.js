import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import Counter from "@/components/Counter";


export const metadata = {
  title: "About Us | Agarwal On Time Cargo Packers & Movers",
  description: "Learn more about Agarwal On Time Cargo Packers & Movers, our 16 years of experience, and our mission to provide secure, timely, and affordable relocation services.",
  alternates: {
    canonical: "https://www.agarwalontimecargopackers.com/about.html",
  },
};

export default function About() {
  const schemaJson = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "name": "About Agarwal On Time Cargo Packers & Movers",
    "description": "Learn more about Agarwal On Time Cargo Packers & Movers, our 16 years of experience, and our mission to provide secure, timely, and affordable relocation services.",
    "publisher": {
      "@type": "Organization",
      "name": "Agarwal On Time Cargo Packers & Movers",
      "logo": "https://www.agarwalontimecargopackers.com/assets/img/logo.webp"
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaJson) }}
      />
      <Navbar />
      <Breadcrumb title="About Us" />

      <div className="overflow-hidden space-bottom space-top" id="about-sec">
        <div className="container">
          <div className="row gy-30 align-items-center">
            <div className="col-xl-6 mb-xl-0">
              <div className="about-sec-2-left">
                <div className="img-box1">
                  <div className="shape1 jump">
                    <img
                      src="/assets/img/about/about-2-right.jpg"
                      alt="Agarwal On Time Cargo Packers and Movers Loading Operations"
                      width="270"
                      height="380"
                      loading="lazy"
                    />
                  </div>
                  <div className="img2">
                    <img
                      className="tilt-active"
                      src="/assets/img/about/about-2-main.webp"
                      alt="Agarwal On Time Cargo Packers and Movers Shifting Team"
                      width="400"
                      height="500"
                      loading="lazy"
                    />
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
                <h2 className="sec-title">Welcome to Agarwal On Time Cargo Packers &amp; Movers</h2>
                <p className="sec-text">
                  The stressful moving is about moving your family along with belongings to a new place from its residing
                  location is really painful and wounding job correlated with several tasks packing, unpacking and moving
                  to be happened to the entire furnished house, is same to all sorts of stuff. The complete relocation
                  task may distress and daunt goodsâ€™ owners. Complete peace of mind is provided by the Agarwal On Time Cargo Packers & Movers in Bangalore. Relocation home or relocating office goods are all tensions-filled tasks and about to
                  handle all these will create an anxiety, as you are tempted to move it perfectly to the new and right
                  place. However mismatched packing along with moving solutions will not make you happy at all, as in case
                  you will always require perfect packing solutions along with moving services in your place so that the
                  entire chore will be more enjoyable and delightful experience too during packing and loading. To get
                  expertise in both domestic and corporate relocation services, service providers are needed to make them
                  shine in these services. Workforces must be veterans and latest tools have to be used while relocating
                  your valuables. Agarwal On Time Cargo Packers & Movers can be helpful in completing relocation of all your valuables
                  in your destination.
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
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

