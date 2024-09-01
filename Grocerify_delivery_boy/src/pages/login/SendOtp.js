import React, { useState, useEffect } from "react";
import toast, { Toaster } from 'react-hot-toast'
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { verifyDeliveryboyLoginMobileOTP } from "../../helper/helper";

const SendOTP = () => {
  const navigate = useNavigate();
  const [getOTP, setOTP] = useState()
  const [searchParams, setSearchParams] = useSearchParams();
  const mobile = searchParams.get("mobile")

  const handleOtp = () => {
    if (!getOTP) {
      return
    }
    let otpPromise = verifyDeliveryboyLoginMobileOTP({
      mobile: mobile.toString(),
      otp: getOTP.toString(),
    })

    toast.promise(otpPromise, {
      loading: 'Loading',
      success: 'Login Successful',
      error: 'Wrong OTP!',
    })

    otpPromise.then((data) => {
      // console.log(data);
      if (data?.data) {
        localStorage.setItem('deliverytoken', data?.data?.token)
        if (!data.data.verified) {
          toast.error(
            'Account not verified yet. Kindly wait until it get verified.',
            { duration: 5000 }
          )
        } else {
          navigate("/myActivity");
          toast.success('Login Successful')
        }
      }
    })
  };
  
  return (
    <div className="flex justify-center bg-gray-100">
      <div className="flex flex-col gap-10 w-[430px] h-[840px] my-[3%] py-[5%] overflow-y-auto bg-white">
        <div className="flex flex-row gap-24 items-start px-4">
          <Link to={"/"} className="text-[#333333] text-2xl font-extrabold">{" < "}</Link>
          <p className="flex text-[#333333] text-[23.68px] font-Gorditas font-semibold pb-2">
          Enter OTP
          </p>
        </div>
        <div className="flex flex-col gap-2 px-10">
          <p className="flex justify-center text-[#323030] text-[16px]">OTP sent to your mobile number...</p>
          <div className="flex flex-row shadow-xl">
            <input
              type="text"
              placeholder="OTP*"
              name="password"
              className=" h-[45.68px] w-[80%] text-[#A19797] text-[14.19px] font-Montserrat px-2 outline-none"
              onChange={(e)=>{
                setOTP(e.target.value)
              }}
              value={getOTP}
            />
          </div>
        </div>
        <div className="flex justify-center mt-4">
          <button
            className="text-[#FFFFFF] text-[20px] h-[40px] font-Montserrat bg-[#58B310] rounded-xl px-5 hover:scale-105 transition-transform duration-300 ease-in-out"
            onClick={handleOtp}
          >
            Login
          </button>
        </div>
      </div>
    </div>
  )
}

export default SendOTP