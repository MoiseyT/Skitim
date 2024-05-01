import React from 'react';
import './training.css';
import Training_img from '../../assets/Training_img.png';
import { Link } from 'react-router-dom';
import Snow_tree from '../../assets/Icons/Snow_tree.png';
import Trail_running from '../../assets/Icons/Trail_running.png';
import Gears from '../../assets/Icons/Gears.png';
import Stairs from '../../assets/Icons/Stairs.png';
import { Trans, useTranslation } from 'react-i18next';

const Training = () => {
  const { t } = useTranslation();

  return (
    <div class="container_training" id="container_training" >
      <div className="image-container" id="image-container">
        <img src={Training_img} alt="About_img" />
        <div className="button-container">
          <Link to="/Training_page">
            <button className='training_button'>
            <Trans i18nKey="button_training"/>
            </button>
          </Link>
        </div>
      </div>
      <div className="training-row">
        <div className="training-item">
          <img src={Snow_tree} alt="Icon1" className="training-icon" />
          <div className="training_text">
              <Trans i18nKey="training_block1"/>
            <p><Trans i18nKey="training_block2"/></p>
          </div>
        </div>
        <div className="training-item">
          <img src={Trail_running} alt="Icon1" className="training-icon" />
          <div className="training_text">
            <Trans i18nKey="training_block3"/>
            <p><Trans i18nKey="training_block4"/></p>
          </div>
        </div>
        <div className="training-item">
          <img src={Gears} alt="Icon1" className="training-icon" />
          <div className="training_text">
            <Trans i18nKey="training_block5"/>
            <p><Trans i18nKey="training_block6"/></p>
          </div>
        </div>
        <div className="training-item">
          <img src={Stairs} alt="Icon1" className="training-icon" />
          <div className="training_text">
            <Trans i18nKey="training_block7"/>
            <p><Trans i18nKey="training_block8"/></p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Training

