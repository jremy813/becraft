import Beer1 from "../public/assets/craftbeer2-subheader-pic1.png";
import Head from "next/head";
import Background from "../public/assets/craftbeer2-slider-pic2.png";
import Sidebar from "../components/sidebar";
import Header from "../components/header";

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
      </div>
    </>
  );
}
