import React, { useState, useEffect } from 'react';
import './mobile_scrollToTopButton.css';

function Mobile_ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300 && !isVisible) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div>
      {isVisible && (
        <button className="m_scroll-to-top-btn" onClick={scrollToTop}>
          &#9650;
        </button>
      )}
    </div>
  );
}

export default Mobile_ScrollToTopButton;
