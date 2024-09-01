// import React,{useState} from "react";
import { useState } from "react";
import { formatDate } from "../helpers/helper";
import { Pagination } from "@mui/material";

const DueTableSeller = ({ data }) => {
  const [page, setPage] = useState(1);
const rowsPerPage = 10;

const handleChangePage = (event, newPage) => {
  setPage(newPage);
};
  if (!data || data.length === 0) {
    return <p>No data available</p>;
  }
// paging
// const [page, setPage] = useState(1);
// const rowsPerPage = 10;

// const handleChangePage = (event, newPage) => {
//   setPage(newPage);
// };
  return (
    <div className="flex flex-col space-y-4">
      <div className="flex flex-row justify-between bg-[#333333] text-[#FFFFFF] font-Montserrat pt-1 pb-1 pl-4">
        <p className="w-2/6">Order ID</p>
        <p className="w-1/6">Ordered On</p>
        <p className="w-1/6">Price</p>
        <p className="w-1/6">Status</p>
      </div>

      {(rowsPerPage > 0
                  ? data.slice(
                      (page - 1) * rowsPerPage,
                      page * rowsPerPage
                    )
                  : data
                ).map((item) => (
        <div
          key={item.id}  // Replace 'id' with the actual property that uniquely identifies each item
          className="flex flex-row items-center justify-between text-[#333333] text-[14px] h-[60px] shadow-md pt-4 pb-2 pl-4"
        >
          <div className="w-2/6 font-Gorditas flex flex-row">

            {item?.order_id}
          </div>
          <div className="w-1/6 font-Gorditas flex items-center">{formatDate(item?.ordered_on)}</div>
          <div className="w-1/6 font-Gorditas">Rs.{item.order_price}</div>
          <div className={`w-1/6 font-Gorditas ${item.status === 'cancelled' ? 'text-red-500' : 'text-green-500'}`}>
            {item.status}
          </div>
        </div>
      ))}
       <Pagination
            sx={{
              marginTop: "20px",
              display: "flex",
              justifyContent: "center",
            }}
            count={Math.ceil(data.length / rowsPerPage)}
            page={page}
            onChange={handleChangePage}
            color="primary"
          />
    </div>
  );
};

export default DueTableSeller;
