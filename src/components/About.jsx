import React from "react";
import VideoSection from "./VideoSection";
import Link from "next/link";
import Image from "next/image";
import HowCredoreHelps from "../../public/assets/images/how-credore-helps.png";

const About = () => {
  return (
    <section className="section about-section p-0" id="about-us">
      <div className="container">
        <div className="detailSectn flex gap-4 items-center">
          <div className="detailSecBx p-5 w-full">
            <div className="p-5 pl-0">
              <h1>How Credore Helps</h1>
            </div>
            <div className="heading">
              Transforming Financial Supply Chain Management: Unlocking
              Verifiable Trust with Credore
            </div>
            <div className="detailTxt">
              <p>
                Credore is a fast growing, blockchain powered fintech company
                which is dedicated to promoting inclusivity, collaboration, and
                digitization in the field of trade finance. <br></br>
              </p>
              <p>
                Credore offers solutions such as factoring and receivables
                management to small and medium-sized enterprises (MSMEs) in
                order to help them overcome liquidity gaps and trust deficits.
                By implementing Credore&apos;s solutions, businesses can improve
                their profits and reduce paperwork, while also making
                cross-border financing more accessible.
              </p>
            </div>
            <div>
              <Link href="/about_us">
                <button type="button" className="btn-primary learn-more">
                  Read More
                </button>
              </Link>
            </div>
          </div>

          {/* <div className="detailSecBx p-5 w-2/5">
            <div>
              <iframe
                src="https://www.youtube.com/embed/VtplLPDcI88"
                title="YouTube video player"
                // frameBorder="0"
                className="aboutCredore"
              ></iframe>
            </div>
          </div> */}
        </div>
        <div>
          <div className="detailSecBx p-5 w-full">
            <Image src={HowCredoreHelps} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};
export default About;
