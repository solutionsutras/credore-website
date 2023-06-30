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
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using
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
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
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
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
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
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
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
