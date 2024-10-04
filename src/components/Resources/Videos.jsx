import React from 'react';
import { Link } from 'react-router-dom';
import "./Videos.css"; 
import VideoThumbnail from "./Images/Logo.jpg"; 

const videos = [
    {
      title: "Understanding Mindfulness: The Basics",
      summary: "Learn the fundamentals of mindfulness and how it can transform your daily life.",
      link: "https://youtu.be/j7rKKpwdXNE?si=HHhCzBnkGeM3oKLA",
      image: VideoThumbnail
    },
    {
      title: "10-Minute Yoga For Beginners | Start Yoga Here...",
      summary: "A beginner-friendly yoga class to help reduce stress and improve flexibility.",
      link: "https://youtu.be/j7rKKpwdXNE?si=Laz2Cx078onz7GHL",
      image: VideoThumbnail
    },
    {
      title: "Five Simple Techniques for Stress Relief",
      summary: "Quick and effective stress relief techniques you can practice anywhere.",
      link: "https://www.youtube.com/watch?v=ApzqWJQYIf8",
      image: VideoThumbnail
    },
    {
      title: "Self-Care Strategies for Busy People",
      summary: "Effective self-care strategies for those with a packed schedule.",
      link: "https://www.youtube.com/watch?v=cnxC0X-L6BU",
      image: VideoThumbnail
    },
    {
      title: "Coping with Anxiety: Tips and Tricks",
      summary: "Practical advice for managing anxiety in everyday life.",
      link: "https://www.youtube.com/watch?v=5RtvY99a5N8",
      image: VideoThumbnail
    },
    {
      title: "The Power of Positive Thinking",
      summary: "Discover how positive thinking can impact your mental health and happiness.",
      link: "https://www.youtube.com/watch?v=6sA09eAN2VI",
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