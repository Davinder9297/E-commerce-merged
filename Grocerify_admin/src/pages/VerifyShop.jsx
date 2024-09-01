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
// import { Link } from "react-router-dom";
import { TiExportOutline } from "react-icons/ti";
import { getAllShops } from "../Apis/api";
// import { GrEdit } from "react-icons/gr";
// import axios from "axios";
import { ApprovedShop } from "../Apis/api";
import toast, { Toaster } from "react-hot-toast";
import { Modal, Box, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
// import MerchantOnboarding from "./MerchantOnboarding";

const MerchantList = () => {
  // State variables
  const [merchants, setMerchants] = useState([]);
  // const [modalOpen, setModelOpen] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [selectedSeller, setSelectedSeller] = useState({
    shopID: "",
    approved: false,
  });

  const [filteredMerchants, setFilteredMerchants] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedZone, setSelectedZone] = useState("--select zone--");
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(5);
  const navigate = useNavigate();
  // Fetch merchants data
  useEffect(() => {
    const fetchMerchants = async () => {
      try {
        const shops = await getAllShops();
        console.log(shops.data.data);
        setMerchants(shops.data.data);
        setFilteredMerchants(shops.data.data); // Initialize filteredMerchants with all merchants
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchMerchants();
  }, []);

  // Handle search query change

  // Handle zone filter change
  const handleZoneChange = (e) => {
    const zone = e.target.value;
    setSelectedZone(zone);
    filterMerchants(searchQuery, zone); // Filter based on search query and selected zone
  };
  // Handle search query change
  const handleSearchChange = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);
    filterMerchants(query, selectedZone); // Filter based on search query and selected zone
  };

  // Filter merchants based on search query and zone
  const filterMerchants = (query, zone) => {
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
    setFilteredMerchants(filtered);
    setCurrentPage(1); // Reset pagination to the first page when filtering
  };

  // Handle pagination
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // Get current items
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredMerchants.slice(
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

  return (
    <div className="merchant">
      {/* Inputs Field */}
      <Toaster />
      <div className="inputs">
        {/* Inputs on left side */}
       
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
              {/* <TableCell>ACTION</TableCell> */}
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

export default MerchantList;
