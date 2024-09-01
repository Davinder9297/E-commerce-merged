import React from "react";

const PromotionCard = () => {
  return (
    <div className="flex flex-row justify-between gap-4">
      <div className="flex flex-col w-[316px] ">
        <div className="flex flex-col h-[152px] bg-gradient-to-r from-[#A2A1A7] via-[#A2A1A7] to-[#A2A1A769] border-t border-white rounded-t-2xl text-[#FFFFFF] p-6">
          <div className="flex flex-col bg-[#ECF0F8] w-full h-[70px] p-1 space-y-1">
            <p className="text-[10px] text-[#333333]">Grocrify</p>
            <p className="text-[8px] text-[#333333]">
              Get extra discount and save upto 20% extra with Gastos, Visit
              “Bistro Cafe” Sec-16, Chandigarh.
            </p>
            <p className="text-[#003CD8] text-[8px]">
              gsts.me/u3/BistroCafe-Chd
            </p>
          </div>
        </div>
        <div className="flex flex-row items-center shadow-md font-Montserrat text-[#333333] font-semibold">
          <img
            src="../assets/icons/gola.svg" // Check the path to the image
            className="w-[50px] pt-1" alt=""
          />
          <div className="flex flex-col leading-4 pt-1">
            <p className="text-[12px] font-Montserrat">SMS Notification</p>
            <p className="text-[8px] font-Gorditas leading-3">
              Select Promotion that to be displayed in membership marketplace
            </p>
          </div>
        </div>
      </div>
      {/* Add more Promotions here */}
    </div>
  );
};

export default PromotionCard;
