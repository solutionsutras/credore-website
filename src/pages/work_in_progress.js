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
import ManageCookies from "../components/ManageCookies";
import WorkInProgress from "../components/WorkInProgress";


const work_in_progress = () => {
  return (
    <div className="bg-background">
      <Head>
        <title>
          Welcome to Credore - Revolutionary Fintech Transforming Financial
          Supply Chain Management with Blockchain Technology
        </title>
      </Head>
      <Header />

      <WorkInProgress />

      <LazyShow>
        <Footer />
      </LazyShow>

      <LazyShow>
        <Community />
      </LazyShow>



    </div>
  );
};

export default work_in_progress;
