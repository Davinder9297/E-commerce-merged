import React, { useState, useEffect } from "react";
import {
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Paper,
  Button,
} from "@mui/material";
import { FaBan, FaCheck } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { TiExportOutline } from "react-icons/ti";
import { getAllShops } from "../Apis/api";
import { GrEdit } from "react-icons/gr";
// import axios from "axios";
import { ApprovedShop } from "../Apis/api";
import toast, { Toaster } from "react-hot-toast";
import { Modal, Box, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import EditShop from "./EditShop";

const ShopList = () => {
  // State variables
  const [merchants, setMerchants] = useState([]);
  // const [modalOpen, setModelOpen] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [selectedSeller, setSelectedSeller] = useState({
    shopID: "",
    approved: false,
  });

  const [filteredShops, setFilteredShops] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedZone, setSelectedZone] = useState("--select zone--");
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(5);
  const navigate = useNavigate();
  // Fetch merchants data
  useEffect(() => {
    const fetchShops = async () => {
      try {
        const shops = await getAllShops();
        console.log(shops.data.data);
        setMerchants(shops.data.data);
        setFilteredShops(shops.data.data); // Initialize filteredShops with all merchants
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchShops();
  }, []);

  // Handle search query change

  // Handle zone filter change
  const handleZoneChange = (e) => {
    const zone = e.target.value;
    setSelectedZone(zone);
    filterShops(searchQuery, zone); // Filter based on search query and selected zone
  };
  // Handle search query change
  const handleSearchChange = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);
    filterShops(query, selectedZone); // Filter based on search query and selected zone
  };

  // Filter merchants based on search query and zone
  const filterShops = (query, zone) => {
    const filtered = merchants.filter((merchant) => {
      const nameMatch = query
        ? merchant.shopName.toLowerCase().includes(query)
        : true;
      const emailMatch = query
        ? merchant.OwnerEmail.toLowerCase().includes(query)
        : true;
      const numberMatch = query
        ? merchant.OwnerNumber.toString().includes(query)
        : true;
      const zoneMatch =
        zone === "--select zone--" || merchant.deliveryArea === zone;
      return nameMatch && emailMatch && numberMatch && zoneMatch;
    });
    setFilteredShops(filtered);
    setCurrentPage(1); // Reset pagination to the first page when filtering
  };

  // Handle pagination
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // Get current items
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredShops.slice(
    indexOfFirstItem,
    indexOfLastItem
  );

  const handleOpenModal = (id, isverified) => {
    setSelectedSeller({ id, isverified });
    setOpenModal(true);
  };

  console.log(selectedSeller);
  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const handleApprove = async () => {
    // Logic to handle approval for selectedOrderId
    console.log("Approved:", selectedSeller);
    setOpenModal(false);
    const res = await ApprovedShop(selectedSeller.id);
    console.log(res);
  };

  const handleReject = () => {
    // Logic to handle rejection for selectedOrderId
    console.log("Rejected:", selectedSeller);
    setOpenModal(false);
  };

  const editHandler = (id) => {
    // Navigate to MerchantOnboarding component with the ID
    navigate(`/EditShop?id=${id}`);
  };
  return (
    <div className="merchant">
      {/* Inputs Field */}
      <Toaster />
      <div className="inputs">
        {/* Inputs on left side */}
        <div className="inputs-left">
          <select name="table-view" id="table-view" className="border">
            <option>Range</option>
            <option>20</option>
            <option>30</option>
          </select>
          <Button
            href="#text-buttons"
            color="error"
            className="gap-2"
            style={{ fontWeight: "bold" }}
          >
            <TiExportOutline className="text-3xl" /> Export Data
          </Button>
        </div>

        {/* Inputs on right side */}
        <div className="inputs-right">
          <select
            name="select-zone border border-gray-500"
            id="select-zone"
            value={selectedZone}
            onChange={handleZoneChange}
            className="border"
          >
            <option>--select zone--</option>
            {[
              ...new Set(merchants.map((merchant) => merchant.deliveryArea)),
            ].map((area, index) => (
              <option key={index} value={area}>
                {area}
              </option>
            ))}
            {/* Add more zone options as needed */}
          </select>
          <input
            type="text"
            name="personal-info"
            placeholder="Name or Email or Number"
            className="search-box"
            value={searchQuery}
            onChange={handleSearchChange}
          />
          <button
            className="border mr-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white p-1 w-[70px] font-bold rounded"
            onClick={() => console.log("Go clicked")}
          >
            Go
          </button>
          <button
            className="border border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white p-1 w-[70px] font-bold rounded"
            onClick={() => console.log("Reset clicked")}
          >
            Reset
          </button>
        </div>
      </div>

      <TableContainer component={Paper} style={{ marginTop: "20px" }}>
        <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
          <TableHead>
            <TableRow style={{ color: "grey" }}>
              <TableCell style={{ color: "red" }}>STORE</TableCell>
              <TableCell style={{ color: "red" }}>OPERATING ZONE</TableCell>
              <TableCell>EMAIL</TableCell>
              <TableCell>NUMBER</TableCell>
              <TableCell>LOCATION</TableCell>
              <TableCell>CREATED AT</TableCell>
              <TableCell>STATUS</TableCell>
              <TableCell>ACTION</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {currentItems?.map((data, index) => (
              <TableRow key={index}>
                <TableCell>{data.shopName}</TableCell>
                <TableCell>{data.deliveryArea}</TableCell>
                <TableCell>{data.OwnerEmail}</TableCell>
                <TableCell>{data.OwnerNumber}</TableCell>
                <TableCell>{data.ShopAddress}</TableCell>
                <TableCell>{data?.createdAt}</TableCell>
                <TableCell>{data?.approved ? "Active" : "Inactive"}</TableCell>
                <TableCell
                  style={{
                    display: "flex",
                    gap: "10px",
                    alignItems: "center",
                    padding: "10px",
                    justifyContent: "center",
                    height: "60px",
                  }}
                >
                  {/* {(data.Verified).toString()} */}

                  <GrEdit
                    className="cursor-pointer text-lg"
                    onClick={(e) => editHandler(data._id)}
                  />

                  <Button
                    onClick={() => handleOpenModal(data._id, data.approved)}
                  >
                    {data.approved ? (
                      <FaCheck className="cursor-pointer text-lg " />
                    ) : (
                      <FaBan className="cursor-pointer text-lg" />
                    )}
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Modal open={openModal} onClose={handleCloseModal}>
        <Box className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 bg-white shadow-lg rounded-lg p-6 flex flex-col justify-center align-middle">
          <Box className="flex justify-end">
            <IconButton
              onClick={handleCloseModal}
              className="absolute top-0 right-0"
            >
              <CloseIcon />
            </IconButton>
          </Box>
          {selectedSeller.isverified === false ? (
            <>
              <h2 id="modal-title" className="text-xl font-semibold mb-4">
                Approve or Reject?
              </h2>
              <div className="flex justify-between">
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleApprove}
                  className="mr-2"
                >
                  Approve
                </Button>
                <Button
                  variant="contained"
                  color="error"
                  onClick={handleReject}
                >
                  Reject
                </Button>
              </div>
            </>
          ) : (
            <>
              {" "}
              <Button variant="contained" color="success" className="mr-2">
                Verified
              </Button>{" "}
            </>
          )}
        </Box>
      </Modal>
      {/* Pagination */}
      <div className="pagination">{/* Implement pagination buttons */}</div>
    </div>
  );
};

export default ShopList;
