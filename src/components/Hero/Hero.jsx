import React from "react";
import styles from "./Hero.module.css";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <h1 className={styles.title}>Welcome to my site!</h1>
      <p className={styles.description}>
        Take a look about and get to know me a little better.
      </p>
      <div className={styles.contactBtnContainer}>
        <a
          href="../../public/resume.pdf"
          className={styles.contactBtn}
          download="resume.pdf"
        >
          Resume
        </a>
        <a
          href="mailto:cardenasjuan1213@gmail.com"
          className={styles.contactBtn}
        >
          Contact Me
        </a>
      </div>
    </section>
  );
};
