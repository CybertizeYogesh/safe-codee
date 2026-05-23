"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";

export default function Footer() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <footer
        className="footer-wrapper footer-layout1 background-image shape-mockup-wrap"
        style={{ backgroundImage: "url('/assets/img/bg/footer_bg_2.jpg')" }}
      >
        <div className="shape-mockup footer-shape-1 jump-reverse d-none d-xxl-block">
          <img
            src="/assets/img/icon/footer-shape-1.png"
            alt=""
            width="164"
            height="162"
            loading="lazy"
            role="presentation"
          />
        </div>
        <div className="shape-mockup footer-shape-2 jump-reverse">
          <img
            src="/assets/img/icon/footer-shape-2.png"
            alt=""
            width="128"
            height="128"
            loading="lazy"
            role="presentation"
          />
        </div>
        <div
          className="shape-mockup footer-top-shape background-image"
          style={{ backgroundImage: "url('/assets/img/shape/footer-1-top-shape.png')" }}
        ></div>

        <div className="widget-area">
          <div className="container">
            <div className="row justify-content-between">
              <div className="col-md-6 col-xl-auto">
                <div className="widget footer-widget">
                  <div className="th-widget-about">
                    <div className="about-logo">
                      <Link href="/">
                        <img
                          src="/assets/img/logo.png"
                          alt="Agarwal On Time Cargo Packers and Movers Logo"
                          width="160"
                          height="48"
                          style={{ width: "160px", height: "auto" }}
                          loading="lazy"
                        />
                      </Link>
                    </div>
                    <p className="about-text">
                      Agarwal On Time Cargo Packers & Movers Is The Trusted Source for All Your Moving & Logistical Needs. Get in
                      touch with us today!!
                    </p>
                    <div className="th-social">
                      <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Facebook Page">
                        <i className="fab fa-facebook"></i>
                      </a>
                      <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Instagram Page">
                        <i className="fab fa-instagram"></i>
                      </a>
                      <a href="#" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile">
                        <i className="fab fa-linkedin"></i>
                      </a>
                      <a href="#" target="_blank" rel="noopener noreferrer" aria-label="YouTube Channel">
                        <i className="fab fa-youtube"></i>
                      </a>
                      <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Twitter Profile">
                        <i className="fab fa-twitter"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-md-6 col-xl-auto">
                <div className="widget widget_nav_menu footer-widget">
                  <h3 className="widget_title">Quick Links</h3>
                  <div className="menu-all-pages-container">
                    <ul className="menu">
                      <li>
                        <Link href="/">Home</Link>
                      </li>
                      <li>
                        <Link href="/about.html">About Us</Link>
                      </li>
                      <li>
                        <Link href="/branches.html">Branches</Link>
                      </li>
                      <li>
                        <Link href="/gallery.html">Gallery</Link>
                      </li>
                      <li>
                        <Link href="/faq.html">Faq&apos;s</Link>
                      </li>
                      <li>
                        <Link href="/contact.html">Contact Us</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="col-md-6 col-xl-auto">
                <div className="widget widget_nav_menu footer-widget">
                  <h3 className="widget_title">Our Services</h3>
                  <div className="menu-all-pages-container">
                    <ul className="menu">
                      <li>
                        <Link href="/house.html">House Shifting</Link>
                      </li>
                      <li>
                        <Link href="/transport.html">Land Transport</Link>
                      </li>
                      <li>
                        <Link href="/packing.html">Packing Services</Link>
                      </li>
                      <li>
                        <Link href="/domestic.html">Domestic Relocation</Link>
                      </li>
                      <li>
                        <Link href="/car.html">Car Transportation</Link>
                      </li>
                      <li>
                        <Link href="/warehousing.html">Warehousing Services</Link>
                      </li>
                      <li>
                        <Link href="/office.html">Office Moving Services</Link>
                      </li>
                      <li>
                        <Link href="/air.html">Air Cargo</Link>
                      </li>
                      <li>
                        <Link href="/sea.html">Sea Freight Cargo</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="col-md-6 col-xl-auto">
                <div className="widget footer-widget">
                  <h3 className="widget_title">Contact Us</h3>
                  <div className="th-widget-contact">
                    <div className="info-box">
                      <div className="info-box_icon">
                        <i className="fas fa-location-dot"></i>
                      </div>
                      <div className="info-contnt">
                        <h4 className="footer-info-title">Address</h4>
                        <p className="info-box_text">
                          #30 near marthalli bridge Bangalore 560037
                        </p>
                        <a href="tel:8095279595" className="info-box_link pt-3">
                          <i className="fas fa-phone"></i> +91 8095279595
                        </a>
                      </div>
                    </div>

                    <div className="info-box">
                      <div className="info-box_icon">
                        <i className="fas fa-phone"></i>
                      </div>
                      <div className="info-contnt">
                        <h4 className="footer-info-title">Call Us</h4>
                        <p className="info-box_text">
                          <a href="tel:08095279595" className="info-box_link">
                            +91 8095279595
                          </a>
                          <br />
                          <a href="tel:8095279595" className="info-box_link">
                            +91 8095279595
                          </a>
                        </p>
                      </div>
                    </div>
                    <div className="info-box">
                      <div className="info-box_icon">
                        <i className="fas fa-envelope"></i>
                      </div>
                      <div className="info-contnt">
                        <h4 className="footer-info-title">Email Us</h4>
                        <p className="info-box_text">
                          <a href="mailto:agarwalpackersmoversa@gmail.com" className="info-box_link">
                            agarwalpackersmoversa@gmail.com
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="copyright-wrap">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <p className="copyright-text" style={{ textAlign: "center" }}>
                  Copyright <i className="fal fa-copyright"></i> 2026{" "}
                  <Link href="/">Agarwal On Time Cargo Packers & Movers</Link>. All Rights Reserved.
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating Buttons */}
      <div id="feedback">
        <Link href="/contact.html">Get FREE Quote</Link>
      </div>

      <div className="floating_buttons">
        <div className="call_btn bounce">
          <a href="tel:8095279595" aria-label="Call Agarwal On Time Cargo Packers and Movers">
            <img src="/img/floating-call.png" alt="Floating Call" width="50" height="50" className="img-fluid" />
          </a>
        </div>
        <div className="whatsapp_btn bounce">
          <a href="https://wa.me/8095279595" target="_blank" rel="noopener noreferrer" aria-label="Chat with Agarwal On Time Cargo Packers and Movers on WhatsApp">
            <img src="/img/whatsapp.png" alt="WhatsApp" width="50" height="50" className="img-fluid" />
          </a>
        </div>
      </div>

      {/* Scroll to Top */}
      <div className={`scroll-top ${showScrollTop ? "show" : ""}`} onClick={scrollToTop} style={{ cursor: "pointer" }}>
        <svg className="progress-circle svg-content" width="100%" height="100%" viewBox="-1 -1 102 102">
          <path
            d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98"
            style={{
              transition: "stroke-dashoffset 10ms linear 0s",
              strokeDasharray: "307.919, 307.919",
              strokeDashoffset: "0",
            }}
          ></path>
        </svg>
      </div>
    </>
  );
}
