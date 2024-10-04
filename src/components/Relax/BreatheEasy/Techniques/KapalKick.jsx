import React from 'react';
import BreathingLayout from './BreathingLayout';

const KapalabhatiKickstart = () => {
  const name = "Kapalabhati Kickstart";
  const actualname = "Kapalabhati Breathing";
  const description = `
    A rapid, forceful breathing technique that energizes the body.<br /><br />
    <div class="step">- Inhale deeply through your nose.</div>
    <div class="step">- Exhale forcefully through your nose, pulling your abdomen in.</div>
    <div class="step">- Allow your belly to relax as you inhale again.</div>
    <div class="step">- Repeat this cycle rapidly for 20 breaths, focusing on energizing your body.</div>
  `;
  const videoSrc = "/BreathBall/Kapalbhati.mp4";

  return (
    <BreathingLayout
      name={name}
      actualname={actualname}
      description={description}
      videoSrc={videoSrc}
    />
  );
};

export default KapalabhatiKickstart;