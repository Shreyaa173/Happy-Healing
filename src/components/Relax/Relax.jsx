import React from 'react';
import { Link } from 'react-router-dom';

import "./Relax.css";
import Image from './Images/Logo.jpg';

const Relax = () => {
  return (
    <div className="relax-page">

      <Link to="/mindfulness/breathe-easy" className="container">
        <img src={Image} alt="Breathing Techniques" className="container-image" />
        <div className="content">
          <h2>BreatheEasy</h2>
          <p>Master the art of controlled breathing to calm your mind and body.</p>
        </div>
      </Link>
      
      <Link to="/mindfulness/zen-meditate" className="container">
        <img src={Image} alt="ZenMaster" className="container-image" />
        <div className="content">
          <h2>ZenMaster</h2>
          <p>Engage in guided meditation sessions that lead you to inner peace.</p>
        </div>
      </Link>

      <Link to="/mindfulness/chill-pill" className="container">
        <img src={Image} alt="ChillPill" className="container-image" />
        <div className="content">
          <h2>ChillPill</h2>
          <p>Practical tips and techniques to help you relax and unwind quickly.</p>
        </div>
      </Link>

    </div>
  );
};

export default Relax;