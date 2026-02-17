// src/components/ClientJourney/ClientJourney.jsx
import React from "react";
import { ArrowRight, MessageSquare, Settings, Rocket, TrendingUp } from "lucide-react";
import "../Styles/ClientJourney.css";

export default function ClientJourney() {
  const steps = [
    {
      icon: MessageSquare,
      title: "Consultation",
      description: "Share your trading strategy and goals with our experts",
      gradient: "cj-card__icon--g1"
    },
    {
      icon: Settings,
      title: "Development",
      description: "We build your custom EA using MQL4, MQL5, or Python",
      gradient: "cj-card__icon--g2"
    },
    {
      icon: Rocket,
      title: "Testing & Deploy",
      description: "Rigorous backtesting and live deployment on MT4/MT5",
      gradient: "cj-card__icon--g3"
    },
    {
      icon: TrendingUp,
      title: "Support & Optimize",
      description: "Ongoing monitoring and performance optimization",
      gradient: "cj-card__icon--g4"
    }
  ];

  return (
    <section className="client-journey">
      {/* Decorative Corner SVGs */}
      <div className="client-journey__decor client-journey__decor--tl" aria-hidden="true">
        <svg viewBox="0 0 200 200" width="200" height="200" className="client-journey__svg">
          <circle cx="20" cy="20" r="8" />
          <line x1="20" y1="28" x2="20" y2="80" />
          <circle cx="20" cy="80" r="4" fill="none" />
          <line x1="20" y1="80" x2="60" y2="80" />
          <circle cx="60" cy="80" r="5" />
          <line x1="65" y1="80" x2="100" y2="80" />
          <rect x="95" y="75" width="10" height="10" fill="none" />
        </svg>
      </div>

      <div className="client-journey__decor client-journey__decor--tr" aria-hidden="true">
        <svg viewBox="0 0 250 200" width="250" height="200" className="client-journey__svg">
          <circle cx="230" cy="20" r="12" />
          <line x1="230" y1="32" x2="230" y2="100" />
          <line x1="230" y1="100" x2="180" y2="100" />
          <circle cx="180" cy="100" r="6" fill="none" />
          <line x1="174" y1="100" x2="140" y2="100" />
          <circle cx="140" cy="100" r="4" />
          <line x1="220" y1="50" x2="190" y2="50" />
          <rect x="185" y="45" width="10" height="10" />
        </svg>
      </div>

      <div className="client-journey__decor client-journey__decor--bl" aria-hidden="true">
        <svg viewBox="0 0 200 200" width="200" height="200" className="client-journey__svg">
          <circle cx="20" cy="180" r="10" />
          <line x1="30" y1="180" x2="80" y2="180" />
          <circle cx="80" cy="180" r="5" fill="none" />
          <line x1="80" y1="175" x2="80" y2="140" />
          <circle cx="80" cy="140" r="4" />
          <line x1="84" y1="140" x2="120" y2="140" />
          <rect x="115" y="135" width="10" height="10" fill="none" />
        </svg>
      </div>

      <div className="client-journey__decor client-journey__decor--br" aria-hidden="true">
        <svg viewBox="0 0 250 250" width="250" height="250" className="client-journey__svg">
          <circle cx="230" cy="230" r="14" />
          <line x1="216" y1="230" x2="170" y2="230" />
          <circle cx="170" cy="230" r="6" fill="none" />
          <line x1="170" y1="224" x2="170" y2="180" />
          <circle cx="170" cy="180" r="5" />
          <line x1="165" y1="180" x2="140" y2="180" />
          <rect x="135" y="175" width="10" height="10" />
          <line x1="200" y1="200" x2="200" y2="170" />
          <circle cx="200" cy="170" r="4" fill="none" />
        </svg>
      </div>

      {/* small decorative dots that pulse */}
      <div className="client-journey__dot client-journey__dot--a" aria-hidden="true"></div>
      <div className="client-journey__dot client-journey__dot--b" aria-hidden="true"></div>
      <div className="client-journey__dot client-journey__dot--c" aria-hidden="true"></div>

      <div className="client-journey__container">
        {/* Header */}
        <header className="client-journey__header">
          <div className="client-journey__eyebrow">HOW IT WORKS</div>
          <h2 className="client-journey__title">
            Your Path to </h2>
            <h2 className="client-journey__title--accent"> Automated Trading Success</h2>
          
          <p className="client-journey__subtitle">From idea to execution in four simple steps</p>
        </header>

        {/* Steps */}
        <div className="client-journey__cards">
          {steps.map((s, idx) => {
            const Icon = s.icon;
            return (
              <div className="client-journey__card-wrapper" key={idx}>
                <article className="client-journey__card" aria-labelledby={`cj-step-${idx}`}>
                  <div className="client-journey__card-badge">{idx + 1}</div>

                  <div className={`client-journey__card__icon ${s.gradient}`}>
                    <Icon className="client-journey__icon-svg" />
                  </div>

                  <h3 id={`cj-step-${idx}`} className="client-journey__card-title">{s.title}</h3>
                  <p className="client-journey__card-desc">{s.description}</p>

                  <div className="client-journey__card-overlay" aria-hidden="true"></div>
                </article>

                {/* connector arrow (desktop only) */}
                {idx < steps.length - 1 && (
                  <div className="client-journey__connector" aria-hidden="true">
                    <ArrowRight className="client-journey__connector-icon" />
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="client-journey__cta">
          <button className="client-journey__cta-btn">
            Start Your Project
            <ArrowRight className="client-journey__cta-icon" />
          </button>
        </div>
      </div>
    </section>
  );
}
