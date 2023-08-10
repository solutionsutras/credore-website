import React from "react";
import Image from "next/image";

const FactsnFigures = () => {
  return (
    <section className="section bg-[#f15928] p-0 fnf-section">
      <div className="container">
        <ul className="facts-section">
          <li>
            <div className="flex benefits items-center pb-2 gap-2">
              <Image
                src="/assets/images/benefits/streamline-operations.png"
                height={60}
                width={60}
                alt="Streamlined FSCM Operations"
              />
              <div>
                <label>Streamlined</label>
                <h1 className="text text-sm">FSCM Operations</h1>
              </div>
            </div>
            <div>
              <ul>
                <li>
                  <p>Simplify complex multiparty processes.</p>
                </li>
                <li>
                  <p>
                    Synchronize business operations across different systems
                  </p>
                </li>
                <li>
                  <p>Enhance efficiency and reduce overhead costs</p>
                </li>
              </ul>
            </div>
          </li>

          <li>
            <div className="flex benefits items-center pb-2 gap-2">
              <Image
                src="/assets/images/benefits/enhance-security.png"
                height={60}
                width={60}
                alt="Enhanced Data Privacy & Security"
              />
              <div>
                <label>Enhanced</label>
                <h1 className="text text-sm">Data Security</h1>
              </div>
            </div>
            <div>
              <ul>
                <li>
                  <p>Safeguard sensitive information andclient data</p>
                </li>
                <li>
                  <p>Ensure compliance with data privacy regulations</p>
                </li>
                <li>
                  <p>Protect against data breaches and fraudulent activities</p>
                </li>
              </ul>
            </div>
          </li>

          <li>
            <div className="flex benefits items-center pb-2 gap-2">
              <Image
                src="/assets/images/benefits/mitigate-risks.png"
                height={60}
                width={60}
                alt="Mitigate Risks"
              />
              <div>
                <label>Mitigate</label>
                <h1 className="text text-sm">Risks & Threats</h1>
              </div>
            </div>
            <div>
              <ul>
                <li>
                  <p>Minimize the risk of duplicate invoice financing</p>
                </li>
                <li>
                  <p>Improve transparency and reduce discrepancies</p>
                </li>
                <li>
                  <p>Enhance trust and credibility infinancial transactions</p>
                </li>
              </ul>
            </div>
          </li>
          <li>
            <div className="flex benefits items-center pb-2 gap-2">
              <Image
                src="/assets/images/benefits/drive-efficiency.png"
                height={60}
                width={60}
                alt="Seamless Collaboration"
              />
              <div>
                <label>Seamless</label>
                <h1 className="text text-sm">Collaboration</h1>
              </div>
            </div>
            <div>
              <ul>
                <li>
                  <p>Enable secure collaboration with business partners</p>
                </li>
                <li>
                  <p>Share information while maintaining confidentiality</p>
                </li>
                <li>
                  <p>Foster trust and strengthen relationships</p>
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
