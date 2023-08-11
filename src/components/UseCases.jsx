import React from "react";
import useCaseData from "../constants/useCasesData.json";
import VideoSection from "./VideoSection";
import Image from "next/image";
import offering1 from "../../public/assets/images/offerings/invoice-discounting.png";
import offering2 from "../../public/assets/images/offerings/exchange-standardizedand-digital-originaldocuments.png";
import offering3 from "../../public/assets/images/offerings/true-decentralisation.png";
import offering4 from "../../public/assets/images/offerings/digital-standardised.png";
import offering5 from "../../public/assets/images/offerings/seamless-on-boarding.png";
import offering6 from "../../public/assets/images/offerings/realtime-collaboration.png";

const UseCases = () => {
  return (
    <section className="section why-section mb-20">
      <div className="container">
        <div className="why-section flex gap-4 items-center px-10">
          <div className="w-full">
            <div className="m-10"></div>

            <div id="content" className="flex flex-col gap-5">
              {useCaseData.map((item, index) => {
                return (
                  <div
                    key={index}
                    className={
                      index % 2 == 0
                        ? "flex w-full gap-5 items-center"
                        : "flex w-full gap-5 items-center justify-end"
                    }
                  >
                    <div className="flex w-2/5 items-center">
                      <div className="p-5 pr-2 bg-[#BC5635]">
                        <h1 className="text-sm font-medium text-white">
                          Step {index + 1} - {item.title}
                        </h1>
                      </div>
                      <div className="arrow" />
                    </div>
                    <div class="w-1/2 border-1 p-5 py-2">
                      {item.details.map((dt, i) => {
                        return (
                          <div key={i}>
                            <p className="text-[#29564b] text-left font-normal text-[14px] mb-2">
                              {dt}
                            </p>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default UseCases;
