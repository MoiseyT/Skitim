// ContactForm.js
import React, { useState } from 'react';
import axios from 'axios';
import './contacts_de.css';

function Contacts_de() {
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
    <div id="contacts">
      <h2>Kontakt</h2>
      {sent ? (
        <p>Thank you for your message! We'll get back to you soon.</p>
      ) : (
        <form onSubmit={handleSubmit} className="form-group">
          <div id="Name">
            <label>Name</label>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} 
            style={{ height: '2vw', width: '25vw' }} required />
          </div>
          <div id="Email">

            <label>Email</label>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)}
            style={{ height: '2vw', width: '25vw' }}  required />
          </div>
          <div id="Message">
            <label>Nachricht</label>
            <textarea value={message} onChange={(e) => setMessage(e.target.value)} 
            style={{ height: '8vw', width: '25vw' }} required />
          </div>
          <div className="button-sent-container">
          <button type="submit" id='button_send'>Senden</button>
          </div>
        </form>
      )}
    </div>
  );
}

export default Contacts_de;
