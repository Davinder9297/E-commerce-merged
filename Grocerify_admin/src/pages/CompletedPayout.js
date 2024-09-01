import React, { useState, useEffect } from "react";
import { TableContainer, Table, TableHead, TableBody, TableRow, TableCell, Paper } from "@mui/material";
import { FaEye } from "react-icons/fa";
import { CSVLink } from "react-csv";
import axios from 'axios'; // Import Axios

// date picker imported links from mui
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { Link } from "react-router-dom";
import { BASE_URl } from "../Apis/api";

const CompletedPayout = () => {
  const [excelData, setExcelData] = useState([]);
  const [apiData, setApiData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(`${BASE_URl}/getAllOrders`);
      setApiData(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
      setApiData([]); // Set apiData to an empty array in case of error
    }
  };

  const handleDownload = () => {
    const formattedData = apiData.map(data => ({
      "Store": data.store,
      "Payout Amount (₹)": data.total,
      "Payout Date": data.payoutDate
    }));
    setExcelData(formattedData);
  };

  console.log("apiData:", apiData); // Debugging: Log apiData to check its value and type

  return (
    <div className="container mx-auto py-8">
      <div className="flex gap-4 items-center mb-4">
        <CSVLink
          data={excelData}
          filename={"completed_payout.csv"}
          className="border border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white p-1 w-[200px] font-bold rounded"
          onClick={handleDownload}
        >
          Download CSV
        </CSVLink>
        <div className="relative w-64">
          <select className="border rounded-md w-full py-2 pl-3 pr-10 text-gray-600 bg-white focus:outline-none focus:ring-indigo-500 focus:border-indigo-500">
            <option value="all">- Select Store -</option>
            <option value="all">-ALL-</option>
            <option value="moodychef">The Moody Chef</option>
          </select>
        </div>
        {/* Date Picker */}
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DemoContainer components={["DatePicker"]} style={{ marginRight: '10px' }}>
            <DatePicker label="Date From" />
          </DemoContainer>
        </LocalizationProvider>

        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DemoContainer components={["DatePicker"]} style={{ marginRight: '10px' }}>
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

      <div className="bottom">
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
            <TableHead>
              <TableRow>
                <TableCell style={{ color: 'red' }}>STORE</TableCell>
                <TableCell style={{ color: 'red' }}>PAYOUT AMOUNT <i className="text-gray-300">(₹)</i></TableCell>
                <TableCell style={{ color: 'red' }}>PAYOUT DATE</TableCell>
                <TableCell >
                  VIEW ORDER ORDER LIST</TableCell>
              </TableRow>
            </TableHead>
            <TableBody >
              {apiData.map((data, index) => (
                <TableRow style={{ textAlign: 'center' }} key={index}>
                  <TableCell>{data.store}</TableCell>
                  <TableCell>{data.total}</TableCell>
                  <TableCell>{data.payoutDate}</TableCell>
                  <TableCell ><Link to='/OrderList'>
                    <FaEye style={{cursor:'pointer'}} />
                    </Link>
                    </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
};

export default CompletedPayout;
