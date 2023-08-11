import React from "react";
import Image from "next/image";
// import {suppliers, banks, corporates} from "../constants/assets";
import suppliers from  "./../../public/assets/images/suppliers.png";
import banks from  "./../../public/assets/images/banks.png";
import corporates from  "./../../public/assets/images/corporates.png";

const Solutions = () => {
  return (
    <section className="section">
      <div className="container">
        <div className="solutionsDetailsBx">
          <div className="p-5 pl-0">
            <h1 className="text-center">Our Solutions</h1>
          </div>
          
          <div className="heading">
            Credore leverages ICC&apos;s Digital Standard Initiative recommended
            technology-neutral methodologies and blockchain enabling enterprises
            to synchronize complex, multi party business processes with privacy
            and without moving data from systems of record. Our innovative
            approach helps prevent Duplicate Invoice Financing and unlocks
            verifiable trust in the financial supply chain.
          </div>
          <div className="otherDetails">
            <div className="tile">
              <figure>
                <Image
                  src={suppliers}
                  alt=""
                  className="img-responsive"
                />
              </figure>
              <div className="tileHEading">for Sellers</div>
              <div className="tiletxt">
                Credore&apos;s Invoice Discounting & Export Factoring solutions
                provides traders/sellers easy and seamless access to quick
                working capitals required for day to day activities by keeping
                its trade receivable as collateral.
              </div>
            </div>
            <div className="tile">
              <figure>
                <Image
                  src={banks}
                  alt="exprt-img"
                  className="img-responsive"
                />
              </figure>
              <div className="tileHEading">for Financial Institutions</div>
              <div className="tiletxt">
                The integration of Credore&apos;s tokenization technology and
                Peppol-based e-invoicing allows for the automation of trade
                origination, providing banks with improved efficiency, security,
                and access to new financing options.
              </div>
            </div>
            <div className="tile">
              <figure>
                <Image
                  src={corporates}
                  alt="exprt-img"
                  className="img-responsive"
                />
              </figure>
              <div className="tileHEading">for Corporates</div>
              <div className="tiletxt">
                By using our next generation Blockchain Technology Platform
                corporates can increase trust, transparency, security,
                traceability of various transactions which helps them reducing
                cost and improve efficiency.
              </div>
            </div>
          </div>
          {/* <div className="btnBx">
            <button type="button" className="btn-primary speak-expert">
              View Details
            </button>
          </div> */}
        </div>
      </div>
    </section>
  );
};
export default Solutions;
