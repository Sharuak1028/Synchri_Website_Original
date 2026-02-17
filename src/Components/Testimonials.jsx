import React, { useState } from 'react';
import '../Styles/Testimonials.css';

export default function ClientTestimonials() {
  // NEW: State to track which testimonial index is active (0, 1, or 2)
  const [activeIndex, setActiveIndex] = useState(0); 
  
  const testimonials = [
    {
      quote: "We truly love to work with this team. They're all very professional and creative. Best services!",
      name: "Alex Thompson",
      title: "CEO, TradeMaster Inc",
      company: "TradeMaster"
    },
    {
      quote: "The level of automation and accuracy we've achieved with their trading bot is simply outstanding. Game changer!",
      name: "Sarah Martinez",
      title: "Portfolio Manager",
      company: "InvestPro"
    },
    {
      quote: "This team delivers what a trading bot needs the most: reliability, speed, and smart algorithms. Love it!",
      name: "Michael Chen",
      title: "Head of Trading",
      company: "Apex Capital"
    }
  ];

  return (
    // ... (Section wrappers remain the same)
    <section className="testimonials-section">
      <div className="testimonials-container">
        <div className="teal-card-wrapper">

          <div className="testimonials-header">
            <h2 className="testimonials-title">Client Testimonials</h2>
            <p className="testimonials-subtitle">What Our Clients Say</p>
          </div>

          <div className="testimonials-grid">
            {testimonials.map((t, index) => (
              // NOTE: In a real slider, you'd hide/show cards here based on activeIndex
              <div key={index} className="testimonial-card">
                {/* ... (Quote icons and content) */}
                <div className="quote-icon-top">“</div>
                
                <div className="card-content">
                  <p className="testimonial-quote">
                    {t.quote}
                  </p>

                  <div className="testimonial-footer">
                    <p className="testimonial-name">{t.name}</p>
                    <p className="testimonial-title">{t.title}</p>
                    <p className="testimonial-company">{t.company}</p>
                  </div>
                </div>

                <div className="quote-icon-bottom">”</div>
              </div>
            ))}
          </div>

          {/* UPDATED: Pagination with onClick and active state logic */}
          <div className="testimonials-pagination">
            {testimonials.map((_, index) => (
              <div 
                key={index} 
                className={index === activeIndex ? "pagination-dot active-pill" : "pagination-dot"}
                onClick={() => setActiveIndex(index)}
              ></div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
