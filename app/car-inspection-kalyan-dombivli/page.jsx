import Link from "next/link";
import { SiteHeader } from "@/components/site-header";
import { SectionLabel } from "@/components/section-label";
import { Icon } from "@/components/icon";
import { JsonLd } from "@/components/json-ld";
import { FaqSection } from "@/components/faq-section";
import { CorridorLinks } from "@/components/corridor-links";
import { navigation } from "@/app/site-data";

export const metadata = {
  title: "Car PDI Inspection Kalyan & Dombivli | Pre-Delivery Check | CheckMate PDI",
  description: "Independent car PDI & pre-purchase inspection in Kalyan, Dombivli, Diva & Thakurli. Uncover hidden accident damage & waterlogging before buying. Starts ₹999.",
  alternates: {
    canonical: "https://checkmatepdi.com/car-inspection-kalyan-dombivli"
  }
};

const kalyanDombivliSchema = [
  {
    "@context": "https://schema.org",
    "@type": "AutoRepair",
    "@id": "https://checkmatepdi.com/car-inspection-kalyan-dombivli#organization",
    "name": "CheckMate PDI Exxpert - Kalyan & Dombivli",
    "url": "https://checkmatepdi.com/car-inspection-kalyan-dombivli",
    "telephone": "+917039935536",
    "priceRange": "₹999 - ₹2999",
    "description": "Independent car PDI and pre-purchase inspection across Kalyan, Dombivli, Diva, Kopar and Thakurli. 350+ point checklist with photo evidence.",
    "areaServed": [
      { "@type": "City", "name": "Kalyan" },
      { "@type": "City", "name": "Dombivli" },
      { "@type": "City", "name": "Diva" },
      { "@type": "City", "name": "Thakurli" },
      { "@type": "City", "name": "Kopar" }
    ]
  }
];

export default function KalyanDombivliCorridorPage() {
  return (
    <main className="page-shell" id="top">
      <JsonLd schemaData={kalyanDombivliSchema} />
      <SiteHeader navigation={navigation} />

      {/* Hero Section */}
      <section className="hero-section" style={{ padding: "60px 0 40px" }}>
        <div className="container">
          <nav style={{ fontSize: "0.9rem", color: "var(--text-soft)", marginBottom: "20px" }}>
            <Link href="/" style={{ color: "var(--green-700)", textDecoration: "none" }}>Home</Link> &gt; <span>Kalyan & Dombivli Car Inspection</span>
          </nav>
          <div style={{ maxWidth: "800px" }}>
            <div className="hero-price-pill" style={{ display: "inline-block", marginBottom: "16px" }}>
              Starting at ₹999 • On-Site Inspection
            </div>
            <SectionLabel>Kalyan – Dombivli Belt</SectionLabel>
            <h1 style={{ fontSize: "clamp(2rem, 5vw, 3rem)", lineHeight: 1.15, marginTop: "12px" }}>
              Independent Car PDI & Pre-Purchase Inspection in Kalyan & Dombivli
            </h1>
            <p className="hero-text" style={{ fontSize: "1.15rem", marginTop: "16px", lineHeight: 1.6 }}>
              Taking delivery of a new vehicle or buying a pre-owned car in Kalyan or Dombivli? Avoid costly post-purchase surprises. Our certified inspectors perform a complete 350+ point check on-site and deliver your report within 15 minutes.
            </p>

            <div className="hero-actions" style={{ marginTop: "28px" }}>
              <a className="button button-solid shimmer-effect" href="https://wa.me/917039935536?text=Hi%2C%20I%20want%20to%20book%20a%20car%20PDI%20inspection%20in%20Kalyan-Dombivli." target="_blank" rel="noopener noreferrer">
                <Icon className="button-icon" name="chat" />
                Book Kalyan–Dombivli Inspection
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Localized Challenges */}
      <section style={{ padding: "60px 0", background: "#fff" }}>
        <div className="container">
          <SectionLabel>Kalyan–Dombivli Buyer Priorities</SectionLabel>
          <h2 style={{ fontSize: "2rem", marginBottom: "24px" }}>
            3 Critical Checks for Kalyan & Dombivli Car Buyers
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "24px" }}>
            <div className="card" style={{ padding: "28px", borderRadius: "20px", background: "var(--surface-light)", border: "1.5px solid var(--color-border)" }}>
              <h3 style={{ fontSize: "1.2rem", color: "var(--green-700)" }}>1. Waterlogging & Flood Water Silt</h3>
              <p style={{ marginTop: "10px", color: "var(--text-body)", lineHeight: 1.6 }}>
                Monsoon flooding in low-lying pockets of Kalyan and Dombivli can leave fine silt, mold, and hidden wiring corrosion inside car sills and under seats. We inspect floorboard carpet padding and trunk wells thoroughly.
              </p>
            </div>
            <div className="card" style={{ padding: "28px", borderRadius: "20px", background: "var(--surface-light)", border: "1.5px solid var(--color-border)" }}>
              <h3 style={{ fontSize: "1.2rem", color: "var(--green-700)" }}>2. Accident Repair & Body Filler Metering</h3>
              <p style={{ marginTop: "10px", color: "var(--text-body)", lineHeight: 1.6 }}>
                Used car deals in local markets sometimes disguise accident damage under fresh paint. Our digital paint thickness gauges measure paint depth in micrometers to reveal body filler and panel replacements.
              </p>
            </div>
            <div className="card" style={{ padding: "28px", borderRadius: "20px", background: "var(--surface-light)", border: "1.5px solid var(--color-border)" }}>
              <h3 style={{ fontSize: "1.2rem", color: "var(--green-700)" }}>3. Engine Harness & Rodent Damage</h3>
              <p style={{ marginTop: "10px", color: "var(--text-body)", lineHeight: 1.6 }}>
                Open parking in semi-urban yards increases the risk of rodent wire chewing. We inspect engine bay looms, sensor wiring, and fuse boxes for damage or taped-up fixes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Areas Covered Prose */}
      <section style={{ padding: "60px 0", background: "var(--surface-subtle)" }}>
        <div className="container" style={{ maxWidth: "840px" }}>
          <SectionLabel>Kalyan–Dombivli Area Coverage</SectionLabel>
          <h2 style={{ fontSize: "1.8rem" }}>We Travel Directly to Your Seller or Dealer</h2>
          <p style={{ marginTop: "16px", fontSize: "1.05rem", lineHeight: 1.7, color: "var(--text-body)" }}>
            Our mobile inspection team serves <strong>Kalyan East, Kalyan West, Dombivli East, Dombivli West, Diva, Kopar, Thakurli, Shahad, and Titwala</strong>.
          </p>
        </div>
      </section>

      <FaqSection />
      <CorridorLinks currentSlug="car-inspection-kalyan-dombivli" />
    </main>
  );
}
