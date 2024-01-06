import styles from "./index.module.css";

const ProjectCard = ({ Image }) => {
  return (
    <div className={styles.projectCard}>
      {/* seaction 1 */}
      <div className={styles.projectContentSection}>
        <div className={styles.projectInfoSection}>
          <h1>Project Name</h1>
          <p>
            I created this personal project in order to show how to create an
            interface in Figma using a portfolio as an example.
          </p>
          <button>View Project</button>
        </div>
      </div>
      {/* seaction 2 */}
      <div className={styles.projectImageSection}>
        <img src={Image} alt="..." />
      </div>
    </div>
  );
};

export default ProjectCard;
