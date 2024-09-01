import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";
import React from "react";

const ViewBrandOrder = () => {
  return (
    <div className="container mx-[40px]">
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow style={{ color: "grey" }}>
            <TableCell style={{ color: "red" }}>PRODUCT NAME</TableCell>
            <TableCell style={{ color: "red" }}>WEIGHT</TableCell>
            <TableCell>UNIT PRICE</TableCell>
            <TableCell>QUANTITY</TableCell>
            <TableCell>TOTAL(₹)</TableCell>
            <TableCell>COMMENT</TableCell>
            <TableCell style={{ color: "red" }}>ORDER STATUS</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {/* Render table rows dynamically */}

          <TableRow
            // key={index}
            sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
          >
            <TableCell>{""}</TableCell>
            <TableCell>{""}</TableCell>
            <TableCell>{""}</TableCell>
            <TableCell>{""}</TableCell>
            <TableCell>{""}</TableCell>
            <TableCell>{""} </TableCell>
            <TableCell>{""}</TableCell>
            <TableCell>{""}</TableCell>
            <TableCell className="cursor-pointer"></TableCell>
          </TableRow>
        </TableBody>
      </Table>

      <table className="min-w-full divide-y divide-gray-200">
        <thead>
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Name
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Value
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          <tr>
            <td className="px-6 py-4 whitespace-nowrap">Runner Status</td>
            <td className="px-6 py-4 whitespace-nowrap">{"Deleverd"}</td>
          </tr>
          <tr>
            <td className="px-6 py-4 whitespace-nowrap">Runner Name</td>
            <td className="px-6 py-4 whitespace-nowrap">Avinash</td>
          </tr>
          <tr>
            <td className="px-6 py-4 whitespace-nowrap">Runner Order Accept Status</td>
            <td className="px-6 py-4 whitespace-nowrap">123456789</td>
          </tr>
          <br />
          <tr>
            <td className="px-6 py-4 whitespace-nowrap">Order Type</td>
            <td className="px-6 py-4 whitespace-nowrap">{"Delivery"}</td>
          </tr>
          <tr>
            <td className="px-6 py-4 whitespace-nowrap">Name</td>
            <td className="px-6 py-4 whitespace-nowrap">{"Madhav mishra"}</td>
          </tr>
          <tr>
            <td className="px-6 py-4 whitespace-nowrap">Mobile</td>
            <td className="px-6 py-4 whitespace-nowrap">{"911092345678"}</td>
          </tr>
          <tr>
            <td className="px-6 py-4 whitespace-nowrap">City</td>
            <td className="px-6 py-4 whitespace-nowrap">{"Mohali"}</td>
          </tr>
          <tr>
            <td className="px-6 py-4 whitespace-nowrap">Address</td>
            <td className="px-6 py-4 whitespace-nowrap">{"E-299 Mohali"}</td>
          </tr>
          <tr>
            <td className="px-6 py-4 whitespace-nowrap">Delevery Time</td>
            <td className="px-6 py-4 whitespace-nowrap">{"12:32"}</td>
          </tr>
          <tr>
            <td className="px-6 py-4 whitespace-nowrap">Note</td>
            <td className="px-6 py-4 whitespace-nowrap">{"Note"}</td>
          </tr>
          <tr>
            <td className="px-6 py-4 whitespace-nowrap">Payment Mode</td>
            <td className="px-6 py-4 whitespace-nowrap">{"COD"}</td>
          </tr>
          <tr>
            <td className="px-6 py-4 whitespace-nowrap">Carts Saving</td>
            <td className="px-6 py-4 whitespace-nowrap">{"₹63.30"}</td>
          </tr>
        </tbody>
      </table >
      <div className=" flex justify-between item-center bg-gray-300 mt-6 rounded-sm ">
        <h2 className="text-[25px] pl-5">Total Amount: {"200"}</h2>
        <a href="" className="text-[20px]  pr-[27%] text-[blue] underline">Charges break-down</a>
      </div>
      
    </div>
  );
};

export default ViewBrandOrder;
