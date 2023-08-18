import React from "react";

import Image from "next/image";
import WIP from "../../public/assets/images/under-construction.png";

const WorkInProgress = () => {
  return (
    <section className="section">
      <div className="m-20">
        <h1 className="text-center">Opps! We are working on this page, We regret for the inconvenience </h1>
      </div>
      <div className="container pb-60 flex justify-center">
        <Image
          src={WIP}
          width={460}
          height={400}
          alt=""
          style={{
            backgroundPosition: "cover",
            backgroundAttachment: "center",
          }}
        />
      </div>
    </section>
  );
};
export default WorkInProgress;
