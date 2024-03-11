import React, { useState } from "react";
import { getImageUrl } from "../../utils";
import styles from "./About.module.css";
// import { myMantra } from "./matra";

export default function About() {
  const [selected, setSelected] = useState(null);

  const toggle = (index) => {
    if (selected === index) {
      return setSelected(null);
    }

    setSelected(index);
  };

  return (
    <div className={styles.aboutSection}>
      <div className={styles.aboutHeader}>
        <hr className={styles.divider} />
        <h1 className={styles.sectionTitle}>ABOUT ME</h1>
        <hr className={styles.divider} />
        <div className={styles.aboutContent}>
          <div className={styles.aboutTextContainer}>
            <h1 className={styles.h1title}>Hi there,</h1>
            <h2 className={styles.h2text}>
              I'm Juan, a Full-Stack Engineer who loves tackling new challenges.
              I enjoy working in fast-paced environments where there's always
              something new to learn and do. This is particularly the reason I
              choose to pursue and invest in my growth as a developer. For me,
              it's all about coming up with creative solutions and getting
              things to work just right.
            </h2>
          </div>
          {/* {myMantra.map((item, index) => (
              <div
                key={index} // Added key prop for list
                className={styles.mantraItem}
                onClick={() => toggle(index)}
              >
                <h3 className={styles.aboutHeading}>
                  {item.mantra}
                  <span className={styles.span}>
                    {selected === index ? "-" : "+"}
                  </span>
                </h3>
                {selected === index && ( // Changed to conditional rendering
                  <p className={styles.aboutParagraph}>{item.description}</p>
                )}
              </div>
            ))}
          </div> */}
          <div className={styles.aboutImageContainer}>
            <img
              src={getImageUrl("hero/profile_1.png")}
              alt="Hero image of me"
              className={styles.aboutImage}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
