import Image from "next/image";
import React from "react";

const Award = ({ award_logo, award_desc }) => {
  return (
    <div className="awards__award">
      <Image src={award_logo} alt={award_desc} />

      <div className="awards__text-box">
        <Image
          src={require("@/assets/img/award-left.svg").default}
          alt="Award svg icon"
        />
        <p>{award_desc}</p>
        <Image
          src={require("@/assets/img/award-right.svg").default}
          alt="Award svg icon"
        />
      </div>
    </div>
  );
};

export default Award;
