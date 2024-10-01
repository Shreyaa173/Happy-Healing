import "./Login.css"
import React, { useState } from 'react';
import 'boxicons/css/boxicons.min.css';
import whiteOutline from './assets/white-outline.png'; // Adjust the path
import dots from './assets/dots.png';
import coin from './assets/coin.png';
import spring from './assets/spring.png';
import rocket from './assets/rocket.png';
import cloud from './assets/cloud.png';
import stars from './assets/stars.png';

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);

  const toggleForms = () => {
    setIsLogin(!isLogin);
  };

  return (
    <>
    <div className="login">
    <div className="form-container">
      <div className="col col-1">
        <div className="image-layer">
          <img src={whiteOutline} alt="" className="form-image-main" />
          <img src={dots} alt="" className="form-image dots" />
          <img src={coin} alt="" className="form-image coin" />
          <img src={spring} alt="" className="form-image spring" />
          <img src={rocket} alt="" className="form-image rocket" />
          <img src={cloud} alt="" className="form-image cloud" />
          <img src={stars} alt="" className="form-image stars" />
        </div>
        <p className="featured-words">
          You are few minutes way to boost yourself with
          <span> Happy Healing</span>
        </p>
      </div>
      <div className="col col-2">
        <div className="btn-box">
          <button
            className={`btn ${isLogin ? 'btn-1 active' : 'btn-1'}`}
            onClick={toggleForms}
          >
            Sign In
          </button>
          <button
            className={`btn ${!isLogin ? 'btn-2 active' : 'btn-2'}`}
            onClick={toggleForms}
          >
            Sign Up
          </button>
        </div>

        <div className="forms">
          {/* Login Form Container */}
          {isLogin ? (
            <div className="login-form" id="login-form">
              <div className="form-title">
                <span>Sign In</span>
              </div>
              <div className="form-inputs">
                <div className="input-box">
                  <input
                    type="text"
                    className="input-field"
                    placeholder="Username"
                    required
                  />
                  <i className="bx bx-user icon"></i>
                </div>
                <div className="input-box">
                  <input
                    type="password"
                    className="input-field"
                    placeholder="Password"
                    required
                  />
                  <i className="bx bx-lock-alt icon"></i>
                </div>
                <div className="forgot-pass">
                  <a href="#">Forgot Password?</a>
                </div>
                <div className="input-box">
                  <button className="input-submit">
                    <span>Sign In</span>
                    <i className="bx bx-right-arrow-alt"></i>
                  </button>
                </div>
              </div>
              <div className="social-login">
                <i className="bx bxl-google"></i>
                <i className="bx bxl-facebook"></i>
                <i className="bx bxl-twitter"></i>
              </div>
            </div>
          ) : (
            <div className="register-form" id="register-form">
              <div className="form-title">
                <span>Create Account</span>
              </div>
              <div className="form-inputs">
                <div className="input-box">
                  <input
                    type="text"
                    className="input-field"
                    placeholder="Email"
                    required
                  />
                  <i className="bx bx-envelope icon"></i>
                </div>
                <div className="input-box">
                  <input
                    type="text"
                    className="input-field"
                    placeholder="Username"
                    required
                  />
                  <i className="bx bx-user icon"></i>
                </div>
                <div className="input-box">
                  <input
                    type="password"
                    className="input-field"
                    placeholder="Password"
                    required
                  />
                  <i className="bx bx-lock-alt icon"></i>
                </div>
                <div className="forgot-pass">
                  <a href="#">Forgot Password?</a>
                </div>
                <div className="input-box">
                  <button className="input-submit">
                    <span>Sign Up</span>
                    <i className="bx bx-right-arrow-alt"></i>
                  </button>
                </div>
              </div>
              <div className="social-login">
                <i className="bx bxl-google"></i>
                <i className="bx bxl-facebook"></i>
                <i className="bx bxl-twitter"></i>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
    </div>
    </>
  );
};

export default Login;

