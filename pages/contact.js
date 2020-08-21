import React from "react";
import Head from "next/head";
import Header from "../components/header";
import Sidebar from "../components/sidebar";
import Beer1 from "../public/assets/craftbeer2-subheader-pic1.png";

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
            <h1>A FEW WORDS ABOUT US</h1>
          </div>
          <div className="contact_img1">
            <img src={Beer1} />
          </div>
        </section>
      </div>
    </>
  );
}

export default Contact;
