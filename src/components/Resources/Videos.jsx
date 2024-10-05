import React from 'react';
import { Link } from 'react-router-dom';
import "./Videos.css"; 
import VideoThumbnail from "./Images/Logo.jpg"; 

import Video01 from './Images/Video01.jpg';
import Video02 from './Images/Video02.png';
import Video03 from './Images/Video03.jpg';
import Video04 from './Images/Video04.png';
import Video05 from './Images/Video05.jpg';
import Video06 from './Images/Video06.jpg';

const videos = [
    {
      title: "What is Mindfulness?",
      summary: "Learn the fundamentals of mindfulness and how it can transform your daily life.",
      link: "https://youtu.be/7-1Y6IbAxdM?si=qCo2xwlDuiZJM8_4",
      image: Video01
    },
    {
      title: "10-Minute Yoga For Beginners | Start Yoga Here...",
      summary: "A beginner-friendly yoga class to help reduce stress and improve flexibility.",
      link: "https://youtu.be/j7rKKpwdXNE?si=Laz2Cx078onz7GHL",
      image: Video02
    },
    {
      title: "Reduce Stress And Anxiety",
      summary: "Quick and effective stress relief techniques you can practice anywhere.",
      link: "https://youtu.be/bsaOBWUqdCU?si=GKYseEFoMO89Jk1P",
      image: Video03
    },
    {
      title: "8 Self Care Ideas for Busy People",
      summary: "Effective self-care strategies for those with a packed schedule.",
      link: "https://youtu.be/jkm6JRODGiw?si=2HtnsYjrJTBmnaqd",
      image: Video04
    },
    {
      title: "Locus of Control: Quick Coping Skill for Anxiety",
      summary: "Practical advice for managing anxiety in everyday life.",
      link: "https://youtu.be/Q0guTERGPK0?si=d2AZKn-6gqh7wtPv",
      image: Video05
    },
    {
      title: "The Power of Positivity",
      summary: "Discover how positive thinking can impact your mental health and happiness.",
      link: "https://youtu.be/HwLK9dBQn0g?si=8tyyd_PzcZZlPHAw",
      image: Video06
    },
];  

const Videos = () => {
  return (
    <div className="videos-page">
      <h1>Videos</h1>
      <div className="videos-list">
        {videos.map((video, index) => (
          <Link to={video.link} key={index} className="video-card" target="_blank" rel="noopener noreferrer">
            <h3>{video.title}</h3>
            <img src={video.image} alt="Video Thumbnail" />
            <p>{video.summary}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Videos;