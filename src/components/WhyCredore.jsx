import React from "react";
import VideoSection from "./VideoSection";

const WhyCredore = () => {
  return (
    <section className="section why-section p-0">
      <div className="container">
        <div className="whySection flex gap-4 items-center">
          <div className="">
            <div className="p-5 pl-0">
              <h1>Why Credore</h1>
            </div>
            <div className="heading">
              Credore is amazingly revolutionizing Supply Chain Management with
              use of Blockchain Technology
            </div>
            <div id="content">
              <div className="flex">
                <div className="column blurb">
                  <div className="blurb-image blurb-image-shrink flex justify-center">
                    <img
                      src="assets/images/efficiency.png"
                      className="image is-128x128"
                    />
                  </div>
                  <h2 className="blurb-title">efficiency</h2>
                  <p className="blurb-text">
                    Traditional paper-heavy processes are time-consuming, prone
                    to human error, and often requires third-party mediation. By
                    streamlining these processes with Credore's blockchain
                    platform, transactions can be completed faster and more
                    efficiently.
                  </p>
                </div>
                <div className="column blurb">
                  <div className="blurb-image blurb-image-shrink flex justify-center">
                    <img
                      src="assets/images/security.png"
                      className="image is-128x128"
                    />
                  </div>
                  <h2 className="blurb-title">security & compliance</h2>
                  <p className="blurb-text">
                    As user data is sensitive and crucial, Credore's blockchain
                    platform can change the way this critical information is
                    viewed. By creating a record that can’t be altered and is
                    encrypted end-to-end, blockchain helps prevent fraud and
                    unauthorized activity.
                  </p>
                </div>
                <div className="column blurb">
                  <div className="blurb-image blurb-image-shrink flex justify-center">
                    <img
                      src="assets/images/transparency.png"
                      className="image is-128x128"
                    />
                  </div>
                  <h2 className="blurb-title">transparency</h2>
                  <p className="blurb-text">
                    Credore's Blockchain technology can greatly improve supply
                    chains by enabling faster and more cost-efficient delivery
                    of products, enhancing products’ traceability, improving
                    coordination between partners, and aiding access to
                    financing.
                  </p>
                </div>
              </div>
              <div className="flex">
                <div className="column blurb">
                  <div className="blurb-image blurb-image-shrink flex justify-center">
                    <img
                      src="assets/images/trust.png"
                      className="image is-128x128"
                    />
                  </div>
                  <h2 className="blurb-title">immutability & trustworthiness</h2>
                  <p className="blurb-text">
                    In Credore's revolutionary technology platform combination
                    of decentralization, immutability, transparency and security
                    provides trust for the sellers, buyers, investors and all
                    other stake holders.
                  </p>
                </div>
                <div className="column blurb">
                  <div className="blurb-image blurb-image-shrink flex justify-center">
                    <img
                      src="assets/images/experience.png"
                      className="image is-128x128"
                    />
                  </div>
                  <h2 className="blurb-title">experience</h2>
                  <p className="blurb-text">
                    Our experience and expertise helps to create a more secure
                    and streamlined ecosystem and is the easiest way to verify
                    supply chain items and proving their existence, possession,
                    storage and insurance.
                  </p>
                </div>
                <div className="column blurb">
                  <div className="blurb-image blurb-image-shrink flex justify-center">
                    <img
                      src="assets/images/track-record.png"
                      className="image is-128x128"
                    />
                  </div>
                  <h2 className="blurb-title">track record</h2>
                  <p className="blurb-text">
                    We are empowering &amp; entrusting the users and customers
                    with control of the Global Value Chain.
                  </p>
                </div>
              </div>
            </div>
            <div className="mb-20"></div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default WhyCredore;
