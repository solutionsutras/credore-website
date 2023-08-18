import React from "react";

import Image from "next/image";
import TheTeam from "../../public/assets/images/team/the-team.png";

const Team = () => {
  return (
    <section className="section">
      <div className="container">
        <div className="p-5 pl-10">
          <h1>Our Team</h1>
        </div>
        <div className="container flex mt-20">
          <Image src={TheTeam} width={1130} height={332} alt="" />
        </div>
      </div>
    </section>
  );
};
export default Team;
