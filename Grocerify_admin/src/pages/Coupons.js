import React, { useState } from "react";
import GiftCard from "../components/GiftCard";
import PromotionCard from "../components/PromotionCard";
const Coupons = () => {



  return (
    <div className="flex flex-row h-auto">
      {/* Main content */}
      <div
        className={`flex flex-col pl-20 pr-16 pt-8 pb-10 space-y-10`}
      >
        {/* description */}
        <div className="text-[#333333] space-y-2">
          <p className="text-3xl font-Gorditas ">My Discount</p>
          <p className="font-Gorditas ">
            List of discount provided to Customer
          </p>
        </div>
        {/* Gift Cards */}
        <div className="flex  gap-7 aligns-center">
        <GiftCard/>
        <GiftCard/>
        <GiftCard/>
        {/* <GiftCard/> */}
        </div>
        {/* Description */}
        <div className="text-[#333333] space-y-2 pt-10">
          <p className="text-3xl font-Gorditas ">My Promotion</p>
          <p className="font-Gorditas text-[16px]">
            Select Promotion that to be displayed in membership marketplace
          </p>
        </div>
        {/* Gift Cards */}
        <div className="flex  gap-7 aligns-center">
        <PromotionCard/>
        <PromotionCard/>
        <PromotionCard/>
        {/* <PromotionCard/> */}
        </div>
      </div>
    </div>
  );
};

export default Coupons;
