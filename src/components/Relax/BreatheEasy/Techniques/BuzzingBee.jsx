import React from 'react';
import BreathingLayout from './BreathingLayout/BreathingLayout';

const BuzzingBumblebee = () => {
  const name = "Buzzing Bumblebee Breathing";
  const actualname = "Bhramari Breathing";
  const description = `
    A humming breath technique that calms the mind and body.<br /><br />
    <div class="step">- Inhale deeply through your nose.</div>
    <div class="step">- Close your ears with your thumbs and place your fingers on your forehead.</div>
    <div class="step">- Exhale slowly while making a humming sound, focusing on the vibration.</div>
    <div class="step">- Repeat for several cycles, letting the sound soothe you.</div>
  `;
  const videoSrc = "/BreathBall/Bhramari.mp4";

  return (
    <BreathingLayout
      name={name}
      actualname={actualname}
      description={description}
      videoSrc={videoSrc}
    />
  );
};

export default BuzzingBumblebee;