import React, { useState, useEffect } from "react";
import { Line } from 'react-chartjs-2';
import Chart from 'chart.js/auto';
import { Menu } from "react-feather";
import { Link } from "react-router-dom";
import SideMenuSeller from "../components/SideMenuSeller";
import SearchBarSeller from "../components/SearchBarSeller";

// graph data

const SellerAnalytics = () => {
  const [isSidebarOpen, setSidebarOpen] = useState("");
  const [showGraph, setShowGraph] = useState(true);

  const toggleView = () => {
    setShowGraph(!showGraph);
  };

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  const chartData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'Total Sales',
        data: [65, 59, 80, 81, 56, 55, 40],
        borderColor: '#333333',
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
      },
    ],
  };

  const chartOptions = {
    maintainAspectRatio: false,
    responsive: true,
    scales: {
      xAxes: [
        {
          type: 'category',
          grid: {
            display: false,
          },
        },
      ],
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
          grid: {
            display: false,
          },
        },
      ],
    },
  };
  
  useEffect(() => {
    if (showGraph) {
      // Destroy the existing chart before creating a new one
      const chartCanvas = document.getElementById("myChart");
      const chartInstance = chartCanvas && chartCanvas._chart;
      chartInstance && chartInstance.destroy();
    }
  }, [showGraph]);
  

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

        {/* cards */}
        <div className="grid grid-cols-4 gap-10">
          <div className="flex flex-col justify-between shadow-md rounded-lg h-full pt-4 pb-6 pl-4 pr-2">
            <div className="flex flex-row justify-between font-Montserrat ">
              <div className="text-[#333333] font-Montserrat ">Total Sales</div>
              <div className="text-[#58B310] font-Montserrat">+6.5%</div>
            </div>
            <div className="flex flex-col pt-4">
              <div className="font-Montserrat text-[#000000]">1,23,434.00</div>
              <div className="ml-auto">
                <img src="../assests/images/sale1.svg" />
              </div>
            </div>
          </div>

          <Link to={"/selleranalyticrevenue"}>
            <div className="flex flex-col justify-between shadow-md rounded-lg h-full pt-4 pb-6 pl-4 pr-2 cursor-pointer">
              <div className="flex flex-row justify-between font-Montserrat ">
                <div className="text-[#333333] font-Montserrat ">
                  Total Revenue
                </div>
                <div className="text-[#E70000] font-Montserrat">-1.5%</div>
              </div>
              <div className="flex flex-col pt-4">
                <div className="font-Montserrat text-[#000000]">5796</div>
                <div className="ml-auto">
                  <img src="../assests/images/sale2.svg" />
                </div>
              </div>
            </div>
          </Link>

          <Link to={"/selleranalyticorder"}>
            <div className="flex flex-col justify-between shadow-md rounded-lg h-full pt-4 pb-6 pl-4 pr-2 cursor-pointer">
              <div className="flex flex-row justify-between font-Montserrat ">
                <div className="text-[#333333] font-Montserrat ">
                  Order Complete
                </div>
                <div className="text-[#FFB800] font-Montserrat">+1.5%</div>
              </div>
              <div className="flex flex-col pt-4">
                <div className="font-Montserrat text-[#000000]">3444</div>
                <div className="ml-auto">
                  <img src="../assests/images/sale3.svg" />
                </div>
              </div>
            </div>
          </Link>

          <Link to={"/selleranalyticearning"}>
            <div className="flex flex-col justify-between shadow-md rounded-lg h-full pt-4 pb-6 pl-4 pr-2 cursor-pointer">
              <div className="flex flex-row justify-between font-Montserrat ">
                <div className="text-[#333333] font-Montserrat ">
                  Total Earning
                </div>
                <div className="text-[#008080] font-Montserrat">+1.5%</div>
              </div>
              <div className="flex flex-col pt-4">
                <div className="font-Montserrat text-[#000000]">
                  14523,434.00
                </div>
                <div className="ml-auto">
                  <img src="../assests/images/sale4.svg" />
                </div>
              </div>
            </div>
          </Link>
        </div>

        {/* Data */}
        <div className="flex flex-row justify-between gap-6">
          <div className="flex flex-col gap-10">
            <div className="flex flex-row  gap-6">
            <button
                onClick={toggleView}
                className={`text-[#FFFFFF] bg-[#333333] font-Montserrat rounded-md pl-8 pr-8 pt-2 pb-2 shadow-md ${
                  showGraph ? "" : ""
                }`}
              >
                {showGraph ? "Table" : "Graph"}
              </button>
            </div>

            {showGraph ? (
              <div className="w-[700px]">
                 {showGraph && <Line data={chartData} options={chartOptions} />}
              </div>
            ) : (
              <div className="flex flex-col space-y-4 w-[700px]">
                <div className="flex flex-row justify-between bg-[#333333] text-[#FFFFFF] font-Montserrat pt-1 pb-1 pl-4">
                  <p className="w-2/6">Products</p>
                  <p className="w-1/6">Category</p>
                  <p className="w-1/6">Price</p>
                  <p className="w-1/6">Status</p>
                </div>
                <div className="flex flex-row justify-between text-[#333333] text-[14px] h-[82px] shadow-md pt-4 pb-2 pl-4">
                  <div className="w-2/6 font-Gorditas flex flex-row">
                    <img src="../assests/images/facewash.svg" />
                    Innis free Face wash 25 gm
                  </div>
                  <div className="w-1/6 font-Gorditas">Beauty</div>
                  <div className="w-1/6 font-Gorditas">$199</div>
                  <div className="w-1/6 font-Gorditas text-red-600">
                    Pending
                  </div>
                </div>
                <div className="flex flex-row justify-between text-[#333333] text-[14px] h-[82px] shadow-md pt-4 pb-2 pl-4">
                  <div className="w-2/6 font-Gorditas flex flex-row">
                    <img src="../assests/images/facewash.svg" />
                    Innis free Face wash 25 gm
                  </div>
                  <div className="w-1/6 font-Gorditas">Beauty</div>
                  <div className="w-1/6 font-Gorditas">$199</div>
                  <div className="w-1/6 font-Gorditas text-green-600">
                    Success
                  </div>
                </div>
              </div>
            )}

            <div className="flex flex-row justify-between pl-2 pr-4 pt-10 h-[128px]">
              <div className="flex flex-col text-[#333333] text-Inter gap-2 justify-between p-4">
                <div className="text-[16px] font-semibold">Top Month</div>
                <div className="flex flex-col">
                  <p className="text-[24px] font-bold">November</p>
                  <p className="text-[#58B310] text-[16px]">2019</p>
                </div>
              </div>
              <div className="flex flex-col text-[#333333] text-Inter gap-2 justify-between p-4">
                <div className="text-[16px] font-semibold">Top year</div>
                <div className="flex flex-col">
                  <p className="text-[24px] font-bold">2023</p>
                  <p className="text-[14px]">96K sold so far</p>
                </div>
              </div>
              <div className="flex flex-col text-[#333333] text-Inter gap-2 justify-between p-4">
                <div className="text-[16px] font-semibold">Top buyer</div>
                <div className="flex flex-col gap-1  items-left">
                  <img
                    src="../assests/icons/analyticuser.svg"
                    className="h-[24px] w-[24px]"
                  />
                  <p className="text-[12px] font-bold">Maggie Johnson</p>
                  <p className="text-[10px]">Oasis Organic Inc.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-4 pt-14">
            <div className="text-[#333333] font-Montserrat-600 text-[20px]">
              Top Products
            </div>
            <div className="flex flex-col gap-2">
              <img src="../assests/images/Bar.svg" />
              <img src="../assests/images/Bar.svg" />
              <img src="../assests/images/Bar.svg" />
              <img src="../assests/images/Bar.svg" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SellerAnalytics;
