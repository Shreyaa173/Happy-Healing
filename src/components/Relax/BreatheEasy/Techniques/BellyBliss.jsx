import React from 'react';
import BreathingLayout from './BreathingLayout';

const BellyBliss = () => {
  const name = "Belly Bliss";
  const actualname = "Diaphragmatic Breathing";
  const description = `
    This technique involves diaphragmatic breathing to promote relaxation and calmness.<br /><br/>
    <div class="step">- Inhale deeply through your nose while the ball moves up.</div>
    <div class="step">- Allow your belly to expand as you fill your lungs.</div>
    <div class="step">- Hold your breath for a moment at the top.</div>
    <div class="step">- Exhale slowly through your mouth while the ball moves down.</div>
    <div class="step">- Repeat for several cycles, focusing on the rise and fall of the ball.</div>
  `;
  const videoSrc = "/BreathBall/DiaphgrahmicBreathing.mp4";

  return (
    <BreathingLayout
      name={name}
      actualname={actualname}
      description={description}
      videoSrc={videoSrc}
    />
  );
};

export default BellyBliss;