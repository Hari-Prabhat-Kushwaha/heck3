import React, { useState } from 'react';
import Navbar from './components/Navigation/Navbar/Navbar';
import Sidebar from './components/Navigation/sidebar/Sidebar';
import AddShops from './components/addShops/AddShops';

import {
  Routes,
  Route,
} from "react-router-dom";
import Home from './components/home/Home';
import Footer from './components/footer/Footer';
function App() {
  const [isopen, setisopen] = useState(false)
  const toggle = () => {
    setisopen(!isopen)
  }



  return (
    <>
      <Navbar toggle={toggle} />
      <Sidebar isopen={isopen} toggle={toggle} />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route exact path="/" element={<AddShops />} />
        
      </Routes>
      <Footer />
    </>
  );
}

export default App;
