import React, { useEffect } from "react";
import { getAllOrders } from "../../Apis/api";


const TotalStore = (Store) => {
const allorders=async()=>{
  const response= await getAllOrders();
  console.log(response.data);
}

// const getTotalOrdersByShop = (orders, shopId) => {
//   // Filter orders for the specified shop
//   const shopOrders = orders.filter(order => order.shop === shopId);
//   // Count the number of orders for the shop
//   const totalOrders = shopOrders.length;
//   return totalOrders;
// };

useEffect(()=>{
  allorders();
},[])
  console.log(Store.Store)
  return (
    <div>
      <div className="overflow-x shadow-md w-[47rem] ">
        <p className=" border-grey-100 border-2 text-center">Latest Store</p>
        <table className="table-auto text-center w-[47rem]  border-collapse border border-gray-300">
          <thead>
            <tr>
              <th className="px-4 py-2 bg-gray-100 border border-gray-300 text-center">STORE</th>
              <th className="px-4 py-2 bg-gray-100 border border-gray-300 text-center">CONTACT</th>
              <th className="px-4 py-2 bg-gray-100 border border-gray-300 text-center">ACTIVE ORDERS</th>
              <th className="px-4 py-2 bg-gray-100 border border-gray-300 text-center">DELIVERED ORDERS</th>
            </tr>
          </thead>
          <tbody>

            {Array.isArray(Store.Store) && Store.Store.map((store, index) => (
              <tr key={index}>

                <td className="px-4 py-2 border border-gray-300 text-center">{store.shopName}</td>
                <td className="px-4 py-2 border border-gray-300 text-center">{store.OwnerNumber}</td>
                <td className="px-4 py-2 border border-gray-300 text-center">{store?.active_order||0}</td>
                <td className="px-4 py-2 border border-gray-300 text-center">{store?.total_orders||0}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TotalStore;
