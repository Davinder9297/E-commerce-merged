import React, { useState } from "react";
import { Menu } from "react-feather";
import SideMenuSeller from "../components/SideMenuSeller";
import SearchBarSeller from "../components/SearchBarSeller";


// further pop ups, details


const SellerDiscount = () => {
  const [isSidebarOpen, setSidebarOpen] = useState("");
  const toggleSidebar = () => {
      setSidebarOpen(!isSidebarOpen);
    };

  return (
    <div className="flex flex-row h-auto">
      {/* side menu */}
      <button
        onClick={toggleSidebar}
        className="absolute text-[#58B310] p-2 ml-2 mt-6 rounded-md"
        style={{ height: "30px" }}
      >
        
        <Menu size={30} />
      </button>
      <SideMenuSeller isOpen={isSidebarOpen} onToggle={toggleSidebar} />

      {/* Main content */}
      <div
        className={`flex flex-col pl-20 pr-16 pt-8 pb-10 space-y-10 ${
          isSidebarOpen ? "w-4/5" : "w-full"
        }`}
      >
        {/* Search bar */}
        <SearchBarSeller />

        {/* description */}
        <div className="text-[#333333] space-y-2">
          <p className="text-3xl font-Gorditas ">My Discount</p>
          <p className="font-Gorditas ">
            List of discount provided to Customer
          </p>
        </div>

        {/* Gift Cards */}
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
              <img src="../assests/icons/gola.svg" className="w-[50px] pt-1" />
              Flat 10% off on any billed item
            </div>
          </div>
          <div className="flex flex-col w-[316px] ">
            <div className="flex flex-col h-[152px] bg-gradient-to-r from-[#FF512F] via-[#FF512F] to-[#F09819] border-t border-white rounded-t-2xl text-[#FFFFFF] p-6">
              <div className="font-Montserrat text-[20px]">GIFT CARD</div>
              <div className="font-Montserrat flex flex-row items-center space-x-4">
                <p className="text-[48px] font-Montserrat ">20%</p>
                <p className="text-[16px] w-[90px] font-Montserrat">
                  FLAT DISCOUNT
                </p>
              </div>
            </div>
            <div className="flex flex-row items-center shadow-md font-Montserrat text-[#333333] text-xs font-bold">
              <img src="../assests/icons/gola.svg" className="w-[50px] pt-1" />
              Flat 10% off on any billed item
            </div>
          </div>
          <div className="flex flex-col w-[316px] ">
            <div className="flex flex-col h-[152px] bg-gradient-to-r from-[#348F50] via-[#348F50] to-[#56B4D3E0] border-t border-white rounded-t-2xl text-[#FFFFFF] p-6">
              <div className="font-Montserrat text-[20px]">GIFT CARD</div>
              <div className="font-Montserrat flex flex-row items-center space-x-4">
                <p className="text-[48px] font-Montserrat ">15%</p>
                <p className="text-[16px] w-[90px] font-Montserrat">
                  FLAT DISCOUNT
                </p>
              </div>
            </div>
            <div className="flex flex-row items-center shadow-md font-Montserrat text-[#333333] text-xs font-bold">
              <img src="../assests/icons/gola.svg" className="w-[50px] pt-1" />
              Flat 10% off on any billed item
            </div>
          </div>
        </div>

        {/* desc */}
        <div className="text-[#333333] space-y-2 pt-10">
          <p className="text-3xl font-Gorditas ">My Promotion</p>
          <p className="font-Gorditas text-[16px]">
            Select Promotion that to be displayed in membership marketplace
          </p>
        </div>

        {/* Gift Cards */}
        <div className="flex flex-row justify-between gap-4">
          <div className="flex flex-col w-[316px] ">
            <div className="flex flex-col h-[152px] bg-gradient-to-r from-[#A2A1A7] via-[#A2A1A7] to-[#A2A1A769] border-t border-white rounded-t-2xl text-[#FFFFFF] p-6">
              <div className="flex flex-col bg-[#ECF0F8] w-full h-[70px] p-1 space-y-1">
                <p className="text-[10px] text-[#333333]">Grocrify</p>
                <p className="text-[8px] text-[#333333]">
                  Get extra discount and save upto 20% extra with Gastos, Visit
                  “Bistro Cafe” Sec-16, Chandigarh.
                </p>
                <p className="text-[#003CD8] text-[8px]">gsts.me/u3/BistroCafe-Chd</p>
              </div>
            </div>
            <div className="flex flex-row items-center shadow-md font-Montserrat text-[#333333] font-semibold">
              <img src="../assests/icons/gola.svg" className="w-[50px] pt-1" />
              <div className="flex flex-col leading-4 pt-1">
                <p className="text-[12px] font-Montserrat">SMS Notification</p>
                <p className="text-[8px] font-Gorditas leading-3">
                  Select Promotion that to be displayed in membership
                  marketplace
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col w-[316px] ">
            <div className="flex flex-col h-[152px] bg-gradient-to-r from-[#A2A1A7] via-[#A2A1A7] to-[#A2A1A769] border-t border-white rounded-t-2xl text-[#FFFFFF] p-6">
            <div className="flex flex-col bg-[#ECF0F8] w-full h-[70px] p-1 space-y-1">
                <p className="text-[10px] text-[#333333]">Grocrify</p>
                <p className="text-[8px] text-[#333333]">
                  Get extra discount and save upto 20% extra with Gastos, Visit
                  “Bistro Cafe” Sec-16, Chandigarh.
                </p>
                <p className="text-[#003CD8] text-[8px]">gsts.me/u3/BistroCafe-Chd</p>
              </div>
            </div>
            <div className="flex flex-row items-center shadow-md font-Montserrat text-[#333333] text-xs font-bold">
              <img src="../assests/icons/gola.svg" className="w-[50px] pt-1" />
              <div className="flex flex-col leading-4">
                <p className="text-[12px] font-Montserrat">Push Notification</p>
                <p className="text-[8px] font-Gorditas leading-3">
                  Select Promotion that to be displayed in membership
                  marketplace
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col w-[316px] ">
            <div className="flex flex-col h-[152px] bg-gradient-to-r from-[#1D976C] via-[#1D976C] to-[#93F9B9] border-t border-white rounded-t-2xl text-[#FFFFFF] p-6">
              <div className="font-Montserrat text-[20px]">GIFT CARD</div>
              <div className="font-Montserrat flex flex-row items-center space-x-4">
                <p className="text-[48px] font-Montserrat ">15%</p>
                <p className="text-[16px] w-[90px] font-Montserrat">
                  FLAT DISCOUNT
                </p>
              </div>
            </div>
            <div className="flex flex-row items-center shadow-md font-Montserrat text-[#333333] text-xs font-bold">
              <img src="../assests/icons/gola.svg" className="w-[50px] pt-1" />
              <div className="flex flex-col leading-4">
                <p className="text-[12px] font-Montserrat">Wide Banner</p>
                <p className="text-[8px] font-Gorditas leading-3">
                  Select Promotion that to be displayed in membership
                  marketplace
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SellerDiscount;
