import "./Faq.css";
import { useState } from "react";

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  const faqData = [
    {
      question: "What is mental health, and why is it important?",
      answer:
        "Mental health encompasses emotional, psychological, and social well-being, affecting thoughts, feelings, and behaviors. It's essential for overall well-being, decision-making, and maintaining healthy relationships.",
    },
    {
      question: " How do I know if I or someone I care about needs help?",
      answer:
        "Signs include persistent sadness, anxiety, social withdrawal, difficulty concentrating, changes in eating/sleeping habits, or self-harm thoughts. Seek professional help if these symptoms occur.",
    },
    {
      question: " What can I do if I feel overwhelmed or anxious?",
      answer:
        "Try deep breathing, mindfulness, or talking to someone you trust. If feelings persist, consult a mental health professional for guidance tailored to your situation.",
    },
    {
      question: " What are some effective ways to manage stress?",
      answer:
        "Effective stress management includes regular exercise, mindfulness practices, maintaining a balanced routine, staying organized, and engaging in enjoyable activities. Seek help if stress feels overwhelming.",
    },
    {
      question: "How can I find the right therapist or mental health professional?",
      answer:
        "Consider your needs, research licensed professionals, read reviews, and ask for recommendations. Meeting multiple therapists can help you find the right fit for your concerns.",
    },
  ];

  return (
    <>
      <div className="faq">
        <h1 className="title">FAQ's</h1>

        <div className="questions-container">
          {faqData.map((faq, index) => (
            <div className="question" key={index}>
              <button onClick={() => toggleFAQ(index)}>
                <span>{faq.question}</span>
                <i
                  className={`fas fa-chevron-down d-arrow ${
                    activeIndex === index ? "rotate" : ""
                  }`}
                ></i>
              </button>
              <p className={activeIndex === index ? "show" : ""}>
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Faq;
