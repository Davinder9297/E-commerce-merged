import React, { useState } from "react";
import { Menu } from "react-feather";
import SideMenuSeller from "../components/SideMenuSeller";
import SearchBarSeller from "../components/SearchBarSeller";


// add product manipulation


const SellerProduct = () => {
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
        className={`flex flex-col pl-20 pr-16 pt-8 pb-10 space-y-2 ${
          isSidebarOpen ? "w-4/5" : "w-full"
        }`}
      >
        {/* Search bar */}
        <SearchBarSeller />

        {/* description */}
        <div className="text-[#333333] space-y-1 pt-10">
          <p className="text-3xl font-Gorditas ">Hello Seller</p>
          <p className="font-Gorditas ">Here are your products</p>
        </div>

        {/* add product */}
        <div className="flex">
          <button className="text-[#FFFFFF] text-[12px] font-Montserrat bg-[#333333] pt-1 pb-1 pl-6 pr-6 ml-auto">
            + Add Product
          </button>
        </div>

        {/* product table */}
        <div className="flex flex-col space-y-2">
          <div className="flex flex-row justify-between bg-[#333333] text-[#FFFFFF] font-Montserrat pt-1 pb-1 pl-2">
            <p className="text-[12px] w-1/6 ">Serial No.</p>
            <p className="text-[12px] w-1/6">Product Image</p>
            <p className="text-[12px] w-1/6">Product Name</p>
            <p className="text-[12px] w-1/6">Product ID</p>
            <p className="text-[12px] w-2/6">Product Description</p>
            <p className="text-[12px] w-1/6">Product Price</p>
          </div>
          <div className="flex flex-row justify-between  text-[#000000] text-[14px] h-[82px] shadow-md pl-2">
            <div className="w-1/6 font-Montserrat flex flex-row items-center">
              1
            </div>
            <div className="w-1/6 font-Montserrat flex">
              <img src="../assests/images/facewash.svg" />
            </div>
            <div className="w-1/6 font-Montserrat flex items-center">Colorbar Facewash</div>
            <div className="w-1/6 font-Montserrat flex items-center">
            EXVFG12rtgh356
            </div>
            <div className="w-2/6 font-Montserrat flex items-center">
            This sulphate-free face wash is gentle, hydrating 
            </div>
            <div className="w-1/6 font-Montserrat flex items-center">₹100</div>
          </div>
          <div className="flex flex-row justify-between  text-[#000000] text-[14px] h-[82px] shadow-md pl-2">
            <div className="w-1/6 font-Montserrat flex flex-row items-center">
              1
            </div>
            <div className="w-1/6 font-Montserrat flex">
              <img src="../assests/images/facewash.svg" />
            </div>
            <div className="w-1/6 font-Montserrat flex items-center">Colorbar Facewash</div>
            <div className="w-1/6 font-Montserrat flex items-center">
            EXVFG12rtgh356
            </div>
            <div className="w-2/6 font-Montserrat flex items-center">
            This sulphate-free face wash is gentle, hydrating 
            </div>
            <div className="w-1/6 font-Montserrat flex items-center">₹100</div>
          </div>
          <div className="flex flex-row justify-between  text-[#000000] text-[14px] h-[82px] shadow-md pl-2">
            <div className="w-1/6 font-Montserrat flex flex-row items-center">
              1
            </div>
            <div className="w-1/6 font-Montserrat flex">
              <img src="../assests/images/facewash.svg" />
            </div>
            <div className="w-1/6 font-Montserrat flex items-center">Colorbar Facewash</div>
            <div className="w-1/6 font-Montserrat flex items-center">
            EXVFG12rtgh356
            </div>
            <div className="w-2/6 font-Montserrat flex items-center">
            This sulphate-free face wash is gentle, hydrating 
            </div>
            <div className="w-1/6 font-Montserrat flex items-center">₹100</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SellerProduct;
