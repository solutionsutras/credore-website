import React from "react";
import FactsnFigures from "./FactsnFigures";

const MainHero = () => {
  return (
    <section className="section hero-section">
      <div className="container flex flex-col gap-[20px]">
        <div className="homeBannerSection">
          <div className="banner-details">
            <h1 className="hero-heading font-medium">
              Empowering
              <br></br>
              <span className="font-bold">
                Financial Supply Chain Management
              </span><br></br>
              with <span className="font-bold">Verifiable Trust</span>
            </h1>
            <div className="mt-5">
              <button className="knowMore btn-primary">Know More</button>
            </div>
          </div>
        </div>
        <FactsnFigures />
      </div>
    </section>
  );
};

export default MainHero;
