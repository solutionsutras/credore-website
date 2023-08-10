import React, { useState } from "react";
import Link from "next/link";
import Form from "./RequestModal";
import Image from "next/image";

const SupportedBy = () => {
  return (
    <section className="section">
      <div className="container">
        <div className="flex flex-row gap-4 items-center">
          <div className="p-5 pl-0 pb-10 flex flex-col gap-1">
            <h1 className="text-lg text-left">Incubated By</h1>
            <Image
              className=""
              src={"/assets/images/partners/incubated-by-padup-ventures.png"}
              width={"272"}
              height={"140"}
              alt=""
            />
          </div>

          <div className="p-5 pl-0 pb-10 flex flex-col gap-1">
            <h1 className="text-lg text-left">Backed By</h1>
            <Image
              className=""
              src={"/assets/images/partners/backed-by-stpi-next.png"}
              alt=""
              width={"660"}
              height={"140"}
            />
          </div>

          <div className="p-5 pl-0 pb-10 flex flex-col gap-1">
            <h1 className="text-lg text-left">Collaborations</h1>
            <Image
              className=""
              src={"/assets/images/partners/edge.png"}
              alt=""
              width={"296"}
              height={"100%"}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SupportedBy;
