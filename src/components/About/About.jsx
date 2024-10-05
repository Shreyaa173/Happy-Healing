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
              details="We aim to create a supportive online community that empowers individuals on their mental health journey. Through engaging resources and our cute turtle mascot, we together unstigmatize mental health, fostering a sense of belonging and well-being for everyone seeking support."
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
              details="1 in 5 people suffer from mental illnesses every year!! And the stigma around it making the stats even worse. This drives us to provide accessible resources enhancing emotional well-being for all within a supportive community. Let's unstigmatize mental health together."
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
