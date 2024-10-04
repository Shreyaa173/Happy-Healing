import React, { act } from 'react';
import { Link } from 'react-router-dom';

import './BreatheEasy.css';
import Image from '../Images/Logo.jpg';

const BreathingTechniques = () => {
  const techniques = [
    { 
      title: "Belly Bliss Breathing", 
      actualname: "Diaphragmatic Breathing",
      description: "Deep breathing to enhance relaxation and reduce stress.", 
      link: "/mindfulness/breathe-easy/belly-bliss",
      image: Image
    },
    { 
      title: "Box of Calm", 
      actualname: "Box Breathing",
      description: "A technique to calm the mind by focusing on breath patterns.", 
      link: "/mindfulness/breathe-easy/box-of-calm" ,
      image: Image
    },
    { 
      title: "Slumber Sound Breathing", 
      actualname: "4-7-8 Breathing",
      description: "A simple method to help you fall asleep faster.", 
      link: "/mindfulness/breathe-easy/slumber-sound",
      image: Image
    },
    { 
      title: "Nostril Navigator", 
      actualname: "Alternate Nostril Breathing",
      description: "Balances the body and mind through alternate nostril breathing.", 
      link: "/mindfulness/breathe-easy/nostril-navigator",
      image: Image
    },
    { 
      title: "Pursed Peace", 
      actualname: "Pursed Lip Breathing",
      description: "Helps to control shortness of breath by using pursed lips.", 
      link: "/mindfulness/breathe-easy/pursed-peace",
      image: Image
    },
    { 
      title: "Buzzing Bumblebee Breathing", 
      actualname: "Bhramari Breathing",
      description: "A humming breath technique that calms the mind and body.", 
      link: "/mindfulness/breathe-easy/buzzing-bumblebee",
      image: Image
    },
    { 
      title: "Kapalabhati Kickstart", 
      actualname: "Kapalabhati Breathing",
      description: "A rapid, forceful breathing technique that energizes the body.", 
      link: "/mindfulness/breathe-easy/kapalbhati-kickstart",
      image: Image
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
