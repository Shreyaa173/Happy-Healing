import React from 'react';
import BreathingLayout from "./BreathingLayout/BreathingLayout";

const NostrilNavigator = () => {
  const name = "Nostril Navigator";
  const actualname = "Alternate Nostril Breathing";
  const description = `
    Balances the body and mind through alternate nostril breathing.<br /><br />
    <div class="step">- Close your right nostril with your thumb and inhale through your left nostril.</div>
    <div class="step">- Close your left nostril with your ring finger, and exhale through your right nostril.</div>
    <div class="step">- Inhale through your right nostril, then close it and exhale through your left nostril.</div>
    <div class="step">- Continue alternating for several cycles.</div>
  `;
  const videoSrc = "/BreathBall/AlternateNostril.mp4";

  return (
    <BreathingLayout
      name={name}
      actualname={actualname}
      description={description}
      videoSrc={videoSrc}
    />
  );
};

export default NostrilNavigator;