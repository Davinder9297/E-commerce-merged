import { useEffect, useState } from "react";
import { FaLocationDot } from "react-icons/fa6";
import { BASE_URL } from "../api/api";
import { Link, useSearchParams } from "react-router-dom";
import { DeclineOrder, acceptOrder } from "../helper/helper";
import { IoMdArrowRoundBack } from "react-icons/io";
import toast from "react-hot-toast";
export default function GetOrderDetails(){
    const [currentDate, setCurrentDate] = useState("");
    const [data, setdata] = useState([])
    const [search,setsearch]=useSearchParams()
    async function Fetchdata(){
        try {
            const data=await fetch(BASE_URL+'api/getorderdetailsbyid/'+search.get('id'))
            // console.log(BASE_URL+'api/getorderdetailsbyid/'+id);
            const response=await data.json()
            console.log(response);
            setdata(response?.order)

            const today = new Date(response?.order?.ordered_on);
        const options = {
          weekday: "long",
          year: "numeric",
          month: "long",
          day: "numeric",
        };
        setCurrentDate(today.toLocaleDateString(undefined, options));
        } catch (error) {
            console.log(error);
        }
      }

    useEffect(() => {
     
      Fetchdata()
    }, [])
    
    const acceptOrders = async (id) => {
        // console.log('accepted')
        const data = await acceptOrder(id)
        // console.log(data)
        if (data.status === 201) {
          toast.success("Order Accepted")
          Fetchdata()
    
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
          Fetchdata()
          // window.location.reload()
        }
        else {
          toast.error("An Unknown Error Occured . Contact to developer")
        }
    
      }
    return(<>
    <div className="flex justify-center items-center w-full h-screen ">
            <div className="h-[90vh] overflow-y-auto w-[60%]  border space-y-5 p-3 rounded shadow-lg getorderdetails">
                <Link to='/'><IoMdArrowRoundBack className="text-xl"/></Link>
            <div className="text-center text-xl font-semibold ">Order id : {data?.order_id}</div>
                <div className="flex justify-between">
                        <div className="font-semibold">
                            <div className="text-xl ">{data?.ordered_by?.firstName} {data?.ordered_by?.lastName}</div>
                            <div className="text-xl">₹ {data?.order_price}</div>
                        </div>
                        {
            data?.status==='ordered' ?   <div className="flex flex-row gap-2 h-fit">
            <button className="text-[#FFFFFF] text-[16px] font-Montserrat bg-[#58B310] rounded-md px-4 py-2" onClick={() => acceptOrders(data?._id)}>
              Accept
            </button>
            <button className="text-[#FFFFFF] text-[16px] font-Montserrat bg-[#888888] rounded-md px-4 py-2"
              onClick={() => declineOrder(data?._id)}>
              Decline
            </button>
</div> :<div className={`w-1/6 font-Gorditas ${data?.status === 'cancelled' ? 'text-red-500' : 'text-green-500'}`}>
            {data?.status}
          </div>
          }
                </div>

                <div>
                    <div className="text-xl">Delivery address</div>
                    <div className="flex items-center gap-1">
                        <FaLocationDot />
                        <p>{data?.shipping_address?.address_line_1},{data?.shipping_address?.address_line_2},{data?.shipping_address?.city} {data?.shipping_address?.zip},{data?.shipping_address?.state}</p>
                    </div>
                </div>

                <div>
                <div className="text-xl font-semibold">Date</div>
                <p>{currentDate}</p>
                </div>


                <div className="space-y-5">
                    <p className="text-xl font-semibold">All items</p>

                    {
                        data?.products?.map((item)=>{
                            return(<>
                            <div className="flex gap-2 w-full">
                                <div className="h-16 w-20 flex justify-center items-center ">
                                        <img src={item?.productid?.product_primary_image_url} className="rounded h-full w-full "/>
                                </div>
                        <div className="w-[80%]">
                           <p className="font-semibold">{item?.productid?.products_title}</p>
                            <p>{item?.productid?.variants1_weight}gm</p>
                        </div>
                    </div>
                            </>)
                        })
                    }
                    
                </div>


            </div>
    </div>
    </>)
}