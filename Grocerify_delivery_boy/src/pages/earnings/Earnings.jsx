import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import DeliveryboyNav from "../../components/DeliveryboyNav/DeliveryboyNav";
import { getDataFromToken, getDeliveryboy, getdeliveryorders } from "../../helper/helper";
import { FaLocationDot } from "react-icons/fa6";
// last 3 data
// cash out

const Earnings = () => {
  const [info, setInfo] = useState(null)
  const [currentDate, setcurrentDate] = useState()
  const [earning, setearning] = useState()
  async function getData() {
    const {email} = await getDataFromToken()
    const data = await getDeliveryboy({email})
    setInfo(data?.data?.data)
  }
async function Fetchdata(){
  const data = await getdeliveryorders();
  let total=0;
  data?.data?.orders?.map((item)=>{
total+=item?.shop?.deliveryCharges

  })
  
  setearning(total)

}

  useEffect(() => {
    getData()
    Fetchdata()
  }, [])

  useEffect(() => {
    const today = new Date();
    const options = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    setcurrentDate(today.toLocaleDateString(undefined, options));
  }, []);

  return (
    <div className="flex justify-center bg-gray-100">
      <div className="flex flex-col gap-6 w-[430px] h-[840px] my-[3%] px-[1%] py-[1%] overflow-y-auto bg-white">
        {/* head */}
        <div className="flex flex-row gap-20 items-end">
          <Link
            to={"/profile"}
            className="text-[#000000] text-5xl font-bold pb-1"
          >
            {" "}
            {" < "}{" "}
          </Link>
          <p className="text-[#333333] text-[32px] font-Gorditas ">Earnings</p>
        </div>

        {/*  */}
        <DeliveryboyNav info={info}/>

        {/* cash */}
        <div className="flex flex-row justify-between items-center  w-full ">
          <div className="flex flex-col items-center rounded-3xl shadow-xl px-4 py-6 w-full   mx-auto">
            <p className="text-[#848484] text-[27.22px] font-Montserrat font-bold">₹{earning}</p>
            <p className="text-[#333333] text-[25.22px] font-Montserrat font-bold">Total Earning</p>
          </div>
          {/* <button className="text-[#FFFFFF] text-[21.3px] font-Montserrat font-semibold bg-[#58B310] h-[34px] px-4 rounded-xl">Cash Out</button> */}
        </div>

        {/*  */}
        {/* <div className="flex flex-col rounded-3xl shadow-lg px-8 py-8 mx-4 my-4 gap-8">
          <div className="flex flex-col">
            <p className="text-[#333333] text-[20px] font-Montserrat font-semibold">Today’s Earnings</p>
            <p className="text-[#333333A3] text-[14px] font-Montserrat font-semibold">Mon, 11 March</p>
          </div>
          <div className="flex flex-row justify-between px-2">
            <div className="flex flex-col items-center gap-1">
              <p className="text-[#333333] text-[20px] font-Montserrat font-black">₹400</p>
              <p className="text-[#333333A3] text-[14px] font-Montserrat font-semibold">Total</p>
            </div>
            <div className="flex flex-col items-center gap-1">
              <p className="text-[#333333] text-[20px] font-Montserrat font-black">50</p>
              <p className="text-[#333333A3] text-[14px] font-Montserrat font-semibold">Rides</p>
            </div>
            <div className="flex flex-col items-center gap-1">
              <p className="text-[#333333] text-[20px] font-Montserrat font-black">8:30</p>
              <p className="text-[#333333A3] text-[14px] font-Montserrat font-semibold">Online HRS</p>
            </div>
          </div>
        </div> */}

        {/*  */}
       {/* <div className="flex flex-col gap-3 w-full">
          <div className="w-full">
              <div className="flex justify-between">
                  <p>Davinder</p>
                  <p>₹400</p>
              </div>
              <div className="flex ">
                  <p>{currentDate}</p>
                  <p>7.35 AM</p>
              </div>
              <div className="flex items-center">
                  <FaLocationDot/>
                  <p>E-299, Industrial Area, Sector 75, Sahibzada Ajit Singh Nagar, Punjab 160055</p>
              </div>
              <p className="px-2 py-1 bg-green-50 border border-green-500 text-green-500 rounded w-[25%] text-center">Delivered</p>
          </div>
       </div> */}
      </div>
    </div>
  );
};

export default Earnings;
