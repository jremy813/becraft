import React from "react";
import Head from "next/head";
import Header from "../components/header";
import Sidebar from "../components/sidebar";
import Beer1 from "../public/assets/craftbeer2-subheader-pic1.png";
import Email from "../public/assets/craftbeer2-contact-icon1.png";
import Phone from "../public/assets/craftbeer2-contact-icon2.png";
import Clock from "../public/assets/craftbeer2-contact-icon3.png";
import Social from "../public/assets/craftbeer2-contact-icon4.png";

function Contact() {
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
          <div>
            <h1>OUR HISTORY & TRADITION</h1>
          </div>
          <div className="contact_img1">
            <img src={Beer1} />
          </div>
        </section>
        <section className="contact_sec2">
          <h1>LEVEL 13, 2 ELIZABETH ST, MELBOURNE, VICTORIA 3000, AUSTRALIA</h1>
          <div className="contanct_icons">
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
        </section>
      </div>
    </>
  );
}

export default Contact;
