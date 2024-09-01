import axios from "axios";
import React, { useState, useEffect } from "react";
import { BASE_URl } from "../../Apis/api";

const TotalOrders = ({ ordersData }) => {
  console.log(ordersData);

  useEffect(() => {

  }, [ordersData]);

  // Sort orders by order date, with the latest orders first
  const sortedOrders = [...ordersData].sort((a, b) => new Date(b.ordered_on) - new Date(a.ordered_on));

  return (
    <div>
      <div className="overflow-x-auto shadow-md w-[47rem]">
        <p className="border-grey-100 border-2 text-center">Latest Orders</p>
        <table className="table-auto text-center w-[47rem] border-collapse border border-gray-300">
          <thead>
            <tr>
              <th className="px-4 py-2 bg-gray-100 border border-gray-300">ORDER ID</th>
              <th className="px-4 py-2 bg-gray-100 border border-gray-300">ORDER RECEIVED</th>
              <th className="px-4 py-2 bg-gray-100 border border-gray-300"> STORE</th>
              <th className="px-4 py-2 bg-gray-100 border border-gray-300">ORDER AMOUNT</th>
              <th className="px-4 py-2 bg-gray-100 border border-gray-300">STATUS</th>
            </tr>
          </thead>
          <tbody>
            {/* Check if totalOrdersData is an array before mapping */}
            {sortedOrders.slice(0, 5).map((order, index) => (
              <tr key={index}>
                <td className="px-4 py-2 border border-gray-300">{order.order_id}</td>
                <td className="px-4 py-2 border border-gray-300">{order.ordered_on}</td>
                <td className="px-4 py-2 border border-gray-300">{order?.shop?.shopName}</td>
                <td className="px-4 py-2 border border-gray-300">{order.order_price}</td>
                <td className="px-4 py-2 border border-gray-300">{order.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TotalOrders;
