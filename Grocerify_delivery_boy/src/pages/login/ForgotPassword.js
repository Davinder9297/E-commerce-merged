import React from "react";
import { Link, useNavigate } from "react-router-dom";

const ForgotPassword = () => {
    const navigate = useNavigate();
    
    const handleOTP = () => {
        navigate("/newPassword");
      }

  return (
    <div className="flex justify-center bg-gray-100">
      <div className="flex flex-col gap-10 w-[430px] h-[840px] my-[3%] py-[5%] overflow-y-auto bg-white">
      <div className="flex flex-row gap-16 items-start px-4">
          <Link to={"/"} className="text-[#333333] text-2xl font-extrabold">{" < "}</Link>
          <p className="flex text-[#333333] text-[23.68px] font-Gorditas font-semibold pb-2">
          Forget Password 
          </p>
        </div>
        <div className="flex flex-col gap-8">
          <div className="flex flex-row justify-around items-center">
            <input
              type="text"
              placeholder="Email or Mobile Number*"
              name="email"
              className=" h-[45.68px] w-[50%] shadow-xl text-[#A19797] text-[14.19px] fonr-Montserrat px-2 outline-none"
            />
            <button className="text-[#FFFFFF] text-[18px] h-[40px] font-Montserrat bg-[#58B310] rounded-xl px-5 hover:scale-105 transition-transform duration-300 ease-in-out">
              Send OTP
            </button>
          </div>
          <div className="flex flex-row justify-around items-center">
            <input
              type="text"
              placeholder="OTP*"
              name="email"
              className=" h-[45.68px] w-[50%] shadow-xl text-[#A19797] text-[14.19px] fonr-Montserrat px-2 outline-none"
            />
            <button className="text-[#FFFFFF] text-[18px] h-[40px] font-Montserrat bg-[#58B310] rounded-xl px-2 hover:scale-105 transition-transform duration-300 ease-in-out" onClick={handleOTP}>
            Confirm OTP
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
