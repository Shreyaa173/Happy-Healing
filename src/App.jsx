import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from "./components/Home/Home";
import Relax from "./components/Relax/Relax";
import Resources from "./components/Resources/Resources";
import Faq from "./components/Faq/Faq";
import Navbar from "./components/Home/Navbar/Navbar";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mindfulness" element={<Relax />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/faq" element={<Faq />} />
      </Routes>
    </Router>
  );
}

export default App;