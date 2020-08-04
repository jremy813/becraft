import Sidebar from "../components/sidebar";
import Head from "next/head";
import OlivesBg from "../public/assets/craftbeer2-sectionbg4.png";
import Beer1 from "../public/assets/craftbeer2-subheader-pic1.png";
import Globe from "../public/assets/craftbeer2-about-pic1.png";

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
              <p>
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
              <p>
                Aliquam ac dui vel dui vulputate consectetur. Mauris accumsan,
                massa non consectetur condimentum, diam arcu tristique nibh, nec
                egestas diam elit at nulla. Suspendisse potenti. In non lacinia
                risus. Nulla sit amet vestibulum magna, eget pulvinar libero.
                Vivamus in diam turpis. In condimentum maximus tristique.
                Pellentesque lorem augue, fermentum orci.
              </p>
              <button>Read More</button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
