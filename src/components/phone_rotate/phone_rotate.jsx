import React from 'react';
import { isMobile } from 'react-device-detect';

function RotatePhoneMessage() {
  if (isMobile) {
    return (
      <div style={{ textAlign: 'center', backgroundColor: 'red', color: 'white', padding: '10px' }}>
        Пожалуйста, поверните ваш телефон для лучшего просмотра!
      </div>
    );
  }
  return null;
}

export default RotatePhoneMessage;
