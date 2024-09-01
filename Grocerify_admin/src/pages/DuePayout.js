import axios from "axios";
import { CSVLink } from "react-csv";
import React, { useState, useEffect } from "react";
import {
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Checkbox,
  Paper,
} from "@mui/material";

import {
  DemoContainer,
} from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

import { MdOutlineDeliveryDining } from "react-icons/md";
import { GiTakeMyMoney, GiReceiveMoney } from "react-icons/gi";

import DashboardCard from "../components/DashboardCard";

const DuePayout = () => {
  const [duePayouts, setDuePayouts] = useState([]);
  const [excelData, setExcelData] = useState([]);
  const [selected, setSelected] = useState([]);

  useEffect(() => {
    fetchDuePayouts();
  }, []);

  const fetchDuePayouts = () => {
    axios.get('http://localhost:4000/duePayout')
      .then(response => {
        setDuePayouts(response.data);
      })
      .catch(error => {
        console.error('Error fetching due payouts:', error);
      });
  };

  const handleDownload = () => {
    const formattedData = duePayouts.map(data => ({
      "Order ID": data.orderId,
      "Order Received": data.orderReceived,
      "Payment Mode/Order Type": data.paymentMode,
      "Payment Received": data.paymentReceived,
      "Paid by Customers (₹)": data.paidByCustomer,
      "Items Total (₹)": data.itemsTotal,
      "Brand Commission (₹)": data.brandCommission,
      "Net Payable to Merchants (₹)": data.netPayableToMerchants,
      "Recalculate Commission": data.recalculateCommission
    }));
    setExcelData(formattedData);
  };

  const handleSelectAllClick = (event) => {
    const newSelected = event.target.checked
      ? duePayouts.map((item) => item.orderId)
      : [];
    setSelected(newSelected);
  };

  const handleClick = (event, orderId) => {
    const selectedIndex = selected.indexOf(orderId);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = [...selected, orderId];
    } else {
      newSelected = selected.filter((id) => id !== orderId);
    }

    setSelected(newSelected);
  };

  const isSelected = (orderId) => selected.length > 0 && selected.includes(orderId);

  const dashboardData = [
    {
      temId: 1,
      icon: MdOutlineDeliveryDining,
      title: "Delivered Orders",
      value: 13,
      color: "pink",
    },
    {
      temId: 2,
      icon: GiReceiveMoney,
      title: "Revenue",
      value: "₹6914.98",
      color: "green",
    },
    {
      temId: 3,
      icon: GiReceiveMoney,
      title: "Total Sale(GMV)",
      value: "₹7079.98",
      color: "green",
    },
    {
      temId: 4,
      icon: GiTakeMyMoney,
      title: "My Earning",
      value: "₹81.03",
      color: "yellow",
    },
  ];

  return (
    <div className="container mx-auto py-8">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
        {dashboardData.map((item, index) => (
          <div key={index} className="col-span-1 p-4">
            <DashboardCard item={item} />
          </div>
        ))}
      </div>

      <div className="flex gap-4 items-center mb-4">
        <CSVLink
          data={excelData}
          filename={"due_payout.csv"}
          className="border border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white p-1 w-[200px] font-bold rounded"
          onClick={handleDownload}
        >
          Download Sheet
        </CSVLink>
        <div className="relative w-64">
          <select className="border rounded-md w-full py-2 pl-3 pr-10 text-gray-600 bg-white focus:outline-none focus:ring-indigo-500 focus:border-indigo-500">
            <option value="all">- Select Store -</option>
            <option value="all">-ALL-</option>
            <option value="moodychef">The Moody Chef</option>
          </select>
        </div>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DemoContainer
            components={["DatePicker"]}
            style={{ marginRight: "10px" }}
          >
            <DatePicker label="Date From" />
          </DemoContainer>
        </LocalizationProvider>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DemoContainer
            components={["DatePicker"]}
            style={{ marginRight: "10px" }}
          >
            <DatePicker label="Date Till" />
          </DemoContainer>
        </LocalizationProvider>
        <button className="border border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white p-1 w-[70px] font-bold rounded">
          Go
        </button>
        <button className="border border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white p-1 w-[70px] font-bold rounded">
          Reset
        </button>
      </div>
      <h2 class="mb-2 text-lg font-bold text-red-500 dark:text-white">
        Payout Rules :
      </h2>
      <ul class="min-w-md space-y-1 text-gray-500 dark:text-gray-400 list-disc pl-5">
        <li>
          Brand commission is calculated on items total. It's not included any
          tax and shipping.
        </li>
        <li>
          In case discount is sponsored by{" "}
          <span class="font-semibold text-gray-600 dark:text-white">brand</span>{" "}
          then discount amount will be minus from{" "}
          <span class="font-semibold text-gray-600 dark:text-white">
            brand commission .
          </span>
        </li>
        <li>
          Shipping charges (including shipping tax) will be collected by{" "}
          <span class="font-semibold text-gray-600 dark:text-white">brand .</span>
        </li>
        <li>
          In case{" "}
          <span class="font-semibold text-gray-600 dark:text-white">
            net payable to merchants
          </span>{" "}
          is positive value it means{" "}
          <span class="font-semibold text-gray-600 dark:text-white">brand</span>{" "}
          will pay to{" "}
          <span class="font-semibold text-gray-600 dark:text-white">
            merchants .
          </span>
        </li>
        <li>
          In case{" "}
          <span class="font-semibold text-gray-600 dark:text-white">
            net payable to merchants
          </span>{" "}
          is negative value it means{" "}
          <span class="font-semibold text-gray-600 dark:text-white">brand</span>{" "}
          will collect from{" "}
          <span class="font-semibold text-gray-600 dark:text-white">
            merchants .
          </span>
        </li>
      </ul>

      <div className="mt-[40px]">
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
            <TableHead>
              <TableRow>
                <TableCell>
                  <Checkbox
                    indeterminate={
                      selected.length > 0 && selected.length < duePayouts.length
                    }
                    checked={selected.length === duePayouts.length}
                    onChange={handleSelectAllClick}
                  />
                </TableCell>
                <TableCell style={{ color: "red" }}>ORDER ID</TableCell>
                <TableCell style={{ color: "red" }}>ORDER RECEIVED</TableCell>
                <TableCell>PAYMENT MODE/ORDER TYPE</TableCell>
                <TableCell>PAYMENT RECEIVED</TableCell>
                <TableCell>PAID BY CUSTOMERS (₹)</TableCell>
                <TableCell>ITEMS TOTAL(₹)</TableCell>
                <TableCell>BRAND COMMISSION (₹)</TableCell>
                <TableCell>NET PAYABLE TO MERCHANTS (₹)</TableCell>
                <TableCell>RECALCULATE COMMISSION</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {duePayouts.map((data, index) => (
                <TableRow
                  key={data.orderId}
                  // sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >

                  <TableCell padding="checkbox">
                    <Checkbox
                      checked={isSelected(data.orderId)}
                      onChange={(event) => handleClick(event, data.orderId)}
                    />
                  </TableCell>
                  <TableCell style={{color:'red'}}>{data.orderId}</TableCell>
                  <TableCell>{data.orderReceived}</TableCell>
                  <TableCell>{data.paymentMode}</TableCell>
                  <TableCell>{data.paymentReceived}</TableCell>
                  <TableCell>{data.paidByCustomer}</TableCell>
                  <TableCell>{data.itemsTotal}</TableCell>
                  <TableCell>{data.brandCommission}</TableCell>
                  <TableCell>{data.netPayableToMerchants}</TableCell>
                  <TableCell>{data.recalculateCommission}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          <div className="p-5">
            <button className="border border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white p-1 w-[70px] font-bold rounded">Payout</button>
          </div>
        </TableContainer>
        <div>Total Selected: {selected.length}</div>
      </div>
    </div>
  );
};

export default DuePayout;
