import React from "react";
import Image from "next/image";

const FactsnFigures = () => {
  return (
    <section className="section bg-[#f15928] p-0 fnf-section">
      <div className="container">
        <ul className="facts-section">
          <li>
            <div className="flex benefits items-center p-2 gap-2">
              <Image
                src="/assets/images/benefits/streamline-operations.png"
                height={60}
                width={60}
                alt="Streamline Operations"
              />
              <div>
                <label>Streamline</label>
                <h1 className="text">Operations</h1>
              </div>
            </div>
            <div>
              <p>
                Credores Blockchain Technology helps businesses streamlines
                their processes by automating tasks and reducing the potential
                for errors, ultimately increasing efficiency.
              </p>
            </div>
          </li>

          <li>
            <div className="flex benefits items-center p-2 gap-2">
              <Image
                src="/assets/images/benefits/enhance-security.png"
                height={60}
                width={60}
                alt="Enhanced Security"
              />
              <div>
                <label>Enhanced</label>
                <h1 className="text">Security</h1>
              </div>
            </div>
            <div>
              <p>
                Our Decntralized Blockchain Platform enables distribution of
                data across networks, ensuring no single point of failure. This
                structure significantly enhances data security and reduces
                vulnerabilities.
              </p>
            </div>
          </li>

          <li>
            <div className="flex benefits items-center p-2 gap-2">
              <Image
                src="/assets/images/benefits/drive-efficiency.png"
                height={60}
                width={60}
                alt="Drive Efficiency"
              />
              <div>
                <label>Drives</label>
                <h1 className="text">Efficiency</h1>
              </div>
            </div>
            <div>
              <p>
                Credores Blockchain Technology helps businesses streamlines
                their processes by automating tasks and reducing the potential
                for errors, ultimately increasing efficiency.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
export default FactsnFigures;
