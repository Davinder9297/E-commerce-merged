import React, { useState, useEffect, useContext } from "react";
import { Menu } from "react-feather";
import SideMenuSeller from "../components/SideMenuSeller";
import SearchBarSeller from "../components/SearchBarSeller";
import DueTableSeller from "../components/DueTableSeller";
import ActiveTableSeller from "../components/ActiveTableSeller";
import DeliveredTableSeller from "../components/DeliveredTableSeller";
import OnTheWayTableSeller from "../components/OnTheWayTableSeller";
import { Toaster } from "react-hot-toast";
import { GlobalInfo } from "../App";
import { getOrderByShop, getSeller } from "../helper/helper";
import SellerLogin from "./SellerLogin";
import { BASE_URL } from "../api/api";
import { jwtDecode } from "jwt-decode";
import Spinner from '../components/Spinner'

// cards data, navigation - sales, visitors
// table data
// pending, success status colors

const SellerDashboard = () => {

  const { sellerDetails } = useContext(GlobalInfo)
  const [orders, setOrders] = useState([]);
  const [totalSales, setTotalSales] = useState();
  const [todayOrders, setTodayOrders] = useState(0);
  const [totalCustomers, setTotalCustomers] = useState();
  const [ownerName, setownerName] = useState()
  const [show, setshow] = useState(false)


 
  useEffect(() => {
    async function Fetchdata(){
     let token=localStorage.getItem('token')
     if(token){
      setshow(true)
       let decoded=jwtDecode(token)
       const data=await fetch(BASE_URL+'api/getordersgroupbyuser/'+decoded?.shop)
       const response=await data.json()
       const details=await getSeller(decoded)
       setownerName(details?.data?.data?.OwnerName)
      //  console.log(response);
       setTotalCustomers(response?.orders?.length)
setshow(false)
     }
    }
    Fetchdata()
   }, [])

   

  const getOrdersByShop = async () => {
setshow(true)
    const orders = await getOrderByShop();
    // console.log(orders?.data.orders)
    setOrders(orders?.data?.orders)

    // find todays orders
    let temp = [];
    setTodayOrders(0);




    // find total sales
    const totalSales = orders?.data?.orders?.reduce((val, acc) => {
      // console.log(val, acc)
      return val + acc.order_price
    }, 0)
    setTotalSales(totalSales)

setshow(false)
  }
  useEffect(() => {
    getOrdersByShop();
  }, [])

  

  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [activeButton, setActiveButton] = useState("all");
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

  const renderTable = () => {
    switch (activeButton) {
      case "due":
        return <DueTableSeller getOrdersByShop={getOrdersByShop}  data={orders?.filter((val) => val.status === 'ordered')} />;
      case "active":
        return <DueTableSeller getOrdersByShop={getOrdersByShop} data={orders?.filter((val) => val.status === 'cancelled')} />;
      case "delivered":
        return <DueTableSeller getOrdersByShop={getOrdersByShop} data={orders?.filter((val) => val.status === 'delivered')} />;
      case "onTheWay":
        return <DueTableSeller getOrdersByShop={getOrdersByShop} data={orders?.filter((val) => val.status === 'shipped')} />;
      case "all":
        return <DueTableSeller getOrdersByShop={getOrdersByShop} data={orders} />;
      default:
        return null;
    }
  };

  if (!sellerDetails) {
    return <h3>Loading...</h3>

  }

  return (
    <>
    			{show ? (
        <div className="w-full h-screen fixed top-0 left-0 bg-[#b4cca1] opacity-80">
          <Spinner className="" />
        </div>
      ) : (
        ""
      )}
      <Toaster position="top-right" />
      {localStorage.getItem('token') ? 
      <div className="flex flex-row h-auto ">
        {/* side menu */}
        <button
          onClick={() => {
            toggleSidebar();
          }}
          className="absolute text-[#58B310] p-2 ml-2 mt-6 rounded-md  "
          style={{ height: "30px" }}
        >
          <Menu size={30} />
        </button>
        <SideMenuSeller isOpen={isSidebarOpen} onToggle={toggleSidebar} />

        {/* Main content */}
        <div
          className={`flex flex-col pl-20 pr-16 pt-8 pb-32 space-y-10 ${isSidebarOpen ? "w-4/5" : "w-full"
            }`}
        >
          {/* Search bar */}
          <SearchBarSeller />

          {/* description */}
          <div className="font-Gorditas text-[#333333] space-y-1">
            <p className="text-3xl font-Gorditas font-bold ">Hello {ownerName}</p>
            <p className="font-Gorditas">{`Today is ${currentDate}`}</p>
          </div>

          {/* data cards */}
          <div className="grid grid-cols-4 gap-14">
            <div className="flex flex-row justify-between shadow-lg rounded-lg  pt-4 pb-6 pl-4 pr-2 h-[20vh]">
              <div className="font-Montserrat space-y-1 ">
                <p className="text-[#333333] text-xl">Total Sales</p>
                <p className="text-[#58B310] text-xl">Rs. {totalSales}</p>
                {/* <p className="text-[#FFB800] text-xs font-semibold pt-1">
                  27% last week
                </p> */}
              </div>
              <div>
                <img src="../assests/icons/Sales.svg" />
              </div>
            </div>
            <div className="flex flex-row justify-between shadow-lg rounded-lg  pt-4 pb-6 pl-4 pr-2 h-[20vh]">
              <div className="font-Montserrat space-y-1">
                <p className="text-[#333333] text-xl">Visitors</p>
                <p className="text-[#58B310] text-xl">{sellerDetails?.Shop?.visitors}</p>
                {/* <p className="text-[#FFB800] text-xs font-semibold pt-1">
                  27% last week
                </p> */}
              </div>
              <div>
                <img src="../assests/icons/visitors.svg" />
              </div>
            </div>
            <div className="flex flex-row justify-between shadow-lg rounded-lg  pt-4 pb-6 pl-4 pr-2 h-[20vh]">
              <div className="font-Montserrat space-y-1">
                <p className="text-[#333333] text-xl">New Orders</p>
                <p className="text-[#58B310] text-xl">{todayOrders}</p>
                {/* <p className="text-[#FFB800] text-xs font-semibold pt-1">
                  27% last week
                </p> */}
              </div>
              <div>
                <img className="h-10 w-10" src="../assests/icons/orders.svg" />
              </div>
            </div>
            <div className="flex flex-row justify-between shadow-lg rounded-lg  pt-4 pb-6 pl-4 pr-2 h-[20vh]">
              <div className="font-Montserrat space-y-1">
                <p className="text-[#333333] text-xl">Customers</p>
                <p className="text-[#58B310] text-xl">{totalCustomers}</p>
                {/* <p className="text-[#FFB800] text-xs font-semibold pt-1">
                  27% last week
                </p> */}
              </div>
              <div>
                <img  className="h-10 w-10" src="../assests/icons/customer.svg" />
              </div>
            </div>
            {/* <div className="flex flex-row justify-between shadow-lg rounded-lg  pt-4 pb-6 pl-4 pr-2 h-[20vh]">
              <div className="font-Montserrat space-y-1">
                <p className="text-[#333333] text-xl">Total Earning</p>
                <p className="text-[#58B310] text-xl">$2478</p>
                // <p className="text-[#FFB800] text-xs font-semibold pt-1">
                //   27% last week
                // </p>
              </div>
              <div>
                <img src="../assests/icons/Salary.svg" />
              </div>
            </div> */}
            {/* <div className="flex flex-row justify-between shadow-lg rounded-lg  pt-4 pb-6 pl-4 pr-2 h-[20vh]">
              <div className="font-Montserrat space-y-1">
                <p className="text-[#333333] text-xl">Delivered Order</p>
                <p className="text-[#58B310] text-xl">$2478</p>
                // <p className="text-[#FFB800] text-xs font-semibold pt-1">
                //   27% last week
                // </p>
              </div>
              <div>
                <img src="../assests/icons/Courier.svg" />
              </div>
            </div> */}
          </div>

          {/* Products */}
          <div className="flex flex-row gap-4 font-Montserrat pt-4">
            <button
              className={`text-[#000000] pt-1 pb-1 pl-8 pr-8 rounded-lg font-bold hover:text-[#FFFFFF] hover:bg-[#58B310] ${activeButton === "all" ? "bg-[#58B310] text-[#FFFFFF]" : ""
                }`}
              onClick={() => setActiveButton("all")}
            >
               All({orders?.length})
            </button>
            <button
              className={`text-[#000000] pt-1 pb-1 pl-8 pr-8 rounded-lg font-bold hover:text-[#FFFFFF] hover:bg-[#58B310] ${activeButton === "due" ? "bg-[#58B310] text-[#FFFFFF]" : ""
                }`}
              onClick={() => setActiveButton("due")}
            >
              Orders({orders?.filter((val) => val.status === 'ordered').length})
            </button>
            <button
              className={`text-[#000000] pt-1 pb-1 pl-8 pr-8 rounded-lg font-bold hover:text-[#FFFFFF] hover:bg-[#58B310] ${activeButton === "active" ? "bg-[#58B310] text-[#FFFFFF]" : ""
                }`}
              onClick={() => setActiveButton("active")}
            >
              Cancelled({orders?.filter((val) => val.status === 'cancelled').length})
            </button>
            <button
              className={`text-[#000000] pt-1 pb-1 pl-8 pr-8 rounded-lg font-bold hover:text-[#FFFFFF] hover:bg-[#58B310] ${activeButton === "delivered" ? "bg-[#58B310] text-[#FFFFFF]" : ""
                }`}
              onClick={() => setActiveButton("delivered")}
            >
              Delivered({orders?.filter((val) => val.status === 'delivered').length})
            </button>
            <button
              className={`text-[#000000] pt-1 pb-1 pl-8 pr-8 rounded-lg font-bold hover:text-[#FFFFFF] hover:bg-[#58B310] ${activeButton === "onTheWay" ? "bg-[#58B310] text-[#FFFFFF]" : ""
                }`}
              onClick={() => setActiveButton("onTheWay")}
            >
              On the way({orders?.filter((val) => val.status === 'shipped').length})
            </button>
          </div>
          {renderTable()}
		
        </div>
      </div>:<SellerLogin/>}
    </>
  );
};

export default SellerDashboard;
