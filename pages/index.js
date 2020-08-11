import Sidebar from "../components/sidebar";
import Head from "next/head";
import OlivesBg from "../public/assets/craftbeer2-sectionbg4.png";
import Beer1 from "../public/assets/craftbeer2-subheader-pic1.png";
import Globe from "../public/assets/craftbeer2-about-pic1.png";
import Beer2 from "../public/assets/craftbeer2-product-pic1.png";
import Beer3 from "../public/assets/craftbeer2-product-pic2.png";
import Footer from "../components/footer";
import Header from "../components/header";

export default function Home() {
  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Yeseva+One&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Barlow&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Header />
      <Sidebar />
      <div
        style={{
          background:
            "url(" + `${require("../public/assets/craftbeer2-bg.png")}` + ")",
        }}
        className="home_container"
      >
        <section className="home_sec1">
          <div className="home_sec1content">
            <div>
              <h1>Brewed With passion and perfection</h1>
            </div>
            <div>
              <p className="home_p">
                Lorem ipsum dolor sit amet enim. etiam ullamcorper non felis.
                Maecenas malesuada elit lectus felis laoreet
              </p>
            </div>
            <div className="home_buttons">
              <div>
                <button>About Us</button>
              </div>
              <div>
                <button>Our beers</button>
              </div>
            </div>
          </div>
          <div className="home_beer1">
            <img src={Beer1} />
          </div>
        </section>
        <section className="home_sec2">
          <div className="home_statistics">
            <div>
              <h1>100%</h1>
              <p>Lacinia Hendrerit</p>
              <hr />
            </div>
            <div>
              <h1>5</h1>
              <p>Maecenas Imperdiet ante eget</p>
              <hr />
            </div>
            <div>
              <h1>24</h1>
              <p>Congue porta nibh a semper</p>
              <hr />
            </div>
            <div>
              <h1>80%</h1>
              <p>Curabitur sed dolor</p>
              <hr />
            </div>
          </div>
          <div className="home_tradition">
            <div>
              <img src={Globe} />
            </div>
            <div>
              <h1>Swedish Tradition Since 1938</h1>
              <div>
                <p>
                  Aliquam ac dui vel dui vulputate consectetur. Mauris accumsan,
                  massa non consectetur condimentum, diam arcu tristique nibh,
                  nec egestas diam elit at nulla. Suspendisse potenti. In non
                  lacinia risus.
                </p>
                <p>
                  Nulla sit amet vestibulum magna, eget pulvinar libero. Vivamus
                  in diam turpis. In condimentum maximus tristique
                </p>
                <p> Pellentesque lorem augue, fermentum orci.</p>
              </div>
              <button>Read More</button>
            </div>
          </div>
        </section>
        <section className="home_sec3">
          <h1 className="home_sec3title">BREWED WITH PASSION AND PERFECTION</h1>
          <div className="home_lager">
            <div>
              <img src={Beer2} />
            </div>
            <div>
              <h2>BECFRAFT</h2>
              <h1 className="home_lagertext">LAGER</h1>
              <p>
                Fusce ut velit laoreet, tempus arcu eu, molestie tortor. Nam vel
                justo cursus, faucibus lorem eget, egestas eros.
              </p>
              <p>
                Maecenas eleifend erat at justo fringilla imperdiet id ac magna.
              </p>
              <div className="home_lagerstats">
                <div>
                  <span>Extract</span>
                  <h1>12.00%</h1>
                </div>
                <div>
                  <span>Alcohol</span>
                  <h1>5.4%</h1>
                </div>
                <div>
                  <span>Gentian</span>
                  <h1>25 IBU</h1>
                </div>
                <div>
                  <span>Serving Temperature</span>
                  <h1>5-7</h1>
                </div>
              </div>
            </div>
          </div>
          <div className="home_pilsner">
            <div>
              <h2>BECFRAFT</h2>
              <h1 className="home_pilsnertext">PILSNER</h1>
              <p>
                Fusce ut velit laoreet, tempus arcu eu, molestie tortor. Nam vel
                justo cursus, faucibus lorem eget, egestas eros.
              </p>
              <p>
                Maecenas eleifend erat at justo fringilla imperdiet id ac magna.
              </p>
              <div className="home_pilsnerstats">
                <div>
                  <span>Extract</span>
                  <h1>11.00%</h1>
                </div>
                <div>
                  <span>Alcohol</span>
                  <h1>4.8%</h1>
                </div>
                <div>
                  <span>Gentian</span>
                  <h1>20 IBU</h1>
                </div>
                <div>
                  <span>Serving Temperature</span>
                  <h1>6-9</h1>
                </div>
              </div>
            </div>
            <div>
              <img src={Beer3} />
            </div>
          </div>
        </section>
        <Footer />
      </div>
    </>
  );
}
