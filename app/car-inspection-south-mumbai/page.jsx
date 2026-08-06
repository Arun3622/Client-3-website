import Link from "next/link";
import { SiteHeader } from "@/components/site-header";
import { SectionLabel } from "@/components/section-label";
import { Icon } from "@/components/icon";
import { JsonLd } from "@/components/json-ld";
import { FaqSection } from "@/components/faq-section";
import { CorridorLinks } from "@/components/corridor-links";
import { navigation, verifiedReviews } from "@/app/site-data";

export const metadata = {
  title: "Car PDI Inspection South Mumbai | Churchgate to Dadar Pre-Purchase Checks | CheckMate PDI",
  description: "Independent car PDI & pre-purchase inspection from Churchgate to Dadar & Lower Parel. 350+ point check for coastal wear, repaint & accident history. From ₹999.",
  alternates: {
    canonical: "https://checkmatepdi.com/car-inspection-south-mumbai"
  }
};

const southMumbaiSchema = [
  {
    "@context": "https://schema.org",
    "@type": "AutoRepair",
    "@id": "https://checkmatepdi.com/car-inspection-south-mumbai#organization",
    "name": "CheckMate PDI Exxpert - South Mumbai",
    "url": "https://checkmatepdi.com/car-inspection-south-mumbai",
    "telephone": "+917039935536",
    "priceRange": "₹999 - ₹2999",
    "description": "Independent car PDI and pre-purchase inspection across South Mumbai from Churchgate to Dadar and Mahim. 350+ point checklist with photo evidence.",
    "areaServed": [
      { "@type": "City", "name": "South Mumbai" },
      { "@type": "AdministrativeArea", "name": "Churchgate" },
      { "@type": "AdministrativeArea", "name": "Lower Parel" },
      { "@type": "AdministrativeArea", "name": "Dadar" },
      { "@type": "AdministrativeArea", "name": "Prabhadevi" }
    ]
  }
];

export default function SouthMumbaiCorridorPage() {
  return (
    <main className="page-shell" id="top">
      <JsonLd schemaData={southMumbaiSchema} />
      <SiteHeader navigation={navigation} />

      {/* Hero Section */}
      <section className="hero-section" style={{ padding: "60px 0 40px" }}>
        <div className="container">
          <nav style={{ fontSize: "0.9rem", color: "var(--text-soft)", marginBottom: "20px" }}>
            <Link href="/" style={{ color: "var(--green-700)", textDecoration: "none" }}>Home</Link> &gt; <span>South Mumbai Car Inspection</span>
          </nav>
          <div style={{ maxWidth: "800px" }}>
            <div className="hero-price-pill" style={{ display: "inline-block", marginBottom: "16px" }}>
              Starting at ₹999 • On-Site Inspection
            </div>
            <SectionLabel>South Mumbai Inspection Coverage</SectionLabel>
            <h1 style={{ fontSize: "clamp(2rem, 5vw, 3rem)", lineHeight: 1.15, marginTop: "12px" }}>
              Independent Car PDI & Pre-Purchase Inspection in South Mumbai
            </h1>
            <p className="hero-text" style={{ fontSize: "1.15rem", marginTop: "16px", lineHeight: 1.6 }}>
              Whether you are buying a luxury SUV in Lower Parel or accepting delivery of a new sedan near Dadar, CheckMate PDI provides thorough, unbiased technical inspections on-site before you make final payments.
            </p>

            <div className="hero-actions" style={{ marginTop: "28px" }}>
              <a className="button button-solid shimmer-effect" href="https://wa.me/917039935536?text=Hi%2C%20I%20want%20to%20book%20a%20car%20PDI%20inspection%20in%20South%20Mumbai." target="_blank" rel="noopener noreferrer">
                <Icon className="button-icon" name="chat" />
                Book South Mumbai Inspection
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Localized Challenges Content */}
      <section style={{ padding: "60px 0", background: "#fff" }}>
        <div className="container">
          <SectionLabel>Why South Mumbai Buyers Need PDI</SectionLabel>
          <h2 style={{ fontSize: "2rem", marginBottom: "24px" }}>
            3 Critical Buying Risks Unique to South Mumbai Cars
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "24px" }}>
            <div className="card" style={{ padding: "28px", borderRadius: "20px", background: "var(--surface-light)", border: "1.5px solid var(--color-border)" }}>
              <h3 style={{ fontSize: "1.2rem", color: "var(--green-700)" }}>1. Coastal Salt Exposure & Corrosion</h3>
              <p style={{ marginTop: "10px", color: "var(--text-body)", lineHeight: 1.6 }}>
                Vehicles driven and parked near Marine Drive, Colaba, and Worli face constant salt-laden sea breezes. Our 350+ point check inspects underbody chassis rails, brake lines, and suspension joints for hidden salt rust and oxidation.
              </p>
            </div>
            <div className="card" style={{ padding: "28px", borderRadius: "20px", background: "var(--surface-light)", border: "1.5px solid var(--color-border)" }}>
              <h3 style={{ fontSize: "1.2rem", color: "var(--green-700)" }}>2. Tight Parking Scrapes & Touch-Up Putty</h3>
              <p style={{ marginTop: "10px", color: "var(--text-body)", lineHeight: 1.6 }}>
                Navigating tight lanes around Grant Road, Charni Road, and Girgaon leads to frequent minor side scrapes. Resale dealers often patch door panels with heavy body filler and quick repaints. We use precision paint thickness gauges to reveal hidden body repairs instantly.
              </p>
            </div>
            <div className="card" style={{ padding: "28px", borderRadius: "20px", background: "var(--surface-light)", border: "1.5px solid var(--color-border)" }}>
              <h3 style={{ fontSize: "1.2rem", color: "var(--green-700)" }}>3. Stockyard Handling & Demo Vehicle Fraud</h3>
              <p style={{ marginTop: "10px", color: "var(--text-body)", lineHeight: 1.6 }}>
                New cars delivered to buyers in Prabhadevi and Mahalaxmi are often stored in open dealer yards. Our certified inspectors verify glass etching dates, odometer readings, and VIN tags to ensure your new car hasn't been used as a test drive demo or damaged during transit.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Areas Covered Prose */}
      <section style={{ padding: "60px 0", background: "var(--surface-subtle)" }}>
        <div className="container" style={{ maxWidth: "840px" }}>
          <SectionLabel>South Mumbai Coverage Areas</SectionLabel>
          <h2 style={{ fontSize: "1.8rem" }}>Areas We Serve Across South Mumbai</h2>
          <p style={{ marginTop: "16px", fontSize: "1.05rem", lineHeight: 1.7, color: "var(--text-body)" }}>
            Our field inspectors visit dealer showrooms, independent used car stockyards, and private seller locations daily. We cover the entire South Mumbai line starting from <strong>Churchgate, Marine Lines, Charni Road, Grant Road, and Mumbai Central</strong> down through <strong>Mahalaxmi, Lower Parel, Prabhadevi, Dadar, and Mahim</strong>.
          </p>
        </div>
      </section>

      <FaqSection />
      <CorridorLinks currentSlug="car-inspection-south-mumbai" />
    </main>
  );
}
