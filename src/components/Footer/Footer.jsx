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
                Welcome to Code Book—your go-to resource hub for mastering
                coding. Whether you're a beginner or an experienced developer,
                we provide curated tutorials, coding challenges, and guides to
                enhance your skills across various programming languages and
                frameworks. Our mission is to create a community where learning
                to code is accessible, engaging, and fun for everyone.
              </p>
            </div>
          </div>

          <div className="right">
            <div className="resources1">
              <div className="first">
                <h3>Quick Links</h3>
                <ul>
                  <li>
                    <a href="home.html">Home</a>
                  </li>
                  <li>
                    <a href="about-us.html">About Us</a>
                  </li>
                  <li>
                    <a href="faq.html">FAQ / Help</a>
                  </li>
                  <li>
                    <a href="privacy-policy.html">Privacy Policy</a>
                  </li>
                  <li>
                    <a href="terms-of-service.html">Terms of Service</a>
                  </li>
                </ul>
              </div>
              <div className="second">
                <h3>Connect with us</h3>
                <ul>
                  <li>
                    <a href="home.html">Instagram</a>
                  </li>
                  <li>
                    <a href="about-us.html">Github</a>
                  </li>
                  <li>
                    <a href="faq.html">Twitter</a>
                  </li>
                  <li>
                    <a href="privacy-policy.html">Linkedin</a>
                  </li>
                  <li>
                    <a href="terms-of-service.html">Discord</a>
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
                  <box-icon name='right-arrow-alt'></box-icon>
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
