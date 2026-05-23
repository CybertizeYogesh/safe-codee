import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata = {
  title: "Payment Methods | Agarwal On Time Cargo Packers & Movers",
  description: "Bank details and payment instructions for Agarwal On Time Cargo Packers & Movers. Transfer funds securely via NEFT, RTGS, IMPS, or UPI QR code.",
  alternates: {
    canonical: "https://www.agarwalontimecargopackers.com/payment.html",
  },
};

export default function Payment() {
  return (
    <>
      <Navbar />
      <Breadcrumb title="Payment Methods" />

      <section className="space">
        <div className="container">
          <div className="row gy-4 align-items-center">
            <div className="col-lg-6">
              <div className="title-area mb-4">
                <span className="sub-title before-none">Payment Details</span>
                <h2 className="sec-title">Secure Bank Account Details</h2>
                <p className="sec-text">
                  Please find below our official bank account details. You can make payments via NEFT, RTGS, IMPS, or Net Banking. Ensure you share the transaction receipt with our moving coordinator.
                </p>
              </div>

              <div className="table-responsive" style={{ background: "#f8f9fa", padding: "20px", borderRadius: "10px", boxShadow: "0 4px 15px rgba(0,0,0,0.05)" }}>
                <table className="table table-bordered mb-0" style={{ background: "#ffffff" }}>
                  <tbody>
                    <tr>
                      <td style={{ fontWeight: "700", color: "#1f1f1f", width: "40%" }}>Beneficiary Name</td>
                      <td style={{ color: "#666" }}>Agarwal On Time Cargo Packers & Movers</td>
                    </tr>
                    <tr>
                      <td style={{ fontWeight: "700", color: "#1f1f1f" }}>Account Number</td>
                      <td style={{ color: "#F26B25", fontWeight: "700" }}>50200056982463</td>
                    </tr>
                    <tr>
                      <td style={{ fontWeight: "700", color: "#1f1f1f" }}>Bank Name</td>
                      <td style={{ color: "#666" }}>HDFC Bank</td>
                    </tr>
                    <tr>
                      <td style={{ fontWeight: "700", color: "#1f1f1f" }}>IFSC Code</td>
                      <td style={{ color: "#666", fontWeight: "600" }}>HDFC0000286</td>
                    </tr>
                    <tr>
                      <td style={{ fontWeight: "700", color: "#1f1f1f" }}>Branch</td>
                      <td style={{ color: "#666" }}>Marathahalli Branch, Bangalore</td>
                    </tr>
                    <tr>
                      <td style={{ fontWeight: "700", color: "#1f1f1f" }}>Account Type</td>
                      <td style={{ color: "#666" }}>Current Account</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="col-lg-6 text-center">
              <div style={{ display: "inline-block", background: "#f8f9fa", padding: "40px", borderRadius: "15px", boxShadow: "0 4px 20px rgba(0,0,0,0.08)", maxWidth: "400px", width: "100%" }}>
                <h3 style={{ fontSize: "22px", fontWeight: "700", marginBottom: "15px", color: "#1f1f1f" }}>Scan &amp; Pay</h3>
                <p style={{ color: "#666", fontSize: "14px", marginBottom: "25px" }}>Scan this UPI QR code using any BHIM UPI, GPay, PhonePe, or Paytm app to make payment instantly.</p>
                <div style={{ background: "#ffffff", padding: "15px", borderRadius: "10px", display: "inline-block", border: "1px solid #eee", marginBottom: "20px" }}>
                  {/* Since there isn't a specific scanner image, we can render a QR placeholder box using inline styling or standard SVG */}
                  <svg width="200" height="200" viewBox="0 0 100 100" style={{ display: "block" }}>
                    {/* Outer boundary */}
                    <rect x="5" y="5" width="90" height="90" fill="none" stroke="#1f1f1f" strokeWidth="3" />
                    {/* Top-left marker */}
                    <rect x="12" y="12" width="22" height="22" fill="#1f1f1f" />
                    <rect x="16" y="16" width="14" height="14" fill="#fff" />
                    <rect x="20" y="20" width="6" height="6" fill="#F26B25" />
                    {/* Top-right marker */}
                    <rect x="66" y="12" width="22" height="22" fill="#1f1f1f" />
                    <rect x="70" y="16" width="14" height="14" fill="#fff" />
                    <rect x="74" y="20" width="6" height="6" fill="#F26B25" />
                    {/* Bottom-left marker */}
                    <rect x="12" y="66" width="22" height="22" fill="#1f1f1f" />
                    <rect x="16" y="70" width="14" height="14" fill="#fff" />
                    <rect x="20" y="74" width="6" height="6" fill="#F26B25" />
                    {/* QR Code bits */}
                    <rect x="42" y="15" width="6" height="6" fill="#1f1f1f" />
                    <rect x="50" y="25" width="8" height="6" fill="#1f1f1f" />
                    <rect x="42" y="38" width="12" height="6" fill="#1f1f1f" />
                    <rect x="58" y="38" width="6" height="12" fill="#1f1f1f" />
                    <rect x="42" y="50" width="6" height="12" fill="#F26B25" />
                    <rect x="50" y="60" width="10" height="8" fill="#1f1f1f" />
                    <rect x="68" y="50" width="8" height="8" fill="#1f1f1f" />
                    <rect x="78" y="58" width="8" height="6" fill="#1f1f1f" />
                    <rect x="66" y="70" width="12" height="6" fill="#1f1f1f" />
                    <rect x="70" y="78" width="6" height="10" fill="#1f1f1f" />
                    <rect x="42" y="78" width="14" height="6" fill="#1f1f1f" />
                  </svg>
                </div>
                <div style={{ fontWeight: "700", color: "#1f1f1f", fontSize: "16px" }}>UPI ID: agarwalontime@hdfcbank</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

