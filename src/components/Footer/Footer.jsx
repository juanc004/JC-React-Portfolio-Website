import React from "react";
import styles from "./Footer.module.css";
import { getImageUrl } from "../../utils";

export const Footer = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Reach Out @</h2>
        <p>Social Media Platforms</p>
      </div>
      <ul className={styles.links}>
        {/* Iterate over an array of contact methods here for cleaner JSX */}
        <li className={styles.link}>
          <img src={getImageUrl("contact/emailIcon.png")} alt="Email" />
          <a href="mailto:cardenasjuan1213@gmail.com">@Email</a>
        </li>
        <li className={styles.link}>
          <img
            src={getImageUrl("contact/linkedinIcon.png")}
            alt="LinkedIn icon"
          />
          <a href="https://www.linkedin.com/in/juancardenas01/">@LinkedIn</a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("contact/githubIcon.png")} alt="Github icon" />
          <a href="https://github.com/juanc004">@Github</a>
        </li>
      </ul>
    </footer>
  );
};
