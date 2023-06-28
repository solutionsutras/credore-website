import React from "react";
import VideoSection from "./VideoSection";

const About = () => {
  return (
    <section className="section about-section p-0">
      <div className="container">
        <div className="detailSectn flex gap-4 items-center">
          <div className="detailSecBx">
            <div className="p-5 pl-0">
              <h1>About Credore</h1>
            </div>
            <div className="heading">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry
            </div>
            <div className="detailTxt">
              <p>
                Global trade is the backbone of the world economy. However,
                trading from ancient times is highly dependent on paper
                documents, in spite of decades long efforts to digitalize. A
                cross-border transaction involves multiple actors and on average
                requires the exchange of 36 documents and 240 copies. Currently,
                fewer than one percent of trade documents are fully digitized.
              </p>
              <p>
                The lack of adoption of data standards, data privacy and on how
                trade data are exchanged, combined with an actual absence of
                standards, significantly hinder the seamless data flow from one
                end of the supply chain to the other. This has diminished
                efficiency gains along trade finance and documents exchange and
                has weighed heavily on companies, in particular small
                businesses.
              </p>
            </div>
            <div>
              <button type="button" className="btn-primary learn-more">
                Read More
              </button>
            </div>
          </div>

          <div className="detailSecBx">
            <div>
              <iframe
                src="https://www.youtube.com/embed/VtplLPDcI88"
                title="YouTube video player"
                frameborder="0"
                className="aboutCredore"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default About;
