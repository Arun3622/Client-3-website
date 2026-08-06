import Link from "next/link";
import { SiteHeader } from "@/components/site-header";
import { SectionLabel } from "@/components/section-label";
import { Icon } from "@/components/icon";
import { JsonLd } from "@/components/json-ld";
import { FaqSection } from "@/components/faq-section";
import { CorridorLinks } from "@/components/corridor-links";
import { navigation } from "@/app/site-data";

export const metadata = {
  title: "Car PDI Inspection Mira Road to Virar | Vasai & Bhayandar Car Check | CheckMate PDI",
  description: "Car PDI & pre-purchase inspection in Mira Road, Bhayandar, Vasai & Virar. Certified inspectors check suspension, flood damage & mechanical wear. From ₹999.",
  alternates: {
    canonical: "https://checkmatepdi.com/car-inspection-mira-virar"
  }
};

const miraVirarSchema = [
  {
    "@context": "https://schema.org",
    "@type": "AutoRepair",
    "@id": "https://checkmatepdi.com/car-inspection-mira-virar#organization",
    "name": "CheckMate PDI Exxpert - Mira Road to Virar",
    "url": "https://checkmatepdi.com/car-inspection-mira-virar",
    "telephone": "+917039935536",
    "priceRange": "₹999 - ₹2999",
    "description": "Independent car PDI and pre-purchase inspection from Mira Road to Bhayandar, Vasai and Virar. 350+ point checklist with photo evidence.",
    "areaServed": [
      { "@type": "City", "name": "Mira Road" },
      { "@type": "City", "name": "Bhayandar" },
      { "@type": "City", "name": "Naigaon" },
      { "@type": "City", "name": "Vasai" },
      { "@type": "City", "name": "Virar" }
    ]
  }
];

export default function MiraVirarCorridorPage() {
  return (
    <main className="page-shell" id="top">
      <JsonLd schemaData={miraVirarSchema} />
      <SiteHeader navigation={navigation} />

      {/* Hero Section */}
      <section className="hero-section" style={{ padding: "60px 0 40px" }}>
        <div className="container">
          <nav style={{ fontSize: "0.9rem", color: "var(--text-soft)", marginBottom: "20px" }}>
            <Link href="/" style={{ color: "var(--green-700)", textDecoration: "none" }}>Home</Link> &gt; <span>Mira Road to Virar Car Inspection</span>
          </nav>
          <div style={{ maxWidth: "800px" }}>
            <div className="hero-price-pill" style={{ display: "inline-block", marginBottom: "16px" }}>
              Starting at ₹999 • On-Site Inspection
            </div>
            <SectionLabel>Mira Road – Virar Corridor</SectionLabel>
            <h1 style={{ fontSize: "clamp(2rem, 5vw, 3rem)", lineHeight: 1.15, marginTop: "12px" }}>
              Independent Car PDI & Pre-Purchase Inspection from Mira Road to Virar
            </h1>
            <p className="hero-text" style={{ fontSize: "1.15rem", marginTop: "16px", lineHeight: 1.6 }}>
              Buying a new or used car in the extended western belt? Protect your investment with a 350+ point certified inspection covering suspension health, flood damage, body paint thickness, and engine mechanicals.
            </p>

            <div className="hero-actions" style={{ marginTop: "28px" }}>
              <a className="button button-solid shimmer-effect" href="https://wa.me/917039935536?text=Hi%2C%20I%20want%20to%20book%20a%20car%20PDI%20inspection%20in%20Mira-Virar." target="_blank" rel="noopener noreferrer">
                <Icon className="button-icon" name="chat" />
                Book Mira–Virar Inspection
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Localized Challenges */}
      <section style={{ padding: "60px 0", background: "#fff" }}>
        <div className="container">
          <SectionLabel>Mira–Virar Buying Challenges</SectionLabel>
          <h2 style={{ fontSize: "2rem", marginBottom: "24px" }}>
            Why Mira Road, Vasai & Virar Buyers Rely on CheckMate PDI
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "24px" }}>
            <div className="card" style={{ padding: "28px", borderRadius: "20px", background: "var(--surface-light)", border: "1.5px solid var(--color-border)" }}>
              <h3 style={{ fontSize: "1.2rem", color: "var(--green-700)" }}>1. Heavy Highway Commute Suspension Wear</h3>
              <p style={{ marginTop: "10px", color: "var(--text-body)", lineHeight: 1.6 }}>
                Vehicles driven between Mira Road, Bhayandar, and Mumbai city endure high stress on suspension shock absorbers, control arms, and tie rod ends. Our inspectors test underbody suspension components thoroughly.
              </p>
            </div>
            <div className="card" style={{ padding: "28px", borderRadius: "20px", background: "var(--surface-light)", border: "1.5px solid var(--color-border)" }}>
              <h3 style={{ fontSize: "1.2rem", color: "var(--green-700)" }}>2. Used Car Stockyard Resale Risks</h3>
              <p style={{ marginTop: "10px", color: "var(--text-body)", lineHeight: 1.6 }}>
                Vasai and Nallasopara feature major open resale yards where refurbished insurance-salvage vehicles are sometimes sold without full disclosure. We verify chassis rail integrity and structural accident markers.
              </p>
            </div>
            <div className="card" style={{ padding: "28px", borderRadius: "20px", background: "var(--surface-light)", border: "1.5px solid var(--color-border)" }}>
              <h3 style={{ fontSize: "1.2rem", color: "var(--green-700)" }}>3. Engine Heat & Gasket Degradation</h3>
              <p style={{ marginTop: "10px", color: "var(--text-body)", lineHeight: 1.6 }}>
                Long daily highway commutes combined with traffic bottlenecks lead to engine oil breakdown and valve cover gasket leaks. We inspect coolant purity, oil level, and engine bay wiring condition.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Areas Covered Prose */}
      <section style={{ padding: "60px 0", background: "var(--surface-subtle)" }}>
        <div className="container" style={{ maxWidth: "840px" }}>
          <SectionLabel>Extended Western Belt Service Areas</SectionLabel>
          <h2 style={{ fontSize: "1.8rem" }}>Complete Coverage Across Mira Road to Virar</h2>
          <p style={{ marginTop: "16px", fontSize: "1.05rem", lineHeight: 1.7, color: "var(--text-body)" }}>
            We provide fast on-site inspection visits across <strong>Mira Road East, Mira Road West, Bhayandar East, Bhayandar West, Naigaon East, Naigaon West, Vasai Road East, Vasai Road West, Nallasopara, and Virar East / West</strong>.
          </p>
        </div>
      </section>

      <FaqSection />
      <CorridorLinks currentSlug="car-inspection-mira-virar" />
    </main>
  );
}
