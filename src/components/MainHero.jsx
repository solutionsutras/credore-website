import React from "react";
import FactsnFigures from "./FactsnFigures";

const MainHero = () => {
  return (
    <section className="section hero-section">
      <div className="container flex flex-col gap-[70px]">
        <div className="homeBannerSection">
          <div className="banner-details">
            <h1 className="hero-heading font-medium">
              Transforming{" "}
              <span className="font-bold">
                Financial Supply Chain Management
              </span>{" "}
              with <span className="font-bold">Blockchain Technology</span>
            </h1>
            <div>
              <button className="knowMore btn-primary">Know More</button>
            </div>
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
        <FactsnFigures/>
      </div>
    </section>
  );
};

export default MainHero;
