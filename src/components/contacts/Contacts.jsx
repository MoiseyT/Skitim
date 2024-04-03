// ContactForm.js
import React, { useState } from 'react';
import axios from 'axios';
import './contacts.css';

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
    <div id="contacts">
      <h2>Contact Form</h2>
      {sent ? (
        <p>Thank you for your message! We'll get back to you soon.</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <div>
            <label>Name:</label>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
          </div>
          <div>
            <label>Email:</label>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          </div>
          <div>
            <label>Message:</label>
            <textarea value={message} onChange={(e) => setMessage(e.target.value)} required />
          </div>
          <button type="submit">Send</button>
        </form>
      )}
    </div>
  );
}

export default Contacts;
