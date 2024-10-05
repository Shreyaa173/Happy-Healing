import React from 'react';
import './ZenMaster.css';

const ZenMaster = () => {
  return (
    <div className="zen-master-page">
      <header className="zen-header">
        <h1>ZenMaster</h1>
        <p>Engage in guided meditation sessions that lead you to inner peace.</p>
      </header>

      <div className="zen-content">
        <section className="meditation-section">
          <h2>Find Your Inner Peace</h2>
          <p>
            Explore our curated selection of guided meditation sessions to help you relieve stress, reduce anxiety, and
            improve mindfulness.
          </p>
          <button className="start-session-button">
            <a href="https://youtu.be/uTN29kj7e-w?si=Cx80lJjgERs3dWWv" target="_blank" rel="noopener noreferrer">Start a Session</a>
          </button>
        </section>

        <section className="benefits-section">
          <h2>Benefits of Meditation</h2>
          <ul>
            <li>Reduced stress and anxiety</li>
            <li>Improved focus and concentration</li>
            <li>Enhanced emotional health</li>
            <li>Better sleep quality</li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default ZenMaster;