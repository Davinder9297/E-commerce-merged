import React, { useEffect, useState } from "react";
import { useSearchParams } from 'react-router-dom'
import { getAllUsers } from "../Apis/api";

const BrandCustomerDetails = () => {
  const [searchParams] = useSearchParams();
  const [data, setData] = useState({}); // Initialize data as an empty object
  const id = searchParams.get("id");

  useEffect(() => {
    const fetchData = async () => {
      const response = await getAllUsers();
      const filteredData = response.data.data.filter((dataItem) => dataItem._id === id);
      // Update data state using the setter function
      setData(filteredData[0] || {}); // Set to empty object if no match found
    };

    console.log(id);
    fetchData();
  }, [id]); // Dependency array ensures useEffect runs when id changes

  return (
    <div className="container mt-5 overflow-hidden">
      <h1 className="text-3xl text-center mb-2">Customers Information</h1>
      <table className="min-w-full overflow-hidden divide-y divide-gray-200 shadow-md">
        <thead>
          <tr>
            <th className="px-6 py-4 whitespace-nowrap">CustomerID</th>
            <th className="px-6 py-4 whitespace-nowrap">Customer Name</th>
            <th className="px-6 py-4 whitespace-nowrap">Email</th>
            <th className="px-6 py-4 whitespace-nowrap">Mobile No.</th>
          </tr>
        </thead>
        <tbody>
          {/* Customer information row */}
          {data && ( // Check if data exists before rendering to avoid errors
          <>
           <tr>
              <td className="px-6 py-4 whitespace-nowrap">{data._id}</td>
              <td className="px-6 py-4 whitespace-nowrap">{data.firstName} {data.lastName}</td>
              <td className="px-6 py-4 whitespace-nowrap">{data.email}</td>
              <td className="px-6 py-4 whitespace-nowrap">{data.mobile}</td>
            </tr>
            {data?.address?.map((address, index) => (
            <tr key={index}>
              <td className="px-6 py-4 whitespace-nowrap"></td> {/* Empty cell for visual separation */}
              <td className="px-6 py-4 whitespace-nowrap"><b>Shipping Address {index + 1}</b></td>
              <td colSpan={2} className="px-6 py-4 whitespace-nowrap">
                <ul>
                  <li><b>Full Name:</b> {address.full_name}</li>
                  <li><b>Address:</b> {address.address_line_1} {address.address_line_2 && `, ${address.address_line_2}`}</li>
                  <li><b>Landmark:</b> {address.landmark}</li>
                  <li>
                    <b>City, State, Country:</b> {address.city}, {address.state}, {address.country}
                  </li>
                  <li><b>Zip Code:</b> {address.zip}</li>
                </ul>
              </td>
            </tr>
          ))}
          </>
           

          )}

        </tbody>
      </table>
    </div>
  );
};

export default BrandCustomerDetails;
