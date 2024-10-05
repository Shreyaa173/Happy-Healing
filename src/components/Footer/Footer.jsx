import React from "react";
import logo from "./LogoWOBG.png";
import "./Footer.css";

function Footer() {
  return (
    <div>
      <div className="footer">
        <div className="footer-top">
          <div className="left">
            <div className="nav-icon">
              <img src={logo} alt="" className="logo" />
              <p>Happy Healing</p>
            </div>
            <div className="about-text">
              <p>
                Happy Healing, a website dedicated to nurturing mental
                well-being through a holistic approach. It offers a wide range
                of resources, from meditation techniques, sound therapy, AI bot
                consultation to daily affirmations. All presented with the help
                of a cute turtle partner who will accompany you on your healing
                journey.
              </p>
            </div>
          </div>

          <div className="right">
            <div className="resources1">
              <div className="first">
                <h3>Quick Links</h3>
                <ul>
                  <li>
                    <a href="/">Home</a>
                  </li>
                  <li>
                    <a href="/healing">Healing</a>
                  </li>
                  <li>
                    <a href="/faq">FAQ / Help</a>
                  </li>
                  <li>
                    <a href="/resources">Resources</a>
                  </li>
                  <li>
                    <a href="/mindfulness">Mindfulness</a>
                  </li>
                </ul>
              </div>
              <div className="second">
                <h3>Connect with us</h3>
                <ul>
                  <li>
                    <a href="/">Instagram</a>
                  </li>
                  <li>
                    <a href="/">Facebook</a>
                  </li>
                  <li>
                    <a href="/">Twitter</a>
                  </li>
                  <li>
                    <a href="/">Linkedin</a>
                  </li>
                  <li>
                    <a href="/">Youtube</a>
                  </li>
                </ul>
              </div>
              <div className="third">
                <h3>Subscribe to our NewsLetter</h3>
                <h4 className="subscribe-text">
                  Stay in the loop and subscribe to Code book's Newsletter
                </h4>
                <div className="search">
                  <input
                    type="text"
                    placeholder="Enter your email"
                    spellcheck="false"
                  />
                  <button>
                    <i className="bx bx-right-arrow-alt"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="foot">
        <p>&copy; 2024 Happy Healing. All Rights Reserved.</p>
      </div>
    </div>
  );
}

export default Footer;
