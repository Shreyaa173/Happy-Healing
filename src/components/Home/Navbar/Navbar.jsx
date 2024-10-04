// src/components/Home/Navbar/Navbar.jsx

import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation(); // Ensure this is defined before using it

  const pathsWithoutBackButton = ['/', '/healing', '/mindfulness', '/resources', '/faq']; // Add any paths where the back button should not show

  // Check if the current path is not one of the defined paths
  const showBackButton = !pathsWithoutBackButton.includes(location.pathname);

  const handleBack = () => {
    navigate(-1); // Go back to the previous page
  };

  return (
    <div className="nav">
      {showBackButton && (
        <div className="back-arrow" onClick={handleBack}>
          ← {/* Unicode Left Arrow */}
        </div>
      )}
      <div className="logo">
        <p>An Athena's Aces Project</p>
      </div>
      <div className="navItems">
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/healing">Healings</a>
          </li>
          <li>
            <a href="/mindfulness">Mindfulness</a>
          </li>
          <li>
            <a href="/resources">Resources</a>
          </li>
          <li>
            <a href="/faq">FAQ</a>
          </li>
        </ul>
      </div>
      <div className="button">
        <button className="btn"><a href="/login">Login</a></button>
      </div>
    </div>
  );
}

export default Navbar;