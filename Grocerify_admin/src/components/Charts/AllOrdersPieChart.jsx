 import React, { useEffect, useState } from 'react';
import ReactApexChart from 'react-apexcharts';
import { getAllOrders } from '../../Apis/api';

const AllOrdersPieChart = () => {
  const [orderData,setOrderData]=useState([]);
  // const [loading,setLoading]=useState(false);
  const fetch = async ()=>{
    try {
      const response=await getAllOrders();
      console.log(response.data.orders);
      setOrderData(response.data.orders);
    } catch (error) {
      console.log(error);
    }
  }
useEffect(()=>{
  fetch();
},[]);

  const seriesData = [];
  const orderLabel=[];
  orderData.map((data)=>{
    const price=data.order_price;
    seriesData.push(price);
    orderLabel.push(data.order_id)
  })
  const options = {
    chart: {
        width: 500, 
        height: 600, 
        type: 'pie',
      },
 
    labels: orderLabel,
    responsive: [{
      breakpoint: 480,
      options: {
        chart: {
          width: 200
        },
        legend: {
          position: 'bottom'
        }
      }
    }]
  };

  return (
    <div className='bg-gray-50 rounded-2xl mt-4 mb-4'>
        <h1 className='p-5 text-center font-bold text-[20px]'>All Orders</h1>
      <div id="chart" className='pl-[20%] px-8 p-6' >
        
        <ReactApexChart options={options} series={seriesData} type="pie" width={380} />
      </div>
      <div id="html-dist"></div>
    </div>
  );
};

export default AllOrdersPieChart;


