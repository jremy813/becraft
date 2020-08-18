import Beer1 from "../public/assets/craftbeer2-subheader-pic1.png";
import Head from "next/head";
import Background from "../public/assets/craftbeer2-slider-pic2.png";
import Sidebar from "../components/sidebar";
import Header from "../components/header";
import Beer2 from "../public/assets/craftbeer2-product-pic1.png";
import Beer3 from "../public/assets/craftbeer2-product-pic2.png";
import Beer4 from "../public/assets/craftbeer2-product-pic3.png";
import Beer5 from "../public/assets/craftbeer2-product-pic4.png";
import Footer from "../components/footer";

export default function Beers() {
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
        className="beers_container"
      >
        <section className="beers_sec1">
          <div>
            <h1>BREWED WITH PASSION AND PERFECTION</h1>
            <img className="beers_background" src={Background} />
          </div>
          <div className="beers_img1">
            <img src={Beer1} />
          </div>
        </section>
        <section className="beers_sec2">
          <h1 className="beers_sec2title">
            BREWED WITH PASSION AND PERFECTION
          </h1>
          <div className="beers_lager">
            <div>
              <img src={Beer2} />
            </div>
            <div>
              <h2>BECFRAFT</h2>
              <h1 className="beers_lagertext">LAGER</h1>
              <p>
                Fusce ut velit laoreet, tempus arcu eu, molestie tortor. Nam vel
                justo cursus, faucibus lorem eget, egestas eros.
              </p>
              <p>
                Maecenas eleifend erat at justo fringilla imperdiet id ac magna.
              </p>
              <div className="beers_lagerstats">
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
          <div className="beers_pilsner">
            <div>
              <h2>BECFRAFT</h2>
              <h1 className="beers_pilsnertext">PILSNER</h1>
              <p>
                Fusce ut velit laoreet, tempus arcu eu, molestie tortor. Nam vel
                justo cursus, faucibus lorem eget, egestas eros.
              </p>
              <p>
                Maecenas eleifend erat at justo fringilla imperdiet id ac magna.
              </p>
              <div className="beers_pilsnerstats">
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

          <div className="beers_porter">
            <div>
              <img src={Beer4} />
            </div>
            <div>
              <h2>BECFRAFT</h2>
              <h1 className="beers_portertext">PILSNER</h1>
              <p>
                Fusce ut velit laoreet, tempus arcu eu, molestie tortor. Nam vel
                justo cursus, faucibus lorem eget, egestas eros.
              </p>
              <p>
                Maecenas eleifend erat at justo fringilla imperdiet id ac magna.
              </p>
              <div className="beers_porterstats">
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
          </div>
          <div className="beers_weizen">
            <div>
              <h2>BECFRAFT</h2>
              <h1 className="beers_weizentext">PILSNER</h1>
              <p>
                Fusce ut velit laoreet, tempus arcu eu, molestie tortor. Nam vel
                justo cursus, faucibus lorem eget, egestas eros.
              </p>
              <p>
                Maecenas eleifend erat at justo fringilla imperdiet id ac magna.
              </p>
              <div className="beers_weizenstats">
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
              <img src={Beer5} />
            </div>
          </div>
        </section>
        <Footer />
      </div>
    </>
  );
}
