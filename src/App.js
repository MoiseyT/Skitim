
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './page/Home';

import { Training_page } from './page/Training_page';

import React from 'react';

function App() {


  return (
    <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/Training_page" element={<Training_page />} />
        </Routes>
    </Router>
  )
}

export default App

