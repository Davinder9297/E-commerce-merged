import React, { useState, useEffect } from "react";
import { Container } from "@mui/material";
// import { dashboardItems } from '../data';
// import { IoMdCart } from "react-icons/io";
// import { MdOutlineDeliveryDining } from "react-icons/md";
// import { GiReceiveMoney } from "react-icons/gi";
// import { GiTakeMyMoney } from "react-icons/gi";
// import { FaUsers } from "react-icons/fa";
// import { RiCoupon2Fill } from "react-icons/ri";
// import { SiHomeassistantcommunitystore } from "react-icons/si";
// import { GiRunningNinja } from "react-icons/gi";
import DashboardCard from "../components/DashboardCard";
import TotalOrders from "../components/DashboardTable/TotalOrders";
import DeleverdOrder from "../components/DashboardTable/DeleverdOrders";
import TotalCoustomer from "../components/DashboardTable/TotalCustomer";
import TotalStore from "../components/DashboardTable/TotalStore";
import useDataWithAPI from "../data";
import {
  getAllShops,
  getAllDeliveryBoy,
  getAllOrders,
  getAllUsers,
} from "../Apis/api";
import RevenueLineChart from "../components/Charts/RevenueLineChart";
import OrdersLineCharts from "../components/Charts/OrdersLineCharts";
import AllOrdersPieChart from "../components/Charts/AllOrdersPieChart";
import PlatformOrdersPieChart from "../components/Charts/PlatformOrdersPieChart";
import Login from "./Login";
import { Loader } from "react-feather";
// import useDataWithAPI from '../data'

const Dashboard = () => {
  const data = useDataWithAPI();
  console.log(data);
  const [totalOrdersData, setTotalOrdersData] = useState([]);
  // const [deleverdOrderData, setDeleverdOrderData] = useState([]);
  const [totalCoustomer, setTotalCoustomer] = useState([]);
  // const [totalStore, setTotalStore] = useState([]);
  // const [productData, setproductData] = useState([]);
  const [sellerData, setsellerData] = useState([]);
  const [DeliveryBoyData, setDeliveryBoyData] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetch = async () => {
    const shops = await getAllShops();
    const orders = await getAllOrders();
    const users = await getAllUsers();
    // const deliveryBoys = await getAllDeliveryBoy();
    // console.log(deliveryBoys.data.deliveryboys);
    // setDeliveryBoyData(deliveryBoys.data.deliveryboys);
    console.log(users.data.data);
    setTotalCoustomer(users.data.data);
    console.log(orders.data.data);
    setTotalOrdersData(orders.data.orders);
    console.log(shops.data.data);
    setsellerData(shops.data.data);
  };

  useEffect(() => {
    setLoading(true);
    fetch();
    setLoading(false);
  }, [setLoading]);

  return (
    <>
      {localStorage.getItem("adminDetail") ? (
        loading ? (
          <Loader />
        ) : (
          <Container maxWidth="xxl">
            <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-2">
              {" "}
              {data.map((item, index) => (
                <div key={index} className="col-span-1 p-4">
                  <DashboardCard item={item} />
                </div>
              ))}
            </div>

            <div className="grid lg:grid-cols-2 gap-4">
              <RevenueLineChart />
              <OrdersLineCharts />
            </div>

            <div className="grid lg:grid-cols-2 gap-4">
              <AllOrdersPieChart />
              <PlatformOrdersPieChart />
            </div>

            <div className="grid lg:grid-cols-2 gap-4">
              <TotalOrders ordersData={totalOrdersData} />

              <TotalCoustomer Coustomer={totalCoustomer} />

              {/* <DeleverdOrder deliveryBoy={DeliveryBoyData} /> */}

              <TotalStore Store={sellerData} />
            </div>
          </Container>
        )
      ) : (
        <Login />
      )}
    </>
  );
};

export default Dashboard;
