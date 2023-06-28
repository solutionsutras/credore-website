import React from "react";
// JSX
import HeroSlider, { Slide, Nav, OverlayContainer } from "hero-slider";
// import Wrapper from "../UI/Wrapper/Wrapper";
// import Title from "../UI/Title/Title";
// import Subtitle from "../UI/Subtitle/Subtitle";

// Images
const slide1 = "../assets/images/sliders/slider-1.png";
const slide2 = "../assets/images/sliders/slider-2.png";
const slide3 = "../assets/images/sliders/slider-3.jpg";
const slide4 = "../assets/images/sliders/slider-4.jpg";

const app = () => {
  return (
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
        backgroundColor: "rgba(141, 89, 40, 0.15)",
        height: "75vh",
      }}
      settings={{
        slidingDuration: 250,
        slidingDelay: 100,
        shouldAutoplay: true,
        shouldDisplayButtons: false,
        autoplayDuration: 5000,
        
      }}
    >
      {/* <OverlayContainer>
        <Wrapper>
          <Title>Basic Slider</Title>
          <Subtitle>Slides' background attachment set to fixed</Subtitle>
        </Wrapper>
      </OverlayContainer> */}

      <Slide
        background={{
          backgroundImageSrc: slide1,
          // backgroundAttachment: "fixed",
        }}
        height="75vh"
        settings={{
          height: "75vh",
        }}
      >
        <div className="title-wrapper pl-5">
          <h1 className="hero-title">
            Transforming Financial Supply Chain Management
          </h1>
          <h1 className="hero-sub-title">with Blockchain Technology</h1>
        </div>
      </Slide>

      <Slide
        background={{
          backgroundImageSrc: slide2,
          // backgroundAttachment: "fixed",
        }}
        height="75vh"
        settings={{
          height: "75vh",
        }}
      >
        <div className="title-wrapper pl-5">
          <h1 className="hero-title">
            Transforming Financial Supply Chain Management
          </h1>
          <h1 className="hero-sub-title">
            <small>with</small> Blockchain Technology
          </h1>
        </div>
      </Slide>

      <Nav />
    </HeroSlider>
  );
};

export default app;
