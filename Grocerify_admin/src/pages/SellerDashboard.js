import React, { useEffect, useState } from "react";
import SideMenuSeller from "../components/SideMenuSeller";

import DueTableSeller from "../components/DueTableSeller";
import ActiveTableSeller from "../components/ActiveTableSeller";
import DeliveredTableSeller from "../components/DeliveredTableSeller";
import OnTheWayTableSeller from "../components/OnTheWayTableSeller";

// all icons of dashboard
import Sales from '../assets/icons/Sales.svg'
import visitors from '../assets/icons/visitors.svg'
import Received from "../assets/icons/Received.svg"
import Target from "../assets/icons/Target.svg";
import Salary from "../assets/icons/Salary.svg";
import Courier from "../assets/icons/Courier.svg"
import { useLocation, useSearchParams } from "react-router-dom";
import { getAllShops, getShopById } from "../Apis/api";


const SellerDashboard = () => {

  const [searchParams, setSearchParams] = useSearchParams();
  const [shopDetails, setShopdetails] = useState();
  const [totalSales, setTotalSales] = useState();
  const [todayOrders, setTodayOrders] = useState(0);
  const [totalCustomers, setTotalCustomers] = useState();

  console.log(searchParams.get('id'));

  const [activeButton, setActiveButton] = useState("due");
  useEffect(() => {
    fetchShop();
  }, []);

  const fetchShop = async () => {
    const res = await getShopById(searchParams.get('id'));
    console.log(res.data);
    if (!res?.data) {
      return <h3>Loading....</h3>
    }


    let temp = [];
    setTodayOrders(0);
    res.data.orders.forEach((val, ind) => {
      if (val.ordered_on.split('T')[0] === new Date().toISOString().split('T')[0]) {

        setTodayOrders((prev) => prev + 1)
      }
      temp.push(val.ordered_by)

    })

    console.log(temp)
    setTotalCustomers([...new Set(temp)])

    const totalSales = res.data.orders.reduce((val, acc) => {
      // console.log(val, acc)
      return val + acc.order_price
    }, 0)
    setTotalSales(totalSales)


    setShopdetails(res.data);
  };


  const renderTable = () => {
    switch (activeButton) {
      case "due":
        return <DueTableSeller data={shopDetails?.orders.filter((val) => val.status === 'ordered')} />;
      case "active":
        return <DueTableSeller data={shopDetails?.orders.filter((val) => val.status === 'cancelled')} />;
      case "delivered":
        return <DueTableSeller data={shopDetails?.orders.filter((val) => val.status === 'delivered')} />;
      case "onTheWay":
        return <DueTableSeller data={shopDetails?.orders.filter((val) => val.status === 'shipped')} />;
      default:
        return null;
    }
  };

  return (
    <div className="flex flex-row h-auto">
      <SideMenuSeller />

      {/* Main content */}
      <div
        className={`flex flex-col pl-20 pr-16 pt-8 pb-32 space-y-10`}
      >


        {/* data cards */}
        <div className="grid grid-cols-4 gap-14">
          <div className="flex flex-row justify-between shadow-lg rounded-lg h-full pt-4 pb-6 pl-4 pr-2">
            <div className="font-Montserrat space-y-1">
              <p className="text-[#333333] text-xl">Total Sales</p>
              <p className="text-[#58B310] text-xl">Rs. {totalSales}</p>
              <p className="text-[#FFB800] text-xs font-semibold pt-1">
                27% last week
              </p>
            </div>
            <div>
              <img src={Sales} alt="sales" />
            </div>
          </div>
          <div className="flex flex-row justify-between shadow-lg rounded-lg h-full pt-4 pb-6 pl-4 pr-2">
            <div className="font-Montserrat space-y-1">
              <p className="text-[#333333] text-xl">Visitors</p>
              <p className="text-[#58B310] text-xl">{21}</p>
              <p className="text-[#FFB800] text-xs font-semibold pt-1">
                27% last week
              </p>
            </div>
            <div>
              <img src={visitors} alt="visitors" />
            </div>
          </div>
          <div className="flex flex-row justify-between shadow-lg rounded-lg h-full pt-4 pb-6 pl-4 pr-2">
            <div className="font-Montserrat space-y-1">
              <p className="text-[#333333] text-xl">New Orders</p>
              <p className="text-[#58B310] text-xl">{todayOrders}</p>
              <p className="text-[#FFB800] text-xs font-semibold pt-1">
                27% last week
              </p>
            </div>
            <div>
              <img src={Received} alt="received" />
            </div>
          </div>
          <div className="flex flex-row justify-between shadow-lg rounded-lg h-full pt-4 pb-6 pl-4 pr-2">
            <div className="font-Montserrat space-y-1">
              <p className="text-[#333333] text-xl">Customers</p>
              <p className="text-[#58B310] text-xl">{totalCustomers?.length}</p>
              <p className="text-[#FFB800] text-xs font-semibold pt-1">
                27% last week
              </p>
            </div>
            <div>
              <img src={Target} alt="target" />
            </div>
          </div>
          {/* <div className="flex flex-row justify-between shadow-lg rounded-lg h-full pt-4 pb-6 pl-4 pr-2">
              <div className="font-Montserrat space-y-1">
                <p className="text-[#333333] text-xl">Total Earning</p>
                <p className="text-[#58B310] text-xl">$2478</p>
                <p className="text-[#FFB800] text-xs font-semibold pt-1">
                  27% last week
                </p>
              </div>
              <div>
              <img src={Salary} alt="salary" />
              </div>
            </div> */}
          {/* <div className="flex flex-row justify-between shadow-lg rounded-lg h-full pt-4 pb-6 pl-4 pr-2">
              <div className="font-Montserrat space-y-1">
                <p className="text-[#333333] text-xl">Delivered Order</p>
                <p className="text-[#58B310] text-xl">$2478</p>
                <p className="text-[#FFB800] text-xs font-semibold pt-1">
                  27% last week
                </p>
              </div>
              <div>
                <img src="../assests/icons/Courier.svg" />
              </div>
            </div> */}
        </div>

        {/* Products */}
        <div className="flex flex-row gap-4 font-Montserrat pt-4">
          <button
            className={`text-[#000000] pt-1 pb-1 pl-8 pr-8 rounded-lg font-bold hover:text-[#FFFFFF] hover:bg-[#58B310] ${activeButton === "due" ? "bg-[#58B310] text-[#FFFFFF]" : ""
              }`}
            onClick={() => setActiveButton("due")}
          >
            Due
          </button>
          <button
            className={`text-[#000000] pt-1 pb-1 pl-8 pr-8 rounded-lg font-bold hover:text-[#FFFFFF] hover:bg-[#58B310] ${activeButton === "active" ? "bg-[#58B310] text-[#FFFFFF]" : ""
              }`}
            onClick={() => setActiveButton("active")}
          >
            Active
          </button>
          <button
            className={`text-[#000000] pt-1 pb-1 pl-8 pr-8 rounded-lg font-bold hover:text-[#FFFFFF] hover:bg-[#58B310] ${activeButton === "delivered" ? "bg-[#58B310] text-[#FFFFFF]" : ""
              }`}
            onClick={() => setActiveButton("delivered")}
          >
            Delivered
          </button>
          <button
            className={`text-[#000000] pt-1 pb-1 pl-8 pr-8 rounded-lg font-bold hover:text-[#FFFFFF] hover:bg-[#58B310] ${activeButton === "onTheWay" ? "bg-[#58B310] text-[#FFFFFF]" : ""
              }`}
            onClick={() => setActiveButton("onTheWay")}
          >
            On the way
          </button>
        </div>
        {renderTable()}
      </div>
    </div>
  );
};

export default SellerDashboard;
