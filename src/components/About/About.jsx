import React from "react";
import styles from "./About.module.css";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About Me</h2>
      
      <div className={styles.aboutItems}>
        <div className={styles.aboutItem}>
          <h2 className={styles.pheader}>
            As a developer, my path is shaped by core principles that drive
            growth, collaboration, and commitment to excellence. These tenets
            reflect my professional ethos.
          </h2>
        </div>
        <div className={styles.aboutItem}>
          <h3>Learn from your mistakes.</h3>
          <p>
            Mistakes aren't setbacks; they're stepping stones. Embrace each one,
            not as a misstep, but as a milestone on the path to mastery.
          </p>
        </div>
        <div className={styles.aboutItem}>
          <h3>Value the people around you.</h3>
          <p>
            Our relationships are the bedrock of success. Cherish and nurture
            them, because together, we can achieve more than we ever could
            alone.
          </p>
        </div>
        <div className={styles.aboutItem}>
          <h3>Give your all in everything you do.</h3>
          <p>
            Investing your best effort in every task isn't just about the
            outcome; it's about the satisfaction of knowing you've left no stone
            unturned in your pursuit of excellence.
          </p>
        </div>
      </div>
    </section>
  );
};
