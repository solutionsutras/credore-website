import React from "react";
import VideoSection from "./VideoSection";
import Image from "next/image";
import offering1 from "../../public/assets/images/offerings/invoice-discounting.png";
import offering2 from "../../public/assets/images/offerings/exchange-standardizedand-digital-originaldocuments.png";
import offering3 from "../../public/assets/images/offerings/true-decentralisation.png";
import offering4 from "../../public/assets/images/offerings/digital-standardised.png";
import offering5 from "../../public/assets/images/offerings/seamless-on-boarding.png";
import offering6 from "../../public/assets/images/offerings/realtime-collaboration.png";

const Offerings = () => {
  return (
    <section className="section why-section mb-20">
      <div className="container">
        <div className="why-section flex gap-4 items-center px-10">
          <div className="">
            <div className="m-10">
              {/* <h1>Credore&apos;s Offerings</h1> */}
            </div>
            <div className="mb-10 font-normal">
              We offer blockchain-based IT infrastructure, incorporating common
              standards and best practices, aims to ensure that every digital
              interaction within financial supply chain management transactions
              in international trade becomes verifiable, non-repudiable,
              retrotraceable, accountable, and auditable for any necessary
              retention period.
            </div>
            <div id="content" className="flex flex-col gap-5">
              <div className="flex gap-2 w-full ">
                <div className="flex items-center gap-5 p-5 bg-[#F9F7F6] w-1/2">
                  <Image src={offering1} alt="" />

                  <p className="text-[#29564b] text-left font-medium text-sm">
                    Invoice discounting & Export Factoring (with PEPPOL standard
                    e-Invoicing)
                  </p>
                </div>
                <div className="flex items-center gap-5 p-5 bg-[#F9F7F6] w-1/2">
                  <Image src={offering2} alt="" />

                  <p className="text-[#29564b] text-left font-medium text-sm">
                    Exchange standardized and digital original documents
                  </p>
                </div>
              </div>

              <div className="flex gap-2 w-full ">
                <div className="flex items-center gap-5 p-5 bg-[#F9F7F6] w-1/2">
                  <Image src={offering3} alt="" />

                  <p className="text-[#29564b] text-left font-medium text-sm">
                    True decentralisation and high scalability using public
                    blockchain without revealing any sensitive data.
                  </p>
                </div>
                <div className="flex items-center gap-5 p-5 bg-[#F9F7F6] w-1/2">
                  <Image src={offering4} alt="" />

                  <p className="text-[#29564b] text-left font-medium text-sm">
                    Fully digital standardised SCF business workflow harmonising
                    ICC&apos;s DSI*
                  </p>
                </div>
              </div>

              <div className="flex gap-2 w-full ">
                <div className="flex items-center gap-5 p-5 bg-[#F9F7F6] w-1/2">
                  <Image src={offering5} alt="" />

                  <p className="text-[#29564b] text-left font-medium text-sm">
                    Seamless on-boarding,KYC and KYB using Global Legal
                    Entity Identifier
                  </p>
                </div>
                <div className="flex items-center gap-5 p-5 bg-[#F9F7F6] w-1/2">
                  <Image src={offering6} alt="" />

                  <p className="text-[#29564b] text-left font-medium text-sm">
                    Realtime multi-party collaboration
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Offerings;
