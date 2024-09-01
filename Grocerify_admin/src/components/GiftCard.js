import React from "react";

const GiftCard = () => {
  return (
    <div className="flex flex-row justify-between gap-4">
      <div className="flex flex-col w-[316px] ">
        <div className="flex flex-col h-[152px] bg-gradient-to-r from-[#1D976C] via-[#1D976C] to-[#93F9B9] border-t border-white rounded-t-2xl text-[#FFFFFF] p-6">
          <div className="font-Montserrat text-[20px]">GIFT CARD</div>
          <div className="font-Montserrat flex flex-row items-center space-x-4">
            <p className="text-[48px] font-Montserrat ">10%</p>
            <p className="text-[16px] w-[90px] font-Montserrat">
              FLAT DISCOUNT
            </p>
          </div>
        </div>
        <div className="flex flex-row items-center shadow-md font-Montserrat text-[#333333] text-xs font-bold">
          <img
            src="../assets/icons/gola.svg" // Check the path to the image
            className="w-[50px] pt-1"
          />
          Flat 10% off on any billed item
        </div>
      </div>
      {/* Add more Gift Cards here */}
    </div>
  );
};

export default GiftCard;
