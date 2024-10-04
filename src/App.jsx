// src/App.js

import React from "react";
import { Routes, Route } from "react-router-dom";

// Importing Components
import Home from "./components/Home/Home";
import Relax from "./components/Relax/Relax";

import BreathingTechniques from "./components/Relax/BreatheEasy/BreatheEasy";
import BellyBliss from "./components/Relax/BreatheEasy/Techniques/BellyBliss";
import BoxOfCalm from "./components/Relax/BreatheEasy/Techniques/BoxOfcalm";
import BuzzingBumblebee from "./components/Relax/BreatheEasy/Techniques/BuzzingBee";
import KapalabhatiKickstart from "./components/Relax/BreatheEasy/Techniques/KapalKick";
import NostrilNavigator from "./components/Relax/BreatheEasy/Techniques/Nostrilnav";
import PursedPeace from "./components/Relax/BreatheEasy/Techniques/PursedPeace";
import SlumberSound from "./components/Relax/BreatheEasy/Techniques/SlumberSound";


import Resources from "./components/Resources/Resources";
import Faq from "./components/Faq/Faq";
import Navbar from "./components/Home/Navbar/Navbar";
import Login from "./components/Login/Login";
import Grid from "./components/Grid/Grid";

function App() {
  return (
    <>
     <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/healing" element={<Grid />} />
        <Route path="/mindfulness" element={<Relax />} />
          <Route path="/mindfulness/breathe-easy" element={<BreathingTechniques />} />
            <Route path="/mindfulness/breathe-easy/belly-bliss" element={<BellyBliss />} /> 
            <Route path="/mindfulness/breathe-easy/box-of-calm" element={<BoxOfCalm />} /> 
            <Route path="/mindfulness/breathe-easy/buzzing-bumblebee" element={<BuzzingBumblebee />} /> 
            <Route path="/mindfulness/breathe-easy/kapalbhati-kickstart" element={<KapalabhatiKickstart />} /> 
            <Route path="/mindfulness/breathe-easy/pursed-peace" element={<PursedPeace />} /> 
            <Route path="/mindfulness/breathe-easy/nostril-navigator" element={<NostrilNavigator />} /> 
            <Route path="/mindfulness/breathe-easy/slumber-sound" element={<SlumberSound />} /> 
        <Route path="/resources" element={<Resources />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
