import React from "react";
import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi there,</h1>
        <p className={styles.description}>
          I'm a Full-Stack Engineer who loves tackling new challenges. I enjoy working
          in fast-paced environments where there's always something new to
          learn and do. This is particularly the reason I choose to pursue and
          invest in my growth as a developer. For me, it's all about coming up
          with creative solutions and getting things to work just right.
        </p>
        <a
          href="mailto:cardenasjuan1213@gmail.com"
          className={styles.contactBtn}
        >
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl("hero/profile_1.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
    </section>
  );
};
