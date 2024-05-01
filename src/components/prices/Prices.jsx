import React from 'react';
import './prices.css';
import { Trans, useTranslation } from 'react-i18next';

const Prices = () => {
  const { t } = useTranslation();

  const navContacts = [{ text: <Trans i18nKey="button_contact"/>, href: "#contacts_en" }];

  const scrollToContacts = (href) => {
    const element = document.getElementById(href.substring(1));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const renderTrainingBlock = ({ name, description, price }) => {
    return (
      <div className="block" id='price_en'>
        <div className="training_name">{name}</div>
        <div className='description_button_block'>
          <div className="training_description">{description}</div>
          <div className="block_button">
            <div className="price_size">{price}</div>
            <div className="bob">
              {navContacts.map((item, index) => (
                <div key={index} className="nav-item">
                  <button className="bottom-right-button" onClick={() => scrollToContacts(item.href)}>
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
    <div className="container_price">
      {trainingData.map((data, index) => (
        <div key={index}>
          {renderTrainingBlock(data)}
        </div>
      ))}
    </div>
  );
}

export default Prices