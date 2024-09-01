import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const NewPassword = () => {
  const navigate = useNavigate();

  const handleReset = () => {
    navigate("/");
  };

  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showPassword2, setShowPassword2] = useState(false);

  const handleTogglePassword = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };
  const handleTogglePassword2 = () => {
    setShowPassword2((prevShowPassword) => !prevShowPassword);
  };

  return (
    <div className="flex justify-center bg-gray-100">
      <div className="flex flex-col gap-10 w-[430px] h-[840px] my-[3%] py-[5%] overflow-y-auto bg-white">
        <div className="flex flex-row gap-14 items-start px-4">
          <Link
            to={"/forgotPassword"}
            className="text-[#333333] text-2xl font-extrabold"
          >
            {" < "}
          </Link>
          <p className="flex text-[#333333] text-[23.68px] font-Gorditas font-semibold pb-2">
            Enter New Password
          </p>
        </div>
        <div className="flex flex-col gap-6 px-10">
          <div className="flex flex-row shadow-xl items-center justify-between px-4">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="New Password*"
              name="password"
              onChange={(e) => setPassword(e.target.value)}
              className=" h-[45.68px] w-[90%] text-[#A19797] text-[14.19px] font-Montserrat outline-none"
            />
            {showPassword ? (
              <FaEyeSlash
                color="#A19797"
                size={20}
                style={{ marginLeft: "-30px", cursor: "pointer" }}
                onClick={handleTogglePassword}
              />
            ) : (
              <FaEye
                color="#A19797"
                size={20}
                style={{ marginLeft: "-30px", cursor: "pointer" }}
                onClick={handleTogglePassword}
              />
            )}
          </div>
          <div className="flex flex-row shadow-xl items-center justify-between px-4">
            <input
              type={showPassword2 ? "text" : "password"}
              placeholder="Confirm Password*"
              name="password"
              onChange={(e) => setPassword(e.target.value)}
              className=" h-[45.68px] w-[90%] text-[#A19797] text-[14.19px] font-Montserrat outline-none"
            />
            {showPassword2 ? (
              <FaEyeSlash
                color="#A19797"
                size={20}
                style={{ marginLeft: "-30px", cursor: "pointer" }}
                onClick={handleTogglePassword2}
              />
            ) : (
              <FaEye
                color="#A19797"
                size={20}
                style={{ marginLeft: "-30px", cursor: "pointer" }}
                onClick={handleTogglePassword2}
              />
            )}
          </div>
        </div>
        <div className="flex justify-center mt-4">
          <button
            className="text-[#FFFFFF] text-[18px] h-[40px] font-Montserrat bg-[#58B310] rounded-xl px-5 hover:scale-105 transition-transform duration-300 ease-in-out"
            onClick={handleReset}
          >
            Reset Password
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewPassword;
