
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './page/Home';
import {Home_ru} from './page/Home_ru';
import {Home_de} from './page/Home_de';
import {Training_page} from './page/Training_page';
import {Training_page_ru} from './page/Training_page_ru';
import {Training_page_de} from './page/Training_page_de';


function App () {
return (
  <Router>
    <Routes>
      <Route exact path = "/" element={<Home/>}/>
      <Route exact path = "/Training_page" element={<Training_page/>}/>
      <Route exact path = "/Training_page_ru" element={<Training_page_ru/>}/>
      <Route exact path = "/Home_ru" element={<Home_ru/>}/>
      <Route exact path = "/Training_page_de" element={<Training_page_de/>}/>
      <Route exact path = "/Home_de" element={<Home_de/>}/>
    </Routes>
  </Router>
)
}

export default App

