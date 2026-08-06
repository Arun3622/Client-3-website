import React from 'react';

export function JsonLd({ schemaData }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
    />
  );
}

export const homeJsonLdData = [
  {
    "@context": "https://schema.org",
    "@type": "AutoRepair",
    "@id": "https://checkmatepdi.com/#organization",
    "name": "CheckMate PDI Exxpert",
    "url": "https://checkmatepdi.com",
    "logo": "https://checkmatepdi.com/Checkmatepdilogo.png",
    "image": "https://checkmatepdi.com/Checkmatepdilogo.png",
    "telephone": "+917039935536",
    "email": "checkmate.pdiexxpert@gmail.com",
    "priceRange": "₹999 - ₹2999",
    "description": "Independent car PDI and pre-purchase inspection service across Mumbai's western line and Thane–Kalyan belt. 350+ point checklist with photo evidence.",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Thane",
      "addressRegion": "Maharashtra",
      "addressCountry": "IN"
    },
    "areaServed": [
      { "@type": "City", "name": "Thane" },
      { "@type": "City", "name": "Mumbai" },
      { "@type": "City", "name": "Kalyan" },
      { "@type": "City", "name": "Dombivli" },
      { "@type": "City", "name": "Mira Bhayandar" },
      { "@type": "City", "name": "Vasai-Virar" }
    ],
    "sameAs": [
      "https://www.instagram.com/Checkmate.pdiexxpert",
      "https://www.facebook.com/profile.php?id=61573372995325"
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5.0",
      "reviewCount": "3",
      "bestRating": "5",
      "worstRating": "1"
    },
    "review": [
      {
        "@type": "Review",
        "author": { "@type": "Person", "name": "Rahul S." },
        "datePublished": "2026-05-15",
        "reviewBody": "Engine lock broken on a Land Rover Defender. Saved ₹35,000 negotiated off price after CheckMate PDI spotted the hidden defect before handover.",
        "reviewRating": { "@type": "Rating", "ratingValue": "5" }
      },
      {
        "@type": "Review",
        "author": { "@type": "Person", "name": "Vikram M." },
        "datePublished": "2026-09-10",
        "reviewBody": "Repair and repaint work found on a brand new Honda Elevate at the dealership. Dealer fixed the issue prior to delivery.",
        "reviewRating": { "@type": "Rating", "ratingValue": "5" }
      },
      {
        "@type": "Review",
        "author": { "@type": "Person", "name": "Neha K." },
        "datePublished": "2026-04-20",
        "reviewBody": "Trunk was replaced and repainted on an Urban Cruiser Hyryder. Got it replaced under warranty before accepting delivery.",
        "reviewRating": { "@type": "Rating", "ratingValue": "5" }
      }
    ]
  },
  {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://checkmatepdi.com/#service-pdi",
    "name": "Car Pre-Delivery Inspection (PDI)",
    "provider": { "@id": "https://checkmatepdi.com/#organization" },
    "serviceType": "Car Inspection",
    "description": "Comprehensive 350+ point inspection for new cars at dealer yards or showrooms prior to registration and final payment.",
    "offers": {
      "@type": "Offer",
      "price": "999",
      "priceCurrency": "INR",
      "priceValidUntil": "2026-12-31",
      "availability": "https://schema.org/InStock"
    }
  },
  {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://checkmatepdi.com/#service-ppi",
    "name": "Pre-Purchase Used Car Inspection",
    "provider": { "@id": "https://checkmatepdi.com/#organization" },
    "serviceType": "Used Car Technical Inspection",
    "description": "Thorough technical inspection of used cars covering chassis, engine bay, paint meter readings, flood history, and OBD diagnostics.",
    "offers": {
      "@type": "Offer",
      "price": "999",
      "priceCurrency": "INR",
      "priceValidUntil": "2026-12-31",
      "availability": "https://schema.org/InStock"
    }
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is a Car Pre-Delivery Inspection (PDI)?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A Pre-Delivery Inspection (PDI) is a 350+ point technical evaluation performed on a car at the dealership or stockyard before registration and final payment. It verifies body paint thickness, electrical components, engine bay fluids, glass manufacturing dates, VIN match, and chassis integrity to ensure you do not receive a damaged, repainted, or demo vehicle."
        }
      },
      {
        "@type": "Question",
        "name": "How much does a PDI car inspection cost in Mumbai and Thane?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Car PDI and pre-purchase inspections by CheckMate PDI Exxpert start at ₹999. Pricing is transparent with no hidden fees, providing full access to certified field inspectors and a 15-minute digital photo report."
        }
      },
      {
        "@type": "Question",
        "name": "Which areas in Mumbai, Thane, and Kalyan do you cover?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "CheckMate PDI covers the entire Mumbai Western Railway corridor (from Churchgate to Virar), Thane City (Kalwa, Mumbra, Ghodbunder Road), Navi Mumbai, and the Kalyan-Dombivli belt (Diva, Kopar, Dombivli, Thakurli, Kalyan)."
        }
      },
      {
        "@type": "Question",
        "name": "How long does a car inspection take and when do I get the report?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The physical on-site inspection takes approximately 45 to 60 minutes. Your complete digital photo report is delivered via WhatsApp and email within 15 minutes of inspection completion."
        }
      },
      {
        "@type": "Question",
        "name": "What is checked during a CheckMate PDI car inspection?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Inspectors check over 350 parameters across 11 key categories: Exterior panel paint depth (detecting repaints/dents), glass manufacturing codes, tyre tread and date codes, interior electricals & AC performance, engine bay fluid integrity & wiring, structural chassis rails, OBD diagnostics, VIN verification, and photo documentation."
        }
      }
    ]
  }
];
