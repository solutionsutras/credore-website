import React from "react";
import VideoSection from "./VideoSection";
import Image from "next/image";
import techLeftImg from "../../public/assets/images/offerings/tech-left.png";
import offering1 from "../../public/assets/images/offerings/invoice-discounting.png";
import offering2 from "../../public/assets/images/offerings/exchange-standardizedand-digital-originaldocuments.png";
import offering3 from "../../public/assets/images/offerings/true-decentralisation.png";
import offering4 from "../../public/assets/images/offerings/digital-standardised.png";
import offering5 from "../../public/assets/images/offerings/seamless-on-boarding.png";
import offering6 from "../../public/assets/images/offerings/realtime-collaboration.png";

const Technology = () => {
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

            <div className="mb-5 font-medium">
              How Credore Infrastructure Works?
            </div>

            <div className="flex gap-5">
              <div className="w-full">
                <Image src={techLeftImg} alt="" objectFit="cover" />
              </div>
              <div className="flex flex-col gap-5 w-full ">
                <div className="flex items-center gap-5 p-5 bg-[#DEF] w-full">
                  <Image src={offering1} alt="" objectFit="cover" />

                  <p className="text-[#29564b] text-left font-medium text-sm">
                    Invoice discounting & Export Factoring (with PEPPOL standard
                    e-Invoicing)
                  </p>
                </div>

                <div className="flex items-center gap-5 p-5 bg-[#DEF] w-full">
                  <Image src={offering2} alt="" objectFit="cover" />

                  <p className="text-[#29564b] text-left font-medium text-sm">
                    Exchange standardized and digital original documents
                  </p>
                </div>

                <div className="flex items-center gap-5 p-5 bg-[#DEF] w-full">
                  <Image src={offering3} alt="" objectFit="cover" />

                  <p className="text-[#29564b] text-left font-medium text-sm">
                    True decentralisation and high scalability using public
                    blockchain without revealing any sensitive data
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
export default Technology;
