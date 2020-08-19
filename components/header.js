import styles from "./header.module.scss";
import React, { useState, useEffect, useRef } from "react";
import { TweenLite, TimelineLite, Power3 } from "gsap";

import Link from "next/link";

export default function Header() {
  const [clicked, setClicked] = useState(false);

  let links = useRef(null);
  let tl = new TimelineLite();

  const toggleNav = () => {
    setClicked(!clicked);
    tl.from(links, 1.2, {
      x: -500,
      ease: Power3.easeOut,
    });
  };
  tl.clear(true);

  useEffect(() => {});
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

      <nav ref={(el) => (links = el)}>
        {clicked && (
          <ul className={styles.nav_links}>
            <Link href="/">
              <li>
                <a href="#">Home</a>
              </li>
            </Link>
            <Link href="/about">
              <li>
                <a href="#">About us</a>
              </li>
            </Link>
            <Link href="/beers">
              <li>
                <a href="#">Our Beers</a>
              </li>
            </Link>
            <li>
              <a href="#">History</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        )}
      </nav>
    </div>
  );
}
