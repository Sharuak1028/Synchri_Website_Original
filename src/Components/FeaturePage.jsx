import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import botsData from '../data/botsData';
import { Icon, PATHS } from '../SharedAssets';
import '../Styles/FeaturesPage.css';

export default function FeaturesPage({ onAddToCart }) {
  const navigate = useNavigate();
  const { id } = useParams();

  const bot = botsData.find(item => item.id === id);

  if (!bot) {
    return (
      <div className="features-page-wrapper">
        <h2 style={{ textAlign: 'center', marginTop: '100px' }}>
          Product not found
        </h2>
      </div>
    );
  }

  return (
    <div className="features-page-wrapper">
      <div className="features-content">

        {/* Header */}
        <header className="features-header">
          <button onClick={() => navigate(-1)} className="back-marketplace-btn">
            <Icon path={PATHS.arrowLeft} size={16} /> Back to Marketplace
          </button>

          <h1 className="main-bot-title">{bot.name}</h1>
          <p className="main-bot-tagline">{bot.shortDesc}</p>
        </header>

        <div className="features-layout-grid">

          {/* LEFT */}
          <div className="main-info-column">

            {/* Specifications */}
            <section className="specifications-box">
              <div className="spec-header">
                <Icon path={PATHS.cogs} size={24} color="#39afef" />
                <h3>Technical Specifications</h3>
              </div>

              <div className="spec-grid">
                {bot.specifications.map((spec, index) => (
                  <div key={index} className="spec-item">
                    <span className="spec-value">{spec}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Features */}
            <section className="comprehensive-features">
              <h3>Comprehensive Features</h3>
              <div className="features-checklist-grid">
                {bot.features.map((feature, index) => (
                  <div key={index} className="checklist-item">
                    <div className="check-circle">
                      <Icon path={PATHS.check} size={12} color="white" />
                    </div>
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Guarantee */}
            <div className="quality-guarantee-card">
              <h4>Our Quality Guarantee</h4>
              <p>
                Every Synchrii bot undergoes rigorous backtesting,
                forward testing, and capital preservation validation.
              </p>
            </div>
          </div>

          {/* RIGHT */}
          <aside className="order-sidebar">
            <div className="order-summary-card">
              <h3>Order Summary</h3>

              <div className="summary-row">
                <span>Software License</span>
                <span className="summary-price">{bot.price.toLocaleString()}</span>
              </div>

              <div className="summary-total-row">
                <span className="total-label">Total</span>
                <span className="total-price-amount">{bot.price.toLocaleString()}</span>
              </div>

              <button
                className="add-to-cart-action-btn"
                onClick={() => onAddToCart(bot)}
              >
                <Icon path={PATHS.cart} size={18} /> Add to Cart
              </button>

              <div className="delivery-note">
                Instant Digital Delivery via Email
              </div>
            </div>
          </aside>

        </div>
      </div>
    </div>
  );
}
