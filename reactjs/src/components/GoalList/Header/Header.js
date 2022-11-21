import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Jet1 from "../../Jet1/Jet1";
import Jet2 from "../../Jet2/Jet2";
import SpareParts from "../../SpareParts/SpareParts";
import './Header.css'

const Header = () => {
  return (
    <Router>
      <div>
      <ul className="header">
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to="./Jet1">Jet 1</Link>
        </li>
        <li>
          <Link to="./Jet2">Jet 2</Link>
        </li>
        <li>
          <Link to="./SpareParts">Spare Parts</Link>
        </li>
      </ul>
      <Routes>
        <Route path='Jet1' element={<Jet1/>}/>
        <Route path="Jet2" element={<Jet2/>}/>
        <Route path='SpareParts' element={<SpareParts/>}/>
      </Routes>
      </div>
    </Router>
  );
};

export default Header;
