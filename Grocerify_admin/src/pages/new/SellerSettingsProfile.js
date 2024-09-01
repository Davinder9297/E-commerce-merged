import React, { useEffect, useState } from "react";
import { Menu } from "react-feather";
import SideMenuSeller from "../components/SideMenuSeller";
import SearchBarSeller from "../components/SearchBarSeller";
import { getSeller } from "../helper/helper";

// edit on same page to update data


const SellerSettingsProfile = () => {
  const [isSidebarOpen, setSidebarOpen] = useState("");
  const [sellerData, setSellerData] = useState(null);
  let email ='sahilkumar142002@gmail.com'
  const toggleSidebar = () => {
      setSidebarOpen(!isSidebarOpen);
    };
  
  useEffect(() => {
    getData()
  }, [])
  
  
  async function getData() {
    const sellerData = await getSeller({email})
    setSellerData(sellerData.data.data)
  }

  console.log(sellerData);
  
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
        <div className="font-Gorditas text-[#333333] space-y-1">
          <p className="text-[24px] font-Gorditas">Profile Details</p>
          <p className="font-Plus Jakarta Sans text-[#909090] ">
          Here you can view and edit your details.
          </p>
        </div>

        {/* details */}
        <div className="flex flex-col gap-8 pr-40">

          <div className="flex flex-col gap-6 shadow-md rounded-xl pl-6 pr-6 pt-3 pb-3">
            <div className="flex flex-row justify-between items-center">
              <div className="flex flex-row justify-between gap-6">
                <img src="../assests/icons/profiledetails.svg" />
                <div className="flex flex-col font-Plus Jakarta Sans">
                  <p className="text-[18px] text-[#333333] font-semibold">{sellerData?.OwnerName}</p>
                  <p className="text-[#979797] font-Plus Jakarta Sans text-[14px]">
                  Owner Name
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-row justify-between items-center">
              <div className="flex flex-row justify-between gap-6">
                <img src="../assests/icons/call-calling.svg" />
                <div className="flex flex-col font-Plus Jakarta Sans">
                  <p className="text-[18px] text-[#333333] font-semibold">{sellerData?.OwnerMobile}</p>
                  <p className="text-[#979797] font-Plus Jakarta Sans text-[14px]">
                  Phone Number
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-row justify-between items-center">
              <div className="flex flex-row justify-between gap-6">
                <img src="../assests/icons/sms-tracking.svg" />
                <div className="flex flex-col font-Plus Jakarta Sans">
                  <p className="text-[18px] text-[#333333] font-semibold">{sellerData?.OwnerEmail}</p>
                  <p className="text-[#979797] font-Plus Jakarta Sans text-[14px]">
                  E-Mail Address
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* <div className="flex flex-col gap-6 shadow-md rounded-xl pl-6 pr-6 pt-3 pb-3">
            <div className='flex flex-row justify-between'>
                <p className='text-[#A5A5A5] text-[20px] font-Roboto'>Guided By</p>
                <button className='text-[#FFFFFF] text-[15px] font-Roboto bg-[#58B310] rounded-lg w-[140px]'>Validate</button>
            </div>
          </div> */}

        </div>
      </div>
    </div>
  )
}

export default SellerSettingsProfile