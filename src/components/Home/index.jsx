import styles from "./index.module.css";

const Home = () => {
  return (
    <div id="Home" className={styles.homeContainer}>
      <section className={styles.homeContentSection}>
        <div className={styles.contentCard}>
          <span>UI/UX DESIGNER</span>
          <h1>
            Hello, my name
            <br />
            is Madelyn Torff
          </h1>
          <p>
            Short text with details about you, what you do or your professional
            career. You can add more information on the about page.
          </p>
          <a href="#Projects">
            <button className={styles.primaryBtn}>Projects</button>
          </a>
          <button className={styles.secondaryBtn}>Linkedin</button>
        </div>
      </section>
      <section className={styles.homeImageSection}>
        <img src="images/image.png" alt="images" />
      </section>
    </div>
  );
};

export default Home;
