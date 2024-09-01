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
import { getAllDeliveryBoy } from "../Apis/api";

const RunnerMangements = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Fetch data from API
    const fetchData = async () => {
      try {
        const response = await getAllDeliveryBoy();;
        // console.log(response)

        setData(response.data.deliveryboys);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []); // Empty dependency array means this effect runs once after the initial render

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
        {/* Search input */}
        <div className="flex justify-end pr-4">
          <div className="flex items-center border rounded px-2 py-1 mr-4">
            <input
              type="text"
              placeholder="Search..."
              className="border-none text-gray-400 outline-none focus:ring-0 bg-transparent"
            />
          </div>
        </div>
        {/* Select store dropdown */}
        <div className="relative w-64">
          <select className="border rounded-md w-full py-2 pl-3 pr-10 text-gray-600 bg-white focus:outline-none focus:ring-indigo-500 focus:border-indigo-500">
            <option value="all">- Select Store -</option>
            <option value="all">-ALL-</option>
            <option value="moodychef">The Moody Chef</option>
          </select>
        </div>
        {/* Select order status dropdown */}
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
        {/* Select operating zone dropdown */}
        <div className="w-64">
          <select className="border rounded-md bg-white w-full py-2 pl-3 pr-10 text-gray-600 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500">
            <option value="alloperatingzone">-ALL OPERATING ZONES-</option>
            <option value="sector37">Sector 37</option>
            <option value="chandigarh">Chandigarh</option>
            <option value="zone1sector15">Zone 1 (Sector 1-5)</option>
          </select>
        </div>
        {/* Date pickers */}
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
        {/* Go and Reset buttons */}
        <Button variant="outlined" color="error">Go</Button>
        <Button variant="outlined" color="error">Reset</Button>
      </div>
      {/* Table */}
      <div className="bottom">
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
            <TableHead>
              <TableRow style={{ color: 'grey' }}>
                <TableCell style={{ color: 'red' }}>Name</TableCell>
                <TableCell style={{ color: 'red' }}>Email</TableCell>
                <TableCell>Mobile</TableCell>
                <TableCell>Earnings</TableCell>
                <TableCell>Status</TableCell>

                {/* <TableCell>ACTION</TableCell> */}
              </TableRow>
            </TableHead>
            <TableBody>
              {/* Render table rows dynamically */}
              {data.map((val, index) => (
                <TableRow
                  key={index} // Assuming your data array has unique keys

                >
                  <TableCell>{val.firstName + " " + val.lastName}</TableCell>
                  <TableCell>{val.email}</TableCell>
                  <TableCell>{val.mobile}</TableCell>
                  <TableCell>{"₹" + val.earnings}</TableCell>

                  <TableCell>{(val.shift_status).toString()}</TableCell>

                  {/* <TableCell><FaEye /></TableCell> */}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
};

export default RunnerMangements;
