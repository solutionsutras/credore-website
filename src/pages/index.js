import React from "react";
import Head from "next/head";
import About from "../components/About";
import Community from "../components/community";
import Footer from "../components/Footer";
import Header from "../components/Header";
import LazyShow from "../components/LazyShow";
import MainHero from "../components/MainHero";
import FactsnFigures from "../components/FactsnFigures";
import MainSlider from "../components/MainSlider";
import Solutions from "../components/Solutions";
import WhyCredore from "../components/WhyCredore";

const App = () => {
  return (
    <div className="bg-background">
      <Head>
        <title>
          Welcome to Credore - Revolutionary Fintech Transforming Financial
          Supply Chain Management with Blockchain Technology
        </title>
      </Head>
      <Header />
      {/* <MainSlider/> */}
      <MainHero />
      {/* <LazyShow>
        <FactsnFigures />
      </LazyShow> */}
      <LazyShow>
        <About />
      </LazyShow>
      <LazyShow>
        <Solutions />
      </LazyShow>
      <LazyShow>
        <WhyCredore />
      </LazyShow>
      {/* <LazyShow>
        <Community />
      </LazyShow> */}
      <LazyShow>
        <Footer />
      </LazyShow>
    </div>
  );
};

export default App;
