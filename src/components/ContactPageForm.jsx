"use client";

import React, { useState, useEffect } from "react";

export default function ContactPageForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    from: "",
    to: "",
  });
  const [status, setStatus] = useState({ type: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const renderRecaptcha = () => {
      if (window.grecaptcha && window.grecaptcha.render) {
        try {
          window.grecaptcha.render("recaptcha-container", {
            sitekey: "6LcGU44qAAAAACnvWs3oJ_SQrGoi1XgqgqG9PVak",
          });
        } catch (error) {
          // Ignore if already rendered
        }
      }
    };

    if (window.grecaptcha) {
      renderRecaptcha();
    } else {
      const interval = setInterval(() => {
        if (window.grecaptcha) {
          renderRecaptcha();
          clearInterval(interval);
        }
      }, 500);
      return () => clearInterval(interval);
    }
  }, []);


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: "", message: "" });

    // Simulate submission
    setTimeout(() => {
      setStatus({
        type: "success",
        message: "Thank you for your message! We will get back to you shortly.",
      });
      setFormData({
        name: "",
        email: "",
        phone: "",
        from: "",
        to: "",
      });
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <div
      className="quote-form-box style-2 background-image"
      data-bg-src="/assets/img/bg/contact_form_bg.jpg"
      style={{
        backgroundImage: "url('/assets/img/bg/contact_form_bg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat"
      }}
    >
      <form onSubmit={handleSubmit} className="contact-form">
        <h3 className="form-title text-start">Get In Touch</h3>
        <div className="row">
          <div className="form-group col-md-12">
            <input
              type="text"
              className="form-control"
              name="name"
              id="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group col-md-6">
            <input
              type="email"
              className="form-control"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div className="form-group col-md-6">
            <input
              type="tel"
              className="form-control"
              name="phone"
              id="number"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group col-md-6">
            <input
              type="text"
              className="form-control"
              name="from"
              id="from_city"
              placeholder="From City"
              value={formData.from}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group col-md-6">
            <input
              type="text"
              className="form-control"
              name="to"
              id="to_city"
              placeholder="To City"
              value={formData.to}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group col-12">
            <div id="recaptcha-container"></div>
            <div id="g-recaptcha-error"></div>
          </div>
          <div className="form-btn col-12">
            <button type="submit" className="th-btn star-btn" disabled={isSubmitting}>
              {isSubmitting ? "Submitting..." : "Submit Message"}
            </button>
          </div>
        </div>
        {status.message && (
          <p className={`form-messages mb-0 mt-3 ${status.type === "success" ? "text-success" : "text-danger"}`}>
            {status.message}
          </p>
        )}
      </form>
    </div>
  );
}
