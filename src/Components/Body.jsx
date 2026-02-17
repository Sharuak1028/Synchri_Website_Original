import React from "react";
import "../Styles/Body.css";
import useReveal from "./useReveal";
// Import Lucide icons for Trust section
import { BarChart3, Search, Lightbulb } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Techstack from "../Components/Techstack";
import Features from '../Components/Features';

// Define the gradients and icons for the three trust pillars (same as before)
const trustPillars = [
    {
        icon: BarChart3,
        title: "Expertise",
        description: "With years of experience, we have mastered AI and algorithmic trading, delivering superior results.",
        gradient: "linear-gradient(135deg, #345f9e, #0c2244)",
    },
    {
        icon: Search,
        title: "Transparency",
        description: "We provide clear insights into our bot's performance, ensuring complete trust.",
        gradient: "linear-gradient(135deg, #00BCD4, #0077BE)",
    },
    {
        icon: Lightbulb,
        title: "Innovation",
        description: "We continuously evolve our algorithms using cutting-edge AI, staying ahead of market changes.",
        gradient: "linear-gradient(135deg, #9C27B0, #E91E63)",
    }
];

export default function Hero() {
    const navigate = useNavigate();
    const [trustusRef, trustusVisible] = useReveal();

    return (
        <div id="hero">
            <div
                className="hero-section">
                <div className="hero-orb orb-1"></div>
                <div className="hero-orb orb-2"></div>
                <div className="hero-video-box">
                    <video
                        className="hero-video"
                        src="/images/video-landing-page.mp4"
                        autoPlay
                        loop
                        muted
                        playsInline
                        controls={false}
                    />
                </div>
                <div className="hero-content">
                    <h1 className="hero-title">
                        Transforming Trading with<br></br>
                        AI Automation
                    </h1>

                    <p className="hero-subtitle">
                        Intelligent EA's & Bots for Enhanced Market Precision
                    </p>
                    <button className="nav-link-btn" onClick={() => {
                        window.open("https://synchrii.myshopify.com", "_blank", "noopener,noreferrer");
                    }}>
                        Discover Bots →
                    </button>

                </div>
            </div>
            <Features />
            <Techstack />
            {/* Trust us Section  */}
            <div
                ref={trustusRef}
                className={`trustus_cont ${trustusVisible ? "reveal-section" : ""}`}
            >
                {/* Decorative elements - Reusing names from features but styling is in the new CSS */}
                <div className="deco-blob-tl"></div>
                <div className="deco-blob-br"></div>

                <div className="container trust-us-content">

                    {/* Header Row - Refactored to match Features Header style */}
                    <div className="trustus-header-wrapper">
                        <div className="trustus-badge-wrapper">
                            <span className="trustus-badge-text">OUR CORE VALUES</span>
                        </div>
                        <div className="why-trust-row">
                            <div className="why-trust-wrapper">
                                <h2 className="why-trust-text">Why Trust Us</h2>

                                {/* Inline SVG wave placed under the heading for perfect visuals */}
                                <svg className="why-trust-wave" viewBox="0 0 200 30" aria-hidden="true">
                                    <path
                                        d="M0 15 Q50 0 100 15 T200 15"
                                        stroke="#0c2244"
                                        strokeWidth="3"
                                        fill="none"
                                        strokeLinecap="round"
                                    />
                                </svg>

                            </div>

                            <p className="trustus-header-text">
                                Experience the Synchrii difference. Our commitment to excellence,
                                transparency, and innovation sets us apart, ensuring your success in the market.
                            </p>
                        </div>
                    </div>


                    {/* Card Grid - Using a common grid class */}
                    <div className="trustus-grid">
                        {trustPillars.map((pillar, index) => {
                            const Icon = pillar.icon;
                            return (
                                <div key={index} className="trustus-item">
                                    <div className="trust-card p-4">
                                        <div
                                            className="trust-icon-wrapper"
                                            style={{ backgroundImage: pillar.gradient }}
                                        >
                                            <Icon size={40} className="trust-icon" />
                                        </div>
                                        <h3 className="card-title trust-title">{pillar.title}</h3>
                                        <p className="card-text trust-description">
                                            {pillar.description}
                                        </p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>



                    {/* Commitment Banner */}

                    <div className="trust-commitment-banner p-4 mt-5">
                        <div className="commitment-content-wrapper">
                            {/* WRAP THE TITLE IN THE NEW DIV */}
                            <div className="commitment-title-wrapper">
                                <h3 className="commitment-title mb-0">Our Commitment</h3>
                            </div>

                            <p className="commitment-text">
                                Your success is our priority. We are dedicated to
                                providing reliable, high-performance trading solutions.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}