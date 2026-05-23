"use client";

import React, { useState, useEffect, useRef } from "react";
import TestimonialCard from "./TestimonialCard";

export default function TestimonialSlider({ testimonials }) {
  const [visibleSlides, setVisibleSlides] = useState(3);
  const [currentIndex, setCurrentIndex] = useState(3); // Start at index of first real slide
  const [transitionDuration, setTransitionDuration] = useState("0.6s");
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  // Drag states
  const [dragStartX, setDragStartX] = useState(null);
  const [dragOffset, setDragOffset] = useState(0);

  const containerRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      let newVisible = 3;
      if (window.innerWidth < 768) {
        newVisible = 1;
      } else if (window.innerWidth < 1200) {
        newVisible = 2;
      } else {
        newVisible = 3;
      }

      setVisibleSlides((prevVisible) => {
        if (prevVisible !== newVisible) {
          // Preserve the active real index during breakpoint changes
          setCurrentIndex((prevIndex) => {
            const realIndex = (prevIndex - prevVisible + testimonials.length) % testimonials.length;
            return realIndex + newVisible;
          });
        }
        return newVisible;
      });
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [testimonials.length]);

  const handleNext = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setTransitionDuration("0.6s");
    setCurrentIndex((prev) => prev + 1);
  };

  const handlePrev = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setTransitionDuration("0.6s");
    setCurrentIndex((prev) => prev - 1);
  };

  const handleTransitionEnd = () => {
    setIsTransitioning(false);
    // Boundary checks for infinite loop
    if (currentIndex >= testimonials.length + visibleSlides) {
      setTransitionDuration("0s");
      setCurrentIndex(visibleSlides);
    } else if (currentIndex < visibleSlides) {
      setTransitionDuration("0s");
      setCurrentIndex(testimonials.length + currentIndex);
    }
  };

  // Autoplay Effect
  useEffect(() => {
    if (isHovered || dragStartX !== null) return;

    const interval = setInterval(() => {
      handleNext();
    }, 4000);

    return () => clearInterval(interval);
  }, [currentIndex, isHovered, dragStartX, visibleSlides]);

  // Gestures (Touch/Mouse Drag)
  const getClientX = (e) => {
    if (e.touches && e.touches.length > 0) {
      return e.touches[0].clientX;
    }
    return e.clientX;
  };

  const handleDragStart = (e) => {
    if (isTransitioning) return;
    const clientX = getClientX(e);
    setDragStartX(clientX);
    setDragOffset(0);
    setTransitionDuration("0s");
  };

  const handleDragMove = (e) => {
    if (dragStartX === null) return;
    // Prevent default touch scrolling if swiping horizontally
    if (e.touches) {
      const diffX = Math.abs(getClientX(e) - dragStartX);
      if (diffX > 10) {
        // If swiping horizontal, don't trigger browser scroll
        if (e.cancelable) e.preventDefault();
      }
    }
    const currentX = getClientX(e);
    setDragOffset(currentX - dragStartX);
  };

  const handleDragEnd = () => {
    if (dragStartX === null) return;
    const threshold = 50; // swipe threshold in px
    
    if (dragOffset < -threshold) {
      handleNext();
    } else if (dragOffset > threshold) {
      handlePrev();
    } else {
      // Snap back
      setTransitionDuration("0.4s");
      setDragOffset(0);
    }
    setDragStartX(null);
  };

  // Setup loop clones
  const prefixClones = testimonials.slice(-visibleSlides);
  const suffixClones = testimonials.slice(0, visibleSlides);
  const extendedTestimonials = [...prefixClones, ...testimonials, ...suffixClones];

  const isDragging = dragStartX !== null;

  return (
    <div 
      className="testi-card-slide" 
      style={{ position: "relative", width: "100%" }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        if (isDragging) handleDragEnd();
      }}
    >
      <div 
        className="swiper has-shadow th-slider" 
        style={{ overflow: "hidden", width: "100%" }}
        ref={containerRef}
      >
        <div
          className="swiper-wrapper"
          style={{
            display: "flex",
            transform: `translateX(calc(-${currentIndex * (100 / visibleSlides)}% + ${dragOffset}px))`,
            transition: isDragging ? "none" : `transform ${transitionDuration} cubic-bezier(0.25, 1, 0.5, 1)`,
            width: "100%",
            cursor: isDragging ? "grabbing" : "grab",
            userSelect: "none",
            WebkitUserSelect: "none"
          }}
          onTransitionEnd={handleTransitionEnd}
          onTouchStart={handleDragStart}
          onTouchMove={handleDragMove}
          onTouchEnd={handleDragEnd}
          onMouseDown={handleDragStart}
          onMouseMove={handleDragMove}
          onMouseUp={handleDragEnd}
        >
          {extendedTestimonials.map((testi, idx) => (
            <div
              key={idx}
              className="swiper-slide"
              style={{
                flex: `0 0 ${100 / visibleSlides}%`,
                maxWidth: `${100 / visibleSlides}%`,
                padding: "15px",
                boxSizing: "border-box"
              }}
            >
              <TestimonialCard {...testi} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

