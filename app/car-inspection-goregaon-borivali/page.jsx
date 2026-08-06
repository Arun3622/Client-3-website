import Link from "next/link";
import { SiteHeader } from "@/components/site-header";
import { SectionLabel } from "@/components/section-label";
import { Icon } from "@/components/icon";
import { JsonLd } from "@/components/json-ld";
import { FaqSection } from "@/components/faq-section";
import { CorridorLinks } from "@/components/corridor-links";
import { navigation } from "@/app/site-data";

export const metadata = {
  title: "Car PDI Inspection Goregaon to Borivali | Malad & Kandivali Car Check | CheckMate PDI",
  description: "On-site car PDI & pre-purchase inspection in Goregaon, Malad, Kandivali & Borivali. Detailed 350+ point check before you pay token money. Starting at ₹999.",
  alternates: {
    canonical: "https://checkmatepdi.com/car-inspection-goregaon-borivali"
  }
};

const goregaonBorivaliSchema = [
  {
    "@context": "https://schema.org",
    "@type": "AutoRepair",
    "@id": "https://checkmatepdi.com/car-inspection-goregaon-borivali#organization",
    "name": "CheckMate PDI Exxpert - Goregaon to Borivali",
    "url": "https://checkmatepdi.com/car-inspection-goregaon-borivali",
    "telephone": "+917039935536",
    "priceRange": "₹999 - ₹2999",
    "description": "Independent car PDI and pre-purchase inspection from Goregaon to Malad, Kandivali, Borivali and Dahisar. 350+ point checklist with photo evidence.",
    "areaServed": [
      { "@type": "City", "name": "Goregaon" },
      { "@type": "City", "name": "Malad" },
      { "@type": "City", "name": "Kandivali" },
      { "@type": "City", "name": "Borivali" },
      { "@type": "City", "name": "Dahisar" }
    ]
  }
];

export default function GoregaonBorivaliCorridorPage() {
  return (
    <main className="page-shell" id="top">
      <JsonLd schemaData={goregaonBorivaliSchema} />
      <SiteHeader navigation={navigation} />

      {/* Hero Section */}
      <section className="hero-section" style={{ padding: "60px 0 40px" }}>
        <div className="container">
          <nav style={{ fontSize: "0.9rem", color: "var(--text-soft)", marginBottom: "20px" }}>
            <Link href="/" style={{ color: "var(--green-700)", textDecoration: "none" }}>Home</Link> &gt; <span>Goregaon to Borivali Car Inspection</span>
          </nav>
          <div style={{ maxWidth: "800px" }}>
            <div className="hero-price-pill" style={{ display: "inline-block", marginBottom: "16px" }}>
              Starting at ₹999 • On-Site Inspection
            </div>
            <SectionLabel>Goregaon – Borivali Corridor</SectionLabel>
            <h1 style={{ fontSize: "clamp(2rem, 5vw, 3rem)", lineHeight: 1.15, marginTop: "12px" }}>
              Car PDI & Pre-Purchase Inspections in Goregaon, Malad & Borivali
            </h1>
            <p className="hero-text" style={{ fontSize: "1.15rem", marginTop: "16px", lineHeight: 1.6 }}>
              Buying a car near Link Road or SV Road? Don't risk taking delivery of a damaged or repainted vehicle. Get a 350+ point independent inspection with full photo proof before signing handover documents.
            </p>

            <div className="hero-actions" style={{ marginTop: "28px" }}>
              <a className="button button-solid shimmer-effect" href="https://wa.me/917039935536?text=Hi%2C%20I%20want%20to%20book%20a%20car%20PDI%20inspection%20in%20Goregaon-Borivali." target="_blank" rel="noopener noreferrer">
                <Icon className="button-icon" name="chat" />
                Book Goregaon–Borivali Inspection
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Localized Challenges */}
      <section style={{ padding: "60px 0", background: "#fff" }}>
        <div className="container">
          <SectionLabel>Goregaon to Borivali Inspection Focus</SectionLabel>
          <h2 style={{ fontSize: "2rem", marginBottom: "24px" }}>
            3 Essential Inspection Areas for Western Suburb Buyers
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "24px" }}>
            <div className="card" style={{ padding: "28px", borderRadius: "20px", background: "var(--surface-light)", border: "1.5px solid var(--color-border)" }}>
              <h3 style={{ fontSize: "1.2rem", color: "var(--green-700)" }}>1. Odometer Tampering & Heavy Commute Mileage</h3>
              <p style={{ marginTop: "10px", color: "var(--text-body)", lineHeight: 1.6 }}>
                Suburban cars frequently accumulate 20,000+ km per year on long commutes. We cross-verify brake pad wear, tyre manufacturing week codes, and ECM diagnostic logs to catch rolled-back odometers.
              </p>
            </div>
            <div className="card" style={{ padding: "28px", borderRadius: "20px", background: "var(--surface-light)", border: "1.5px solid var(--color-border)" }}>
              <h3 style={{ fontSize: "1.2rem", color: "var(--green-700)" }}>2. Open Yard Weathering & Sun Damage</h3>
              <p style={{ marginTop: "10px", color: "var(--text-body)", lineHeight: 1.6 }}>
                Dealer stockyards along Malad Link Road and Dahisar Check Naka sit exposed to extreme sunlight and monsoons. We check for faded clear-coats, brittle rubber seals, and battery drain prior to handover.
              </p>
            </div>
            <div className="card" style={{ padding: "28px", borderRadius: "20px", background: "var(--surface-light)", border: "1.5px solid var(--color-border)" }}>
              <h3 style={{ fontSize: "1.2rem", color: "var(--green-700)" }}>3. Hidden Bumper & Apron Impact Repair</h3>
              <p style={{ marginTop: "10px", color: "var(--text-body)", lineHeight: 1.6 }}>
                Suburban traffic bottlenecks lead to frequent front and rear fender benders. We inspect apron alignment, chassis seam sealer, and headlight housing date stamps for undisclosed crash repairs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Areas Covered Prose */}
      <section style={{ padding: "60px 0", background: "var(--surface-subtle)" }}>
        <div className="container" style={{ maxWidth: "840px" }}>
          <SectionLabel>Western Suburbs Service Areas</SectionLabel>
          <h2 style={{ fontSize: "1.8rem" }}>On-Site Inspection Across All Suburbs</h2>
          <p style={{ marginTop: "16px", fontSize: "1.05rem", lineHeight: 1.7, color: "var(--text-body)" }}>
            Our certified vehicle inspectors provide fast on-site service across <strong>Goregaon East, Goregaon West, Malad East, Malad West, Mindspace, Chincholi Bunder, Kandivali East, Kandivali West, Lokhandwala Township, Borivali East, Borivali West, and Dahisar</strong>.
          </p>
        </div>
      </section>

      <FaqSection />
      <CorridorLinks currentSlug="car-inspection-goregaon-borivali" />
    </main>
  );
}
