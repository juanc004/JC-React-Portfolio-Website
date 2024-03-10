// ProjectCard.tsx

import React from 'react';
import styles from './ProjectCard.module.css';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
import { getImageUrl } from "../../utils";
import projectsData from '../../data/projects.json'; // Assuming the path is correct

const ProjectCard = ({ title, imageSrc, description, skills, demo, source }) => {
  // No need to destructure `project` here as we're passing individual props
  return (
    <div className={styles.projectCard}>
      <img src={getImageUrl(imageSrc)} alt={title} className={styles.projectImage} />
      <div className={styles.projectInfo}>
        <div className={styles.projectTitleAndLinks}>
          <h3 className={styles.projectTitle}>{title}</h3>
          <div className={styles.projectLinks}>
            <a href={demo} className={styles.demoLink} target="_blank" rel="noopener noreferrer">
              <FaExternalLinkAlt />
            </a>
            <a href={source} className={styles.sourceLink} target="_blank" rel="noopener noreferrer">
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
    <section className={styles.projectsSection} id="projects">
      <h2 className={styles.projectsTitle}>Projects</h2>
      <div className={styles.projectsGrid}>
        {projectsData.map((project, index) => (
          <ProjectCard key={index} {...project} /> // Spread the project props
        ))}
      </div>
    </section>
  );
};

export default Projects;
