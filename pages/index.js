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
      <div
        style={{
          background:
            "url(" + `${require("../public/assets/craftbeer2-bg.png")}` + ")",
        }}
        className="home_container"
      >
        <Sidebar />
        <div className="home_content">
          <img className="olive_bg" src={OlivesBg} alt="olives" />
          <section className="section1">
            <div className="home_info">
              <div>
                <h1>Brewed with passion and perfection</h1>
              </div>
              <div>
                <p>
                  Lorem ipsum dolor sit amet enim. Etiam ullamcorper non felis.
                  Maecenas malesuada elit lectus felis laoreet.
                </p>
              </div>
              <div>
                <button>About Us</button>
                <button>Our Beers</button>
              </div>
            </div>
            <div className="home_img1">
              <img src={Beer1} />
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
