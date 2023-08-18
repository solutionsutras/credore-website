import React from "react";
import VideoSection from "./VideoSection";
import Image from "next/image";
import HowCredoreHelps from "../../public/assets/images/how-credore-helps.png";

const AboutDetails = () => {
  return (
    <section className="section p-0" id="about-us">
      <div className="container">
        <div className="detailSectn flex gap-4 items-center">
          <div className="detailSecBx p-5 w-full">
            {/* <div className="p-5 pl-0">
              <h1>How Credore Helps</h1>
            </div> */}
            <div className="heading">
              Transforming Financial SupplyChain Management: Unlocking
              Verifiable Trust with Credore
            </div>
            <div className="detailTxt">
              <p>
                Credore is a fast growing, blockchain powered fintech company
                offering solutions such as factoring and receivables management
                to small and medium-sized enterprises (MSMEs) in order to help
                them overcome liquidity gaps and trust deficits. By implementing
                Credore&apos;s solutions, businesses can improve their profits
                and reduce paperwork, while also making cross-border financing
                more accessible.
              </p>
              <p>
                In order to achieve this, Credore utilizes cutting-edge
                technologies such as e-Invoice PEPPOL standard, LEI (Global
                Legal Entities Identifier) and ICC Digital Standard Initiative.
                These digital tools enable Credore to increase efficiency and
                trust in the trade finance process, making it more collaborative
                and accessible for all parties involved.
              </p>
            </div>

            {/* <div className="mb-6 text-[#29564b font-medium text-sm">
              <p className="mb-2">
                Discover how Credore transforms financial supply chain
                management through its innovative platform.
              </p>
              <p>
                Here's a step-by-step breakdown of how we empower businesses:
              </p>
            </div> */}
            
          </div>
        </div>

        <div>
          <div className="detailSecBx p-5 w-full">
            <Image src={HowCredoreHelps} alt="" />
          </div>
        </div>

        {/* <div className="px-10 py-5 max-w-4xl min-h-screen">
          <iframe
            src="https://www.youtube.com/embed/VtplLPDcI88"
            title="YouTube video player"
            className="aboutCredore"
          ></iframe>
        </div> */}
      </div>
    </section>
  );
};
export default AboutDetails;
