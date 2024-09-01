import React, { useState, useEffect } from "react";
// import axios from "axios";
import {
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Paper,
  Pagination,
} from "@mui/material";
import { getAllproducts } from "../Apis/api";
import * as XLSX from "xlsx";

import { FiDownload } from "react-icons/fi";
import Loader from "../components/Loader";

const ShowProduct = () => {
  const [page, setPage] = useState(1);
  const rowsPerPage = 10;

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const [loading, setLoading] = useState(false);
  const [productApi, setProductApi] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const fetchProducts = async () => {
    setLoading(true);
    try {
      const res = await getAllproducts();
      setProductApi(res.data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching products:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
    // filteredProducts()
  }, []);

  const exportToExcel = () => {
    const worksheet = XLSX.utils.aoa_to_sheet([
      [
        "product_primary_image_url",
        "products_title",
        "parent_category_name",
        "sub_category_name",
        "variants1_weight",
        "variants1_unit_type",
      ],
      ...productApi.map((data) => [
        data.product_primary_image_url,
        data.products_title,
        data.parent_category_name,
        data.sub_category_name,
        data.variants1_weight,
        data.variants1_unit_type,
      ]),
    ]);

    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Products");

    XLSX.writeFile(workbook, "products_data.xlsx");
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

      setProductApi(tableData);
    };

    reader.readAsBinaryString(file);
  };
  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredProducts = productApi.filter(
    (product) =>
      product.products_title
        .toLowerCase()
        .includes(searchQuery.toLowerCase()) ||
      product.parent_category_name
        .toLowerCase()
        .includes(searchQuery.toLowerCase()) ||
      product.sub_category_name
        .toLowerCase()
        .includes(searchQuery.toLowerCase())
  );

  const totalPages = Math.ceil(filteredProducts.length / rowsPerPage);

  // console.log(fileData);
  return loading ? (
    <Loader />
  ) : (
    <div className="grid mx-3">
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
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

      {
        <div className="mt-7">
          <TableContainer component={Paper} sx={{ width: "80vw" }}>
            <Table
              sx={{ minWidth: 650, width: "80vw" }}
              size="small"
              aria-label="simple table"
            >
              <TableHead>
                <TableRow style={{ color: "grey" }}
                sx={{
                  " & th": {
                    borderLeft: 0,
                    borderRight: 0,
                    textAlign: "center",
                  },
                }}>
                  <TableCell style={{ color: "red" }}>Primary Image</TableCell>
                  <TableCell style={{ color: "red" }}>Title</TableCell>
                  <TableCell style={{ color: "red" }}>Category</TableCell>
                  <TableCell style={{ color: "red" }}>Sub-Category</TableCell>
                  <TableCell style={{ color: "red" }}>
                    Variants Weight
                  </TableCell>
                  <TableCell style={{ color: "red" }}>
                    Variants Unit Type
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {(rowsPerPage > 0
                  ? filteredProducts.slice(
                      (page - 1) * rowsPerPage,
                      page * rowsPerPage
                    )
                  : filteredProducts
                ).map((data, index) => (
                  <TableRow style={{ color: "grey" }}
                  sx={{
                    " & td": {
                      borderLeft: 0,
                      borderRight: 0,
                      textAlign: "center",
                    },
                  }} key={index}>
                    <TableCell sx={{ width: "100px" }}>
                      <img
                        src={data.product_primary_image_url}
                        className="w-[100px] h-[100px] object-contain"
                        alt=""
                      />
                    </TableCell>
                    <TableCell sx={{ width: "300px", textAlign: "justify" }}>
                      {data.products_title}
                    </TableCell>

                    <TableCell sx={{ width: "100px" }}>
                      {data.parent_category_name}
                    </TableCell>
                    <TableCell sx={{ width: "100px" }}>
                      {data.sub_category_name}
                    </TableCell>
                    <TableCell sx={{ width: "100px" }}>
                      {data.variants1_weight}:
                    </TableCell>
                    <TableCell sx={{ width: "100px" }}>
                      {data.variants1_unit_type}:
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          <Pagination
            sx={{
              marginTop: "20px",
              display: "flex",
              justifyContent: "center",
            }}
            count={totalPages}
            page={page}
            onChange={handleChangePage}
            color="primary"
          />
        </div>
      }
    </div>
  );
};

export default ShowProduct;
