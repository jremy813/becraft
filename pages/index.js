import Sidebar from "../components/sidebar";
import Head from "next/head";
import Background from "../public/assets/craftbeer2-bg.png";

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
      <div className="home_container">
        <Sidebar />
        <div
          style={{
            backgroundImage:
              "url(" + `${require("../public/assets/craftbeer2-bg.png")}` + ")",
          }}
          className="home_content"
        ></div>
      </div>
    </>
  );
}
