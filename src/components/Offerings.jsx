import React from "react";
import VideoSection from "./VideoSection";

const Offerings = () => {
  return (
    <section className="section why-section">
      <div className="container">
        <div className="why-section flex gap-4 items-center px-10">
          <div className="">
            <div className="p-5 pl-0">
              <h1>Credore's Offerings</h1>
            </div>
            <div className="heading">
              A blockchain-based IT infrastructure, incorporating common
              standards and bestpractices, aims to ensure that every digital
              interaction within financial supply chainmanagement transactions
              in international trade becomes verifiable, non-repudiable,
              retrotraceable, accountable, and auditable for any necessary
              retention period.
            </div>
            <div id="content" class="flex flex-col gap-5">
              <div className="flex gap-2 w-full ">
                <div className="flex items-center gap-2 p-2  bg-[#F9F7F6] max-w-[33%]">
                  <img src="assets/images/offerings/invoice-discounting.png" />

                  <p className="text-[#29564b]  text-left">
                    Invoice discounting & Export Factoring (with PEPPOL standard
                    eInvoicing)
                  </p>
                </div>
                <div className="flex items-center gap-2 p-2  bg-[#F9F7F6] max-w-[33%]">
                  <img src="assets/images/offerings/exchange-standardizedand-digital-originaldocuments.png" />

                  <p className="text-[#29564b]  text-left">
                    Exchange standardizedand digital originaldocuments
                  </p>
                </div>
                <div className="flex items-center gap-2 p-2  bg-[#F9F7F6] max-w-[33%]">
                  <img src="assets/images/offerings/true-decentralisation.png" />

                  <p className="text-[#29564b]  text-left">
                    True decentralisation and high scalability using public
                    blockchain without revealing any sensitive data.
                  </p>
                </div>
              </div>

              <div className="flex gap-2 w-full ">
                <div className="flex items-center gap-2 p-2  bg-[#F9F7F6] max-w-[33%]">
                  <img
                    src="assets/images/offerings/digital-standardised.png"
                    width={100}
                  />

                  <p className="text-[#29564b]  text-left">
                    Fully digital standardised SCF business workflow harmonising
                    ICC's DSI*
                  </p>
                </div>
                <div className="flex items-center gap-2 p-2  bg-[#F9F7F6] max-w-[33%]">
                  <img
                    src="assets/images/offerings/seamless-on-boarding.png"
                    width={100}
                  />

                  <p className="text-[#29564b]  text-left">
                    Seamless on-boarding,KYC and KYB usingGlobal Legal
                    EntityIdentifier
                  </p>
                </div>
                <div className="flex items-center gap-2 p-2  bg-[#F9F7F6] max-w-[33%]">
                  <img src="assets/images/offerings/realtime-collaboration.png" />

                  <p className="text-[#29564b]  text-left">
                    Realtime multi-party collaboration
                  </p>
                </div>
              </div>
            </div>

            <div className="mb-20"></div>

            <div className="container ">
              {/* <div className="p-5 pl-0">
                <h1>Our Team</h1>
              </div> */}
              <img src="assets/images/team/the-team.png" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Offerings;
