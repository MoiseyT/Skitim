// ContactForm.js
import React, { useState } from 'react';
import axios from 'axios';
import './contacts.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp, faTelegram, faInstagram } from '@fortawesome/free-brands-svg-icons';
import logo from '../../assets/logo.png';
import { Link } from 'react-router-dom';

function Contacts() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [sent, setSent] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('https://formspree.io/f/xvoewyke', { name, email, message });
      setSent(true);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className='contact_container'>
      <div id='contacts_en'>
        <div className='contact_me'>Связаться</div>
        {sent ? (
          <p>Thank you for your message! We'll get back to you soon.</p>
        ) : (
          <form onSubmit={handleSubmit} className="form-group">
            <div>
              <input id="Name_textarea_en" type="text" value={name} onChange={(e) => setName(e.target.value)}
                placeholder="Имя" required />
            </div>
            <div >
              <input id="Email_textarea_en" type="email" value={email} onChange={(e) => setEmail(e.target.value)}
                placeholder="Email" required />
            </div>
            <div>
              <textarea id="Message_textarea_en" value={message} onChange={(e) => setMessage(e.target.value)}
                placeholder="Сообщение" required />
            </div>
            <div className="button-sent-container_en">
              <button type="submit" id='button_send_en'>Отправить</button>
            </div>
          </form>
        )}
      </div>
      <div className='contact_final_description_en'>
        <div className='contact_final_description_text1_en'>
        Наслаждайся тренировками вместе со мной!
        </div>
        <div className='icons'>
          <a id='Whatsapp' href="https://api.whatsapp.com/send?phone=+41765444634" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faWhatsapp} style={{ color: '#25D366' }} />
          </a>
          <a id='Telegram' href="https://t.me/tdmoiseev" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faTelegram} style={{ color: '#0088cc' }} />
          </a>
          <a id='Instagram' href="https://www.instagram.com/moisey_ski" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faInstagram} style={{ color: '#E4405F' }} />
          </a>
        </div>
        <div className="center-logo-bottom">
          <img src={logo} alt="Logo" />
        </div></div>
    </div>
  );
}

export default Contacts;
