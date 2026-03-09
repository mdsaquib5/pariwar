'use client';

import { useState, useEffect } from 'react';
import { IoChevronUp } from 'react-icons/io5';

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled up to given distance
  const toggleVisibility = () => {
    if (window.scrollY > 400) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Set the top cordinate to 0, make scrolling smooth
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <button
      onClick={scrollToTop}
      className={`back-to-top ${isVisible ? 'back-to-top--visible' : ''}`}
      aria-label="Scroll back to top"
    >
      <div className="back-to-top__inner">
        <IoChevronUp size={22} />
      </div>
      {/* Pulsing glow ring behind it */}
      <div className="back-to-top__ring" />
    </button>
  );
};

export default BackToTop;