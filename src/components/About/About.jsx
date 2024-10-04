import React from "react";
import HoverCard from "./Hover";
import styles from "./About.module.css";
import Facilities from "../Facilities/Facilities";

const Home = () => {
  return (
    <>
      <div className={styles.homePage}>
        <h1 className={styles.heading}>About Us</h1>
        <div className={styles.cards}>
          <div className={styles.cardMain}>
            <HoverCard
              name="Our Mission"
              details="Our mission is to create a supportive online community that empowers individuals on their mental health journeys. Through engaging resources and our cute turtle mascot, we aim to make mental health accessible and relatable, fostering a sense of belonging and well-being for everyone seeking support."
            />
          </div>

          <div className={styles.cardMain}>
            <HoverCard
              name="Our Vision"
              details="We envision a world where mental health is prioritized, and individuals feel understood and valued. We aim to inspire open conversations, reduce stigma, and empower people to embrace their mental wellness journeys with confidence, compassion, and resilience."
            />
          </div>

          <div className={styles.cardMain}>
            <HoverCard
              name="Our Objective"
              details="We aim to provide accessible resources and promote mindfulness practices that enhance emotional well-being. By fostering a supportive community and raising awareness about mental health, we engage users through our cute turtle mascot, regularly update content, and encourage feedback to create a relatable and tailored experience for everyone."
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
