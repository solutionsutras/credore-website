import React from "react";

const CookiesPolicy = () => {
  return (
    <section className="section p-0" id="about-us">
      <div className="container">
        <div className="detailSectn flex gap-4 items-center">
          <div className="detailSecBx p-5 w-full">
            <div className="p-5 pl-0">
              <h1>Cookies Policy</h1>
            </div>
            
            <div className="text-sm">
              <p className="mb-5">
              This cookie policy contains important information on who we are, our use of cookies and similar technologies on our website.
              </p>
              <p className="mb-5">
              This cookie policy should be read together with our privacy policy which sets out how and why we collect, store, use and share personal information. It also details your rights in relation to your personal information, & details of how to contact us in the event you have a complaint.
              </p>
            </div>
            <div>
              {/* <button type="button" className="btn-primary learn-more">
                Read More
              </button> */}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
export default CookiesPolicy;
