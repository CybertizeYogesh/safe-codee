"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  const [isSticky, setIsSticky] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setIsServicesOpen(false);
  };

  const toggleServices = (e) => {
    e.preventDefault();
    setIsServicesOpen(!isServicesOpen);
  };

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about.html" },
    {
      name: "Our Service",
      path: "#",
      subItems: [
        { name: "House Shifting", path: "/house.html" },
        { name: "Land Transport", path: "/transport.html" },
        { name: "Packing Services", path: "/packing.html" },
        { name: "Domestic Relocation", path: "/domestic.html" },
        { name: "Car Transportation", path: "/car.html" },
        { name: "Warehousing Services", path: "/warehousing.html" },
        { name: "Office Moving Services", path: "/office.html" },
        { name: "Air Cargo", path: "/air.html" },
        { name: "Sea Freight Cargo", path: "/sea.html" },
      ],
    },
    { name: "Branches", path: "/branches.html" },
    { name: "Gallery", path: "/gallery.html" },
    { name: "Faq's", path: "/faq.html" },
    { name: "Contact", path: "/contact.html" },
    { name: "Payment", path: "/payment.html" },
  ];

  return (
    <>
      {/* Mobile Menu Wrapper */}
      <div className={`th-menu-wrapper ${isMobileMenuOpen ? "th-body-visible" : ""}`} onClick={closeMobileMenu}>
        <div className="th-menu-area text-center" onClick={(e) => e.stopPropagation()}>
          <button className="th-menu-toggle" onClick={closeMobileMenu} aria-label="Close Mobile Menu">
            <i className="fal fa-times"></i>
          </button>
          <div className="mobile-logo">
            <Link href="/" onClick={closeMobileMenu}>
              <img
                src="/assets/img/logo.webp"
                alt="Agarwal On Time Cargo Packers and Movers Logo"
                width="160"
                height="48"
                style={{ width: "160px", height: "auto" }}
                loading="lazy"
              />
            </Link>
          </div>
          <div className="th-mobile-menu">
            <ul>
              {navLinks.map((link, idx) => {
                if (link.subItems) {
                  return (
                    <li key={idx} className={`menu-item-has-children ${isServicesOpen ? "th-active" : ""}`}>
                      <a href="#" onClick={toggleServices}>
                        {link.name}
                      </a>
                      <ul className="sub-menu" style={{ display: isServicesOpen ? "block" : "none" }}>
                        {link.subItems.map((sub, subIdx) => (
                          <li key={subIdx}>
                            <Link href={sub.path} onClick={closeMobileMenu}>
                              {sub.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </li>
                  );
                }
                return (
                  <li key={idx}>
                    <Link href={link.path} onClick={closeMobileMenu}>
                      {link.name}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="th-header header-default">
        {/* Top Header Contact Bar */}
        <div className="header-top">
          <div className="container">
            <div className="row justify-content-center justify-content-lg-between align-items-center gy-2">
              <div className="col-auto mainheader d-lg-block">
                <div className="header-links">
                  <ul>
                    <li className="hphone">
                      <i className="fas fa-phone"></i>{" "}
                      <a href="tel:8095279595">+91 8095279595</a>
                    </li>
                    <li className="hmail">
                      <i className="fas fa-envelope"></i>{" "}
                      <a href="mailto:agarwalpackersmoversa@gmail.com">agarwalpackersmoversa@gmail.com</a>
                    </li>
                    <li className="gstno">
                      <b>GSTIN : </b>08BXTPS9821C1ZV
                    </li>
                    <li className="panno">
                      <b>PAN NO : </b>BXTPS9821C
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-auto socialheader">
                <div className="header-links">
                  <ul>
                    <li>
                      <div className="social-links">
                        <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                          <i className="fab fa-facebook"></i>
                        </a>
                        <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                          <i className="fab fa-instagram"></i>
                        </a>
                        <a href="#" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                          <i className="fab fa-linkedin"></i>
                        </a>
                        <a href="#" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                          <i className="fab fa-youtube"></i>
                        </a>
                        <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                          <i className="fab fa-twitter"></i>
                        </a>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Sticky Wrapper */}
        <div className={`sticky-wrapper ${isSticky ? "sticky" : ""}`}>
          <div className="menu-area">
            <div className="container">
              <div className="row align-items-center justify-content-between">
                <div className="col-auto">
                  <div className="header-logo">
                    <Link href="/">
                      <img
                        src="/assets/img/logo.webp"
                        alt="Agarwal On Time Cargo Packers and Movers Logo"
                        width="160"
                        height="48"
                        style={{ width: "160px", height: "auto" }}
                        loading="lazy"
                      />
                    </Link>
                  </div>
                </div>
                <div className="col-auto">
                  <nav className="main-menu d-none d-lg-inline-block">
                    <ul>
                      {navLinks.map((link, idx) => {
                        if (link.subItems) {
                          return (
                            <li key={idx} className="menu-item-has-children">
                              <a href="#">{link.name}</a>
                              <ul className="sub-menu">
                                {link.subItems.map((sub, subIdx) => (
                                  <li key={subIdx}>
                                    <Link href={sub.path}>{sub.name}</Link>
                                  </li>
                                ))}
                              </ul>
                            </li>
                          );
                        }
                        const isActive = pathname === link.path || pathname === link.path.replace(".html", "");
                        return (
                          <li key={idx} className={isActive ? "active" : ""}>
                            <Link href={link.path}>
                              {link.name === "Home" ? (
                                <>
                                  <i className="fa fa-home"></i> Home
                                </>
                              ) : link.name === "Payment" ? (
                                <b>{link.name}</b>
                              ) : (
                                link.name
                              )}
                            </Link>
                          </li>
                        );
                      })}
                    </ul>
                  </nav>
                  <button type="button" className="th-menu-toggle d-block d-lg-none" onClick={toggleMobileMenu} aria-label="Open Mobile Menu">
                    <i className="far fa-bars"></i>
                  </button>
                </div>
                <div className="col-auto d-none d-xl-block">
                  <div className="header-button">
                    <Link href="/contact.html" className="th-btn star-btn bg-theme2 text-white shadow-none">
                      Get A Quote
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
