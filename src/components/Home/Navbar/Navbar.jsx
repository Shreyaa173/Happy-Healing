import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false); // State to manage menu visibility
  const navigate = useNavigate();
  const location = useLocation();

  const pathsWithoutBackButton = ['/', '/healing', '/mindfulness', '/resources', '/faq'];
  const showBackButton = !pathsWithoutBackButton.includes(location.pathname);

  const handleBack = () => {
    navigate(-1); // Go back to the previous page
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen); // Toggle the menu
  };

  return (
    <div className="nav">
      {showBackButton && (
        <div className="back-arrow" onClick={handleBack}>
          ←
        </div>
      )}
      <div className="logo">
        <p>An Athena's Aces Project</p>
      </div>

      {/* Hamburger Icon */}
      <div className="hamburger" onClick={toggleMenu}>
        &#9776; {/* Hamburger symbol */}
      </div>

      {/* Navigation Items */}
      <div className={`navItems ${menuOpen ? 'show' : ''}`}>
        <ul>
          <li className='list'>
            <a href="/">Home</a>
          </li>
          <li className='list'>
            <a href="/healing">Healings</a>
          </li>
          <li className='list'>
            <a href="/mindfulness">Mindfulness</a>
          </li>
          <li className='list'>
            <a href="/resources">Resources</a>
          </li>
          <li className='list'>
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