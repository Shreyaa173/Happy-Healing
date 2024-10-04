import React from 'react';
import { Link } from 'react-router-dom';
import "./Videos.css"; 
import VideoThumbnail from "./Images/Logo.jpg"; 

const videos = [
    {
      title: "What is Mindfulness?",
      summary: "Learn the fundamentals of mindfulness and how it can transform your daily life.",
      link: "https://youtu.be/7-1Y6IbAxdM?si=qCo2xwlDuiZJM8_4",
      image: VideoThumbnail
    },
    {
      title: "10-Minute Yoga For Beginners | Start Yoga Here...",
      summary: "A beginner-friendly yoga class to help reduce stress and improve flexibility.",
      link: "https://youtu.be/j7rKKpwdXNE?si=Laz2Cx078onz7GHL",
      image: VideoThumbnail
    },
    {
      title: "Reduce Stress And Anxiety",
      summary: "Quick and effective stress relief techniques you can practice anywhere.",
      link: "https://youtu.be/bsaOBWUqdCU?si=GKYseEFoMO89Jk1P",
      image: VideoThumbnail
    },
    {
      title: "8 Self Care Ideas for Busy People",
      summary: "Effective self-care strategies for those with a packed schedule.",
      link: "https://youtu.be/jkm6JRODGiw?si=2HtnsYjrJTBmnaqd",
      image: VideoThumbnail
    },
    {
      title: "Locus of Control: Quick Coping Skill for Anxiety",
      summary: "Practical advice for managing anxiety in everyday life.",
      link: "https://youtu.be/Q0guTERGPK0?si=d2AZKn-6gqh7wtPv",
      image: VideoThumbnail
    },
    {
      title: "The Power of Positivity",
      summary: "Discover how positive thinking can impact your mental health and happiness.",
      link: "https://youtu.be/HwLK9dBQn0g?si=8tyyd_PzcZZlPHAw",
      image: VideoThumbnail
    },
];  

const Videos = () => {
  return (
    <div className="videos-page">
      <h1>Videos</h1>
      <div className="videos-list">
        {videos.map((video, index) => (
          <Link to={video.link} key={index} className="video-card" target="_blank" rel="noopener noreferrer">
            <h2>{video.title}</h2>
            <img src={video.image} alt="Video Thumbnail" />
            <p>{video.summary}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Videos;