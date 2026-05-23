"use client";

import React, { useState } from "react";

export default function FAQAccordion({ items }) {
  const [activeIndex, setActiveIndex] = useState(0); // First item open by default

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? -1 : index);
  };

  return (
    <div className="accordion" id="faqAccordion">
      {items.map((item, idx) => {
        const isOpen = activeIndex === idx;
        return (
          <div key={idx} className="accordion-card">
            <div className="accordion-header">
              <button
                className={`accordion-button ${isOpen ? "" : "collapsed"}`}
                type="button"
                onClick={() => handleToggle(idx)}
                aria-expanded={isOpen}
              >
                {item.question}
              </button>
            </div>
            <div
              className={`accordion-collapse collapse ${isOpen ? "show" : ""}`}
              style={{
                display: isOpen ? "block" : "none",
              }}
            >
              <div className="accordion-body">
                <p className="faq-text">{item.answer}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
