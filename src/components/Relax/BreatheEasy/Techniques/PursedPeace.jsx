import React from 'react';
import BreathingLayout from './BreathingLayout';

const PursedPeace = () => {
  const name = "Pursed Peace";
  const actualname = "Pursed Lip Breathing";
  const description = `
    Helps to control shortness of breath by using pursed lips.<br /><br />
    <div class="step">- Inhale deeply through your nose for a count of 2.</div>
    <div class="step">- Purse your lips as if you're going to whistle.</div>
    <div class="step">- Exhale slowly through your pursed lips for a count of 4.</div>
    <div class="step">- Repeat for several cycles, focusing on the control of your breath.</div>
  `;
  const videoSrc = "/BreathBall/PursedLip.mp4";

  return (
    <BreathingLayout
      name={name}
      actualname={actualname}
      description={description}
      videoSrc={videoSrc}
    />
  );
};

export default PursedPeace;