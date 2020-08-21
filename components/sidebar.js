import styles from "./sidebar.module.scss";
import Link from "next/link";

import { TweenMax, TimelineLite, Power3 } from "gsap";
import { useRef, useEffect } from "react";

export default function Sidebar() {
  let image = useRef(null);
  let links = useRef(null);

  let tl = new TimelineLite();
  useEffect(() => {
    tl.from(image, 1.2, { x: -1280, ease: Power3.easeOut }, 0.8);
    tl.from(links, 1.2, { x: -1280, ease: Power3.easeOut });
  });

  return (
    <div className={styles.sidebar_container}>
      <div ref={(el) => (image = el)} className={styles.sidebar_img}>
        <img src="/assets/craftbeer2.png" />
      </div>
      <div ref={(el) => (links = el)} className={styles.sidebar_links}>
        <ul>
          <Link href="/">
            <li>Home</li>
          </Link>
          <Link href="/about">
            <li>About Us</li>
          </Link>
          <Link href="/beers">
            <li>Our Beers</li>
          </Link>
          <Link href="/contact">
            <li>Contact</li>
          </Link>
        </ul>
      </div>
    </div>
  );
}
