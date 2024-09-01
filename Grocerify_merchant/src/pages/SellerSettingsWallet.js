import React, { useState } from "react";
import { Menu } from "react-feather";
import SideMenuSeller from "../components/SideMenuSeller";
import SearchBarSeller from "../components/SearchBarSeller";

const SellerSettingsWallet = () => {
  const [isSidebarOpen, setSidebarOpen] = useState("");
  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex flex-row h-[800px]">
      {/* side menu */}
      <button
        onClick={toggleSidebar}
        className="absolute text-[#58B310] p-2 ml-2 mt-6 rounded-md"
        style={{ height: "30px" }}
      >
        <Menu size={30} />
      </button>
      <SideMenuSeller isOpen={isSidebarOpen} />

      {/* Main content */}
      <div
        className={`flex flex-col pl-20 pr-16 pt-8 pb-10 space-y-10 ${
          isSidebarOpen ? "w-4/5" : "w-full"
        }`}
      >
        {/* Search bar */}
        <SearchBarSeller />

        {/* description */}
        <div className="font-Gorditas text-[#333333] space-y-1 pl-2">
          <p className="text-[24px] font-Gorditas">My Wallet</p>
          <p className="font-Plus Jakarta Sans text-[#909090] ">
            Check Balance/Add Money
          </p>
        </div>

        <div className="flex flex-col pl-2 gap-4">
          <div className="flex flex-col rounded-3xl border pl-8 pb-6 pr-6 pt-6 gap-2 w-[370px]">
            <p className="text-[#000000] font-Plus Jakarta Sans text-[18px]">
              Wallet Balance
            </p>
            <p className="text-[#58B310] font-Plus Jakarta Sans text-[50px]">
              3,000
            </p>
          </div>
          <div className="flex flex-row gap-2 text-[#909090] font-Plus Jakarta Sans text-[16px] ">
            {" "}
            <p>Note : </p>
            <p className="w-[400px]">For Marketing and Branding charges Each Coins Values One Rupee</p>
          </div>
        </div>

        <div className="pt-10">
          <button className="text-[#FFFFFF] text-[16px] font-Plus Jakarta Sans w-[200px] p-2 bg-[#58B310] rounded-full">Add Coins</button>
        </div>
      </div>
    </div>
  );
};

export default SellerSettingsWallet;
