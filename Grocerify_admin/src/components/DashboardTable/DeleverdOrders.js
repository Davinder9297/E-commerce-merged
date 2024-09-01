import React from "react";

const DeleverdOrders = ({ deliveryBoy }) => {

  console.log(deliveryBoy)
  return (
    <div>
      <div className="overflow-x-auto shadow-md w-[47rem]">
        <p className="border-grey-100 border-2 text-center">Runners List</p>
        <table className="table-auto text-center w-[47rem] border-collapse border border-gray-300">
          <thead>
            <tr>
              <th className="px-4 py-2 bg-gray-100 border border-gray-300">NAME</th>
              <th className="px-4 py-2 bg-gray-100 border border-gray-300">NUMBER</th>
              <th className="px-4 py-2 bg-gray-100 border border-gray-300">ACTIVE ORDER</th>
              <th className="px-4 py-2 bg-gray-100 border border-gray-300">DELIVERED ORDER</th>

            </tr>
          </thead>
          <tbody>
            {/* Check if totalOrdersData is an array before mapping */}
            {Array.isArray(deliveryBoy) && deliveryBoy.map((deleverd, index) => (
              <tr key={index}>
                {/* Assuming each order object has properties: name, age, email */}
                <td className="px-4 py-2 border border-gray-300">{deleverd.firstName + " " + deleverd.lastName}</td>
                <td className="px-4 py-2 border border-gray-300">{deleverd.mobile}</td>
                <td className="px-4 py-2 border border-gray-300">{(deleverd.shift_status).toString()}</td>
                <td className="px-4 py-2 border border-gray-300">{(deleverd.shift_status).toString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DeleverdOrders;
