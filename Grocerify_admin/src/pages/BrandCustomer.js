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

import { Pagination } from "@mui/material";
import { FiDownload } from "react-icons/fi";
import Loader from "../components/Loader";
import axios from "axios";
import { BASE_URl } from "../Apis/api";

import * as XLSX from "xlsx";
import BrandCustomerDetails from "./BrandCustomerDetails";
import { useNavigate } from "react-router-dom";

const Brand_Customer = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const [modalOpen, setModalOpen] = useState(false);
  const [page, setPage] = useState(1);

  const rowsPerPage = 10;

  const navigate= useNavigate();
  const handleToggleModal= () => {

    setModalOpen(!modalOpen);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  useEffect(() => {
    setLoading(true);
    // Fetch data from API
    const fetchData = async () => {
      try {
        const response = await axios.get(`${BASE_URl}/users`);
        console.log(response.data.data);
        setData(response.data.data);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []); // Empty dependency array means this effect runs once after the initial render


  const exportToExcel = () => {
    const worksheet = XLSX.utils.aoa_to_sheet([
      ["_id", "firstName", "lastName", "mobile", "orders"],
      ...data.map((data) => [
        data._id,
        data?.firstName,
        data?.lastName,
        data.mobile,
        data.address.length,
      ]),
    ]);

    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Customers");

    XLSX.writeFile(workbook, "brand_customers.xlsx");
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
  const openModalHandler = (id) => {
    // Navigate to MerchantOnboarding component with the ID
    setModalOpen(true)
    navigate(`/BrandCustomerDetails?id=${id}`);
  };
  // console.log(data);
  return loading ? (
    <Loader />
  ) : (
    <div className="container mx-auto py-8">
      <Stack
        direction="row"
        spacing={4}
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "1rem",
        }}
      >
        <button
          onClick={exportToExcel}
          className="border flex gap-5 items-center px-5 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white p-1 w-[270px] font-bold rounded"
        >
          <FiDownload /> Export/Download Data
        </button>
        <input
          type="file"
          onChange={handleFileChange}
          accept=".xls,.xlsx"
          className="border-orange-500 w-[200px] text-dark border font-bold py-1 px-4 rounded-md cursor-pointer text-orange-500 hover:bg-orange-500 hover:text-white "
        />
      </Stack>

      {/* Table */}
      <div className="bottom">
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
            <TableHead>
              <TableRow
                style={{ color: "grey" }}
                sx={{
                  " & th": {
                    borderLeft: 0,
                    borderRight: 0,
                    textAlign: "center",
                  },
                }}
              >
                <TableCell style={{ color: "red" }}>INDEX</TableCell>
                <TableCell>CUSTOMER ID</TableCell>
                <TableCell>FULL NAME</TableCell>
                <TableCell>PHONE NO.</TableCell>
                <TableCell>TOTAL ORDERS</TableCell>
                {/* <TableCell>RUNNERS</TableCell> */}
                {/* <TableCell style={{ color: "red" }}>STATUS</TableCell> */}
                <TableCell>ACTION</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {/* Render table rows dynamically */}
              {(rowsPerPage > 0
                ? data?.slice((page - 1) * rowsPerPage, page * rowsPerPage)
                : data
              )?.map((rowData, index) => (
                <TableRow
                  key={index} // Assuming your data array has unique keys
                  sx={{
                    " & td": {
                      borderLeft: 0,
                      borderRight: 0,
                      textAlign: "center",
                    },
                  }}
                >
                  <TableCell>{index + 1}</TableCell>
                  <TableCell>{rowData?._id}</TableCell>
                  <TableCell>
                    {rowData?.firstName + " " + rowData?.lastName}
                  </TableCell>

                  <TableCell>{rowData?.mobile}</TableCell>
                  <TableCell>
                    {rowData.address.length || rowData.orders || 0}
                  </TableCell>

                  {/* <TableCell
                    sx={{ cursor: "pointer" }}
                    onClick={() => handleToggleModal(index)}
                  >
                    {status}
                  </TableCell> */}

                  <TableCell>
                    <FaEye style={{ marginLeft: "60px",cursor:"pointer" }} onClick={()=>openModalHandler(rowData?._id)} />
                  </TableCell>
                  {/* Modal for changing status */}
                  {modalOpen && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto">
                      <div
                        className="fixed inset-0  opacity-50"
                        onClick={handleToggleModal}
                      ></div>
                      <div
                        className="absolute bg-white border border-gray-300 rounded-lg shadow-lg outline-none focus:outline-none"
                        style={{
                          top: "50%",
                          left: "50%",
                          transform: "translate(-50%, -50%)",
                        }}
                      >
                          <BrandCustomerDetails data={rowData}/>
                      </div>
                    </div>
                  )}
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

export default Brand_Customer;
