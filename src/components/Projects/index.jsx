import ProjectCard from "../ProjectCard";
import styles from "./index.module.css";

const Projects = () => {
  return (
    <div id="Projects" className={styles.projectContainer}>
      <h1 className={styles.projectsTitle}>Projects</h1>
      <ProjectCard Image={"/images/project_1.png"} />
      <ProjectCard Image={"/images/project_2.png"} />
      <ProjectCard Image={"/images/project_3.png"} />
    </div>
  );
};

export default Projects;
