import React from "react";
import "./Facilities.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const Facilities = () => {
  return (
    <div className="about-us">
      <h1>Why Us?</h1>
      <div className="about">
        
        <div className="container-card">
          <div className="content">
            <h2>Multimedia Resource Library</h2>
            <a href="/resources"><p>
              Explore our extensive Multimedia Resource Library, designed to provide a diverse range of materials that cater to different learning styles. From informative videos and insightful podcasts to engaging articles and interactive tools, we aim to enrich your understanding of mental health. Discover resources that inspire, educate, and empower you on your journey to well-being!
            </p></a>
          </div>
        </div>

        <div className="container-card">
          <div className="content">
            <h2>Healing Mantras</h2>
            <a href="/healing"><p>
              Dive into our collection of Healing Mantras, carefully curated to promote positivity and self-empowerment. These affirmations are designed to uplift your spirit and reinforce your inner strength. Repeat these phrases daily to cultivate a mindset of peace, resilience, and love. Embrace the transformative power of words and nurture your mental health with each mantra!
            </p></a>
          </div>
        </div>

        <div className="container-card">
          <div className="content">
            <h2>Guided Meditation</h2>
            <a href="/mindfulness"><p>
              Join us for Guided Meditation sessions that offer a serene escape from the hustle and bustle of daily life. Our guided practices are tailored to help you relax, focus, and connect with your inner self. Whether you're a beginner or experienced meditator, our soothing audio sessions provide a perfect way to enhance mindfulness and reduce stress. Take a moment for yourself and discover the tranquility within!
            </p></a>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Facilities;
