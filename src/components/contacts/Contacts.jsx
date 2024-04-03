import React from 'react';
import { useState } from 'react';
import './contacts.css';
function Contacts() { 
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  
  const handleSubmit = (event) => {
      event.preventDefault();
      // Здесь вы можете обрабатывать отправку данных формы
      console.log('Отправлено:', { name, email, message });
  };

  return (
      <form onSubmit={handleSubmit}>
          <div id="contacts">
              <label htmlFor="name">Имя:</label>
              <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                  required
              />
          </div>
          <div>
              <label htmlFor="email">Email:</label>
              <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  required
              />
          </div>
          <div>
              <label htmlFor="message">Сообщение:</label>
              <textarea
                  id="message"
                  value={message}
                  onChange={(event) => setMessage(event.target.value)}
                  required
              />
          </div>
          <button type="submit">Отправить</button>
      </form>
  );
}

export default Contacts

