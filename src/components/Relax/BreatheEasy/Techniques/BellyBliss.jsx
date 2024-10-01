import React, { useEffect, useState } from 'react';
import './BellyBliss.css';

const BellyBliss = () => {
  const name = "Belly Bliss";
  const actualname = "Diaphragmatic Breathing";
  const description = "This technique involves diaphragmatic breathing to promote relaxation and calmness.";

  const BreathingAnimationBellyBliss = () => {
    const [lines, setLines] = useState([]);

    useEffect(() => {
      const createLine = () => {
        setLines(prevLines => [
          ...prevLines,
          { id: Date.now() }
        ]);
      };

      const interval = setInterval(createLine, 1000); // Create new line pair every second

      return () => clearInterval(interval); // Clean up interval on unmount
    }, []);

    return (
      <div className="breathing-box">
        {lines.map(line => (
          <div key={line.id} className="line-pair">
            <div className="line-up"></div>
            <div className="line-down"></div>
          </div>
        ))}
        <div className="breathing-ball"></div>
      </div>
    );
  };

  return (
    <div className="breathing-technique">
      <h1 className="technique-heading">{name} Breathing</h1>
      <h2 className="technique-name">{actualname}</h2>
      <p className="technique-description">{description}</p>
      <div className="animation-box">
        <BreathingAnimationBellyBliss />
      </div>
    </div>
  );
};

export default BellyBliss;