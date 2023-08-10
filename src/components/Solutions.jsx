import React from "react";

const Solutions = () => {
  return (
    <section className="section">
      <div className="container">
        <div className="solutionsDetailsBx">
          <div className="p-5 pl-0">
            <h1 className="text-center">Our Solutions</h1>
          </div>
          {/* <div className="heading">Lorem Ipsum is simply dummy text</div> */}
          <div className="heading">
            Credore leverages ICC's Digital Standard Initiative recommended
            technology-neutral methodologies and blockchain enabling enterprises
            to synchronize complex, multipartybusiness processes with privacy
            and without moving data from systems of record. Ourinnovative
            approach helps prevent Duplicate Invoice Financing and unlocks
            verifiable trust inthe financial supply chain.
          </div>
          <div className="otherDetails">
            <div className="tile">
              <figure>
                <img
                  src="assets/images/suppliers.png"
                  alt="exprt-img"
                  className="img-responsive"
                />
              </figure>
              <div className="tileHEading">for Sellers</div>
              <div className="tiletxt">
                Credore's Invoice Discounting & Export Factoring solutions
                provides traders/sellers easy and seamless access to quick
                working capitals required for day to day activities by keeping
                its trade receivable as collateral.
              </div>
            </div>
            <div className="tile">
              <figure>
                <img
                  src="assets/images/banks.png"
                  alt="exprt-img"
                  className="img-responsive"
                />
              </figure>
              <div className="tileHEading">for Financial Institutions</div>
              <div className="tiletxt">
                The integration of Credore's tokenization technology and
                Peppol-based e-invoicing allows for the automation of trade
                origination, providing banks with improved efficiency, security,
                and access to new financing options.
              </div>
            </div>
            <div className="tile">
              <figure>
                <img
                  src="assets/images/corporates.png"
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
          <div className="btnBx">
            <button type="button" className="btn-primary speak-expert">
              View Details
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Solutions;
