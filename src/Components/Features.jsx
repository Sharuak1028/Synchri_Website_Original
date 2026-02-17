import React from 'react';
import { Bot, Zap, Shield, BarChart3, Code, Cpu } from 'lucide-react';
// Import the new CSS file
import '../Styles/Features.css';

export default function Features() {
    const features = [
        {
            icon: Bot,
            title: "AI-Powered Algorithms",
            description: "Advanced machine learning models that adapt to market conditions in real-time",
            // Tailwind gradient classes converted to simple gradient strings for inline style
            gradient: "linear-gradient(135deg, #00BCD4, #0077BE)",
            iconBgColor: "#00BCD4"
        },
        {
            icon: Zap,
            title: "Lightning Fast Execution",
            description: "Execute trades in milliseconds with our optimized infrastructure",
            gradient: "linear-gradient(135deg, #FFC107, #FF9800)",
            iconBgColor: "#FFC107"
        },
        {
            icon: Shield,
            title: "Bank-Grade Security",
            description: "Military-grade encryption and multi-layer security protocols",
            gradient: "linear-gradient(135deg, #4CAF50, #00897B)",
            iconBgColor: "#4CAF50"
        },
        {
            icon: BarChart3,
            title: "Real-Time Analytics",
            description: "Comprehensive insights and performance metrics at your fingertips",
            gradient: "linear-gradient(135deg, #9C27B0, #E91E63)",
            iconBgColor: "#9C27B0"
        },
        {
            icon: Code,
            title: "Custom Strategies",
            description: "Build and deploy your own trading strategies with our SDK",
            gradient: "linear-gradient(135deg, #2196F3, #3F51B5)",
            iconBgColor: "#2196F3"
        },
        {
            icon: Cpu,
            title: "Smart Automation",
            description: "Set it and forget it - let AI handle your trading 24/7",
            gradient: "linear-gradient(135deg, #0077BE, #00BCD4)",
            iconBgColor: "#0077BE"
        }
    ];

    return (
        <section className="features-section" id="services">
            {/* Decorative elements */}
            <div className="deco-blob-tl"></div>
            <div className="deco-blob-br"></div>

            <div className="features-container">
                {/* Header */}
                <div className="features-header">
                    <div className="feature-badge-wrapper">
                        <span className="feature-badge-text">POWERFUL FEATURES</span>
                    </div>
                    <h2 className="features-title">
                        Everything You Need to
                        <br />
                        <span className="features-title-highlight">
                            Dominate the Markets
                        </span>
                    </h2>
                    <p className="features-subtitle">
                        Our cutting-edge platform combines AI, speed, and security to give you the ultimate trading advantage
                    </p>
                </div>

                {/* Features Grid */}
                <div className="features-grid">
                    {features.map((feature, index) => {
                        const Icon = feature.icon;
                        return (
                            <div
                                key={index}
                                className="feature-card-wrapper"
                            >
                                {/* Icon */}
                                <div
                                    className="feature-icon-box"
                                    style={{ backgroundImage: feature.gradient }}
                                >
                                    <Icon className="feature-icon" />
                                </div>

                                {/* Content */}
                                <h3 className="feature-card-title">
                                    {feature.title}
                                </h3>
                                <p className="feature-card-description">
                                    {feature.description}
                                </p>
                            </div>
                        );
                    })}
                </div>

                {/* Bottom CTA */}
                <div className="features-cta-wrapper">
                    <button className="explore-btn">
                        Explore All Features
                    </button>
                </div>
            </div>
        </section>
    );
}