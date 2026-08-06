import React from 'react';
import Link from 'next/link';
import { SectionLabel } from '@/components/section-label';
import { Icon } from '@/components/icon';
import { corridors } from '@/app/site-data';

export function CorridorLinks({ currentSlug = "" }) {
  return (
    <section className="corridor-section" id="service-areas" style={{ padding: '80px 0', background: 'var(--surface-light)' }}>
      <div className="container">
        <div className="section-heading section-heading-sm">
          <SectionLabel>Service Coverage Area</SectionLabel>
          <h2>Independent Car Inspection Across Mumbai & Thane Corridors</h2>
          <p style={{ marginTop: '14px', color: 'var(--text-body)', fontSize: '1.08rem', fontWeight: 500, maxWidth: '800px', margin: '14px auto 0' }}>
            Serving car buyers across the Mumbai western line and Thane–Kalyan belt — from Churchgate to Virar, and Thane to Kalyan.
          </p>
        </div>

        <div
          className="corridor-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '20px',
            marginTop: '40px'
          }}
        >
          {corridors.map((c) => {
            const isCurrent = c.slug === currentSlug;
            return (
              <Link
                key={c.slug}
                href={c.href}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  padding: '24px',
                  borderRadius: '20px',
                  background: isCurrent ? 'var(--surface-soft)' : '#fff',
                  border: isCurrent ? '2px solid var(--green-700)' : '1.5px solid var(--color-border)',
                  textDecoration: 'none',
                  color: 'inherit',
                  transition: 'transform 0.2s ease, box-shadow 0.2s ease'
                }}
                className="corridor-card"
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
                  <Icon name="location" size={20} style={{ color: 'var(--green-700)' }} />
                  <h3 style={{ fontSize: '1.15rem', margin: 0, fontWeight: 700, color: 'var(--text-main)' }}>
                    {c.name}
                  </h3>
                </div>
                <p style={{ fontSize: '0.88rem', color: 'var(--green-700)', fontWeight: 600, margin: '0 0 12px 0' }}>
                  {c.tagline}
                </p>
                <p style={{ fontSize: '0.92rem', color: 'var(--text-body)', margin: '0 0 16px 0', lineHeight: 1.5, flexGrow: 1 }}>
                  Covering {c.areas.join(', ')}.
                </p>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.9rem', fontWeight: 700, color: 'var(--green-700)' }}>
                  <span>View Corridor Details</span>
                  <Icon name="arrowRight" size={16} />
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
