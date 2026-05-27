"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";

export default function HeroSlider() {
  const [activeIndex, setActiveIndex] = useState(0);

  const slides = [
    {
      bg: "/assets/img/hero/hero_bg_2_3.webp",
      titleSpan: "Best Packers and",
      titleText: " Movers in ",
      titleLine: "Bangalore"
    },
    {
      bg: "/assets/img/hero/hero_bg_2_2.webp",
      titleSpan: "Agarwal Packers and",
      titleText: " Movers ",
      titleLine: "Bangalore"
    },
    {
      bg: "/assets/img/hero/hero_bg_2_1.webp",
      titleSpan: "Reliable Home",
      titleText: " Moving ",
      titleLine: "Services"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className="swiper th-slider hero-slider2" style={{ position: "relative", overflow: "hidden" }}>
      <div className="swiper-wrapper" style={{ position: "relative", width: "100%", height: "100%" }}>
        {slides.map((slide, idx) => {
          const isActive = idx === activeIndex;
          return (
            <div
              key={idx}
              className={`swiper-slide ${isActive ? "swiper-slide-active" : ""}`}
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                opacity: isActive ? 1 : 0,
                transition: "opacity 1s ease-in-out",
                zIndex: isActive ? 1 : 0,
                pointerEvents: isActive ? "auto" : "none",
              }}
            >
              <div className="hero-inner" style={{ height: "100%" }}>
                <div
                  className="th-hero-bg2"
                  style={{
                    backgroundImage: `url(${slide.bg})`,
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%"
                  }}
                >
                  <img
                    src="/assets/img/hero/hero2-overlay.webp"
                    alt="Hero overlay"
                    width="1920"
                    height="650"
                    priority="true"
                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  />
                </div>
                <div className="shape-mockup zoom1 shape-1">
                  <img src="/assets/img/shape/team-sahpe-1-1.svg" alt="" role="presentation" width="100" height="100" loading="lazy" />
                </div>
                <div className="shape-mockup jump-reverse shape-4">
                  <img src="/assets/img/shape/team-sahpe-1-2.svg" alt="" role="presentation" width="100" height="100" loading="lazy" />
                </div>

                <div className="container" style={{ position: "relative", zIndex: 5, height: "100%", display: "flex", alignItems: "center" }}>
                  <div className="hero-style2" key={isActive ? `active-${idx}` : `inactive-${idx}`} style={{ width: "100%" }}>
                    <span className="sub-title slideinup" style={{ animationDelay: "0.2s" }}>Agarwal On Time Cargo Packers & Movers</span>
                    {isActive ? (
                      <h1 className="hero-title slideinup" style={{ animationDelay: "0.4s" }}>
                        <span className="title1">{slide.titleSpan}</span>
                        {slide.titleText}
                        <span className="round-line">{slide.titleLine}</span>
                      </h1>
                    ) : (
                      <div className="hero-title slideinup" style={{ animationDelay: "0.4s" }}>
                        <span className="title1">{slide.titleSpan}</span>
                        {slide.titleText}
                        <span className="round-line">{slide.titleLine}</span>
                      </div>
                    )}
                    <p className="hero-text slideinup" style={{ animationDelay: "0.6s" }}>
                      As a company that helps you shift your household goods and even your cars and vehicles, we are the best in the business.
                    </p>
                    <div className="btn-group justify-content-center slideinup" style={{ animationDelay: "0.8s" }}>
                      <Link href="/about.html" className="th-btn star-btn">
                        Read More
                      </Link>
                      <Link href="/contact.html" className="th-btn star-btn bg-theme2 text-white shadow-none">
                        Booking
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
