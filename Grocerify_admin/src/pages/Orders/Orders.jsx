import React, { useState, useEffect } from "react";
import { TiExportOutline } from "react-icons/ti";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { FaEye } from "react-icons/fa";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

const Brand_Customer = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("YOUR_API_ENDPOINT_HERE");
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="container mx-auto py-8">
      <Stack direction="row" spacing={4}>
        <Button href="#text-buttons" color="error" className="gap-2" style={{ fontWeight: 'bold' }}>
          <TiExportOutline className="text-3xl" /> Export Data
        </Button>
        <Button href="#text-buttons" color="error" className="gap-2" style={{ fontWeight: 'bold' }}>
          <TiExportOutline className="text-3xl " />Previous Export Data
        </Button>
      </Stack>
      <div className="flex gap-4 items-center mb-4">
        <div className="flex justify-end pr-4">
          <div className="flex items-center border rounded px-2 py-1 mr-4">
            <input
              type="text"
              placeholder="Search..."
              className="border-none text-gray-400 outline-none focus:ring-0 bg-transparent"
            />
          </div>
        </div>
        <div className="relative w-64">
          <select className="border rounded-md w-full py-2 pl-3 pr-10 text-gray-600 bg-white focus:outline-none focus:ring-indigo-500 focus:border-indigo-500">
            <option value="all">- Select Store -</option>
            <option value="all">-ALL-</option>
            <option value="moodychef">The Moody Chef</option>
          </select>
        </div>
        <div className="relative w-64">
          <select className="border rounded-md w-full py-2 pl-3 pr-10 text-gray-600 bg-white focus:outline-none focus:ring-indigo-500 focus:border-indigo-500">
            <option value="all">- All -</option>
            <option value="due">Due</option>
            <option value="processing">Processing</option>
            <option value="rejected">Rejected</option>
            <option value="cancel">Cancel</option>
            <option value="readytopick">Ready to be Picked</option>
            <option value="ontheway">On the Way</option>
            <option value="delivered">Delivered</option>
          </select>
        </div>
      </div>
      <div className="flex gap-4 items-center mb-4">
        <div className="w-64">
          <select className="border rounded-md bg-white w-full py-2 pl-3 pr-10 text-gray-600 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500">
            <option value="alloperatingzone">-ALL OPERATING ZONES-</option>
            <option value="sector37">Sector 37</option>
            <option value="chandigarh">Chandigarh</option>
            <option value="zone1sector15">Zone 1 (Sector 1-5)</option>
          </select>
        </div>
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
        <Button variant="outlined" color="error">Go</Button>
        <Button variant="outlined" color="error">Reset</Button>
      </div>
      <div className="bottom">
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
            <TableHead>
              <TableRow style={{color:'grey'}}>
                <TableCell style={{color:'red'}}>ORDER ID</TableCell>
                <TableCell style={{color:'red'}}>ORDER DELIVERED</TableCell>
                <TableCell>STORE</TableCell>
                <TableCell>CUSTOMERS</TableCell>
                <TableCell>ADDRESS</TableCell>
                <TableCell>TOTAL(₹)</TableCell>
                <TableCell style={{color:'red'}}>ORDER STATUS</TableCell>
                <TableCell>RUNNERS</TableCell>
                <TableCell>ACTION</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map((rowData, index) => (
                <TableRow key={index}>
                  <TableCell>{rowData.orderId}</TableCell>
                  <TableCell>{rowData.orderDelivered}</TableCell>
                  <TableCell>{rowData.store}</TableCell>
                  <TableCell>{rowData.customers}</TableCell>
                  <TableCell>{rowData.address}</TableCell>
                  <TableCell>{rowData.total}</TableCell>
                  <TableCell>{rowData.orderStatus}</TableCell>
                  <TableCell>{rowData.runners}</TableCell>
                  <TableCell><FaEye/></TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
};

export default Brand_Customer;
