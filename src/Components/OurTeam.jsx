import React, { useState, useEffect } from 'react';
import {
  Terminal,
  Code2,
  Settings,
  ShieldCheck,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import '../Styles/OurTeam.css';

const OurTeam = () => {
  const expertiseClusters = [
    {
      id: 'mql',
      title: 'MQL Expert Squad',
      tags: ['MQL4', 'MQL5'],
      desc: 'High-precision EAs with complex execution logic.',
      icon: <Terminal size={18} />,
      color: 'mql'
    },
    {
      id: 'python',
      title: 'Python Quant Lab',
      tags: ['Python', 'TensorFlow'],
      desc: 'AI-driven predictive models and data modeling.',
      icon: <Code2 size={18} />,
      color: 'python'
    },
    {
      id: 'automation',
      title: 'Bot Automation',
      tags: ['APIs', 'Cloud'],
      desc: '24/7 uptime and seamless system connectivity.',
      icon: <Settings size={18} />,
      color: 'automation'
    },
    {
      id: 'qa',
      title: 'Strategy QA',
      tags: ['Stress Test'],
      desc: 'Rigorous testing to ensure capital protection.',
      icon: <ShieldCheck size={18} />,
      color: 'qa'
    }
  ];

  const displayItems = [...expertiseClusters, ...expertiseClusters, ...expertiseClusters];
  const [currentIndex, setCurrentIndex] = useState(expertiseClusters.length);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => handleNext(), 3200);
    return () => clearInterval(timer);
  }, [currentIndex, isPaused]);

  const handleNext = () => {
    setCurrentIndex((prev) => prev + 1);
    if (currentIndex >= displayItems.length - 4) {
      setCurrentIndex(expertiseClusters.length);
    }
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => prev - 1);
    if (currentIndex <= 0) {
      setCurrentIndex(expertiseClusters.length);
    }
  };

  return (
    <section className="team-carousel-section">
      {/* HEADER */}
      <div id="ourteam" className="team-header-variant">
        <div className="team-header-content">
          <h2>The Technical Excellence Behind the Bots</h2>
          <p>
            A strong, experienced team of developers and quantitative analysts
            mastering the world's most advanced trading languages.
          </p>
        </div>

        {/* GIF goes here */}
        <div className="team-header-media">
          <img src="/images/ai ai.gif" alt="AI Intelligence" />
        </div>
      </div>

      {/* CAROUSEL */}
      <div
        className="carousel-container"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <button className="nav-btn prev-btn" onClick={handlePrev}>
          <ChevronLeft />
        </button>

        <div className="carousel-window">
          <div
            className="carousel-track"
            style={{
              transform: `translateX(-${currentIndex * 345}px)`
            }}
          >
            {displayItems.map((cluster, index) => (
              <div className="carousel-card" key={`${cluster.id}-${index}`}>
                <div className={`card-terminal-header ${cluster.color}-header`}>
                  <div className="terminal-dots">
                    <span></span><span></span><span></span>
                  </div>
                  {cluster.icon}
                </div>

                <div className="card-content">
                  <h3 className="roadmap-title">{cluster.title}</h3>

                  <div className="roadmap-tags">
                    {cluster.tags.map((t) => (
                      <span key={t} className="roadmap-tag">{t}</span>
                    ))}
                  </div>

                  <p className="roadmap-bio">{cluster.desc}</p>

                  <div className="card-footer-mini">
                    Technical Excellence
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <button className="nav-btn next-btn" onClick={handleNext}>
          <ChevronRight />
        </button>
      </div>
    </section>
  );
};

export default OurTeam;
