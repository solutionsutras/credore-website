import React from "react";
import HeroSlider, { Overlay, Slide, MenuNav } from "hero-slider";

const MainSlider = () => {
  return (
    <section className="section">
      <HeroSlider
        slidingAnimation="left_to_right"
        orientation="horizontal"
        initialSlide={1}
        onBeforeChange={(previousSlide, nextSlide) =>
          console.log("onBeforeChange", previousSlide, nextSlide)
        }
        onChange={(nextSlide) => console.log("onChange", nextSlide)}
        onAfterChange={(nextSlide) => console.log("onAfterChange", nextSlide)}
        style={{
          backgroundColor: "rgba(0, 0, 0, 0.33)",
        }}
        settings={{
          slidingDuration: 250,
          slidingDelay: 100,
          shouldAutoplay: true,
          shouldDisplayButtons: true,
          autoplayDuration: 5000,
          height: "100vh",
        }}
      >
        {/* <Overlay>
          <div className="title-wrapper">
            <h1 className="hero-title">Basic Setup</h1>
            <h1 className="hero-sub-title">
              Check out the documentation for more advanced examples.
            </h1>
          </div>
        </Overlay> */}

        <Slide
          background={{
            backgroundImageSrc: "../assets/images/slider-1.jpg",
          }}
        >
          <div className="title-wrapper">
            <h1 className="hero-title">
              Transforming Financial Supply Chain Management
            </h1>
            <h1 className="hero-sub-title">with Blockchain Technology</h1>
          </div>
        </Slide>

        <Slide
          background={{
            backgroundImageSrc: "../assets/images/slider-2.jpg",
          }}
        >
          <div className="title-wrapper">
            <h1 className="hero-title">
              Transforming Financial Supply Chain Management
            </h1>
            <h1 className="hero-sub-title">with Blockchain Technology</h1>
          </div>
        </Slide>

        {/* 
        <Slide
          shouldRenderMask
          label="Bogliasco - Italy"
          background={{
            backgroundImageSrc: "../assets/images/slider-2.jpg",
          }}
        />

        <Slide
          shouldRenderMask
          label="County Clare - Ireland"
          background={{
            backgroundImageSrc: "../assets/images/slider-3.jpg",
          }}
        />

        <Slide
          shouldRenderMask
          label="Crater Rock, OR - United States"
          background={{
            backgroundImageSrc: "../assets/images/slider-4.jpg",
          }}
        /> */}

        <MenuNav />
      </HeroSlider>
    </section>
  );
};

export default MainSlider;
