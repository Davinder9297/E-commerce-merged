import axios from "axios";
import { CSVLink } from "react-csv";
import React, { useState, useEffect } from "react";
import {
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Paper,
} from "@mui/material";


const CompletedPayoutOrderList = () => {
  const [orderList, setOrderList] = useState([]);
  const [excelData, setExcelData] = useState([]);
  const [selected, setSelected] = useState([]);

  useEffect(() => {
    fetchDuePayouts();
  }, []);

  const fetchDuePayouts = () => {
    axios.get('http://localhost:4000/duePayout')
      .then(response => {
        setOrderList(response.data);
      })
      .catch(error => {
        console.error('Error fetching due payouts:', error);
      });
  };

  const handleDownload = () => {
    const formattedData = orderList.map(data => ({
      "Order ID": data.orderId,
      "Order Received": data.orderReceived,
      "Payment Mode/Order Type": data.paymentMode,
      "Payment Received": data.paymentReceived,
      "Paid by Customers (₹)": data.paidByCustomer,
      "Items Total (₹)": data.itemsTotal,
      "Brand Commission (₹)": data.brandCommission,
      "Net Payable to Merchants (₹)": data.netPayableToMerchants,
      "Recalculate Commission": data.recalculateCommission
    }));
    setExcelData(formattedData);
  };


  

  return (
    <div className="container mx-auto py-8">
      <div className="flex gap-4 items-center mb-4">
        <CSVLink
          data={excelData}
          filename={"due_payout.csv"}
          className="border border-orange-500 text-orange-500 text-center hover:bg-orange-500 hover:text-white p-1 w-[200px] font-bold rounded"
          onClick={handleDownload}
        >
          Download Sheet
        </CSVLink>
    </div>
      <div className="mt-[40px]">
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
            <TableHead>
              <TableRow>
                <TableCell style={{ color: "red" }}>ORDER ID</TableCell>
                <TableCell style={{ color: "red" }}>ORDER RECEIVED</TableCell>
                <TableCell>PAYMENT MODE/ORDER TYPE</TableCell>
                <TableCell>PAYMENT RECEIVED</TableCell>
                <TableCell>PAID BY CUSTOMERS (₹)</TableCell>
                <TableCell>ITEMS TOTAL(₹)</TableCell>
                <TableCell>BRAND COMMISSION (₹)</TableCell>
                <TableCell>NET PAYABLE TO MERCHANTS (₹)</TableCell>
                <TableCell>RECALCULATE COMMISSION</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {orderList.map((data) => (
                <TableRow
                  key={data.orderId}
                  // sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell style={{color:'red'}}>{data.orderId}</TableCell>
                  <TableCell>{data.orderReceived}</TableCell>
                  <TableCell>{data.paymentMode}</TableCell>
                  <TableCell>{data.paymentReceived}</TableCell>
                  <TableCell>{data.paidByCustomer}</TableCell>
                  <TableCell>{data.itemsTotal}</TableCell>
                  <TableCell>{data.brandCommission}</TableCell>
                  <TableCell>{data.netPayableToMerchants}</TableCell>
                  <TableCell>{data.recalculateCommission}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <div>Total Selected: {selected.length}</div>
      </div>
    </div>
  );
};

export default CompletedPayoutOrderList;
