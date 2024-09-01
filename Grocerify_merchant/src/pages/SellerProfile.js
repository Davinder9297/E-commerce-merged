import React, { useState, useEffect, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Menu } from "react-feather";
import SideMenuSeller from "../components/SideMenuSeller";
import SearchBarSeller from "../components/SearchBarSeller";
import EditProfileFormSeller from "../components/EditProfileFormSeller";

import { GlobalInfo } from "../App";


// edit profile functionality

const SellerProfile = () => {
  const { sellerDetails } = useContext(GlobalInfo)
  // console.log(sellerDetails)
  let navigate=useNavigate()

  // let email = 'sahilkumar142002@gmail.com'
  const [isSidebarOpen, setSidebarOpen] = useState("");
  const [isEditModalOpen, setEditModalOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);




  // console.log(sellerDetails?.Shop);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  const openEditModal = () => {
    setEditModalOpen(true);
  };
  function handleLogout(){
    localStorage.removeItem('token')
    navigate('/login')
  }

  const closeEditModal = () => {
    setEditModalOpen(false);
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
      <SideMenuSeller isOpen={isSidebarOpen} />

      {/* Main content */}
      <div
        className={`flex flex-col pl-20 pr-16 pt-8 pb-40 space-y-10 ${isSidebarOpen ? "w-4/5" : "w-full"
          }`}
      >
        {/* Search bar */}
        <SearchBarSeller />

        {/* description */}
        <div className="font-Gorditas text-[#333333] space-y-1 pl-2">
          <p className="text-3xl font-Gorditas">Merchant Profile</p>
        </div>

        {sellerDetails && (
          <div className="flex flex-row justify-between pl-4">
            <div className="flex flex-col font-Plus Jakarta Sans gap-6 pl-8">
              <div className="flex flex-row gap-3">
                <img
                  src="../assests/icons/user-seller.svg"
                  className="w-[32px] h-auto"
                />
                <div className="flex flex-col">
                  <p className="text-[#333333] font-semibold text-[18px]">
                    {sellerDetails?.Shop?.OwnerName}
                  </p>
                  <p className="text-[#979797] text-[14px]">Owner Name</p>
                </div>
              </div>
              <div className="flex flex-row gap-3">
                <img
                  src="../assests/icons/storename.svg"
                  className="w-[32px] h-auto"
                />
                <div className="flex flex-col">
                  <p className="text-[#333333] font-semibold text-[18px]">
                    {sellerDetails?.Shop?.shopName}
                  </p>
                  <p className="text-[#979797] text-[14px]">Store Name</p>
                </div>
              </div>
              <div className="flex flex-row gap-3">
                <img
                  src="../assests/icons/call-calling.svg"
                  className="w-[32px] h-auto"
                />
                <div className="flex flex-col">
                  <p className="text-[#333333] font-semibold text-[18px]">
                    {sellerDetails?.Shop?.OwnerNumber}
                  </p>
                  <p className="text-[#979797] text-[14px]">Phone Number</p>
                </div>
              </div>
              <div className="flex flex-row gap-3">
                <img
                  src="../assests/icons/sms-tracking.svg"
                  className="w-[32px] h-auto"
                />
                <div className="flex flex-col">
                  <p className="text-[#333333] font-semibold text-[18px]">
                    {sellerDetails?.Shop?.OwnerEmail}
                  </p>
                  <p className="text-[#979797] text-[14px]">E-Mail Address</p>
                </div>
              </div>
              <div className="flex flex-row gap-3">
                <img
                  src="../assests/icons/calendar.svg"
                  className="w-[32px] h-auto"
                />
                <div className="flex flex-col">
                  <p className="text-[#333333] font-semibold text-[18px]">
                    {sellerDetails?.OwnerDOB}
                  </p>
                  <p className="text-[#979797] text-[14px]">Birth Date</p>
                </div>
              </div>
              <div className="flex flex-row gap-3">
                <img
                  src="../assests/icons/pin.svg"
                  className="w-[32px] h-auto"
                />
                <div className="flex flex-col">
                  <p className="text-[#333333] font-semibold text-[18px]">
                    {sellerDetails?.Shop?.OwnerAddress || 'Mohali'}
                  </p>
                  <p className="text-[#979797] text-[14px]">Address</p>
                </div>
              </div>
              <div className="flex flex-row gap-3">
                <img
                  src="../assests/icons/adhaar.svg"
                  className="w-[32px] h-auto"
                />
                <div className="flex flex-col">
                  <p className="text-[#333333] font-semibold text-[18px]">
                    {sellerDetails?.Aadhar}
                  </p>
                  <p className="text-[#979797] text-[14px]">Aadhar Number</p>
                </div>
              </div>
              <div className="flex flex-row gap-3">
                <img
                  src="../assests/icons/pancard.svg"
                  className="w-[32px] h-auto"
                />
                <div className="flex flex-col">
                  <p className="text-[#333333] font-semibold text-[18px]">
                    {sellerDetails?.PanCard}
                  </p>
                  <p className="text-[#979797] text-[14px]">PAN Card</p>
                </div>
              </div>
              <div to="/" className="flex flex-row gap-3 items-center">
                <img
                  src="../assests/icons/profiledetails.svg"
                  className="w-[40px] h-auto"
                />
                <div className="flex flex-col" onClick={handleLogout}>
                  <p  className="text-[#333333] font-semibold text-[18px]">
                    Logout
                  </p>
                </div>
              </div>
            </div>

            <div className="pr-32 relative">
              <img src={sellerDetails?.OwnerProfile} className="w-[220px] h-auto rounded-full" />
              <div
                className="bg-white w-[60px] h-[60px] absolute top-40 left-36 rounded-full shadow-md cursor-pointer hover:bg-[#58B310] transform transition-transform duration-300 hover:scale-110"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                onClick={openEditModal}
              >
                {isHovered ? (
                  <img
                    src="../assests/icons/camerawhite.svg"
                    className="absolute top-4 left-4 w-auto h-auto"
                  />
                ) : (
                  <img
                    src="../assests/icons/camera.svg"
                    className="absolute top-4 left-4 w-auto h-auto"
                  />
                )}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Edit Form Modal */}
      {/* {isEditModalOpen && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-50 ">
          <div className=" bg-white bg-opacity-90 rounded-md">
            <EditProfileFormSeller onClose={closeEditModal} />
          </div>
        </div>
      )} */}
    </div>
  );
};

export default SellerProfile;
