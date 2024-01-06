import { FaLinkedin } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { IoMail } from "react-icons/io5";

import styles from "./index.module.css";
const Footer = () => {
  return (
    <div id="Contacts" className={styles.footerContainer}>
      <div className={styles.footerCard}>
        <div>
          <RiInstagramFill className={styles.footerIcons} />
          <FaLinkedin className={styles.footerIcons} />
          <IoMail className={styles.footerIcons} />
        </div>
        <p>Copyright © 2024. All rights reserved</p>
      </div>
    </div>
  );
};

export default Footer;
