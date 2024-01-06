import styles from "./index.module.css";

const AddProject = () => {
  return (
    <div className={styles.addProjectContainer}>
      <h1>Add Project</h1>
      <form className={styles.formContainer}>
        {/* project name */}
        <div className={styles.inputContainer}>
          <label htmlFor="project-name">Project Name</label>
          <input id="project-name" />
        </div>
        {/* project link */}
        <div className={styles.inputContainer}>
          <label htmlFor="project-link">Project Link</label>
          <input id="project-link" />
        </div>
        {/* project link */}
        <div className={styles.inputContainer}>
          <label htmlFor="desc">Description</label>
          <textarea
            id="desc"
            cols={50}
            rows={50}
            className={styles.inputElement}
          />
        </div>
        <button className={styles.primaryBtn}>Add</button>
      </form>
    </div>
  );
};

export default AddProject;
