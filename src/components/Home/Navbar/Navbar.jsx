import React from "react";
import './Navbar.css'

const Navbar = () => {
  return (
    <>
      <div className="nav">
        <div className="logo">
          <p>An Athena's Aces Project</p>
        </div>
        <div className="navItems">
          <ul>
            <li>
              <a href="/">Home</a>
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
          <button className="btn">Login</button>
        </div>
      </div>
    </>
  );
};

export default Navbar;