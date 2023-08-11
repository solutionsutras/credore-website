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
import Offerings from "../components/Offerings";
import AboutDetails from "../components/AboutDetails";
// import Team from "../components/team";
import Footer from "../components/Footer";

const privacy_policy = () => {
  return (
    <div className="bg-background">
      <Head>
        <title>
          Privacy policy - Credore - Revolutionary Fintech Transforming Financial
          Supply Chain Management with Blockchain Technology
        </title>
      </Head>
      <Header />
      {/* <MainSlider/> */}
      {/* <MainHero /> */}
      <section
        className="section about-page-banner"
        // style={{
        //   width: "100%",
        //   backgroundImage: "url(../../public/assets/images/hero-bg.png)",
        // }}
      >
        <div className="container flex flex-col gap-[20px]">
          <div className="homeBannerSection">
            <div className="banner-details">
              {/* <h1 className="hero-heading font-medium text-[#f15928] text-[#f15928]">
                About Us
              </h1> */}
            </div>
            {/* <div className="bannerImage">
            <figure>
              <img
                src="../assets/images/home-banner.png"
                alt="Banner Image"
                className="img-responsive"
              />
            </figure>
          </div> */}
          </div>
        </div>
      </section>
      {/* <LazyShow>
        <FactsnFigures />
      </LazyShow> */}
      <LazyShow>
        <AboutDetails />
      </LazyShow>
      <LazyShow>
        <Offerings />
      </LazyShow>
      {/* <LazyShow>
        <Team />
      </LazyShow> */}

      <LazyShow>
        <Footer />
      </LazyShow>

      <LazyShow>
        <Community />
      </LazyShow>
    </div>
  );
};

export default privacy_policy;