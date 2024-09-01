import React from "react";
import { formatDate } from "../helper/Validations";
import { DeclineOrder, acceptOrder } from "../helper/helper";
import toast, { Toaster } from "react-hot-toast";
import { Link } from "react-router-dom";

const DueTableSeller = ({ data,getOrdersByShop }) => {
  if (!data || data.length === 0) {
    return <p className="text-center w-full">No data available</p>;
  }
  const acceptOrders = async (id) => {
    // console.log('accepted')
    const data = await acceptOrder(id)
    // console.log(data)
    if (data.status === 201) {
      toast.success("Order Accepted")
      getOrdersByShop()

      // window.location.reload()
    }
    else {
      toast.error("An Unknown Error Occured . Contact to developer")
    }

  }
  const declineOrder = async (id) => {

    const data = await DeclineOrder(id)
    // console.log(data)
    if (data.status === 201) {
      toast.success("Order Declined")
      getOrdersByShop()
      // window.location.reload()
    }
    else {
      toast.error("An Unknown Error Occured . Contact to developer")
    }

  }
  return (
    <div className="flex flex-col space-y-4">
      {/* <Toaster/> */}
      <div className="flex flex-row justify-between bg-[#333333] text-[#FFFFFF] font-Montserrat pt-1 pb-1 pl-4">
        <p className="w-2/6">Order ID</p>
        <p className="w-1/6">Ordered On</p>
        <p className="w-1/6">Price</p>
        <p className="w-1/6">Status</p>
      </div>

      {data?.map((item) => (
        <div
          key={item.id}  // Replace 'id' with the actual property that uniquely identifies each item
          className="flex flex-row justify-between items-center text-[#333333] text-[14px] h-[82px] shadow-md pt-4 pb-2 pl-4"
        >
          <Link to={`/getorderdetails?id=${item?._id}`} className="w-2/6 font-Gorditas flex flex-row">

            {item?.order_id}
          </Link>
          <div className="w-1/6 font-Gorditas flex items-center">{formatDate(item?.ordered_on)}</div>
          <div className="w-1/6 font-Gorditas">Rs.{item.order_price}</div>
          {
            item.status==='ordered' ?   <div className="flex flex-row gap-2 h-fit">
            <button className="text-[#FFFFFF] text-[16px] font-Montserrat bg-[#58B310] rounded-md px-4 py-1" onClick={() => acceptOrders(item._id)}>
              Accept
            </button>
            <button className="text-[#FFFFFF] text-[16px] font-Montserrat bg-[#888888] rounded-md px-4 py-1"
              onClick={() => declineOrder(item._id)}>
              Decline
            </button>
</div> :<div className={`w-1/6 font-Gorditas ${item.status === 'cancelled' ? 'text-red-500' : 'text-green-500'}`}>
            {item.status}
          </div>
          }
        </div>
      ))}
    </div>
  );
};

export default DueTableSeller;
