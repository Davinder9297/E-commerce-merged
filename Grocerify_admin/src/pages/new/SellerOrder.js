import React, { useState, useEffect } from "react";
import { Menu } from "react-feather";
import SideMenuSeller from "../components/SideMenuSeller";
import SearchBarSeller from "../components/SearchBarSeller";

// card details
// order status - data, status color

const SellerOrder = () => {
  const [isSidebarOpen, setSidebarOpen] = useState("");
  const [currentDate, setCurrentDate] = useState("");

  useEffect(() => {
    const today = new Date();
    const options = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    setCurrentDate(today.toLocaleDateString(undefined, options));
  }, []);

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
        <div className="text-[#333333] space-y-1">
          <p className="text-3xl font-Gorditas ">Hello Seller</p>
          <p className="font-Gorditas ">{`Today is ${currentDate}`}</p>
        </div>

        {/* data cards */}
        <div className="grid grid-cols-4 gap-14">
          <div className="flex flex-row justify-between shadow-lg rounded-lg h-full pt-4 pb-6 pl-4 pr-2">
            <div className="font-Montserrat space-y-1">
              <p className="text-[#333333] text-xl">Total Orders</p>
              <p className="text-[#58B310] text-xl">$2478</p>
              <p className="text-[#FFB800] text-xs font-semibold pt-1">
                27% last week
              </p>
            </div>
          </div>
          <div className="flex flex-row justify-between shadow-lg rounded-lg h-full pt-4 pb-6 pl-4 pr-2">
            <div className="font-Montserrat space-y-1">
              <p className="text-[#333333] text-xl">Successful Orders</p>
              <p className="text-[#58B310] text-xl">$2478</p>
              <p className="text-[#FFB800] text-xs font-semibold pt-1">
                27% last week
              </p>
            </div>
          </div>
          <div className="flex flex-row justify-between shadow-lg rounded-lg h-full pt-4 pb-6 pl-4 pr-2">
            <div className="font-Montserrat space-y-1">
              <p className="text-[#333333] text-xl">Unshipped Orders</p>
              <p className="text-[#58B310] text-xl">$2478</p>
              <p className="text-[#FFB800] text-xs font-semibold pt-1">
                27% last week
              </p>
            </div>
          </div>
          <div className="flex flex-row justify-between shadow-lg rounded-lg h-full pt-4 pb-6 pl-4 pr-2">
            <div className="font-Montserrat space-y-1">
              <p className="text-[#333333] text-xl">Cancelled Orders</p>
              <p className="text-[#58B310] text-xl">$2478</p>
              <p className="text-[#FFB800] text-xs font-semibold pt-1">
                27% last week
              </p>
            </div>
          </div>
        </div>

        {/* Order Status */}

        <div className="flex flex-col space-y-4">
          <div className="font-Montserrat text-[#333333] font-semibold">
            Order Status
          </div>
          <div className="flex flex-row justify-between bg-[#333333] text-[#FFFFFF] font-Montserrat pt-1 pb-1 pl-2">
            <p className="text-[12px] w-2/6 ">Order ID</p>
            <p className="text-[12px] w-1/6">Payment Type</p>
            <p className="text-[12px] w-1/6">Amount</p>
            <p className="text-[12px] w-1/6">Payment Method</p>
            <p className="text-[12px] w-1/6">Account Number</p>
            <p className="text-[12px] w-1/6">Time</p>
            <p className="text-[12px] w-1/6">Status</p>
          </div>
          <div className="flex flex-row justify-between text-[#333333] text-[14px] h-[82px] shadow-md pl-2">
            <div className="w-2/6 font-Gorditas flex flex-row items-center">
              EXVFG12rtgh356
            </div>
            <div className="w-1/6 font-Gorditas flex items-center">
              Purchase
            </div>
            <div className="w-1/6 font-Gorditas flex items-center">$199</div>
            <div className="w-1/6 font-Gorditas flex items-center">
              <img src="../assests/icons/Visa.svg" />
            </div>
            <div className="w-1/6 font-Gorditas flex items-center">
              1233342323444
            </div>
            <div className="w-1/6 font-Gorditas flex items-center">9:30a.m</div>
            <div className="w-1/6 font-Gorditas flex items-center">Pending</div>
          </div>
          <div className="flex flex-row justify-between text-[#333333] text-[14px] h-[82px] shadow-md pl-2">
            <div className="w-2/6 font-Gorditas flex flex-row items-center">
              EXVFG12rtgh356
            </div>
            <div className="w-1/6 font-Gorditas flex items-center">
              Purchase
            </div>
            <div className="w-1/6 font-Gorditas flex items-center">$199</div>
            <div className="w-1/6 font-Gorditas flex items-center">
              <img src="../assests/icons/Visa.svg" />
            </div>
            <div className="w-1/6 font-Gorditas flex items-center">
              1233342323444
            </div>
            <div className="w-1/6 font-Gorditas flex items-center">9:30a.m</div>
            <div className="w-1/6 font-Gorditas flex items-center">Pending</div>
          </div>
          <div className="flex flex-row justify-between text-[#333333] text-[14px] h-[82px] shadow-md pl-2">
            <div className="w-2/6 font-Gorditas flex flex-row items-center">
              EXVFG12rtgh356
            </div>
            <div className="w-1/6 font-Gorditas flex items-center">
              Purchase
            </div>
            <div className="w-1/6 font-Gorditas flex items-center">$199</div>
            <div className="w-1/6 font-Gorditas flex items-center">
              <img src="../assests/icons/Visa.svg" />
            </div>
            <div className="w-1/6 font-Gorditas flex items-center">
              1233342323444
            </div>
            <div className="w-1/6 font-Gorditas flex items-center">9:30a.m</div>
            <div className="w-1/6 font-Gorditas flex items-center">Pending</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SellerOrder;
