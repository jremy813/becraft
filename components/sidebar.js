import styles from "./sidebar.module.scss";

export default function Sidebar() {
  return (
    <div className={styles.sidebar_container}>
      <div className={styles.sidebar_img}>
        <img src="/assets/craftbeer2.png" />
      </div>
      <div className={styles.sidebar_links}>
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Our Beers</li>
          <li>History</li>
          <li>Contact</li>
        </ul>
      </div>
    </div>
  );
}
