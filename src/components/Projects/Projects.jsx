import React from "react";
import styles from "./Projects.module.css";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { getImageUrl } from "../../utils";
import projectsData from "../../data/projects.json"; // Assuming the path is correct

const Project = ({ title, imageSrc, description, skills, demo, source }) => {
  // No need to destructure `project` here as we're passing individual props
  return (
    <div className={styles.projectCard}>
      <img
        src={getImageUrl(imageSrc)}
        alt={title}
        className={styles.projectImage}
      />
      <div className={styles.projectInfo}>
        <div className={styles.projectTitleAndLinks}>
          <h3 className={styles.projectTitle}>{title}</h3>
          <div className={styles.projectLinks}>
            <a
              href={demo}
              className={styles.demoLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaExternalLinkAlt />
            </a>
            <a
              href={source}
              className={styles.sourceLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub />
            </a>
          </div>
        </div>
        <p className={styles.projectDescription}>{description}</p>
        <div className={styles.projectSkills}>
          {skills.map((skill, index) => (
            <span key={index} className={styles.skill}>
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  // Make sure the imported data is named `projectsData`
  return (
    <div className={styles.projectsSection} id="projects">
      <div className={styles.aboutHeader}>
        <hr className={styles.divider} />
        <h1 className={styles.projectsTitle}>PROJECTS</h1>
        <hr className={styles.divider} />
        <div className={styles.projectsGrid}>
          {projectsData.map((project, index) => (
            <Project key={index} {...project} /> // Spread the project props
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
