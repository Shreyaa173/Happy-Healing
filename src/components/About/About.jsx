import React from 'react';
import HoverCard from "./Hover";
import styles from './About.module.css'; // Importing CSS module

const Home = () => {
    return (
        <div className={styles.homePage}>
            <h1>About Us</h1>
            <div className={styles.cards}>

                <div className={styles.cardMain}>
                    <HoverCard 
                        name="Reduced Overspending" 
                        details="Curb impulsive spending by imposing limits or requiring additional steps :P" 
                    />
                </div>

                <div className={styles.cardMain}>
                    <HoverCard 
                        name="Let Us Adapt Your Budget"
                        details="Adapt your budget so that your pockets don't get empty so soon!"
                    />
                </div>

                <div className={styles.cardMain}>
                    <HoverCard 
                        name="Setting Financial Goals"
                        details="Let us help you allocate these tokens to your goals and then enjoy them in peace"
                    />
                </div>

            </div>
        </div>
    );
};

export default Home;
