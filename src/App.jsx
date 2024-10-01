import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from "./components/Home/Home";

import Relax from "./components/Relax/Relax";

import BreathingTechniques from "./components/Relax/BreatheEasy/BreatheEasy";
import BellyBliss from './components/Relax/BreatheEasy/Techniques/BellyBliss';

import Resources from "./components/Resources/Resources";
import Faq from "./components/Faq/Faq";
import Navbar from "./components/Home/Navbar/Navbar";

function App() {
  return (
    <>
      {/* <Login /> */}
      <Home />
      <Faq />
    </>
  )
}

export default App;