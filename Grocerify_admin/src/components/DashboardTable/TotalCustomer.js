import React from "react";

const TotalCoustomer = ({ Coustomer }) => {
  console.log(Coustomer)
  return (
    <div>
      <div className="overflow-x-auto shadow-md w-[47rem]">
        <p className="border-grey-100 border-2 text-center">Latest Customers</p>
        <table className="table-auto text-center w-[47rem] border-collapse border border-gray-300">
          <thead>
            <tr>
              <th className="px-4 py-2 bg-gray-100 border border-gray-300">ENROLLMENT TIME</th>
              <th className="px-4 py-2 bg-gray-100 border border-gray-300">NAME</th>
              <th className="px-4 py-2 bg-gray-100 border border-gray-300">NUMBER</th>

            </tr>
          </thead>
          <tbody>

            {/* Check if totalOrdersData is an array before mapping */}
            {Array.isArray(Coustomer) && Coustomer.slice(0, 5).map((totalCoustomer, index) => (
              <tr key={index}>
                {/* Assuming each order object has properties: name, age, email */}
                <td className="px-4 py-2 border border-gray-300">{totalCoustomer?.enrollment_date ||Date()}</td>
                <td className="px-4 py-2 border border-gray-300">{totalCoustomer.firstName + " " + totalCoustomer.lastName}</td>
                <td className="px-4 py-2 border border-gray-300">{totalCoustomer.mobile}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TotalCoustomer;
