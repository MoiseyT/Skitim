import React, { useState, useEffect } from 'react';
import { isMobile } from 'react-device-detect';

function RotatePhoneMessage() {
  const [isVisible, setIsVisible] = useState(isMobile);

  useEffect(() => {
    if (isMobile) {
      const timeoutId = setTimeout(() => {
        setIsVisible(false);
      }, 3000); 


      return () => clearTimeout(timeoutId);
    }
  }, []); 

  return (
    <>
      {isVisible && (
        <div style={{ textAlign: 'center', backgroundColor: 'red', color: 'white', padding: '10px' }}>
          Пожалуйста, поверните ваш телефон для лучшего просмотра!
        </div>
      )}
    </>
  );
}

export default RotatePhoneMessage;

