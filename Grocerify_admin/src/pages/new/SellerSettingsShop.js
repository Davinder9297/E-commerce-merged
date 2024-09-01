import React, { useState, useEffect } from "react";
import { Menu } from "react-feather";
import SideMenuSeller from "../components/SideMenuSeller";
import SearchBarSeller from "../components/SearchBarSeller";
import EditShopFormSeller from "../components/EditShopFormSeller";
import { getSeller } from "../helper/helper";

// add edit icon in search bar for shop details only
// edit on same page to update data

const SellerSettingsShop = () => {
  const [isSidebarOpen, setSidebarOpen] = useState("");
  const [isEditModalOpen, setEditModalOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [sellerData, setSellerData] = useState(null);
  let email ='sahilkumar142002@gmail.com';

  useEffect(() => {
    getData()
  }, [])
  
  
  async function getData() {
    const sellerData = await getSeller({email})
    setSellerData(sellerData.data.data)
  }

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  const openEditModal = () => {
    setEditModalOpen(true);
  };

  const closeEditModal = () => {
    setEditModalOpen(false);
  };

  console.log(sellerData);

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
      <SideMenuSeller isOpen={isSidebarOpen} />

      {/* Main content */}
      <div
        className={`flex flex-col pl-24 pr-20 pt-8 pb-20 space-y-10 ${
          isSidebarOpen ? "w-4/5" : "w-full"
        }`}
      >
        {/* Search bar */}
        <SearchBarSeller />

        {/* description */}
        <div className="font-Gorditas text-[#333333] pl-2">
          <p className="text-[24px] font-Gorditas">Shop Details</p>
          <p className="flex flex-row items-center gap-1 font-Plus Jakarta Sans text-[#909090] pb-1 pt-1">
            Here you can view and edit your details.
            <span
              className="hover:bg-[#58B310] rounded-full w-[35px] h-[35px] flex items-center justify-center cursor-pointer transform transition-transform duration-300 hover:scale-110"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              onClick={openEditModal}
            >
              {isHovered ? (
                <img
                  src="../assests/icons/edit.svg"
                  className="w-[20px] h-auto"
                />
              ) : (
                <img
                  src="../assests/icons/editgreen.svg"
                  className="w-[20px] h-auto"
                />
              )}
            </span>
          </p>
        </div>

        {/* images */}
        <div className="flex w-full pl-2">
          <img
            src="../assests/images/shopdetails.png"
            className="w-3/4 h-auto rounded-lg"
          />
        </div>

        <div className="flex flex-row gap-6 w-3/4 pl-2">
          <img
            src="../assests/images/shopdetails2.png"
            className="w-[200px] h-[150px] rounded-lg"
          />
          <div className="flex flex-col p-2 w-[500px] gap-1">
            <p className="font-Gorditas font-bold text-[14px] text-[#333333]">
              Your Profile Image
            </p>
            <p className="text-[#B1BCD2] text-[14px] font-Plus Jakarta Sans leading-4">
              A Grocery Store Cashier with eight years of customer service
              experience, specializing in managing customer sales transactions
              and POS systems
            </p>
          </div>
        </div>

        {/* details */}
        <div className="flex flex-col gap-8 w-3/4 pl-2">
          <div className="flex flex-col gap-6 shadow-md rounded-xl pl-6 pr-6 pt-3 pb-3">
            <div className="flex flex-row justify-between items-center">
              <div className="flex flex-row justify-between gap-6">
                <img src="../assests/icons/shopdetails.svg" />
                <div className="flex flex-col font-Plus Jakarta Sans">
                  <p className="text-[18px] text-[#333333] font-semibold">
                  {sellerData?.Shop?.shopName}
                  </p>
                  <p className="text-[#979797] font-Plus Jakarta Sans text-[14px]">
                    Shop Name
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-6 shadow-md rounded-xl pl-6 pr-6 pt-3 pb-3">
            <div className="font-Montserrat-700 font-bold text-[24px] text-[#333333]">
              Additional Details
            </div>

            <div className="flex flex-row justify-between items-center">
              <div className="flex flex-row justify-between gap-6">
                <img src="../assests/icons/location2.svg" />
                <div className="flex flex-col font-Plus Jakarta Sans">
                  <p className="text-[18px] text-[#333333] font-semibold">
                    32-B cannought Place
                  </p>
                  <p className="text-[#979797] font-Plus Jakarta Sans text-[14px]">
                    Address
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-row justify-between items-center">
              <div className="flex flex-row justify-between gap-6">
                <img src="../assests/icons/location3.svg" />
                <div className="flex flex-col font-Plus Jakarta Sans">
                  <p className="text-[18px] text-[#333333] font-semibold">
                    New Delhi
                  </p>
                  <p className="text-[#979797] font-Plus Jakarta Sans text-[14px]">
                    State
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-row justify-between items-center">
              <div className="flex flex-row justify-between gap-6">
                <img src="../assests/icons/location3.svg" />
                <div className="flex flex-col font-Plus Jakarta Sans">
                  <p className="text-[18px] text-[#333333] font-semibold">
                    Central Delhi
                  </p>
                  <p className="text-[#979797] font-Plus Jakarta Sans text-[14px]">
                    City
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-6 shadow-md rounded-xl pl-6 pr-6 pt-3 pb-3">
            <div className="font-Montserrat-700 font-bold text-[24px] text-[#333333]">
              Service Details
            </div>
            <div className="flex flex-row justify-between items-center">
              <div className="flex flex-row justify-between gap-6">
                <img src="../assests/icons/service.svg" />
                <div className="flex flex-col font-Plus Jakarta Sans">
                  <p className="text-[18px] text-[#333333] font-semibold">
                    Delivery, Dining, WIFI etc.,
                  </p>
                  <p className="text-[#979797] font-Plus Jakarta Sans text-[14px]">
                    Shop Services
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* <div className="flex flex-col gap-6 shadow-md rounded-xl pl-6 pr-6 pt-3 pb-3">
            <div className="font-Montserrat-700 font-bold text-[24px] text-[#333333]">
              Shop Photos
            </div>
            <div className="flex flex-row justify-between items-center">
              <div className="flex flex-row justify-between gap-6">
                <img src="../assests/icons/service.svg" />
                <div className="flex flex-col font-Plus Jakarta Sans">
                  <p className="text-[18px] text-[#333333] font-semibold">
                    Add Media/Photos
                  </p>
                  <p className="text-[#979797] font-Plus Jakarta Sans text-[14px]">
                    Add Media/Photos
                  </p>
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </div>
      {isEditModalOpen && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-50 ">
          <div className=" bg-white bg-opacity-90 rounded-md w-[550px]">
            <EditShopFormSeller onClose={closeEditModal} />
          </div>
        </div>
      )}
    </div>
  );
};

export default SellerSettingsShop;
