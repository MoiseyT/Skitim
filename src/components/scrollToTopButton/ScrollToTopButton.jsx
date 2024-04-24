import React, { useState, useEffect } from 'react';
import './scrollToTopButton.css';

function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Показать кнопку, когда пользователь прокручивает страницу на определенную высоту
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    // Добавить слушатель прокрутки страницы
    window.addEventListener('scroll', toggleVisibility);

    // Убрать слушатель при размонтировании компонента
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
        <button className="scroll-to-top-btn" onClick={scrollToTop}>
          &#9650;
        </button>
      )}
    </div>
  );
}

export default ScrollToTopButton;
