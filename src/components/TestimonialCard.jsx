import React from "react";

export default function TestimonialCard({ name, location, rating = 5, title, text }) {
  return (
    <div className="testi-block" dir="ltr">
      <div className="testi-block-top">
        <div className="box-img">
          <img src="/img/clientq.webp" alt="Avatar" width="60" height="60" loading="lazy" style={{ objectFit: "cover" }} />
        </div>
        <div className="content">
          <h4 className="box-title">{name}</h4>
          <p className="box-desig">{location}</p>
        </div>
      </div>
      <div className="box-review">
        {Array.from({ length: rating }).map((_, i) => (
          <i key={i} className="fa-sharp fa-solid fa-star"></i>
        ))}
      </div>
      <h4 className="box-title">{title}</h4>
      <p className="box-text">{text}</p>
    </div>
  );
}
