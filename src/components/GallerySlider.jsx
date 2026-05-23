"use client";

import React, { useState, useEffect } from "react";

export default function GallerySlider() {
  const images = [
    { src: "/img/packing.jpg", alt: "Packing Services" },
    { src: "/img/blog-1.jpg", alt: "Relocation operations" },
    { src: "/img/car-transport.jpg", alt: "Car Transportation" },
    { src: "/img/domestic.jpg", alt: "Domestic Shifting" },
    { src: "/img/land-transport.jpg", alt: "Land Transportation" },
    { src: "/img/office-shifting.jpg", alt: "Office Relocation" },
    { src: "/img/warehouse.jpg", alt: "Warehousing Services" },
    { src: "/img/air-cargo.jpg", alt: "Air Cargo Services" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleSlides, setVisibleSlides] = useState(4);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 576) {
        setVisibleSlides(2);
      } else if (window.innerWidth < 1200) {
        setVisibleSlides(2);
      } else {
        setVisibleSlides(4);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Auto-play the slider
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => {
        const maxIndex = images.length - visibleSlides;
        if (prev >= maxIndex) {
          return 0;
        }
        return prev + 1;
      });
    }, 4000);

    return () => clearInterval(interval);
  }, [visibleSlides, images.length]);

  return (
    <section className="pb-4" id="blog-sec" style={{ position: "relative", width: "100%", overflow: "hidden" }}>
      <div className="slider-area">
        <div className="swiper th-slider has-shadow" id="blogSlider1" style={{ overflow: "hidden", width: "100%" }}>
          <div
            className="swiper-wrapper"
            style={{
              display: "flex",
              transform: `translateX(-${currentIndex * (100 / visibleSlides)}%)`,
              transition: "transform 0.5s ease-in-out",
              width: "100%",
            }}
          >
            {images.map((img, idx) => (
              <div
                key={idx}
                className="swiper-slide"
                style={{
                  flex: `0 0 ${100 / visibleSlides}%`,
                  maxWidth: `${100 / visibleSlides}%`,
                  padding: "0 10px",
                  boxSizing: "border-box",
                }}
              >
                <div className="blog-card" style={{ marginBottom: "15px" }}>
                  <div className="blog-img">
                    <img
                      src={img.src}
                      alt={img.alt}
                      style={{ width: "100%", height: "160px", objectFit: "cover", borderRadius: "15px" }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
