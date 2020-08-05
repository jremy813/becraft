import styles from "./footer.module.scss";

export default function Footer() {
  return (
    <div className={styles.footer_container}>
      <div className={styles.footer_links}>
        <div>
          <h3>OUR BEERS</h3>
          <ul>
            <li>
              <a href="#">Lager</a>
            </li>
            <li>
              <a href="#">Pilsner</a>
            </li>
            <li>
              <a href="#">Porter</a>
            </li>
            <li>
              <a href="#">Weizen</a>
            </li>
          </ul>
        </div>
        <div>
          <h3>ABOUT US</h3>
          <ul>
            <li>
              <a href="#">About us</a>
            </li>
            <li>
              <a href="#">History</a>
            </li>
            <li>
              <a href="#">Production process</a>
            </li>
            <li>
              <a href="#">Career</a>
            </li>
          </ul>
        </div>
        <div>
          <h3>STAY IN TOUCH</h3>
          <ul>
            <li>
              <a href="#">Contact us</a>
            </li>
            <li>
              <a href="#">Locations</a>
            </li>
          </ul>
        </div>
      </div>
      <hr />
      <p>&#169; 2020 BeCraftBeer2 </p>
    </div>
  );
}
