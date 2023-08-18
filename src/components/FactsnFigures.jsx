import React from "react";
import Image from "next/image";
import { SiAdguard, SiKdenlive, SiSpringsecurity, SiFsecure } from "react-icons/si";
import { AiOutlineFileProtect } from "react-icons/ai";
import { FaFileInvoiceDollar, FaShieldVirus } from "react-icons/fa";

const FactsnFigures = () => {
  return (
    <section className="section bg-[#f15928] p-0 fnf-section">
      <div className="container">
        <ul className="facts-section">
          <li>
            <div className="flex benefits items-center mb-0 gap-2 w-full p-3 py-4 ">
              <div className="w-1/3">
                <SiSpringsecurity size={48} color="#f15928" style={{}}/>
              </div>
              <div className="w-full">
                <label className="text-xsm text-[#f15928] leading-[0.5rem] font-bold">
                  {/* Deduplication of Invoices and Negotiable Documents */}
                  Deduplication of Invoices and Documents
                </label>
              </div>
            </div>
            <div className="w-full p-2 pl-4 bg-[#FFF]">
              <ul>
                <li>
                  <p>Prevent Duplicate Payments</p>
                </li>
                <li>
                  <p>Ensure Reliable Verification</p>
                </li>
              </ul>
            </div>
          </li>

          <li>
            <div className="flex benefits items-center mb-0 gap-2 w-full p-3 py-4 ">
              <div className="w-1/3">
                <FaFileInvoiceDollar size={48}  color="#f15928" />
              </div>
              <div className="w-full">
                <label className="text-xsm text-[#f15928] leading-[0.5rem] font-bold">
                  Invoice Financing and Export Factoring <br></br>
                </label>
                {/* <span className="text-xsm text-[#444] leading-[0.5rem] font-bold">
                  Invoices and Negotiable Documents
                </span> */}
              </div>
            </div>
            <div className="w-full p-2 pl-4 bg-[#FFF]">
              <ul>
                <li>
                  <p>Accelerate Cash Flow</p>
                </li>
                <li>
                  <p>Empower Business Growth</p>
                </li>
              </ul>
            </div>
          </li>

          <li>
            <div className="flex benefits items-center mb-0 gap-2 w-full p-3 py-4 ">
              <div className="w-1/3">
                <SiFsecure size={48}  color="#f15928"/>
              </div>
              <div className="w-full">
                <label className="text-xsm text-[#f15928] leading-[0.5rem] font-bold">
                  Enhanced Risk Mitigation
                </label>
              </div>
            </div>
            <div className="w-full p-2 pl-4 bg-[#FFF]">
              <ul>
                <li>
                  <p>Strengthen Security & Compliance</p>
                </li>
                <li>
                  <p>Optimize Lending Decisions</p>
                </li>
              </ul>
            </div>
          </li>
          <li>
            <div className="flex benefits items-center mb-0 gap-2 w-full p-3 py-4 ">
              <div className="w-1/3">
                <SiKdenlive size={48}  color="#f15928"/>
              </div>
              <div className="w-full">
                <label className="text-xsm text-[#f15928] leading-[0.5rem] font-bold">
                  Real-Time Transaction Visibility
                </label>
              </div>
            </div>
            <div className="w-full p-2 pl-4 bg-[#FFF]">
              <ul>
                <li>
                  <p>Gain Transparent Insights</p>
                </li>
                <li>
                  <p>Enable Informed Decision-Making</p>
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
export default FactsnFigures;
