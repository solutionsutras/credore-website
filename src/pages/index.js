import React from "react";
import Head from "next/head";
import About from "../components/About";
import Community from "../components/Community";
import Header from "../components/Header";
import LazyShow from "../components/LazyShow";
import MainHero from "../components/MainHero";
import FactsnFigures from "../components/FactsnFigures";
import MainSlider from "../components/MainSlider";
import Solutions from "../components/Solutions";
import WhyCredore from "../components/WhyCredore";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import SupportedBy from "../components/SupportedBy";

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

      <LazyShow id="about">
        <About />
      </LazyShow>

      <LazyShow>
        <Solutions />
      </LazyShow>

      <LazyShow>
        <WhyCredore />
      </LazyShow>

      <LazyShow>
        <SupportedBy />
      </LazyShow>

      <LazyShow>
        <Contact />
      </LazyShow>

      <LazyShow>
        <Footer />
      </LazyShow>

      <LazyShow>
        <Community />
      </LazyShow>
    </div>
  );
};

export default App;
