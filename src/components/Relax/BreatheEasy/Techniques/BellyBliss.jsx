import React, { useEffect, useState } from 'react';
import './BellyBliss.css';

const BellyBliss = () => {
  const name = "Belly Bliss";
  const actualname = "Diaphragmatic Breathing";
  const description = "This technique involves diaphragmatic breathing to promote relaxation and calmness.";

  // Belly Bliss Breathing Animation Component
  const BreathingAnimationBellyBliss = () => {
    const [blocks, setBlocks] = useState([]);

    useEffect(() => {
      const createBlock = () => {
        setBlocks(prevBlocks => [
          ...prevBlocks,
          { id: Date.now(), animation: 'animate' } // Add new block with animation class
        ]);
      };

      const interval = setInterval(createBlock, 1000); // Create a new block every second

      return () => clearInterval(interval); // Cleanup interval on unmount
    }, []);

    return (
      <div className="breathing-box">
        {blocks.map(block => (
          <div key={block.id} className={`breathing-block ${block.animation}`}></div>
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