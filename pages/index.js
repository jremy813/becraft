import Sidebar from "../components/sidebar";
import Head from "next/head";
import OlivesBg from "../public/assets/craftbeer2-sectionbg4.png";
import Beer1 from "../public/assets/craftbeer2-subheader-pic1.png";

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
      </div>
    </>
  );
}
