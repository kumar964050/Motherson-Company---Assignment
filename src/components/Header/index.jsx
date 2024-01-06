import { MdMenu } from "react-icons/md";
import Styles from "./index.module.css";

const Header = () => {
  return (
    <header className={Styles.headerContainer}>
      <a href="#Home" className={Styles.headerTitle}>
        Madelyn Torff
      </a>
      <input id="menu_btn" className={Styles.menuBtn} type="checkbox" />
      <label htmlFor="menu_btn" className={Styles.menuIcon}>
        <MdMenu className="react-icons" />
      </label>
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
