import React from 'react';
import { Link } from 'react-router-dom';
import "./Resources.css"; // Create this CSS file with styles below
import Logo from './Images/Logo.jpg';

const Resources = () => {
  return (
    <div className="resources-page">

      <Link to="/resources/articles" className="resource-container">
        <img src={Logo} alt="Articles" className="resource-image" />
        <div className="resource-content">
          <h2>Articles</h2>
          <p>Explore articles covering various topics related to wellness.</p>
        </div>
      </Link>
      
      <Link to="/resources/videos" className="resource-container">
        <img src={Logo} alt="Videos" className="resource-image" />
        <div className="resource-content">
          <h2>Videos</h2>
          <p>Watch videos on mindfulness and relaxation techniques.</p>
        </div>
      </Link>

      <Link to="/resources/community-support" className="resource-container">
        <img src={Logo} alt="Community Support" className="resource-image" />
        <div className="resource-content">
          <h2>Community Support</h2>
          <p>Connect with others and share your experiences.</p>
        </div>
      </Link>

      <Link to="/resources/news" className="resource-container">
        <img src={Logo} alt="News" className="resource-image" />
        <div className="resource-content">
          <h2>News</h2>
          <p>Stay updated on the latest wellness trends and resources.</p>
        </div>
      </Link>

    </div>
  );
};

export default Resources;