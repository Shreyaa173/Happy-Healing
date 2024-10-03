// src/App.js

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Importing Components
import Home from "./components/Home/Home";
import Relax from "./components/Relax/Relax";
import BreathingTechniques from "./components/Relax/BreatheEasy/BreatheEasy";
import BellyBliss from "./components/Relax/BreatheEasy/Techniques/BellyBliss";
import Resources from "./components/Resources/Resources";
import Faq from "./components/Faq/Faq";
import Navbar from "./components/Home/Navbar/Navbar";
import Login from "./components/Login/Login";
import Grid from "./components/Grid/Grid";

function App() {
  return (
    <>
     <Navbar />
     <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/healing" element={<Grid />} />
        <Route path="/mindfulness" element={<Relax />} />
          <Route path="/mindfulness/breathe-easy" element={<BreathingTechniques />} />
            <Route path="/mindfulness/breathe-easy/belly-bliss" element={<BellyBliss />} /> 
        <Route path="/resources" element={<Resources />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
