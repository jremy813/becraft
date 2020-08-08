import styles from "./header.module.scss";
import React, { useState } from "react";

export default function Header() {
  const [clicked, setClicked] = useState(false);

  const toggleNav = () => {
    setClicked(!clicked);
  };

  return (
    <div className={styles.navbar}>
      <div className={styles.logo_menu}>
        <img src="/assets/craftbeer2.png" />
        <div onClick={toggleNav} className={styles.hamburger}>
          <div className={styles.line}></div>
          <div className={styles.line}></div>
          <div className={styles.line}></div>
        </div>
      </div>

      <nav>
        {clicked && (
          <ul className={styles.nav_links}>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
          </ul>
        )}
      </nav>
    </div>
  );
}
