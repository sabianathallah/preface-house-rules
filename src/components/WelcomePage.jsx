import React, { useState, useEffect } from 'react';
import { ChevronRight } from 'lucide-react';

export default function WelcomePage({ onEnter }) {
  const [isLoading, setIsLoading] = useState(false);
  const [showSubtitle, setShowSubtitle] = useState(false);

  useEffect(() => {
    // Show subtitle animation after a delay
    const timer = setTimeout(() => setShowSubtitle(true), 300);
    return () => clearTimeout(timer);
  }, []);

  const handleEnter = () => {
    setIsLoading(true);
    // Simulate loading and then transition
    setTimeout(() => {
      onEnter();
    }, 600);
  };

  return (
    <div className="welcome-page">
      <div className="welcome-container">
        {/* Logo */}
        <div className="welcome-logo-wrapper">
          <img 
            src="/logo-preface.jpeg" 
            alt="PREFACE Logo" 
            className="welcome-logo"
          />
        </div>

        {/* Main Title */}
        <div className="welcome-content">
          <h1 className="welcome-title">PREFACE</h1>
          
          {showSubtitle && (
            <div className="welcome-subtitle-wrapper">
              <p className="welcome-subtitle">HANDBOOK</p>
              <div className="welcome-underline" />
            </div>
          )}

          <p className="welcome-description">
            Panduan lengkap kebijakan, budaya kerja, dan nilai-nilai perusahaan
          </p>
        </div>

        {/* Enter Button */}
        <button 
          className={`welcome-button ${isLoading ? 'loading' : ''}`}
          onClick={handleEnter}
          disabled={isLoading}
        >
          <span>Masuk</span>
          <ChevronRight size={20} className="welcome-button-icon" />
        </button>

        {/* Footer Text */}
        <div className="welcome-footer">
          <p className="welcome-footer-text">
            © 2026 PREFACE. All rights reserved.
          </p>
        </div>
      </div>

      {/* Background decoration */}
      <div className="welcome-bg-decoration welcome-bg-1" />
      <div className="welcome-bg-decoration welcome-bg-2" />
    </div>
  );
}
