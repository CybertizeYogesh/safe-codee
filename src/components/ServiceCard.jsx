import React from "react";
import Link from "next/link";

export default function ServiceCard({ title, path, image, desc, discount = "Best Discount" }) {
  return (
    <div className="service-card">
      <div className="box-top-wrap">
        <div className="box-top-left">
          <img src="/assets/img/icon/service-desc-icon-1-1.svg" width="32" height="32" loading="lazy" alt="" role="presentation" />
          <p>{discount}</p>
        </div>
        <div className="box-top-right">
          <Link href={path} className="icon">
            <i className="fa-regular fa-arrow-right-long"></i>
          </Link>
        </div>
      </div>
      <div className="box-img">
        <img src={image} alt={title} width="360" height="240" loading="lazy" style={{ objectFit: "cover" }} />
      </div>
      <div className="box-content">
        <h3 className="box-title">
          <Link href={path}>{title}</Link>
        </h3>
        <p className="box-text">{desc}</p>
      </div>
    </div>
  );
}
