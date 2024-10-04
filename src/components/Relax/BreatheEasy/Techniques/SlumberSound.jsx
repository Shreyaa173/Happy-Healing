import React from 'react';
import BreathingLayout from './BreathingLayout';

const SlumberSoundBreathing = () => {
  const name = "Slumber Sound Breathing";
  const actualname = "4-7-8 Breathing";
  const description = `
    A simple method to help you fall asleep faster.<br /><br />
    <div class="step">- Inhale quietly through your nose for a count of 4.</div>
    <div class="step">- Hold your breath for a count of 7.</div>
    <div class="step">- Exhale completely through your mouth for a count of 8.</div>
    <div class="step">- Repeat this cycle for four breaths, focusing on relaxation.</div>
  `;
  const videoSrc = "/BreathBall/Breathing478.mp4";

  return (
    <BreathingLayout
      name={name}
      actualname={actualname}
      description={description}
      videoSrc={videoSrc}
    />
  );
};

export default SlumberSoundBreathing;