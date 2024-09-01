import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const SearchBarSeller = () => {

  // Get the current location using the useLocation hook
  const location = useLocation();

  const allowedPages = [
    "/sellersettingsprofile",
    "/sellersettingsshop",
    "/sellersettingswallet",
    "/sellersettings",
    "/sellerdashboard",
    "/sellerorder",
    "/sellerinventory",
    "/sellerdiscount",
    "/sellerproduct",
    "/selleranalytics",
    "/selleranalyticrevenue",
    "/selleranalyticorder",
    "/selleranalyticearning",
    "/sellerprofile",
    "/sellernotification",
    "/chats",
  ];

  const isAllowedPage = allowedPages.includes(location.pathname);
  const isSettingsPage = location.pathname === "/sellersettings";
  const isSettingsProfilePage = location.pathname === "/sellersettingsprofile";
  const isSettingsShopPage = location.pathname === "/sellersettingsshop";
  const isSettingsWalletPage = location.pathname === "/sellersettingswallet";
  const isOrderPage = location.pathname === "/sellerorder";
  const isInventoryPage = location.pathname === "/sellerinventory";
  const isDiscountPage = location.pathname === "/sellerdiscount";
  const isProductPage = location.pathname === "/sellerproduct";
  const isAnalyticsPage = location.pathname === "/selleranalytics";
  const isAnalyticsRevenuePage = location.pathname === "/selleranalyticrevenue";
  const isAnalyticsOrderPage = location.pathname === "/selleranalyticorder";
  const isAnalyticsEarningPage = location.pathname === "/selleranalyticearning";
  const isProfilePage = location.pathname === "/sellerprofile";
  const isNotificationPage = location.pathname === "/sellernotification";

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-row justify-between">
        <div className="relative font-Montserrat w-2/5 p-1 flex items-center justify-center">
          <input
            placeholder="Search"
            className="bg-[#D9D9D94D] rounded-xl pl-8 pt-[1px] pb-[1px] w-full flex items-center"
          />
          <img
            src="https://cdn.iconscout.com/icon/free/png-256/free-search-1990-1174913.png"
            className="absolute top-[9px] left-3 w-[16px] h-auto" alt=""
          />
        </div>
        <div className="flex flex-row w-[130px] justify-around ">

          <div className="bg-gray-200 rounded-full w-[35px] h-auto flex items-center justify-center ">
            <Link to={"/sellernotification"}>
            <img
              src="https://www.svgrepo.com/show/372571/notification.svg"
              className="w-[24px] h-auto" alt=""
            /></Link>
          </div>

          <div className=" bg-gray-200 rounded-full w-[35px] h-auto flex items-center justify-center">
            <Link to={"/sellerprofile"}>
              <img
                src="https://www.svgrepo.com/show/23012/profile-user.svg"
                className="w-[30px] h-auto" alt=""
              />
            </Link>
          </div>
        </div>
        
      </div>

      {/* {isAllowedPage && (
        <div className="flex flex-row gap-2 pl-2">
          {isOrderPage && (
            <p className="text-[#55A813] font-Montserrat"><Link to={"/sellerdashboard"} className="text-[#333333]">Dashboard {" > "}</Link>Orders</p>
          )}
          {isInventoryPage && (
            <p className="text-[#55A813] font-Montserrat"><Link to={"/sellerdashboard"} className="text-[#333333]">Dashboard {" > "}</Link>Inventory</p>
          )}
          {isDiscountPage && (
            <p className="text-[#55A813] font-Montserrat"><Link to={"/sellerdashboard"} className="text-[#333333]">Dashboard {" > "}</Link>Discount</p>
          )}
          {isProductPage && (
            <p className="text-[#55A813] font-Montserrat"><Link to={"/sellerdashboard"} className="text-[#333333]">Dashboard {" > "}</Link>Product</p>
          )}
          {isAnalyticsPage && (
            <p className="text-[#55A813] font-Montserrat"><Link to={"/sellerdashboard"} className="text-[#333333]">Dashboard {" > "}</Link>Sales</p>
          )}
          {isAnalyticsRevenuePage && (
            <p className="text-[#55A813] font-Montserrat"><Link to={"/sellerdashboard"} className="text-[#333333]">Dashboard {" > "}</Link>Revenue</p>
          )}
          {isAnalyticsOrderPage && (
            <p className="text-[#55A813] font-Montserrat"><Link to={"/sellerdashboard"} className="text-[#333333]">Dashboard {" > "}</Link>Orders</p>
          )}
          {isAnalyticsEarningPage && (
            <p className="text-[#55A813] font-Montserrat"><Link to={"/sellerdashboard"} className="text-[#333333]">Dashboard {" > "}</Link>Earnings</p>
          )}
          {isSettingsPage && (
            <p className="text-[#55A813] font-Montserrat"><Link to={"/sellerdashboard"} className="text-[#333333]">Dashboard {" > "}</Link>Settings</p>
          )}
          {isSettingsProfilePage && (
            <p className="text-[#55A813] font-Montserrat"><Link to={"/sellerdashboard"} className="text-[#333333]">Dashboard {" > "}</Link>
            <Link to={"/sellersettings"} className="text-[#333333]">Settings {" > "}</Link>Profile Details</p>
          )}
          {isSettingsShopPage && (
            <p className="text-[#55A813] font-Montserrat"><Link to={"/sellerdashboard"} className="text-[#333333]">Dashboard {" > "}</Link>
            <Link to={"/sellersettings"} className="text-[#333333]">Settings {" > "}</Link>Shop Details</p>
          )}
          {isSettingsWalletPage && (
            <p className="text-[#55A813] font-Montserrat"><Link to={"/sellerdashboard"} className="text-[#333333]">Dashboard {" > "}</Link>
            <Link to={"/sellersettings"} className="text-[#333333]">Settings {" > "}</Link>My Wallet</p>
          )}
          {isProfilePage && (
            <p className="text-[#55A813] font-Montserrat"><Link to={"/sellerdashboard"} className="text-[#333333]">Dashboard {" > "}</Link>Profile</p>
          )}
          {isNotificationPage && (
            <p className="text-[#55A813] font-Montserrat"><Link to={"/sellerdashboard"} className="text-[#333333]">Dashboard {" > "}</Link>Notification</p>
          )}
        </div>
      )} */}
    </div>
  );
};

export default SearchBarSeller;
