import React from 'react';
import './BreathingLayout.css';

const BreathingLayout = ({ name, actualname, description, videoSrc }) => {
  return (
    <div className="breathing-technique">
      <div className="breathing-content">
        <h1 className="technique-heading">{name} Breathing</h1>
        <h2 className="technique-name">{actualname}</h2>
        <p className="technique-description" dangerouslySetInnerHTML={{ __html: description }} />
        <div className="animation-box">
          <video width="355" height="200" controls loop autoPlay muted>
            <source src={videoSrc} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </div>
  );
};

export default BreathingLayout;