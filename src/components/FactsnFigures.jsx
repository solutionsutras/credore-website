import React from "react";

const FactsnFigures = () => {
  return (
    <section className="section bg-[#f15928] p-0 fnf-section">
      <div className="container">
        <ul className="facts-section">
          <li>
            <div className="flex benefits items-center gap-2 p-2">
              <img src="../assets/images/benefits/streamline-operations.png" />
              <div>
                <label>Streamline</label>
                <div className="text">Operations</div>
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
            <div className="flex benefits items-center gap-2 p-2">
              <img src="../assets/images/benefits/enhance-security.png" />
              <div>
                <label>Enhanced</label>
                <div className="text">Security</div>
              </div>
            </div>
            <div>
              <p>
                Our Decntralized Blockchain Platform enables distribution of
                data across networks, ensuring no single point of failure. This
                structure significantly enhances data security and
                reduces vulnerabilities.
              </p>
            </div>
          </li>

          <li>
            <div className="flex benefits items-center gap-2 p-2">
              <img src="../assets/images/benefits/drive-efficiency.png" />
              <div>
                <label>Drives</label>
                <div className="text">Efficiency</div>
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
