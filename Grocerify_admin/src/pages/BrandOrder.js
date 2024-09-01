import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
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
// import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
// import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
// import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { Pagination } from "@mui/material";
// import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import axios from "axios";
import { BASE_URl } from "../Apis/api";
import Datepicker from "react-tailwindcss-datepicker";
import * as XLSX from "xlsx";
import { FiDownload } from "react-icons/fi";

const Brand_Order = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [searchQuery,setSearchQuery]=useState("")
  const [loading,setLoading]=useState(false);
  const rowsPerPage = 10;

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  // date picker
  const [value, setValue] = useState({
    startDate: new Date(),
    endDate: new Date().setMonth(11),
  });

  const handleValueChange = (newValue) => {
    console.log("newValue:", newValue);
    setValue(newValue);
  };

  useEffect(() => {
    // Fetch data from API
    setLoading(true);
    const fetchData = async () => {
      try {
        const response = await axios.get(`${BASE_URl}/getallorders`);
        console.log(response.data.orders);

        setData(response.data.orders);

      } catch (error) {
        console.error("Error fetching data:", error);
      }
      finally{
        setLoading(false);
      }
    };

    fetchData();
  }, []); // Empty dependency array means this effect runs once after the initial render

  const exportToExcel = () => {
    const worksheet = XLSX.utils.aoa_to_sheet([
      [
        "Order ID",
        "Order On",
        "Shop Name",
        "First Name",
        "Last Name",
        "Mobile No",
        "Product ID",
        "Total Price",
        "Runner"
      ],
      ...data.map((data) => [
        data.order_id,
        data.ordered_on,
        data.shop.shopName,
        data.ordered_by.firstName,
        data.ordered_by.lastName,
        data.ordered_by.mobile,
        data.products?._id,
        data.order_price,
        data?.deliveryBoy
      ]),
    ]);

    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Orders");

    XLSX.writeFile(workbook, "order_details.xlsx");
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = (e) => {
      const workbook = XLSX.read(e.target.result, { type: "binary" });
      const worksheet = workbook.Sheets[workbook.SheetNames[0]];
      const excelData = XLSX.utils.sheet_to_json(worksheet);

      // Assuming the first row contains headers
      const tableHeaders = excelData[0];
      const tableData = excelData.slice(1);

      setData(tableData);
    };

    reader.readAsBinaryString(file);
  };
  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredProducts = data.filter(
    (order) =>
      order?.ordered_by?.firstName
        ?.toLowerCase()
        ?.includes(searchQuery.toLowerCase()) ||
      order?.ordered_by?.lastName
        ?.toLowerCase()
        ?.includes(searchQuery.toLowerCase())
  );

  const totalPages = Math.ceil(filteredProducts.length / rowsPerPage);



  return (
    // {loading}
    <div className="container mx-auto py-8">
      {/* <Stack direction="row" spacing={4}> */}
      <div
      className="flex justify-between items-center mb-5"
      >
        <button
          onClick={exportToExcel}
          className="border flex gap-5 items-center px-5 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white p-1 w-[270px] font-bold rounded"
        >
          <FiDownload /> Export/Download Data
        </button>
        <input
          type="text"
          onChange={handleSearch}
          placeholder="search..."
          className="shadow-md shadow-orange-500 focus:outline-none text-gray-600 w-[300px] border border-orange-500 py-1 px-4 rounded-md"
        />

        <input
          type="file"
          onChange={handleFileChange}
          accept=".xls,.xlsx"
          className="border-orange-500 w-[200px] text-dark border font-bold py-1 px-4 rounded-md cursor-pointer text-orange-500 hover:bg-orange-500 hover:text-white "
        />
      </div>
      {/* </Stack> */}
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
        <Datepicker value={value} onChange={handleValueChange} />
        {/* Go and Reset buttons */}
        <Button variant="outlined" color="error">
          Go
        </Button>
        <Button variant="outlined" color="error">
          Reset
        </Button>
      </div>
      {/* Table */}
      <div className="bottom">
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
            <TableHead>
              <TableRow style={{ color: "grey" }}>
                <TableCell style={{ color: "red" }}>ORDER ID</TableCell>
                <TableCell style={{ color: "red" }}>ORDER RECEIVED</TableCell>
                <TableCell>STORE</TableCell>
                <TableCell>CUSTOMERS</TableCell>
                <TableCell>ADDRESS</TableCell>
                <TableCell>TOTAL(₹)</TableCell>
                <TableCell style={{ color: "red" }}>ORDER STATUS</TableCell>
                <TableCell>RUNNERS</TableCell>
                <TableCell>ACTION</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {/* Render table rows dynamically */}
              {(rowsPerPage > 0
                ? data.slice((page - 1) * rowsPerPage, page * rowsPerPage)
                : data
              ).map((rowData, index) => (
                <TableRow
                  key={index} // Assuming your data array has unique keys
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  {console.log(rowData.products?._id)}
                  <TableCell>{rowData?.order_id}</TableCell>
                  <TableCell>{rowData.ordered_on}</TableCell>
                  <TableCell>{rowData?.shop?.shopName}</TableCell>
                  <TableCell>{rowData?.shipping_address?.full_name}</TableCell>
                  <TableCell>
                    {rowData?.shipping_address?.address_line_1}
                  </TableCell>
                  <TableCell>{rowData.order_price} COD</TableCell>
                  <TableCell>{rowData.status}</TableCell>
                  <TableCell>{rowData?.runners}</TableCell>
                  <TableCell className="cursor-pointer">
                    <Link to={"/viewbrandorder"}>
                      <FaEye />
                    </Link>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

        <Pagination
          sx={{
            marginTop: "40px",
            display: "flex",
            justifyContent: "center",
          }}
          count={Math.ceil(data.length / rowsPerPage)}
          page={page}
          onChange={handleChangePage}
          color="primary"
        />
      </div>
    </div>
  );
};

export default Brand_Order;
