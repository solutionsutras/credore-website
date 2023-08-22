import React from "react";
import VideoSection from "./VideoSection";
import Image from "next/image";
import StrVer from "../../public/assets/images/about/streamlined-verification.gif";

const CredoreSteps = () => {
  return (
    <section className="section p-0" id="about-us">
      <div className="container">
        <div className="p-5">
          <h1 className="text-[#29564b] text-lg font-medium mb-4">
            Discover how Credore transforms financial supply chain management
            through its innovative platform.
          </h1>
          <p className="font-medium">
            Here's a step-by-step breakdown of how we empower businesses:
          </p>
        </div>

        <div className="flex gap-4 items-center">
          <div className="flex flex-col gap-5 w-full">
            <div className="shape shape1">
              <h5 className="p-1 text-gray-700 text-sm">Streamlined Verification</h5>
              <div class="px-1">
                <p className="text-gray-700 text-xsm font-normal">
                  Our platform begins by ensuring the authenticity of invoices
                  and negotiable documents through robust verification
                  processes.
                </p>
              </div>
            </div>

            <div className="shape shape1 ">
              <h5 className="p-1 text-gray-700 text-sm">Effortless Financing</h5>
              <div class="px-1">
                <p className="text-gray-700 text-xsm font-normal">
                  Seamlessly access invoice financing and export factoring
                  services, accelerating your business growth while mitigating
                  risks.
                </p>
              </div>
            </div>

            <div className="shape shape2">
              <h5 className="p-1 text-gray-700 text-sm">Enhanced Risk Mitigation</h5>
              <div class="px-1">
                <p className="text-gray-700 text-xsm font-normal">
                  Experience enhanced security with our advanced risk assessment
                  tools, safeguarding your transactions from potential fraud.
                </p>
              </div>
            </div>

            <div className="shape shape2">
              <h5 className="p-1 text-gray-700 text-sm">Real-Time Insights</h5>
              <div class="px-1">
                <p className="text-gray-700 text-xsm font-normal">
                  Gain real-time visibility into your transaction status,
                  empowering you with data-driven decisions to optimize your
                  cash flow.
                </p>
              </div>
            </div>
          </div>

          <div className="items-center">
            <Image src={StrVer} alt="" />
          </div>

          <div className="flex flex-col gap-5  w-full">
            <div className="shape shape3 ">
              <h5 className="p-1 text-gray-700 text-sm">Streamlined Verification</h5>
              <div class="px-1">
                <p className="text-gray-700 text-xsm font-normal">
                  Our platform begins by ensuring the authenticity of invoices
                  and negotiable documents through robust verification
                  processes.
                </p>
              </div>
            </div>

            <div className="shape shape3 ">
              <h5 className="p-1 text-gray-700 text-sm">Effortless Financing</h5>
              <div class="px-1">
                <p className="text-gray-700 text-xsm font-normal">
                  Seamlessly access invoice financing and export factoring
                  services, accelerating your business growth while mitigating
                  risks.
                </p>
              </div>
            </div>

            <div className="shape shape4 ">
              <h5 className="p-1 text-gray-700 text-sm">Enhanced Risk Mitigation</h5>
              <div class="px-1">
                <p className="text-gray-700 text-xsm font-normal">
                  Experience enhanced security with our advanced risk assessment
                  tools, safeguarding your transactions from potential fraud.
                </p>
              </div>
            </div>

            <div className="shape shape4 ">
              <h5 className="p-1 text-gray-700 text-sm">Real-Time Insights</h5>
              <div class="px-1">
                <p className="text-gray-700 text-xsm font-normal">
                  Gain real-time visibility into your transaction status,
                  empowering you with data-driven decisions to optimize your
                  cash flow.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
export default CredoreSteps;
