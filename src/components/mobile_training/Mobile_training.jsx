import React from 'react';
import './mobile_training.css';
import Mobile_training from '../../assets/Mobile_training.jpg';
import { Link } from 'react-router-dom';
import Snow_tree from '../../assets/Icons/Snow_tree.png';
import Trail_running from '../../assets/Icons/Trail_running.png';
import Gears from '../../assets/Icons/Gears.png';
import Stairs from '../../assets/Icons/Stairs.png';


const Training = () => {
  return (
    <div className="m_container_training" id="m_container_training">
      <div className="m_image-container" id="m_image-container">
        <img src={Mobile_training} alt="About_img" />
      </div>
      <div className="m_training-grid">
        <div className="m_training-item">
          <img src={Snow_tree} alt="Icon1" className="m_training-icon" />
          <div className="m_training_text">
          <p>Классика, конек и Double Poling</p>
            <p>Освойте технику</p>
          </div>
        </div>
        <div className="m_training-item">
          <img src={Trail_running} alt="Icon1" className="m_training-icon" />
          <div className="m_training_text">
            <p>Вариативность и комфорт</p>
            <p>Гибкие тренировочные программы</p>
          </div>
        </div>
        <div className="m_training-item">
          <img src={Gears} alt="Icon1" className="m_training-icon" />
          <div className="m_training_text">
            <p>Современные методы</p>
            <p>Традиции и инновации</p>
          </div>
        </div>
        <div className="m_training-item">
          <img src={Stairs} alt="Icon1" className="m_training-icon" />
          <div className="m_training_text">
            <p>Мотивация и поддержка</p>
            <p>Учет интересов спортсмена</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Training;

