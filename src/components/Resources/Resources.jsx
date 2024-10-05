import React from 'react';
import { Link } from 'react-router-dom';
import "./Resources.css";
import Logo from './Images/Logo.jpg';

import Article from './Images/Article.jpg';
import Video from './Images/Video.png';
import Community from './Images/CommSupp01.png';

const Resources = () => {
  return (
    <div className="resources-page">

      <Link to="/resources/articles" className="resource-container">
        <img src={Article} alt="Articles" className="resource-image" />
        <div className="resource-content">
          <h2>Articles</h2>
          <p>Explore articles covering various topics related to wellness.</p>
        </div>
      </Link>
      
      <Link to="/resources/videos" className="resource-container">
        <img src={Video} alt="Videos" className="resource-image" />
        <div className="resource-content">
          <h2>Videos</h2>
          <p>Watch videos on mindfulness and relaxation techniques.</p>
        </div>
      </Link>

      <Link to="/resources/community-support" className="resource-container">
        <img src={Community} alt="Community Support" className="resource-image" />
        <div className="resource-content">
          <h2>Community Support</h2>
          <p>Connect with others and share your experiences.</p>
        </div>
      </Link>

    </div>
  );
};

export default Resources;