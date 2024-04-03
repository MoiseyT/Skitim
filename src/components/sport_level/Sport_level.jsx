import React from 'react';
import './sport_level.css';
import Amature from '../../assets/Amature.png';
import Semiprofi from '../../assets/Semiprofi.png';
import Profi from '../../assets/Profi.png';

const Sport_level = () => {
  return (
    
    <div className="image-grid">
      <img src={Amature} alt="Amature" className="grid-item" />
      <img src={Semiprofi} alt="Semiprofi" className="grid-item" />
      <img src={Profi} alt="Profi" className="grid-item" />
    </div>
  );
}

export default Sport_level
