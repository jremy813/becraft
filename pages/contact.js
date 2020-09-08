import React from "react";
import Head from "next/head";
import Header from "../components/header";
import Sidebar from "../components/sidebar";
import Beer1 from "../public/assets/craftbeer2-subheader-pic1.png";
import Email from "../public/assets/craftbeer2-contact-icon1.png";
import Phone from "../public/assets/craftbeer2-contact-icon2.png";
import Clock from "../public/assets/craftbeer2-contact-icon3.png";
import Social from "../public/assets/craftbeer2-contact-icon4.png";
import Footer from "../components/footer";

import { TweenMax, TimelineLite, Power3 } from "gsap";
import { useRef, useEffect } from "react";
import CSSPlugin from "gsap/CSSPlugin";

const C = CSSPlugin; // here is the gotcha....
function Contact() {
  let beerImage = useRef(null);
  let content = useRef(null);

  let tl = new TimelineLite();

  useEffect(() => {
    tl.from(content, 1.2, { x: -1280, ease: Power3.easeOut });
    tl.from(beerImage, 1.2, { y: 1280, ease: Power3.easeOut });
  });

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
        <section className="contact_sec1">
          <div ref={(el) => (content = el)}>
            <h1>OUR HISTORY & TRADITION</h1>
          </div>
          <div ref={(el) => (beerImage = el)} className="contact_img1">
            <img src={Beer1} />
          </div>
        </section>
        <section className="contact_sec2">
          <h1>LEVEL 13, 2 ELIZABETH ST, MELBOURNE, VICTORIA 3000, AUSTRALIA</h1>
          <div className="contact_icons">
            <div>
              <img src={Email} />
              <h2>E-MAIL</h2>
              <p>noreply@envato.com</p>
            </div>
            <div>
              <img src={Phone} />
              <h2>PHONE</h2>
              <p>+61 383 766 284</p>
            </div>
            <div>
              <img src={Clock} />
              <h2>OPENING HOURS</h2>
              <p>Mon - Sat: 9 AM - 6 PM</p>
            </div>
            <div>
              <img src={Social} />
              <h2>SOCIAL MEDIA</h2>
              <p>
                <a href="#">Facebok</a> & <a href="#">Youtube</a>
              </p>
            </div>
          </div>
        </section>
        <section className="contact_sec3">
          <h1>SEND US A MESSAGE</h1>
          <form>
            <input placeholder="Your name" />
            <input placeholder="Your e-mail" />
            <input placeholder="Subject" />
            <textarea placeholder="Message"></textarea>
            <button>Send A Message</button>
          </form>
        </section>
        <Footer />
      </div>
    </>
  );
}

export default Contact;
