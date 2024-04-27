
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './page/Home';
import { Training_page } from './page/Training_page';
import React from 'react';
import { I18nextProvider } from 'react-i18next';
import i18n from './page/i18n.js'

function App() {


  return (
    <I18nextProvider i18n={i18n}> 
    <Router>
        <Routes>   
          <Route exact path="/" element={<Home />} />
          <Route exact path="/Training_page" element={<Training_page />} />
        </Routes>
    </Router>
    </I18nextProvider>
  )
}

export default App

