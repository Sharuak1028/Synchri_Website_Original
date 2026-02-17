import React from 'react';
import '../Styles/Techstack.css';
import useReveal from "./useReveal";
import { FaCode, FaRobot } from 'react-icons/fa'; 

export default function Techstack() {
    const [techRef, techVisible] = useReveal();
    const pythonLogoUrl = "/images/image.png";

    const techCards = [
        {
            icon: <FaCode size={32} className="tech-icon" />,
            title: "MQL4",
            description: "MetaTrader 4 Expert Advisors with proven reliability"
        },
        {
            icon: <FaRobot size={32} className="tech-icon" />,
            title: "MQL5",
            description: "Advanced MT5 trading robots with modern features"
        },
        {
            icon: <img className="python-icon" src={pythonLogoUrl} alt="Python Logo" />,
            title: "Python",
            description: "Flexible algorithmic trading with powerful libraries"
        }
    ];

    return (
        <div ref={techRef} className={`tech-cont ${techVisible ? "reveal-section" : ""}`}>
            <div className="container">
                {/* Header */}
                <div className="tech-header-section">
                    <h2 className="tech-title">
                        Built with the <span className="highlight">Best Trading Technologies</span>
                    </h2>
                    <p className="tech-subtitle">
                        We leverage industry-leading platforms to create robust, reliable trading automation
                    </p>
                </div>

                {/* Cards Grid */}
                <div className="tech-grid">
                    {techCards.map((card, index) => (
                        <div key={index} className="tech-card">
                            <div className="tech-icon-wrapper">
                                {card.icon}
                            </div>
                            <h3 className="tech-card-title">{card.title}</h3>
                            <p className="tech-card-description">{card.description}</p>
                        </div>
                    ))}
                </div>

                {/* Footer */}
                <p className="tech-footer-text">
                    Compatible with MetaTrader 4, MetaTrader 5, and custom Python frameworks
                </p>
            </div>
        </div>
    );
}
