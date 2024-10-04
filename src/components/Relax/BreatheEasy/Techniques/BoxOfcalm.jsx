import React from 'react';
import BreathingLayout from './BreathingLayout/BreathingLayout';

const BoxOfCalm = () => {
  const name = "Box of Calm";
  const actualname = "Box Breathing";
  const description = `
    This technique helps calm the mind by focusing on even breath patterns.<br /><br />
    <div class="step">- Inhale through your nose for a count of 4 while the ball moves up.</div>
    <div class="step">- Hold your breath for a count of 4 at the top.</div>
    <div class="step">- Exhale slowly through your mouth for a count of 4 while the ball moves down.</div>
    <div class="step">- Hold your breath for a count of 4 at the bottom.</div>
    <div class="step">- Repeat the cycle several times, visualizing a box as you breathe.</div>
  `;
  const videoSrc = "/BreathBall/BoxBreathing.mp4";

  return (
    <BreathingLayout
      name={name}
      actualname={actualname}
      description={description}
      videoSrc={videoSrc}
    />
  );
};

export default BoxOfCalm;