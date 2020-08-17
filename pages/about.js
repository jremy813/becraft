import Sidebar from "../components/sidebar";
import Footer from "../components/footer";
import Globe from "../public/assets/craftbeer2-about-pic1.png";
import Header from "../components/header";
import Head from "next/head";
import Person1 from "../public/assets/craftbeer2-about-pic2.jpg";
import Person2 from "../public/assets/craftbeer2-about-pic3.jpg";
import Person3 from "../public/assets/craftbeer2-about-pic4.jpg";
import Person4 from "../public/assets/craftbeer2-about-pic5.jpg";
import Beer1 from "../public/assets/craftbeer2-subheader-pic1.png";
import Person5 from "../public/assets/craftbeer2-about-pic6.png";
import Background from "../public/assets/craftbeer2-slider-pic2.png";

export default function About() {
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
        className="about_container"
      >
        <section className="about_sec1">
          <div>
            <h1>A FEW WORDS ABOUT US</h1>
            <img className="about_background" src={Background} />
          </div>
          <div className="about_img1">
            <img src={Beer1} />
          </div>
        </section>
        <section className="about_sec2">
          <div>
            <img src={Globe} />
          </div>
          <div>
            <h1>Swedish Tradition Since 1938</h1>
            <div>
              <p>
                Aliquam ac dui vel dui vulputate consectetur. Mauris accumsan,
                massa non consectetur condimentum, diam arcu tristique nibh, nec
                egestas diam elit at nulla. Suspendisse potenti. In non lacinia
                risus.
              </p>
              <p>
                Nulla sit amet vestibulum magna, eget pulvinar libero. Vivamus
                in diam turpis. In condimentum maximus tristique
              </p>
              <p> Pellentesque lorem augue, fermentum orci.</p>
            </div>
            <button>Read More</button>
          </div>
        </section>
        <section className="about_sec3">
          <div className="about_sec3imgs">
            <div>
              <img src={Person1} />
              <span>PHARETRA ODIO</span>
              <h1>KEVIN PERRY</h1>
              <p>
                Curabitur sed iaculis dolor, non congue ligula. Maecenas
                imperdiet ante eget hendrerit magna.
              </p>
            </div>
            <div>
              <img src={Person2} />
              <span>PHARETRA ODIO</span>
              <h1>KEVIN PERRY</h1>
              <p>
                Curabitur sed iaculis dolor, non congue ligula. Maecenas
                imperdiet ante eget hendrerit magna.
              </p>
            </div>
            <div>
              <img src={Person3} />
              <span>PHARETRA ODIO</span>
              <h1>KEVIN PERRY</h1>
              <p>
                Curabitur sed iaculis dolor, non congue ligula. Maecenas
                imperdiet ante eget hendrerit magna.
              </p>
            </div>
            <div>
              <img src={Person4} />
              <span>PHARETRA ODIO</span>
              <h1>KEVIN PERRY</h1>
              <p>
                Curabitur sed iaculis dolor, non congue ligula. Maecenas
                imperdiet ante eget hendrerit magna.
              </p>
            </div>
          </div>
          <div className="about_sec3btn">
            <button>CONTACT WITH US</button>
          </div>
        </section>
        <section className="about_sec4">
          <div>
            <h1>A MESSAGE FROM OUR CEO AND FOUNDER</h1>
            <div>
              <p>
                Aliquam ac dui vel dui vulputate consectetur. Mauris accumsan,
                massa non consectetur condimentum, diam arcu tristique nibh, nec
                egestas diam elit at nulla. Suspendisse potenti. In non lacinia
                risus.
              </p>
              <p>
                Nulla sit amet vestibulum magna, eget pulvinar libero. Vivamus
                in diam turpis. In condimentum maximus tristique
              </p>
              <p> Pellentesque lorem augue, fermentum orci.</p>
            </div>
            <button>Read More</button>
          </div>
          <div>
            <img src={Person5} />
          </div>
        </section>
        <Footer />
      </div>
    </>
  );
}
