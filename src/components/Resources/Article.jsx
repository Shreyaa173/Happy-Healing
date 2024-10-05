import React from 'react';
import { Link } from 'react-router-dom';
import "./Article.css";

import Article01 from './Images/Article01.jpg';
import Article02 from './Images/Article02.jpg';
import Article03 from './Images/Article03.png';
import Article04 from './Images/Article04.jpg';
import Article05 from './Images/Article05.jpg';
import Article06 from './Images/Article06.png';
import Article07 from './Images/Article07.png';

const articles = [
  {
    title: "The Benefits of Mindfulness",
    summary: "Explore how mindfulness can enhance mental health and overall well-being.",
    link: "https://www.helpguide.org/mental-health/stress/benefits-of-mindfulness",
    image: Article01
  },
  {
    title: "Breathing Techniques for Stress Relief",
    summary: "Practical tips on various breathing techniques to manage stress effectively.",
    link: "https://www.webmd.com/balance/stress-management/stress-relief-breathing-techniques",
    image: Article02
  },
  {
    title: "Meditation for Beginners",
    summary: "A guide for beginners on how to start meditating and its benefits.",
    link: "https://www.mindful.org/how-to-meditate/",
    image: Article03
  },
  {
    title: "How to Create a Relaxation Routine",
    summary: "Steps to establish a consistent relaxation routine at home.",
    link: "https://www.health.harvard.edu/mind-and-mood/six-relaxation-techniques-to-reduce-stress",
    image: Article04
  },
  {
    title: "Understanding Anxiety and How to Cope",
    summary: "An informative piece on anxiety, its causes, and coping strategies.",
    link: "https://www.healthline.com/health/mental-health/how-to-cope-with-anxiety#8-long-term-strategies",
    image: Article05
  },
  {
    title: "The Importance of Self-Care",
    summary: "Discussing self-care practices and their impact on mental health.",
    link: "https://www.perimeterhealthcare.com/news/posts/the-importance-of-self-care",
    image: Article06
  },
  {
    title: "Tips to Get Better Sleep at Night",
    summary: "Strategies to improve sleep quality and its importance for mental health.",
    link: "https://www.healthline.com/nutrition/17-tips-to-sleep-better#daytime-light",
    image: Article07
  },
];

const Articles = () => {
  return (
    <div className="articles-page">
      <h1>Articles</h1>
      <div className="articles-list">
        {articles.map((article, index) => (
          <Link to={article.link} key={index} className="article-card" target="_blank" rel="noopener noreferrer">
            <h3>{article.title}</h3>
            <img src={article.image} alt="Article Thumbnail" />
            <p>{article.summary}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Articles;