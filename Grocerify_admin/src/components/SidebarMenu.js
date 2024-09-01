import React, { useEffect, useMemo, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { AiFillPieChart } from "react-icons/ai";
import { FaChrome, FaUsers, FaPlaceOfWorship, FaCalendarAlt, FaProductHunt } from "react-icons/fa";
import { ImFloppyDisk, ImClock } from "react-icons/im";
import { HiOutlineSpeakerphone } from "react-icons/hi";
import { GiGreekTemple } from "react-icons/gi";
import { IoIosSettings } from "react-icons/io";
import { CiShop } from "react-icons/ci";
import { RiShoppingCartFill } from "react-icons/ri";
import { IoBagAddSharp } from "react-icons/io5";
import { BiCoinStack } from "react-icons/bi";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";


const SidebarMenu = React.memo(({ open }) => {
  const location = useLocation();

  // Define menu items with their titles, paths, icons, and optional dropdown options
  const menus = useMemo(
    () => [
      { title: "Dashboard", path: "/dashboard", src: <AiFillPieChart /> },
      { title: "Show Product", path: "/showProduct", src: <FaProductHunt /> },
      { title: "Add Product", path: "/addProduct", src: < IoBagAddSharp/> },
      {
        title: "Merchants",
        path: "/Merchants",
        src: <GiGreekTemple />,
        dropdownOptions: [{path:"MerchantList",title:"Merchant Details"},{path:"AddMerchant",title:'Add Merchant'}, {path:"VerifyMerchants",title:"Verify Merchant"}, {path:"SwitchMerchants",title:"Switch Merchant"}]
      },
      {
        title: "Shops",
        path: "/Shops",
        src: <CiShop />,
        dropdownOptions: [{path:"ShopList",title:"Shop Details"},{path:"AddShop",title:'Add Shop'}, {path:"VerifyShops",title:"Verify Shop"}]
      },
      { title: "Brand Orders", path: "/BrandOrder", src: <FaPlaceOfWorship /> },
      {
        title: "Order Payout",
        path: "/DuePayout",
        src: <RiShoppingCartFill />,
        dropdownOptions: [{path:"OrderPayout",title:"Order Payout"},{path:"DuePayout",title:"Due Payout"}, {path:"CompletedPayout",title:"Completed Payout"}],
      },
      {
        title: "Brand Categories",
        path: "/BrandCategory",
        src: <BiCoinStack />,
      },
      {
        title: "Brand Customers",
        path: "/BrandCustomer",
        src: <FaUsers />,
      },
      {
        title: "Operating Zone",
        path: "/OperatingZone",
        src: <ImClock />,
      },
      {
        title: "Marketing & Promotion",
        path: "/MarketingAndPromotion",
        src: <HiOutlineSpeakerphone />,
        dropdownOptions: [{path:"Coupons",title:"Coupons"}, {path:"ReferAndEarn",title:"Refer And Earn"},{path:"CommunicationCenter",title:"Communication Center"} ],
      },
      {
        title: "Shipping & Runners",
        path: "/ShippingAndRunners",
        src: <FaCalendarAlt />,
        dropdownOptions: [{path:"ShippingCharges",title:"Shipping Charges"},{path:"VerifyDriver",title:"Verify Runner"}, {path:"RunnerManagement",title:"Runner Management"}],
        
      },
      // {
      // title: "Runner Payout",
      // path: "/RunnerPayout",
      // src: <RiShoppingCartFill />,
      // dropdownOptions: [{path:"PayoutSetting",title:"Payout Setting"}, {path:"DuePayout",title:"Due Payout"},{ path:"CompletedPayout",title:"Complete Payout"}],
      
      // },
      // {
      //   title: "Enquiries",
      //   path: "/Enquiries",
      //   src: <FaCalendarAlt />,
      //   dropdownOptions: [{path:"CustomersEnquiries",title:"Customers Enquiries"},{path:"Partnersenquiries",title:"Partners Enquiries"}],
      // },
      // {
      //   title: "Settings",
      //   path: "/Settings",
      //   src: <IoIosSettings />,
      //   dropdownOptions: [{path:"BrandInformation",title:"Brand Information"},{path:"BrandFeatures",title:"Brand Features"}, {path:"QuickLinks",title:"Quick Links"}, {path:"Banners",title:"Banners"},{path:"OnlinePaymentSetting",title:"Online Payment Setting"}],
      // },
      // {
      //     title: "Settings",
      //     path: "/Settings",
      //     src: <IoIosSettings />
      // },
      // {
      //   title: "Web Settings",
      //   path: "/WebSettings",
      //   src: <FaChrome />,
      //   dropdownOptions: [{path:"SocialLinks",title:"Social Links"}, {path:"AboutUs",title:"About Us"}, {path:"WebMenuSetting",title:"Web Menu Setting"},{path: "WebThemeColor",title:"Web Theme Color"}, {path:"WebPageContent",title:"Web Page Setting"}, {path:"Banners",title:"Banners"},{ path:"Faq",title:"FAQ"}, {path:"StaticPages",title:"Static Pages"}],
      // },
    ],
    []
  );

  useEffect(() => {
    if (!open) setOpenDropdowns(Array(menus.length).fill(false));
  }, [open, menus.length])
  // State to keep track of which dropdowns are open
  const [openDropdowns, setOpenDropdowns] = useState(Array(menus.length).fill(false));

  // Function to toggle dropdown visibility for a specific index
  const toggleDropdown = (index) => {
    const updatedDropdowns = [...openDropdowns];
    updatedDropdowns[index] = !updatedDropdowns[index];
    setOpenDropdowns(updatedDropdowns);
  };

  return (
    <ul>
      {/* Map through the menu items and render them */}
      {menus.map((menu, index) => (
        <div key={index}>
          {/* Check if the menu item has dropdown options */}
          {menu.dropdownOptions ? (
            <>
              {/* Render the dropdown toggle button */}
              <li
                className={`flex items-center gap-x-6 p-3 border-b border-gray-400 cursor-pointer text-black hover:bg-gray-200 dark:hover:bg-gray-700 hover:text-black
                    ${menu.gap ? "mt-9" : "mt-2"} ${location.pathname === menu.path && "bg-gray-200 dark:bg-gray-700"
                  }`}
                onClick={() => toggleDropdown(index)}
              >
                <span className="text-2xl">{menu.src}</span>
                {/* Conditionally render title based on the open prop */}
                {open && <span className="text-1xl flex justify-between items-center gap-3">{menu.title} <MdOutlineKeyboardArrowDown className="text-lg"/></span>}
              </li>
              {/* Render the dropdown options if the dropdown is visible */}
              {openDropdowns[index] && (
                <ul>
                  {menu.dropdownOptions.map((option, optionIndex) => (
                    <Link to={`/${option.path}`} key={optionIndex}>
                      <li
                        className={`flex ml-5 items-center gap-x-6 p-3 border-b cursor-pointer border-gray-400 text-black hover:bg-gray-200 hover:text-black dark:hover:bg-gray-700`}
                      >
                        <span>{option.title}</span>
                      </li>
                    </Link>
                  ))}
                </ul>
              )}
            </>
          ) : (
            // Render a regular menu item with a link
            <Link to={menu.path}>
              <li
                className={`flex items-center gap-x-6 p-3 cursor-pointer text-black
                hover:text-black border-b border-gray-400
                hover:bg-gray-200 dark:hover:bg-gray-700
                    ${menu.gap ? "mt-9" : "mt-2"} ${location.pathname === menu.path && "bg-gray-200 dark:bg-gray-700 text-black"
                  }`}
              >
                <span className="text-2xl">{menu.src}</span>
                {/* Conditionally render title based on the open prop */}
                {open && <span className="text-1xl">{menu.title}</span>}
              </li>
            </Link>
          )}
        </div>
      ))}
    </ul>
  );
});

export default SidebarMenu;
