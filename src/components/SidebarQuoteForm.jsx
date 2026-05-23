"use client";

import React, { useState } from "react";

export default function SidebarQuoteForm() {
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
    alert("Thank you for your request! We will get back to you shortly.");
    setFormData({
      name: "",
      phone: "",
      email: "",
      from: "",
      to: "",
    });
  };

  return (
    <div className="widget widget_quote landingform">
      <h3 className="widget_title text-white">Get a Free Quote</h3>
      <form onSubmit={handleSubmit} className="widget-form form-rounded-30">
        <div className="form-group mb-3">
          <i className="fal fa-user"></i>
          <input
            type="text"
            className="form-control"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group mb-3">
          <input
            type="tel"
            className="form-control"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            required
          />
          <i className="fal fa-phone"></i>
        </div>
        <div className="form-group mb-3">
          <i className="fa-sharp fa-regular fa-envelope"></i>
          <input
            type="email"
            className="form-control"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group mb-3">
          <i className="fas fa-location-dot"></i>
          <input
            type="text"
            className="form-control"
            name="from"
            placeholder="From City"
            value={formData.from}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group mb-3">
          <i className="fas fa-location-dot"></i>
          <input
            type="text"
            className="form-control"
            name="to"
            placeholder="To City"
            value={formData.to}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group mb-3">
          <div
            className="g-recaptcha"
            data-sitekey="6LcGU44qAAAAACnvWs3oJ_SQrGoi1XgqgqG9PVak"
          ></div>
          <div id="g-recaptcha-error"></div>
        </div>

        <div className="form-btn">
          <button type="submit" className="th-btn star-btn bg-theme2 text-white w-100">
            Submit Now
          </button>
        </div>
      </form>
    </div>
  );
}
