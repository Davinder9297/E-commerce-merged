import React, { useState, useEffect } from "react";
import { TiExportOutline } from "react-icons/ti";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { FaPlus, FaReddit, FaTrashAlt, FaUserEdit } from "react-icons/fa";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

const QuickLinks = () => {
  const [data, setData] = useState([]);
  const [formData, setFormData] = useState({});

  // Fetch data from API
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("YOUR_API_ENDPOINT");
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  // Handle form input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Submit the form data or perform any action here
    console.log("Form submitted:", formData);
  };

  return (
    <div className="container mx-auto py-8">
      <Stack direction="row" spacing={4} justifyContent="space-between" style={{ paddingBottom: '45px' }}>
        <Button href="#text-buttons" color="error" className="gap-2" style={{ fontWeight: 'bold' }}>
          <FaPlus className="text-3xl" /> Add Data
        </Button>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <Button href="#text-buttons" className="gap-2" style={{ fontWeight: 'bold', padding: 'right', background: 'orange', color: 'white' }}>
            Tag Seeting
          </Button>
        </div>
      </Stack>

      <div className="bottom">
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
            <TableHead>
              <TableRow style={{ color: 'grey' }}>
                {/* Render table headers */}
                <TableCell style={{ color: 'red' }}>ORDER ID</TableCell>
                <TableCell style={{ color: 'red' }}>ORDER DELIVERED</TableCell>
                <TableCell>STORE</TableCell>
                <TableCell>CUSTOMERS</TableCell>
                <TableCell>ADDRESS</TableCell>
                <TableCell>TOTAL(₹)</TableCell>
                <TableCell style={{ color: 'red' }}>ORDER STATUS</TableCell>
                <TableCell>RUNNERS</TableCell>
                <TableCell>ACTION</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {/* Render table rows */}
              {data.map((item, index) => (
                <TableRow key={index}>
                  <TableCell>{item.orderId}</TableCell>
                  <TableCell>{item.orderDelivered}</TableCell>
                  <TableCell>{item.store}</TableCell>
                  <TableCell>{item.customers}</TableCell>
                  <TableCell>{item.address}</TableCell>
                  <TableCell>{item.total}</TableCell>
                  <TableCell>{item.orderStatus}</TableCell>
                  <TableCell>{item.runners}</TableCell>
                  <TableCell>
                    <Stack direction="row" spacing={2} style={{ cursor: 'pointer' }}>
                      {/* Edit Icon */}
                      <FaUserEdit />

                      {/* Delete Icon */}
                      <FaTrashAlt />
                    </Stack>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>

      {/* Render form */}
      <form onSubmit={handleSubmit}>
        {/* Render input boxes for each field */}
        {data.map((item, index) => (
          <div key={index}>
            <input
              type="text"
              name={`orderId_${index}`}
              value={formData[`orderId_${index}`] || ""}
              placeholder="Order ID"
              onChange={handleInputChange}
            />
            {/* Render input boxes for other fields similarly */}
          </div>
        ))}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default QuickLinks;
