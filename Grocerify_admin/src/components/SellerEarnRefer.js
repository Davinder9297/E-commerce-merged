import React, { useState } from "react";
import { Link } from "react-router-dom";

const SellerEarnRefer = ({ onClose }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      className={`flex flex-col gap-8 pl-10 pr-10 pt-10 pb-10 ${
        isHovered ? "overflow-auto" : "overflow-hidden"
      }`}
      style={{ maxHeight: "600px" }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="flex flex-col ">
        <div className="flex flex-row gap-4 text-2xl font-Gorditas items-center text-[#333333]">
          {" "}
          <Link to="/sellersettings" className="text-3xl" onClick={onClose}>
            {" "}
            {" < "}{" "}
          </Link>
          EARN & REFER
        </div>
        <p className="pl-8 text-[#909090] font-Plus Jakarta Sans text-[16px]">Refer to your Firends and Earn Rewards</p>
      </div>

      <div>Gift 1</div>
      <div>Gift 2</div>
      <div>Gift 3</div>
    </div>
  );
};

export default SellerEarnRefer;
