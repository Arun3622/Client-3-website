"use client";

import React, { useState } from 'react';
import { SectionLabel } from '@/components/section-label';
import { Icon } from '@/components/icon';
import { faqItems } from '@/app/site-data';

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="faq-section" id="faq" style={{ padding: '80px 0', background: 'var(--surface-subtle)' }}>
      <div className="container">
        <div className="section-heading section-heading-sm">
          <SectionLabel>Got Questions?</SectionLabel>
          <h2>Frequently Asked Questions About Car PDI</h2>
          <p style={{ marginTop: '12px', color: 'var(--text-body)', fontSize: '1.05rem' }}>
            Clear, honest answers to help you understand how pre-delivery and used car inspections protect your purchase.
          </p>
        </div>

        <div className="faq-grid" style={{ maxWidth: '840px', margin: '40px auto 0', display: 'grid', gap: '16px' }}>
          {faqItems.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={faq.question}
                className={`faq-card ${isOpen ? 'active' : ''}`}
                style={{
                  background: '#fff',
                  borderRadius: '18px',
                  border: '1.5px solid var(--color-border)',
                  overflow: 'hidden',
                  transition: 'border-color 0.2s ease, box-shadow 0.2s ease'
                }}
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(index)}
                  style={{
                    width: '100%',
                    padding: '20px 24px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: '16px',
                    background: 'none',
                    border: 'none',
                    textAlign: 'left',
                    cursor: 'pointer',
                    fontSize: '1.05rem',
                    fontWeight: 700,
                    color: 'var(--text-main)'
                  }}
                  aria-expanded={isOpen}
                >
                  <span>{faq.question}</span>
                  <div
                    style={{
                      transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                      transition: 'transform 0.2s ease',
                      flexShrink: 0,
                      color: 'var(--green-700)'
                    }}
                  >
                    <Icon name="chevronDown" size={20} />
                  </div>
                </button>

                {isOpen && (
                  <div style={{ padding: '0 24px 24px', color: 'var(--text-body)', fontSize: '0.98rem', lineHeight: '1.65' }}>
                    <p style={{ margin: 0 }}>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
