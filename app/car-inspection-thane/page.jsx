import Link from "next/link";
import { SiteHeader } from "@/components/site-header";
import { SectionLabel } from "@/components/section-label";
import { Icon } from "@/components/icon";
import { JsonLd } from "@/components/json-ld";
import { FaqSection } from "@/components/faq-section";
import { CorridorLinks } from "@/components/corridor-links";
import { navigation, verifiedReviews } from "@/app/site-data";

export const metadata = {
  title: "Car PDI Inspection Thane, Kalwa & Mumbra | 350+ Point Car Check | CheckMate PDI",
  description: "Thane's trusted independent car PDI & pre-purchase inspection. Comprehensive 350+ point check on showroom & used cars in Thane, Kalwa & Mumbra. From ₹999.",
  alternates: {
    canonical: "https://checkmatepdi.com/car-inspection-thane"
  }
};

const thaneSchema = [
  {
    "@context": "https://schema.org",
    "@type": "AutoRepair",
    "@id": "https://checkmatepdi.com/car-inspection-thane#organization",
    "name": "CheckMate PDI Exxpert - Thane Hub",
    "url": "https://checkmatepdi.com/car-inspection-thane",
    "telephone": "+917039935536",
    "priceRange": "₹999 - ₹2999",
    "description": "Thane's leading independent car PDI and pre-purchase inspection center covering Thane West, Ghodbunder Road, Majiwada, Kalwa, and Mumbra.",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Thane",
      "addressRegion": "Maharashtra",
      "addressCountry": "IN"
    },
    "areaServed": [
      { "@type": "City", "name": "Thane" },
      { "@type": "AdministrativeArea", "name": "Ghodbunder Road" },
      { "@type": "AdministrativeArea", "name": "Majiwada" },
      { "@type": "AdministrativeArea", "name": "Kalwa" },
      { "@type": "AdministrativeArea", "name": "Mumbra" }
    ]
  }
];

export default function ThaneCorridorPage() {
  return (
    <main className="page-shell" id="top">
      <JsonLd schemaData={thaneSchema} />
      <SiteHeader navigation={navigation} />

      {/* Hero Section */}
      <section className="hero-section" style={{ padding: "60px 0 40px" }}>
        <div className="container">
          <nav style={{ fontSize: "0.9rem", color: "var(--text-soft)", marginBottom: "20px" }}>
            <Link href="/" style={{ color: "var(--green-700)", textDecoration: "none" }}>Home</Link> &gt; <span>Thane Car Inspection Hub</span>
          </nav>
          <div style={{ maxWidth: "800px" }}>
            <div className="hero-price-pill" style={{ display: "inline-block", marginBottom: "16px" }}>
              Starting at ₹999 • Core Inspection Hub
            </div>
            <SectionLabel>Thane City & Regional Hub</SectionLabel>
            <h1 style={{ fontSize: "clamp(2rem, 5vw, 3rem)", lineHeight: 1.15, marginTop: "12px" }}>
              Thane's #1 Independent Car PDI & Pre-Purchase Inspection Service
            </h1>
            <p className="hero-text" style={{ fontSize: "1.15rem", marginTop: "16px", lineHeight: 1.6 }}>
              Thane is home to major car dealer stockyards along Ghodbunder Road, Majiwada, and Kalwa. CheckMate PDI provides thorough on-site vehicle inspections across Thane, giving buyers 350+ checkpoint verification and a 15-minute digital photo report before registration.
            </p>

            <div className="hero-actions" style={{ marginTop: "28px" }}>
              <a className="button button-solid shimmer-effect" href="https://wa.me/917039935536?text=Hi%2C%20I%20want%20to%20book%20a%20car%20PDI%20inspection%20in%20Thane." target="_blank" rel="noopener noreferrer">
                <Icon className="button-icon" name="chat" />
                Book Thane Inspection
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Deep Local Focus */}
      <section style={{ padding: "60px 0", background: "#fff" }}>
        <div className="container">
          <SectionLabel>Thane Dealership & Stockyard Insights</SectionLabel>
          <h2 style={{ fontSize: "2rem", marginBottom: "24px" }}>
            Why Thane Car Buyers Rely on Independent PDI
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "24px" }}>
            <div className="card" style={{ padding: "28px", borderRadius: "20px", background: "var(--surface-light)", border: "1.5px solid var(--color-border)" }}>
              <h3 style={{ fontSize: "1.2rem", color: "var(--green-700)" }}>1. Ghodbunder Dust & Transit Scrapes</h3>
              <p style={{ marginTop: "10px", color: "var(--text-body)", lineHeight: 1.6 }}>
                Ghodbunder Road's heavy traffic and ongoing construction expose new cars stored in open stockyards to airborne cement dust, stone chips, and transit scratches. We measure paint thickness across every panel to detect showroom re-sprays.
              </p>
            </div>
            <div className="card" style={{ padding: "28px", borderRadius: "20px", background: "var(--surface-light)", border: "1.5px solid var(--color-border)" }}>
              <h3 style={{ fontSize: "1.2rem", color: "var(--green-700)" }}>2. Tight Yard Storage Door Dings</h3>
              <p style={{ marginTop: "10px", color: "var(--text-body)", lineHeight: 1.6 }}>
                Dealer yards in Kalwa, Mumbra, and Majiwada store hundreds of cars tightly packed together. Door edge dings and bumper corner scuffs are extremely common during yard movements before delivery.
              </p>
            </div>
            <div className="card" style={{ padding: "28px", borderRadius: "20px", background: "var(--surface-light)", border: "1.5px solid var(--color-border)" }}>
              <h3 style={{ fontSize: "1.2rem", color: "var(--green-700)" }}>3. Mechanical & Suspension Verification</h3>
              <p style={{ marginTop: "10px", color: "var(--text-body)", lineHeight: 1.6 }}>
                Thane's arterial roads and flyovers put suspensions to the test. Our technicians inspect shock absorbers, steering rack play, oil pan integrity, and battery terminal voltage on-site.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Verified Reviews Section */}
      <section style={{ padding: "60px 0", background: "var(--surface-light)" }}>
        <div className="container">
          <SectionLabel>Real Thane Buyer Experience</SectionLabel>
          <h2 style={{ fontSize: "1.8rem", marginBottom: "20px" }}>Verified Customer Proof</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "20px" }}>
            {verifiedReviews.map((rev) => (
              <div key={rev.name} className="card" style={{ padding: "24px", borderRadius: "18px", background: "#fff", border: "1.5px solid var(--color-border)" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <strong>{rev.name}</strong>
                  <span style={{ color: "var(--text-soft)", fontSize: "0.85rem" }}>{rev.city} • {rev.carModel}</span>
                </div>
                <p style={{ marginTop: "12px", fontSize: "0.95rem", color: "var(--text-body)" }}>
                  <strong>Issue Found:</strong> {rev.problem}
                </p>
                <div style={{ marginTop: "12px", background: "var(--surface-soft)", padding: "10px 14px", borderRadius: "12px", color: "var(--green-700)", fontWeight: 700, fontSize: "0.9rem" }}>
                  Saved / Outcome: {rev.saved}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Areas Covered Prose */}
      <section style={{ padding: "60px 0", background: "#fff" }}>
        <div className="container" style={{ maxWidth: "840px" }}>
          <SectionLabel>Thane Area Coverage</SectionLabel>
          <h2 style={{ fontSize: "1.8rem" }}>Complete Coverage Across Thane City & Suburbs</h2>
          <p style={{ marginTop: "16px", fontSize: "1.05rem", lineHeight: 1.7, color: "var(--text-body)" }}>
            CheckMate PDI inspectors cover all dealer hubs and residential areas across <strong>Thane West, Thane East, Ghodbunder Road, Majiwada, Vartak Nagar, Pokhran Road 1 & 2, Panchpakhadi, Naupada, Meadow, Wagle Estate, Kalwa, and Mumbra</strong>.
          </p>
        </div>
      </section>

      <FaqSection />
      <CorridorLinks currentSlug="car-inspection-thane" />
    </main>
  );
}
