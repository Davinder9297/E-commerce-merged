import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom"
import { FaStar } from "react-icons/fa";
import { ReactComponent as Pic } from "../../assests/icons/pic.svg";
import Deliveryboyheader from "../../components/Deliveryboyheader/Deliveryboyheader";
import { getDataFromToken, getDeliveryboy } from "../../helper/helper";
import DeliveryboyNav from "../../components/DeliveryboyNav/DeliveryboyNav";
import Spinner from "../../components/Spinner";

// my stats left

const Profile = () => {
  const [info, setInfo] = useState(null)
  const [show, setshow] = useState(false)
  async function getData() {
    setshow(true)
    const {email} = await getDataFromToken()
    const data = await getDeliveryboy({email})
    setInfo(data?.data?.data)
    setshow(false)
  }

  const navigate = useNavigate();

  useEffect(() => {
    getData()
  }, [])

  function handlelogout() {
    localStorage.removeItem('deliverytoken')
  }

  return (
    <div className="flex justify-center bg-gray-100">
      <div className="flex flex-col gap-4 w-[430px] h-[880px] my-[3%] px-[1%] py-[1%] overflow-y-auto bg-white">
        {/* head */}
        <div className="flex flex-row gap-24">
          <Link to={"/myactivity"} className="text-[#000000] text-5xl font-bold"> {" < "} </Link>
          <Deliveryboyheader info={info}/>
        </div>

        {/* nav */}
        <DeliveryboyNav info={info} />

        {/*  */}
        <div className="flex flex-col gap-4 px-[2%] mt-6">
          <div className="flex flex-col gap-2">
            <div className="flex flex-row gap-3 justify-between shadow-md py-3 px-4 items-center">
              <div className="flex flex-col">
                <p className="text-[#000000] text-[18px] font-Montserrat font-bold">
                My Info
                </p>
                <p className="text-[#000000] text-[12px] font-Montserrat ">Name and emails</p>
              </div>
              <Link to={"/myInfo"} className="text-2xl font-bold"> {" > "} </Link>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex flex-row gap-3 justify-between shadow-md py-3 px-4 items-center">
              <div className="flex flex-col">
                <p className="text-[#000000] text-[18px] font-Montserrat font-bold">
                Contacts
                </p>
                <p className="text-[#000000] text-[12px] font-Montserrat ">Phone  Numbers</p>
              </div>
              <Link to={"/contact"} className="text-2xl font-bold"> {" > "} </Link>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex flex-row gap-3 justify-between shadow-md py-3 px-4 items-center">
              <div className="flex flex-col">
                <p className="text-[#000000] text-[18px] font-Montserrat font-bold">
                Address Information
                </p>
                <p className="text-[#000000] text-[12px] font-Montserrat ">Address , phone &emails</p>
              </div>
              <Link to={"/address"} className="text-2xl font-bold"> {" > "} </Link>
            </div>
          </div>
          {/* <div className="flex flex-col gap-2">
            <div className="flex flex-row gap-3 justify-between shadow-md py-3 px-4 items-center">
              <div className="flex flex-col">
                <p className="text-[#000000] text-[18px] font-Montserrat font-bold">
                My Stats
                </p>
                <p className="text-[#000000] text-[12px] font-Montserrat ">My ride history</p>
              </div>
              <p className="text-2xl font-bold"> {" > "} </p>
            </div>
          </div> */}
          <div className="flex flex-col gap-2">
            <div className="flex flex-row gap-3 justify-between shadow-md py-3 px-4 items-center">
              <div className="flex flex-col">
                <p className="text-[#000000] text-[18px] font-Montserrat font-bold">
                Earning
                </p>
                <p className="text-[#000000] text-[12px] font-Montserrat ">Balance & Payout</p>
              </div>
              <Link to={"/earnings"} className="text-2xl font-bold"> {" > "} </Link>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex flex-row gap-3 justify-between shadow-md py-3 px-4 items-center">
              <div className="flex flex-col">
                <p className="text-[#000000] text-[18px] font-Montserrat font-bold">
                Feedback
                </p>
                <p className="text-[#000000] text-[12px] font-Montserrat ">Overview</p>
              </div>
              <Link to={"/feedback"} className="text-2xl font-bold"> {" > "} </Link>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex flex-row gap-3 justify-between shadow-md py-3 px-4 items-center">
              <div className="flex flex-col">
                <p className="text-[#000000] text-[18px] font-Montserrat font-bold">
                Logout
                </p>
              </div>
              <Link to={"/"} onClick={handlelogout} className="text-2xl font-bold"> {" > "} </Link>
            </div>
          </div>
        </div>
      </div>
      {show ? (
        <div className="w-full h-screen fixed top-0 left-0 bg-[#b4cca1] opacity-80">
          <Spinner className="" />
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Profile;
