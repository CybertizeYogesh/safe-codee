"use client";

import React, { useState } from "react";

export default function QuickQuoteForm({ isContactPage }) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    from: "",
    to: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate submission or post to inquiry.php
    alert("Form submitted! We will contact you soon.");
  };

  return (
    <div className="home-3-booking-from-area formbg">
      <div className="container">
        <div className="row">
          <div className="home-3-form-wrap">
            {!isContactPage && <h2 className="form-title">Get a Free Quote</h2>}
            <form onSubmit={handleSubmit} className="hero-form">
              <div className="row">
                <div className="form-group col-lg-4 col-md-6">
                  <i className="fal fa-user"></i>
                  <input
                    type="text"
                    className="form-control"
                    name="name"
                    id="name"
                    placeholder="Your Name"
                    aria-label="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group col-lg-4 col-md-6">
                  <input
                    type="tel"
                    className="form-control"
                    name="phone"
                    id="number"
                    placeholder="Phone Number"
                    aria-label="Phone Number"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />
                  <i className="fal fa-phone"></i>
                </div>
                <div className="form-group col-lg-4 col-md-6">
                  <i className="fa-sharp fa-regular fa-envelope"></i>
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    id="email"
                    placeholder="Your Email"
                    aria-label="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group col-lg-3 col-md-6">
                  <i className="fas fa-location-dot"></i>
                  <input
                    type="text"
                    className="form-control"
                    name="from"
                    id="from_city"
                    placeholder="From City"
                    aria-label="From City"
                    value={formData.from}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group col-lg-3 col-md-6">
                  <i className="fas fa-location-dot"></i>
                  <input
                    type="text"
                    className="form-control"
                    name="to"
                    id="to_city"
                    placeholder="To City"
                    aria-label="To City"
                    value={formData.to}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group col-lg-3 col-md-6">
                  <div
                    className="g-recaptcha"
                    data-sitekey="6LcGU44qAAAAACnvWs3oJ_SQrGoi1XgqgqG9PVak"
                    data-callback="recaptchaCallback"
                  ></div>
                  <div id="g-recaptcha-error"></div>
                </div>

                <div className="form-group col-lg-3 col-md-6">
                  <button type="submit" className="th-btn star-btn submitbtn w-100">
                    submit Now
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
