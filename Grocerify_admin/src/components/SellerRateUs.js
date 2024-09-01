import React, { useState } from "react";
import { Link } from "react-router-dom";

const SellerRateUs = ({ onClose }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [selectedRating, setSelectedRating] = useState(0);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleStarClick = (rating) => {
    setSelectedRating(rating);
  };

  const renderStars = () => {
    const stars = [];

    for (let i = 1; i <= 5; i++) {
      stars.push(
        <span
          key={i}
          className={`text-3xl cursor-pointer ${
            selectedRating >= i ? "text-[#FFB800]" : "text-[#D2D2D2]"
          }`}
          onClick={() => handleStarClick(i)}
        >
          &#9733;
        </span>
      );
    }

    return stars;
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
      <div className="flex flex-row gap-4 text-2xl items-center text-[#333333]">
        {" "}
        <Link to="/sellersettings" className="text-3xl" onClick={onClose}>
          {" "}
          {" < "}{" "}
        </Link>
        <p className="font-Gorditas">RATE US</p>
      </div>
      <div className=" flex flex-col justify-center items-center gap-4 pl-4">
        <p className="flex text-[#333333] font-Montserrat text-lg font-semibold">
          Your opinion matters to us!
        </p>
        <p className="flex items-center text-center text-[#909090] w-[270px] leading-5">
          For Marketing and Branding charges Each Coins Values One Rupee{" "}
        </p>
      </div>
      <div className="flex items-center justify-center">
        {renderStars()}
        {/* <span className="text-3xl text-center text-[#FFB800]">
          &#9733;&#9733;&#9733;&#9733;&#9734;
        </span> */}
      </div>
      <div className="flex flex-col gap-4 justify-center items-center">
        <button
          className="bg-[#58B310] text-[#FFFFFF] font-Montserrat text-[18px] w-[130px] rounded-md pt-2 pb-2"
          onClick={onClose}
        >
          Submit
        </button>
        <Link
          to={"/sellersettings"}
          onClick={onClose}
          className="text-[#008080] font-Montserrat"
        >
          No Thanks
        </Link>
      </div>
    </div>
  );
};

export default SellerRateUs;
