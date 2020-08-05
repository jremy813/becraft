import styles from "./footer.module.scss";

export default function Footer() {
  return (
    <div className="footer_container">
      <div className="footer_links">
        <div>
          <h1>OUR BEERS</h1>
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
          <h1>ABOUT US</h1>
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
          <h1>STAY IN TOUCH</h1>
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
