import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import '../Styles/ProductPage.css';
import { ShoppingBag, ArrowLeft, Trash2, Minus, Plus } from 'lucide-react';
import '../data/botsData';

const TradingBots = () => {
    const navigate = useNavigate();
    const cardsSectionRef = useRef(null);

    const scrollToCards = () => {
        cardsSectionRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    const bots = [
        {
            id: "scalper-pro",
            name: "Scalper Pro EA",
            badge: "MQL5",
            image: "/images/tradingbots.jpeg", // <--- DIRECT PATH FROM PUBLIC
            tagline: "High-frequency scalping at its finest",
            description: "Advanced scalping bot designed for quick profits in volatile markets with intelligent risk management.",
            price: 499, // Keep as number for cart math
        },
        {
            id: "trend-master",
            name: "Trend Master EA",
            badge: "MQL4",
            image: "/images/tradingbots.jpeg",
            tagline: "Ride the trends with precision",
            description: "Powerful trend-following bot that identifies and capitalizes on strong market trends across multiple currency pairs.",
            price: 699,
        },
        {
            id: "python-algo",
            name: "Python Algo Trader",
            badge: "Python",
            image: "/images/tradingbots.jpeg",
            tagline: "Machine learning meets trading",
            description: "AI-powered trading bot leveraging machine learning models to predict market movements and execute trades with precision.",
            price: 899,
        }
    ];

    return (
        <div className="page-container">
            {/* MAIN CONTENT */}
            <section className="header-section">
                <button className="back-nav-pill" onClick={() => navigate('/')}>
                    ← Back to Home
                </button>

                <div className="hero-center-content">
                    <div className="badge-main">⚡ OUR TRADING BOTS</div>
                    <h1 className="main-title">
                        Explore Our <br />
                        <span className="gradient-text">Premium Trading Bots</span>
                    </h1>
                    <p className="subtitle">Choose the perfect automated trading solution for your needs</p>


                    <div className="scroll-indicator" onClick={scrollToCards} style={{ cursor: 'pointer' }}>
                        <span>Scroll to explore</span>
                        <div className="arrow-down">↓</div>
                    </div>
                </div>
            </section>

            {/*CARDS CONTENT */}
            <section className="cards-section" ref={cardsSectionRef}>
                <div className="cards-container">
                    {bots.map((bot) => (
                        <div key={bot.id} className="bot-card">
                            <div className="image-placeholder">
                                <span className="card-badge">{bot.badge}</span>
                                <img
                                    src={bot.image}
                                    alt={bot.name}
                                    className="bot-card-img"
                                />
                            </div>
                            <div className="card-content">
                                <h3 className="bot-name">{bot.name}</h3>
                                <p className="bot-tagline">{bot.tagline}</p>
                                <p className="bot-description">{bot.description}</p>

                                <div className="card-footer">
                                    <div className="price-box">
                                        <span className="starting-at">STARTING AT</span>
                                        <span className="price-amt">{bot.price}</span>
                                    </div>
                                    <button
                                        className="view-details"
                                        onClick={() => navigate(`/bot/${bot.id}`)}
                                    >
                                        View Details →
                                    </button>

                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default TradingBots;