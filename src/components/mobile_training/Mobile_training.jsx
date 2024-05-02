import React from 'react';
import './mobile_training.css';
import Mobile_training from '../../assets/Mobile_training.jpg';
import { Link } from 'react-router-dom';
import Snow_tree from '../../assets/Icons/Snow_tree.png';
import Trail_running from '../../assets/Icons/Trail_running.png';
import Gears from '../../assets/Icons/Gears.png';
import Stairs from '../../assets/Icons/Stairs.png';
import { Trans, useTranslation } from 'react-i18next';

const Training = () => {
  const { t } = useTranslation();
  return (
    <div className="m_container_training" id="m_container_training">
      <div className="m_image-container" id="m_image-container">
        <img src={Mobile_training} alt="About_training_img" />
      </div>
      <div className="m_training-grid">
        <div className="m_training-item">
          <img src={Snow_tree} alt="winter_training" className="m_training-icon" />
          <div className="m_training_text">
          <Trans i18nKey="training_block1"/>
            <p><Trans i18nKey="training_block2"/></p>
          </div>
        </div>
        <div className="m_training-item">
          <img src={Trail_running} alt="Spring_training" className="m_training-icon" />
          <div className="m_training_text">
          <Trans i18nKey="training_block3"/>
            <p><Trans i18nKey="training_block4"/></p>
          </div>
        </div>
        <div className="m_training-item">
          <img src={Gears} alt="Summer_training" className="m_training-icon" />
          <div className="m_training_text">
          <Trans i18nKey="training_block5"/>
            <p><Trans i18nKey="training_block6"/></p>
          </div>
        </div>
        <div className="m_training-item">
          <img src={Stairs} alt="Autumn_training" className="m_training-icon" />
          <div className="m_training_text">
          <Trans i18nKey="training_block7"/>
            <p><Trans i18nKey="training_block8"/></p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Training;

