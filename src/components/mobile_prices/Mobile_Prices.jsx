import React from 'react';
import './mobile_prices.css';
import { Trans, useTranslation } from 'react-i18next';

const Mobile_Prices = () => {
  const { t } = useTranslation();

  const navContacts = [{ text: <Trans i18nKey="button_contact"/>, href: "#m_contacts_en" }];

  const scrollToContacts = (href) => {
    const element = document.getElementById(href.substring(1));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const renderTrainingBlock = ({ name, description, price }) => {
    return (
      <div className="m_block" >
        <div className="m_training_name">{name}</div>
        <div className='m_description_button_block'>
          <div className="m_training_description">{description}</div>
          <div className="m_block_button">
            <div className="m_price_size">{price}</div>
            <div>
              {navContacts.map((item, index) => (
                <div key={index} className="nav-item">
                  <button className="m_bottom-right-button" onClick={() => scrollToContacts(item.href)}>
                    {item.text}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  };

  const trainingData = [
    {
      name: <Trans i18nKey="price_name_head_block1" />,
      description: <Trans i18nKey="price_description_block1" />,
      price: (
        <>
          60 min - 60 CHF
          <br />
          90 min - 80 CHF
        </>
      ),
    },
    {
      name: <Trans i18nKey="price_name_head_block2" />,
      description: <Trans i18nKey="price_description_block2" />,
      price: (
        <>
          60 min - 110 CHF
          <br />
          90 min - 140 CHF
        </>
      ),
    },
    {
      name: <Trans i18nKey="price_name_head_block3" />,
      description: <Trans i18nKey="price_description_block3" />,
      price: (
        <>
          60 min - 150 CHF
          <br />
          90 min - 200 CHF
        </>
      ),
    },
    {
      name: <Trans i18nKey="price_name_head_block4" />,
      description: <Trans i18nKey="price_description_block4" />,
      price: (
        <>
          300 CHF<Trans i18nKey="remote_plan_price" />
          <br />
        </>
      ),
    },
    {
      name: <Trans i18nKey="price_name_head_block5" />,
      description: <Trans i18nKey="price_description_block5" />,
      price: (
        <>
          <Trans i18nKey="hiking_price" />150 CHF
          <br />
        </>
      ),
    },
    {
      name: <Trans i18nKey="price_name_head_block6" />,
      description: <Trans i18nKey="price_description_block6" />,
      price: (
        <>
          <Trans i18nKey="abonemet_5" />
          <br />
          <Trans i18nKey="abonemet_10" />
        </>
      ),
    },
  ];

  return (
    <div className="m_container_price">
      {trainingData.map((data, index) => (
        <div key={index}>
          {renderTrainingBlock(data)}
        </div>
      ))}
    </div>
  );
}

export default Mobile_Prices