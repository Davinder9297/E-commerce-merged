import React, { useState } from 'react';
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import CircularProgress from '@mui/material/CircularProgress';
import { GrEdit } from "react-icons/gr";
import { FaPlus, FaTrashCan } from "react-icons/fa6";
import toast, { Toaster } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import AddZonePage from './AddZonePage';

const OperatingZone = () => {
  const [zoneData, setZoneData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const navigate = useNavigate();

  // const handleEdit = (id) => {
  //   navigate(`/EditMerchant?id=${id}`);
  // };

  const handleAddZoneClick = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleAddZone = (newZone) => {
    setZoneData([...zoneData, newZone]);
    setShowModal(false); // Close the modal after adding zone
  };

  return (
    <div className="container mx-auto py-8">
      <Toaster />
      <>
        <div direction="row" spacing={4} style={{ padding: '5px' }}>
          <Button onClick={handleAddZoneClick} color="error" className="gap-2" style={{ fontWeight: 'bold' }}>
            <FaPlus className="text-3xl" /> Add Zone
          </Button>
        </div>

        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table" id='table' >
            <TableHead>
              <TableRow className='bg-orange-400 rounded-md'>
                <TableCell sx={{ color: "white", fontWeight: "bold" }}>Name</TableCell>
                <TableCell sx={{ color: "white", fontWeight: "bold" }}>City</TableCell>
                <TableCell sx={{ color: "white", fontWeight: "bold" }}>Status</TableCell>
                <TableCell sx={{ color: "white", fontWeight: "bold" }}>Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {zoneData.map((row, key) => (
                <TableRow key={key} className='shadow-md'>
                  <TableCell>{row.OwnerName}</TableCell>
                  <TableCell>{row.OwnerEmail}</TableCell>
                  <TableCell>{row.OwnerMobile}</TableCell>
                  <TableCell sx={{ display: 'flex', gap: "0.5rem", padding: "1rem" }}>
                    <GrEdit className='text-xl cursor-pointer' />
                    <FaTrashCan className='text-xl cursor-pointer' />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        {showModal && <AddZonePage onClose={handleCloseModal} onAddZone={handleAddZone} />}
      </>
    </div>
  );
};

export default OperatingZone;
