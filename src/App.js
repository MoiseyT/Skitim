
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Home } from './page/Home';
import { Training_page } from './page/Training_page';
import React from 'react';
import { I18nextProvider } from 'react-i18next';
import i18n from './page/i18n.js'
import { Mobile_home } from './page/Mobile_home';

function App() {
  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

  return (
    <I18nextProvider i18n={i18n}> 
    <Router>
        <Routes>   
          {isMobile && <Route path="/" element={<Navigate to="/Mobile_home" />} />}
          <Route exact path="/" element={<Home />} />
          <Route exact path="/Training_page" element={<Training_page />} />
          <Route exact path="/Mobile_home" element={<Mobile_home />} />
        </Routes>
    </Router>
    </I18nextProvider>
  )
}

export default App

