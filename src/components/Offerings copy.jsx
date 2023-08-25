import React from "react";
import VideoSection from "./VideoSection";
import Image from "next/image";
import centerImg from "../../public/assets/images/offerings/center-image.png";
import leftImg from "../../public/assets/images/offerings/left-image.png";
import offering1 from "../../public/assets/images/offerings/invoice-discounting.png";
import offering2 from "../../public/assets/images/offerings/exchange-standardizedand-digital-originaldocuments.png";
import offering3 from "../../public/assets/images/offerings/true-decentralisation.png";
import offering4 from "../../public/assets/images/offerings/digital-standardised.png";
import offering5 from "../../public/assets/images/offerings/seamless-on-boarding.png";
import offering6 from "../../public/assets/images/offerings/realtime-collaboration.png";

import * as Fa from "react-icons/fa";
import * as Ai from "react-icons/ai";
import * as Bi from "react-icons/bi";
import { BiMoneyWithdraw } from "react-icons/bi";

const Offerings = () => {
  return (
    <section className="section why-section mb-20 section-padded">
      <div className="container">
        <div className="items-center px-2">
          <div className="p-10 font-normal">
            We offer blockchain-based IT infrastructure, incorporating common
            standards and best practices, aims to ensure that every digital
            interaction within financial supply chain management transactions in
            international trade becomes verifiable, non-repudiable,
            retrotraceable, accountable, and auditable for any necessary
            retention period.
          </div>

          {/* <div className="arr-shape-content">
                <div className="arr-shape">
                  <div className="curve"></div>
                </div>
              </div> */}

          <div className="flex flex-col">
            <div className="flex gap-2 w-full items-center">
              <div className="justify-center flex flex-col p-10 w-2/3">
                <Image
                  src={offering1}
                  alt=""
                  objectFit="contain"
                  layout="responsive"
                />
                <div className="">
                <p>
                  Invoice discounting & Export Factoring (with PEPPOL standard
                  e-Invoicing)
                </p>
              </div>
              </div>
              

              <div className="justify-center flex flex-col p-10 w-2/3">
                <Image
                  src={offering1}
                  alt=""
                  objectFit="contain"
                  layout="responsive"
                />
                <div className="">
                  <p>
                    Invoice discounting & Export Factoring (with PEPPOL standard
                    e-Invoicing)
                  </p>
                </div>
              </div>
              

              <div className="justify-center flex flex-col p-10 w-2/3">
                <Image
                  src={offering1}
                  alt=""
                  objectFit="contain"
                />
                <div className="">
                  <p>
                    Invoice discounting & Export Factoring (with PEPPOL standard
                    e-Invoicing)
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex gap-2 w-full items-center" id="content">
            <div className="justify-center flex flex-col p-10 w-2/3">
              <Image
                src={leftImg}
                alt=""
                objectFit="contain"
                layout="responsive"
              />
            </div>

            {/* Steps Start */}
            <div className="flex flex-col gap-4 w-full">
              <div className="flex items-center gap-0 w-full bg-[#fb9c40] rounded-full gr gr-1">
                <div className="p-3 border-r-4 border-white">
                  <Fa.FaFileInvoiceDollar size={36} color="#FFFFFF" />
                </div>
                <div className="p-2 text-[#29564b] text-left font-medium text-xsm ">
                  <p className="text-white">
                    Invoice discounting & Export Factoring (with PEPPOL standard
                    e-Invoicing)
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-0 w-full bg-[#fb9c40] rounded-full gr gr-2">
                <div className="p-3 border-r-4 border-white">
                  <Fa.FaFileInvoiceDollar size={36} color="#FFFFFF" />
                </div>
                <div className="p-2 text-[#29564b] text-left font-medium text-xsm ">
                  <p className="text-white">
                    Exchange standardized and digital original documents
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-0 w-full bg-[#fb9c40] rounded-full gr gr-3">
                <div className="p-3 border-r-4 border-white">
                  <Fa.FaFileInvoiceDollar size={36} color="#FFFFFF" />
                </div>
                <div className="p-2 text-[#29564b] text-left font-medium text-xsm ">
                  <p className="text-white">
                    True decentralisation and high scalability using public
                    blockchain without revealing any sensitive data.
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-0 w-full bg-[#fb9c40] rounded-full gr gr-4">
                <div className="p-3 border-r-4 border-white">
                  <Fa.FaFileInvoiceDollar size={36} color="#FFFFFF" />
                </div>
                <div className="p-2 text-[#29564b] text-left font-medium text-xsm ">
                  <p className="text-white">
                    Fully digital standardised SCF business workflow harmonising
                    ICC's DSI*
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-0 w-full bg-[#fb9c40] rounded-full gr gr-5">
                <div className="p-3 border-r-4 border-white">
                  <Fa.FaFileInvoiceDollar size={36} color="#FFFFFF" />
                </div>
                <div className="p-2 text-[#29564b] text-left font-medium text-xsm ">
                  <p className="text-white">
                    Seamless on-boarding,KYC and KYB usingGlobal Legal
                    EntityIdentifier
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-0 w-full bg-[#fb9c40] rounded-full gr gr-6">
                <div className="p-3 border-r-4 border-white">
                  <Fa.FaFileInvoiceDollar size={36} color="#FFFFFF" />
                </div>
                <div className="p-2 text-[#29564b] text-left font-medium text-xsm ">
                  <p className="text-white">
                    Realtime multi-partycollaboration
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
