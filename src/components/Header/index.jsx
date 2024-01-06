import Styles from "./index.module.css";

const Header = () => {
  return (
    <header className={Styles.headerContainer}>
      <a href="#Home" className={Styles.headerTitle}>
        Madelyn Torff
      </a>
      <ul className={Styles.navItemsContainer}>
        <li>
          <a href="#Home">About</a>
        </li>
        <li>
          <a href="#Projects">Projects</a>
        </li>
        <li>
          <a href="#Contacts">Contacts</a>
        </li>
      </ul>
    </header>
  );
};

export default Header;
