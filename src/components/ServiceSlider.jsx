"use client";

import React, { useState, useEffect } from "react";
import ServiceCard from "./ServiceCard";

export default function ServiceSlider({ services }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleSlides, setVisibleSlides] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setVisibleSlides(1);
      } else if (window.innerWidth < 992) {
        setVisibleSlides(2);
      } else {
        setVisibleSlides(3);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prev) => {
      if (prev === 0) {
        return services.length - visibleSlides;
      }
      return prev - 1;
    });
  };

  const handleNext = () => {
    setCurrentIndex((prev) => {
      if (prev >= services.length - visibleSlides) {
        return 0;
      }
      return prev + 1;
    });
  };

  return (
    <div className="slider-area" style={{ position: "relative", width: "100%" }}>
      <div className="swiper th-slider" style={{ overflow: "hidden", width: "100%" }}>
        <div
          className="swiper-wrapper"
          style={{
            display: "flex",
            transform: `translateX(-${currentIndex * (100 / visibleSlides)}%)`,
            transition: "transform 0.5s ease-in-out",
            width: "100%"
          }}
        >
          {services.map((service, idx) => (
            <div
              key={idx}
              className="swiper-slide"
              style={{
                flex: `0 0 ${100 / visibleSlides}%`,
                maxWidth: `${100 / visibleSlides}%`,
                padding: "0 15px",
                boxSizing: "border-box"
              }}
            >
              <ServiceCard {...service} />
            </div>
          ))}
        </div>
      </div>
      <button
        onClick={handlePrev}
        className="slider-arrow slider-prev"
        aria-label="Previous Services"
        style={{
          position: "absolute",
          top: "50%",
          left: "-15px",
          transform: "translateY(-50%)",
          zIndex: 10,
          cursor: "pointer"
        }}
      >
        <i className="far fa-arrow-left"></i>
      </button>
      <button
        onClick={handleNext}
        className="slider-arrow slider-next"
        aria-label="Next Services"
        style={{
          position: "absolute",
          top: "50%",
          right: "-15px",
          transform: "translateY(-50%)",
          zIndex: 10,
          cursor: "pointer"
        }}
      >
        <i className="far fa-arrow-right"></i>
      </button>
    </div>
  );
}
