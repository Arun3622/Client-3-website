import Link from "next/link";
import { SiteHeader } from "@/components/site-header";
import { SectionLabel } from "@/components/section-label";
import { Icon } from "@/components/icon";
import { JsonLd } from "@/components/json-ld";
import { FaqSection } from "@/components/faq-section";
import { CorridorLinks } from "@/components/corridor-links";
import { navigation } from "@/app/site-data";

export const metadata = {
  title: "Car PDI Inspection Bandra to Andheri | Independent Car Check | CheckMate PDI",
  description: "Expert car PDI & pre-purchase check in Bandra, Khar, Santacruz, Vile Parle & Andheri. 350+ point checklist, photo evidence & 15-min digital report. Starts ₹999.",
  alternates: {
    canonical: "https://checkmatepdi.com/car-inspection-bandra-andheri"
  }
};

const bandraAndheriSchema = [
  {
    "@context": "https://schema.org",
    "@type": "AutoRepair",
    "@id": "https://checkmatepdi.com/car-inspection-bandra-andheri#organization",
    "name": "CheckMate PDI Exxpert - Bandra to Andheri",
    "url": "https://checkmatepdi.com/car-inspection-bandra-andheri",
    "telephone": "+917039935536",
    "priceRange": "₹999 - ₹2999",
    "description": "Independent car PDI and pre-purchase inspection from Bandra to Andheri and Jogeshwari. 350+ point checklist with photo evidence.",
    "areaServed": [
      { "@type": "City", "name": "Bandra" },
      { "@type": "City", "name": "Khar" },
      { "@type": "City", "name": "Santacruz" },
      { "@type": "City", "name": "Vile Parle" },
      { "@type": "City", "name": "Andheri" },
      { "@type": "City", "name": "Jogeshwari" }
    ]
  }
];

export default function BandraAndheriCorridorPage() {
  return (
    <main className="page-shell" id="top">
      <JsonLd schemaData={bandraAndheriSchema} />
      <SiteHeader navigation={navigation} />

      {/* Hero Section */}
      <section className="hero-section" style={{ padding: "60px 0 40px" }}>
        <div className="container">
          <nav style={{ fontSize: "0.9rem", color: "var(--text-soft)", marginBottom: "20px" }}>
            <Link href="/" style={{ color: "var(--green-700)", textDecoration: "none" }}>Home</Link> &gt; <span>Bandra to Andheri Car Inspection</span>
          </nav>
          <div style={{ maxWidth: "800px" }}>
            <div className="hero-price-pill" style={{ display: "inline-block", marginBottom: "16px" }}>
              Starting at ₹999 • On-Site Inspection
            </div>
            <SectionLabel>Bandra – Andheri Inspection Corridor</SectionLabel>
            <h1 style={{ fontSize: "clamp(2rem, 5vw, 3rem)", lineHeight: 1.15, marginTop: "12px" }}>
              Independent Car PDI & Pre-Purchase Checks from Bandra to Andheri
            </h1>
            <p className="hero-text" style={{ fontSize: "1.15rem", marginTop: "16px", lineHeight: 1.6 }}>
              Navigating Western Express Highway and SV Road car dealers? Get a certified 350+ point pre-delivery or used car inspection delivered in 15 minutes before paying token money or signing handover papers.
            </p>

            <div className="hero-actions" style={{ marginTop: "28px" }}>
              <a className="button button-solid shimmer-effect" href="https://wa.me/917039935536?text=Hi%2C%20I%20want%20to%20book%20a%20car%20PDI%20inspection%20in%20Bandra-Andheri." target="_blank" rel="noopener noreferrer">
                <Icon className="button-icon" name="chat" />
                Book Bandra–Andheri Inspection
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Localized Challenges */}
      <section style={{ padding: "60px 0", background: "#fff" }}>
        <div className="container">
          <SectionLabel>Bandra to Andheri Buyer Insights</SectionLabel>
          <h2 style={{ fontSize: "2rem", marginBottom: "24px" }}>
            Key Vehicle Risks in Bandra, Santacruz & Andheri
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "24px" }}>
            <div className="card" style={{ padding: "28px", borderRadius: "20px", background: "var(--surface-light)", border: "1.5px solid var(--color-border)" }}>
              <h3 style={{ fontSize: "1.2rem", color: "var(--green-700)" }}>1. Stop-and-Go WEH Transmission Wear</h3>
              <p style={{ marginTop: "10px", color: "var(--text-body)", lineHeight: 1.6 }}>
                Heavy traffic along SV Road and Western Express Highway causes severe clutch slippage and automatic transmission fluid overheating. We check transmission shift smoothness, clutch pedal resistance, and OBD error logs.
              </p>
            </div>
            <div className="card" style={{ padding: "28px", borderRadius: "20px", background: "var(--surface-light)", border: "1.5px solid var(--color-border)" }}>
              <h3 style={{ fontSize: "1.2rem", color: "var(--green-700)" }}>2. Low-Lying Subway Flood Damage</h3>
              <p style={{ marginTop: "10px", color: "var(--text-body)", lineHeight: 1.6 }}>
                Monsoon water accumulation near Milan Subway, Andheri Subway, and Veera Desai Road poses hidden risks for waterlogged cars. We check floorboard carpeting moisture, ECU loom corrosion, and starter motor rust.
              </p>
            </div>
            <div className="card" style={{ padding: "28px", borderRadius: "20px", background: "var(--surface-light)", border: "1.5px solid var(--color-border)" }}>
              <h3 style={{ fontSize: "1.2rem", color: "var(--green-700)" }}>3. Resale Dealer Refurbishment Masking</h3>
              <p style={{ marginTop: "10px", color: "var(--text-body)", lineHeight: 1.6 }}>
                Andheri West and Khar West host major pre-owned car showrooms where high-mileage fleet cars are cosmetically detailed to look like new. We audit pedal wear, steering leather patina, tyre manufacturing dates, and VIN records.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Areas Covered Prose */}
      <section style={{ padding: "60px 0", background: "var(--surface-subtle)" }}>
        <div className="container" style={{ maxWidth: "840px" }}>
          <SectionLabel>Bandra to Andheri Coverage</SectionLabel>
          <h2 style={{ fontSize: "1.8rem" }}>We Come Directly to Your Dealer Yard</h2>
          <p style={{ marginTop: "16px", fontSize: "1.05rem", lineHeight: 1.7, color: "var(--text-body)" }}>
            Our mobile inspection teams operate across <strong>Bandra West, Bandra East, Khar, Santacruz, Vile Parle, Andheri East, Andheri West, Lokhandwala, and Jogeshwari</strong>. We inspect both new cars at official brand showrooms and pre-owned cars at individual seller residences or multi-brand yards.
          </p>
        </div>
      </section>

      <FaqSection />
      <CorridorLinks currentSlug="car-inspection-bandra-andheri" />
    </main>
  );
}
