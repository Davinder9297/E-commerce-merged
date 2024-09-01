import React, { useState, useEffect } from 'react';
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import CircularProgress from '@mui/material/CircularProgress';
import { TiExportOutline } from 'react-icons/ti';
import { fetchAllSellerData,getAllShops ,getToken} from '../Apis/api';
import { GrEdit } from "react-icons/gr";
import { FaTrashCan } from "react-icons/fa6";
import toast,{Toaster} from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
const VerifyMerchant = () => {
  const [sellerData, setSellerData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [shopName] = useState("")
  const token=getToken();

  useEffect(() => {
    fetchSeller();
    // shopData();
  }, []);


  
  const fetchSeller = async () => {
    const res = await fetchAllSellerData()
    console.log(res)
    if (res.success) {
      setLoading(false)
    }
    else {
      return <h3>Some error Occured</h3>
    }
    setSellerData(res.sellers)
  }


  const downloadExcel = () => {

    let filename = "newfile";
    const table = document.getElementById('table'); // Assuming your table has an id "table"
    const rows = table.querySelectorAll('tr');
    const csv = [];
    for (let i = 0; i < rows.length; i++) {
      const row = [], cols = rows[i].querySelectorAll('td, th');
      for (let j = 0; j < cols.length; j++) {
        row.push(cols[j].innerText);
      }
      csv.push(row.join(','));
    }
    const csvContent = csv.join('\n');
    const blob = new Blob([csvContent], { type: 'text/csv' });
    const link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    link.download = `${filename}.csv`;
    link.click();

  };

const navigate=useNavigate();
  const handleEdit =(id)=>{
    navigate(`/EditMerchant?id=${id}`)
  }


  return (
    <div className="container mx-auto py-8">
      <Toaster/>
      {loading ? (
        <div className="flex items-center justify-center">
          <CircularProgress />
          <span className="ml-2">Loading...</span>
        </div>
      ) : (
        <>
        <Toaster/>
          <div direction="row" spacing={4} style={{ padding: '5px' }}>
            <Button onClick={downloadExcel} color="error" className="gap-2" style={{ fontWeight: 'bold' }}>
              <TiExportOutline className="text-3xl" /> Export Data
            </Button>
          </div>

          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650}} size="small" aria-label="a dense table" id='table' >
              <TableHead>
                <TableRow className='bg-orange-400 rounded-md'>
                  <TableCell sx={{color:"white",fontWeight:"bold"}}>Name</TableCell>
                  <TableCell sx={{color:"white",fontWeight:"bold"}}>Email</TableCell>
                  <TableCell sx={{color:"white",fontWeight:"bold"}}>Mobile</TableCell>
                  <TableCell sx={{color:"white",fontWeight:"bold"}}>DOB</TableCell>
                  <TableCell sx={{color:"white",fontWeight:"bold"}}>Address</TableCell>
                  <TableCell sx={{color:"white",fontWeight:"bold"}}>Aadhar</TableCell>
                  <TableCell sx={{color:"white",fontWeight:"bold"}}>Pan Card</TableCell>
                  <TableCell sx={{color:"white",fontWeight:"bold"}}>Action</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {sellerData.filter((val) => { return val.Verified }).map((row, key) => (
                  <TableRow key={key} className='shadow-md'>
                    <TableCell>{row.OwnerName}</TableCell>
                    <TableCell>{row.OwnerEmail}</TableCell>
                    <TableCell>{row.OwnerMobile}</TableCell>
                    <TableCell>{row.OwnerDOB}</TableCell>
                    <TableCell>{row.OwnerAddress}</TableCell>
                    <TableCell>{row.Aadhar}</TableCell>
                    <TableCell>{row.PanCard}</TableCell>
                    <TableCell sx={{display:'flex',gap:"0.5rem",padding:"1rem"}}>
                      <GrEdit className='text-xl cursor-pointer' onClick={()=>handleEdit(row._id)}/>
                      <FaTrashCan className='text-xl cursor-pointer'/>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </>
      )}
    </div>
  );
};

export default VerifyMerchant;