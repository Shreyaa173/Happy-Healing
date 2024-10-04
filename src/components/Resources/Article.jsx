import React from 'react';
import { Link } from 'react-router-dom';
import "./Article.css";
import Logo from "./Images/Logo.jpg";

const articles = [
  {
    title: "The Benefits of Mindfulness",
    summary: "Explore how mindfulness can enhance mental health and overall well-being.",
    link: "https://www.helpguide.org/mental-health/stress/benefits-of-mindfulness",
    image: Logo
  },
  {
    title: "Breathing Techniques for Stress Relief",
    summary: "Practical tips on various breathing techniques to manage stress effectively.",
    link: "https://www.webmd.com/balance/stress-management/stress-relief-breathing-techniques",
    image: Logo
  },
  {
    title: "Meditation for Beginners",
    summary: "A guide for beginners on how to start meditating and its benefits.",
    link: "https://www.mindful.org/how-to-meditate/",
    image: Logo
  },
  {
    title: "How to Create a Relaxation Routine",
    summary: "Steps to establish a consistent relaxation routine at home.",
    link: "https://www.health.harvard.edu/mind-and-mood/six-relaxation-techniques-to-reduce-stress",
    image: Logo
  },
  {
    title: "Understanding Anxiety and How to Cope",
    summary: "An informative piece on anxiety, its causes, and coping strategies.",
    link: "https://www.healthline.com/health/mental-health/how-to-cope-with-anxiety#8-long-term-strategies",
    image: Logo
  },
  {
    title: "The Importance of Self-Care",
    summary: "Discussing self-care practices and their impact on mental health.",
    link: "https://www.perimeterhealthcare.com/news/posts/the-importance-of-self-care",
    image: Logo
  },
  {
    title: "Tips to Get Better Sleep at Night",
    summary: "Strategies to improve sleep quality and its importance for mental health.",
    link: "https://www.healthline.com/nutrition/17-tips-to-sleep-better#daytime-light",
    image: Logo
  },
];

const Articles = () => {
  return (
    <div className="articles-page">
      <h1>Articles</h1>
      <div className="articles-list">
        {articles.map((article, index) => (
          <Link to={article.link} key={index} className="article-card" target="_blank" rel="noopener noreferrer">
            <h2>{article.title}</h2>
            <img src={article.image} alt="Article Thumbnail" />
            <p>{article.summary}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Articles;