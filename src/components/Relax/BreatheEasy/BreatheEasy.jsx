import React, { act } from 'react';
import { Link } from 'react-router-dom';

import './BreatheEasy.css';
import Image from '../Images/Logo.jpg';

import Breath01 from './Techniques/BreathingImages/Breath01.jpeg';
import Breath02 from './Techniques/BreathingImages/Breath02.png';
import Breath03 from './Techniques/BreathingImages/Breath03.jpeg';
import Breath04 from './Techniques/BreathingImages/Breath04.png';
import Breath05 from './Techniques/BreathingImages/Breath05.jpg';
import Breath06 from './Techniques/BreathingImages/Breath06.jpg';
import Breath07 from './Techniques/BreathingImages/Breath07.jpg';
import Breath08 from './Techniques/BreathingImages/Breath08.jpg';

const BreathingTechniques = () => {
  const techniques = [
    { 
      title: "Belly Bliss Breathing", 
      actualname: "Diaphragmatic Breathing",
      description: "Deep breathing to enhance relaxation and reduce stress.", 
      link: "/mindfulness/breathe-easy/belly-bliss",
      image: Breath01
    },
    { 
      title: "Box of Calm", 
      actualname: "Box Breathing",
      description: "A technique to calm the mind by focusing on breath patterns.", 
      link: "/mindfulness/breathe-easy/box-of-calm" ,
      image: Breath02
    },
    { 
      title: "Slumber Sound Breathing", 
      actualname: "4-7-8 Breathing",
      description: "A simple method to help you fall asleep faster.", 
      link: "/mindfulness/breathe-easy/slumber-sound",
      image: Breath07
    },
    { 
      title: "Nostril Navigator", 
      actualname: "Alternate Nostril Breathing",
      description: "Balances the body and mind through alternate nostril breathing.", 
      link: "/mindfulness/breathe-easy/nostril-navigator",
      image: Breath04
    },
    { 
      title: "Pursed Peace", 
      actualname: "Pursed Lip Breathing",
      description: "Helps to control shortness of breath by using pursed lips.", 
      link: "/mindfulness/breathe-easy/pursed-peace",
      image: Breath05
    },
    { 
      title: "Buzzing Bumblebee Breathing", 
      actualname: "Bhramari Breathing",
      description: "A humming breath technique that calms the mind and body.", 
      link: "/mindfulness/breathe-easy/buzzing-bumblebee",
      image: Breath06
    },
    { 
      title: "Kapalabhati Kickstart", 
      actualname: "Kapalabhati Breathing",
      description: "A rapid, forceful breathing technique that energizes the body.", 
      link: "/mindfulness/breathe-easy/kapalbhati-kickstart",
      image: Breath03
    },
  ];

  return (
    <div className="breathing-techniques-page">
      <h1>Breathing Techniques</h1>
      <div className="technique-container">
        {techniques.map((technique, index) => (
          <Link to={technique.link} key={index} className="technique-card">
            <div className="technique-content">
              <h3>{technique.title}</h3>
              <img src={technique.image} alt="Breathing Techniques"/>
              <p>{technique.description}</p>
              <p><b>a.k.a. {technique.actualname}</b></p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default BreathingTechniques;
